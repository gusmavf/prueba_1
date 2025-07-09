'use server';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { prisma } from './db';
import { redirect } from 'next/navigation';

export async function createPostAction(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) {
    return redirect('/api/auth/register');
  }

  const entries = Object.fromEntries(formData.entries());

  const title = entries.title?.toString() ?? '';
  const content = entries.content?.toString() ?? '';
  const imageUrl = entries.imageUrl?.toString() ?? '';

  if (!title || !content || !imageUrl) {
    throw new Error('All fields are required');
  }

  await prisma.blogPost.create({
    data: {
      title,
      content,
      imageUrl,
      authorId: user.id,
      authorImage: user.picture ?? '',
      authorName: user.given_name ?? '',
    },
  });

  return redirect('/dashboard');
}
