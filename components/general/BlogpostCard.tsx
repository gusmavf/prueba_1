import Image from 'next/image';
import Link from 'next/link';

interface BlogspotCardProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;

    createdAt: Date;
    updatedAt: Date;
  };
}

export function BlogspotCard({ data }: BlogspotCardProps) {
  return (
    <div className='group relative overflow-hidden rounded-lg border border-gray-200 shadow-md transition-all hover:shadow-lg  dark:border-gray-700 dark:hover:shadow-xl bg-white dark:bg-gray-900'>
      <Link href={`/post/${data.id}`} className='block w-full h-full p-4'>
        <div className='relative h-48 w-full overflow-hidden'>
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </div>
        <div className='p-4'>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-500'>
            {data.title}
          </h3>
          <p className='mb-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2'>
            {data.content}
          </p>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <div className='relative size-8 overflow-hidden rounded-full'>
                <Image
                  src={data.authorImage}
                  alt={data.authorName}
                  className='object-cover'
                  fill
                />
              </div>
              <p className='text-sm font-medium text-blue-800'>{data.authorName}</p>
            </div>
            <time className='text-xs text-gray-400'>{
              new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              }).format(new Date(data.createdAt))
            }</time>
          </div>
        </div>
      </Link>
    </div>
  );
}
