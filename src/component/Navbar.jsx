
'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import PetLogo from '@/assets/pet-adoption-logo.png'
import Link from 'next/link';
import { Button, Dropdown, Label } from '@heroui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavLink from '@/shared/NavLink';
import { authClient } from '@/lib/auth-client';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
const Navbar = () => {
  const [open,setOpen]=useState(false);
  const userData= authClient.useSession();
 const user=userData?.data?.user;
  const handleSignOut= async ()=>{
await authClient.signOut();
  }
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


            <div>
              {
                user ? 
                <Dropdown onOpenChange={setOpen}>
     
       <Button className='bg-pink-50'>
        <Image className='rounded-full' src={user.image} alt={user.name} height={40} width={40}></Image>
        {
          open ? <FaArrowUp className='inline-block text-black ml-2' /> : <FaArrowDown className='inline-block text-black ml-2' />
        }

       </Button>
      
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item id="new-file" textValue="New file">
         <Button className='text-pink-700 bg-pink-100 w-full'> <Link href={'/dashboard'}>DashBoard</Link></Button>
        
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
            <Button className='text-pink-700 bg-pink-100 w-full' onClick={handleSignOut}> <Link href={'/sign-up'}>LogOut</Link></Button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
                
                
                 : <div className='flex gap-3'>

                   <Button className='text-white bg-pink-700 w-full'><Link href={'/login'}>Login</Link></Button>
                   <Button className='text-pink-700 bg-pink-100 w-full'> <Link href={'/sign-up'}>Sign Up</Link></Button>
                </div>
              }
            </div>

           </div>
        </nav>
        </div>
    );
};

export default Navbar;