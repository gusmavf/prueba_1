import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { ModeToggle } from './ModeToggle';

export default function NavBar() {
  return (
    <nav className='py-5 flex items-center justify-between'>
      <div className='flex items-center gap-6'>
        <Link href={'/'}>
          <h1 className='text-3xl font-semibold'>
            Blog<span className='text-blue-500'>Gustavo</span>
          </h1>
        </Link>
        <div className='hidde sm:flex items-center gap-6'>
          <Link
            href={'/dashboard'}
            className='text-sm font-medium hover:text-blue-500 trasition-colors'
          >
            Home
          </Link>
          <Link
            href={'/dashboard'}
            className='text-sm font-medium hover:text-blue-500 trasition-colors'
          >
            DashBoard
          </Link>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <Button>Login</Button>
        <Button variant='secondary'>Sign Up</Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
