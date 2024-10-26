'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { UserButton, useAuth } from '@clerk/nextjs';
import { Button } from './ui/button';
const Topbar = () => {
  const { isSignedIn } = useAuth();
  const topRoutes = [
    { label: 'Instructor', path: '/instructor/courses' },
    { label: 'Learning', path: '/learning' },
  ];
  return (
    <div className="flex justify-between items-center p-4">
      <Link href="/">
        <Image src="/logo.png" height={100} width={200} alt="logo" />
      </Link>
      <div className="max-md:hidden md:w-[400px] rounded-full flex">
        <input
          className="flex-grow bg-[#FFF8EB] rounded-l-full outline-none text-sm pl-4 py-3"
          type="text"
          placeholder="Search for courses"
        />
        <button className="bg-[#FDAB04] rounded-r-full border-none outline-none cursor-pointer px-4 py-3 hover:bg-[#FDAB04]/80">
          <Search className="h-4 w-4" />
        </button>
      </div>
      <div className="flex gap-6 items-center">
        <div className="max-sm:hidden flex gap-6">
          {topRoutes.map((route) => {
            return (
              <Link
                href={route.path}
                key={route.path}
                className="text-sm font-medium hover:text-[#FDAB04]"
              >
                {route.label}
              </Link>
            );
          })}
        </div>
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <Button>Sign In</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Topbar;
