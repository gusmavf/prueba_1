import NavBar from '@/components/general/NavBar';
import Image from 'next/image';

async function getData() {
  const items = [
    {
      title: 'Post 1',
      content: 'This is the content of post 1.',
    },
  ];
  return items;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className='py-6'>
      <h1 className='text-3xl font-bold tracking-tighter mb-8'>Latest Posts</h1>
      <div className='grid grid-cols-1 md:grid-col2-2 lg:grid-cols-3 gap-4'>
        {data.map((item, index) => (
          <h1 key={index} className='text-xl font-semibold mb-2'>
            {item.title}
          </h1>
        ))}
      </div>
    </div>
  );
}
