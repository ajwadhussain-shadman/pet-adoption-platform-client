import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/banner.png'
import { Button } from '@heroui/react';
const Banner = () => {
    return (
  
         <div className='bg-slate-100 p-5'>
              <div className='container mx-auto  flex flex-col md:flex-row justify-between gap-4 p-4 '>
            <div>
            <Image className='rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl shadow-lg w-3/4 mx-auto md:w-[500px]' src={bannerImg} alt='banner img' height={500} width={ 500} ></Image>
            </div>
            <div className='space-y-4 text-center md:text-left '>
                <h2 className='font-bold text-3xl md:text-5xl '><span className='text-pink-400'>Every Pet </span> <br /> Deserves a Home</h2>
                <p className='text-pink-400 '>
                    Give a rescue pet a second chance <br /> and they will give you a lifetime of love
                </p>
                <Button className='bg-pink-600 ' size='lg' >Adopt Now</Button>
            </div>
        </div>
         </div>
         
      
    );
};

export default Banner;