import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NavLinks } from '../../constants';
import AuthProviders from './AuthProviders';

export default function Navbar() {
    const session = null;
  return (
    <nav className="py-5 px-8 border-b border-nav-border gap-4 flex justify-between items-center">
      <div className="flex-1 flex justify-start items-center gap-10">
        <Link href="/">
          <Image width={115} height={43} src={'/logo.svg'} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7 font-medium">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-4">
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
}
