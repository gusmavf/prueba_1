'use client';

import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { ModeToggle } from './ModeToggle';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

export default function NavBar() {
  const { getUser } = useKindeBrowserClient();
  const user =  getUser();

  return (
    <nav className='py-5 flex items-center justify-between'>
      <div className='flex items-center gap-6'>
        <Link href='/'>
          <h1 className='text-3xl font-semibold'>
            Blog<span className='text-blue-500'>Gustavo</span>
          </h1>
        </Link>
        <div className='hidde sm:flex items-center gap-6'>
          <Link
            href='/'
            className='text-sm font-medium hover:text-blue-500 trasition-colors'
          >
            Home
          </Link>
          <Link
            href='/dashboard'
            className='text-sm font-medium hover:text-blue-500 trasition-colors'
          >
            DashBoard
          </Link>
        </div>
      </div>

      {user ? (
        <div className='flex items-center gap-4'>
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: 'secondary' })}>
            Log Out
          </LogoutLink>
        </div>
      ) : (
        <div className='flex items-center gap-4'>
          <LoginLink className={buttonVariants()}>Login</LoginLink>
          <RegisterLink className={buttonVariants({ variant: 'secondary' })}>
            Sign up
          </RegisterLink>
        </div>
      )}
      <ModeToggle />
    </nav>
  );
}
