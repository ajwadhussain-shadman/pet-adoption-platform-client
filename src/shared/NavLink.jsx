'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
   const pathname=usePathname();
   const active=href===pathname;
    return (
   <Link href={href}
    className={`${active ? "font-bold text-pink-600 text-xl ": "font-semibold"}`}
   >
   {children}
      
   </Link>
    );
};

export default NavLink;