import { buttonVariants } from '@/components/ui/button';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import { prisma } from '../utils/db';
import { BlogPost } from '@prisma/client';
import { BlogspotCard } from '@/components/general/BlogpostCard';

async function getData(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

export default async function DashboardRouter() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return (
      <div>
        <h1>Please log in to view your dashboard</h1>
      </div>
    );
  }
  const data: BlogPost[] = await getData(user.id);

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-medium'>Your Blog Articles</h2>
        <Link className={buttonVariants()} href='/dashboard/create'>
          Create Post
        </Link>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((post: BlogPost) => (
          <div key={post.id}>
            <BlogspotCard data={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
