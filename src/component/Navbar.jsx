
'use client'
import Image from 'next/image';
import React from 'react';
import PetLogo from '@/assets/pet-adoption-logo.png'
import Link from 'next/link';
import { Button, Dropdown, Label } from '@heroui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavLink from '@/shared/NavLink';
const Navbar = () => {
    return (
        <div className='shadow '>
            <nav className='flex justify-between items-center container  mx-auto '>
           <Link href={'/'}> <Image src={PetLogo} alt='pet logo' height={200} width={200}></Image></Link>
           <div className=' gap-6 hidden md:flex'>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/all-pets'}>All Pets</NavLink>
            <NavLink href={'/my-requests'}>My Requests</NavLink>
           </div>

         <div className='md:hidden'>
             <Dropdown >
      <Button aria-label="Menu" variant="">
        <GiHamburgerMenu />
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
              <NavLink href={'/'}>Home</NavLink>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
           <NavLink href={'/all-pets'}>All Pets</NavLink>
          </Dropdown.Item>
          <Dropdown.Item id="edit-file" textValue="">
           <NavLink href={'/my-requests'}>My Requests</NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
         </div>

           <div className='flex gap-2'>

             <Dropdown >
     
       <Button className='bg-pink-600'>Profile</Button>
      
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
             <Button className='text-pink-700 bg-pink-100 w-full'><Link href={'/login'}>Login</Link></Button>
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
           <Button className='text-pink-700 bg-pink-100 w-full'> <Link href={'/sign-up'}>Sign Up</Link></Button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
           </div>
        </nav>
        </div>
    );
};

export default Navbar;