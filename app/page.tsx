import { BlogspotCard } from '@/components/general/BlogpostCard';
import { prisma } from './utils/db';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
      authorId: true,
      updatedAt: true,
    },
  });

  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className='py-6'>
      <h1 className='text-3xl font-bold tracking-tighter mb-8'>Latest Posts</h1>
      <Suspense fallback={<BlogPostsGrid/>}>
        <BlogSpots />
      </Suspense>
    </div>
  );
}

async function BlogSpots() {
  const data = await getData();
  return (
    <div className='grid grid-cols-1 md:grid-col2-2 lg:grid-cols-3 gap-4'>
      {data.map((item, index) => (
        <BlogspotCard data={item} key={item.id} />
      ))}
    </div>
  );
}

function BlogPostsGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className='rounded-lg border bg-card text-card-foreground shadow-sm h-[400px] flex flex-col overflow-hidden'
        >
          {/* Image skeleton */}
          <Skeleton className='h-48 w-full rounded-none' />
          <div className='p-4 flex-1 flex flex-col gap-3'>
            {/* Title Skeleton  */}
            <Skeleton className='h-6 w-3/4' />
            {/* Content Skeleton  */}
            <div className='space-y-2'>
              <Skeleton className='h-4 w-full' />
              <Skeleton className='h-4 w-full' />
            </div>

            {/* Footer Skeleton  */}
            <div className='mt-auto flex items-center justify-between pt-4'>
              <div className='flex items-center'>
                <Skeleton className='h-8 w-8 rounded-full mr-2' />
                <Skeleton className='h-4 w-24' />
              </div>
              <Skeleton className='h-4 w-16' />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}