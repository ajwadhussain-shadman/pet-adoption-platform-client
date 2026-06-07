import PetCard from '@/shared/PetCard';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaPaw } from 'react-icons/fa';

const Featured = async () => {
    const res= await fetch("http://localhost:8000/featured");
    const pets=await res.json();
    return (
        <div className='bg-pink-50 '> 
            <div className='py-10 w-11/12 mx-auto'>
            <h2 className='text-center font-bold text-4xl '>Meet Our <span className='text-pink-600 flex justify-center items-center gap-2'> Featured Pets<FaPaw className='inline-block '></FaPaw></span></h2>
              
              
             <div className=' my-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid  items-center gap-5'>{
                pets.map(pet=>{
                    return <PetCard key={pet._id} pet={pet}></PetCard>
                })
                }</div>

               <div className='flex justify-center'>
                 <Button className="bg-pink-600 "><Link href={'/all-pets'}>View All </Link> <FaArrowRight className='inline-block' /></Button>
               </div>
        </div>
        </div>
    );
};

export default Featured;