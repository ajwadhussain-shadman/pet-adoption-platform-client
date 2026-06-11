
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

const { data, isPending } = authClient.useSession();
const user = data?.user;

  const handleSignOut= async ()=>{
await authClient.signOut();
  }
    return (
        <div className='shadow '>
            <nav className='flex justify-between items-center container  mx-auto '>
           <Link href={'/'}> <Image src={PetLogo} alt='pet logo' height={200} width={200} ></Image></Link>
           <div className=' gap-6 hidden md:flex'>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/all-pets'}>All Pets</NavLink>
            <NavLink href={'/dashboard/my-requests'}>My Requests</NavLink>
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
           <NavLink href={'/dashboard/my-requests'}>My Requests</NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
         </div>

           <div className='flex gap-2'>

        

        {
          isPending ? <p className='text-sm font-bold text-pink-600'>Loading...</p> :
          <div>
              {
                user ? 
                <Dropdown onOpenChange={setOpen}>
     
       <Button className='bg-pink-50'>
        <Image className='rounded-full' src={user.image} alt={user.name} height={40} width={40}></Image>
        <span className='text-black text-sm font-light'>{user.name.split(" ")[0]}</span>
        {
          open ? <FaArrowUp className='inline-block text-black ml-2' /> : <FaArrowDown className='inline-block text-black ml-2' />
        }

       </Button>
      
      <Dropdown.Popover>
        <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
          <Dropdown.Item  textValue="New file">
        <p className='font-semibold text-sm'>{user.name}</p>
          </Dropdown.Item>
          <Dropdown.Item id="new-file" textValue="New file">
        <Link href={'/dashboard'} className='w-full'> <Button className='text-pink-700 bg-pink-100 w-full'> DashBoard</Button></Link>
        
          </Dropdown.Item>
          <Dropdown.Item id="copy-link" textValue="Copy link">
             <Link href={'/sign-up'} className='w-full'><Button className='text-pink-700 bg-pink-100 w-full' onClick={handleSignOut}>LogOut</Button></Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
                
                
                 : <div className='flex flex-col sm:flex-row gap-2 mr-2  my-1 sm:gap-3'>

                 <Link href={'/login'}>  <Button size='sm' className='text-white text-sm bg-pink-700 w-full'>Login</Button></Link>
                 <Link href={'/sign-up'}>  <Button size='sm' className='text-pink-700 bg-pink-100 w-full'> Sign Up</Button></Link>
                </div>
              }
            </div>
        }
            

           </div>
        </nav>
        </div>
    );
};

export default Navbar;