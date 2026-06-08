import React from 'react';
import footerImg from "@/assets/footer-logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagramSquare, FaPaw } from 'react-icons/fa';
import { BsTwitterX, BsWhatsapp } from 'react-icons/bs';
import { IoLocationOutline, IoLogoYoutube } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { Button, Input } from '@heroui/react';
const Footer = () => {
    return (
       <div className='bg-pink-600 text-white'>
         <div className=' p-5 flex gap-10 flex-col md:flex-row justify-between'>
            <div className='space-y-3'> 
              <Image src={footerImg} alt='footer img' height={100} width={150}></Image>
              <p>We connect loving pets with <br /> caring families and make the <br /> world a better place</p>
              <ul className='flex gap-3'>
                <Link href={'https://www.facebook.com/'}><FaFacebook /></Link>
                <Link href={'https://www.facebook.com/'}><FaInstagramSquare /></Link>
                <Link href={'https://www.twitter.com/'}><BsTwitterX /></Link>
                <Link href={'https://www.youtube.com/'}><IoLogoYoutube /></Link>
              </ul>
            </div>
            <div className='pl-4 md:pl-0'>
                <h2 className='font-semibold text-lg'>Quick Links</h2>
                <li className='underline'><Link href={'/'}>Home</Link></li>
                <li className='underline'><Link href={'/all-pets'}>All Pets</Link></li>
                <li className='underline'><Link href={'/my-requests'}>My Requests</Link></li>
                <li className='underline'><Link href={'/add-pet'}>Add Pet</Link></li>
            </div>
            <div className='pl-4 md:pl-0'>
                <h2 className='font-semibold text-lg'>Support</h2>
                <li className=''>About Us</li>
                <li className=''>Contact Us</li>
                <li className=''>FAQs</li>
                <li className=''>Privacy Policy</li>
               
            </div>
            <div>
                <h2 className='font-semibold text-lg'>Contacts</h2>
                <p><BsWhatsapp  className='inline-block'/> <span className='text-sm font-semibold'>01712623295</span> </p>
                <p><MdOutlineMailOutline  className='inline-block'/> <span className='text-sm font-semibold'>support@pet-adopt.com</span> </p>
                <p><IoLocationOutline  className='inline-block'/> <span className='text-sm font-semibold'>Sylhet,Bangladesh</span> </p>
               
            </div>
            <div className='space-y-2 '>
                <h2 className='font-semibold text-lg'>Subscribe</h2>
                <p className='text-sm opacity-90'>
                    subscribe to get updates <br /> on new pets and adoption stories
                </p>
               <Input aria-label="email" className="w-full" placeholder="Enter your email" />
               <br />
               <Button className='bg-white w-full font-bold text-pink-600 '>Subscribe</Button>
            </div>
        </div>
        <p className='text-center opacity-90 text-sm flex items-center justify-center gap-2 mb-5'> <span>© 2026 Pet Adopt. All Rights Reserved </span><FaPaw className='inline-block'></FaPaw></p>
       </div>
    );
};

export default Footer;