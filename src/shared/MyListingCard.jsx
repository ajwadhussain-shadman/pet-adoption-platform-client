'use client'

import RequestsModal from '@/component/RequestsModal';
import { Badge, Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { IoEnterOutline } from 'react-icons/io5';
import { LuCircleArrowOutDownLeft } from 'react-icons/lu';
import { MdDeleteOutline } from 'react-icons/md';

const MyListingCard = ({ pet }) => {
    const { _id, petName, gender, breed, species, imageUrl, adoptionFee, status } = pet;
    
    const handleDelete=async ()=>{

        const res= await fetch(`http://localhost:8000/pets/${_id}`,{
            method:'DELETE',
        })
        const data= await res.json()
       if(data){
        toast.success('successfully deleted')
        window.location.reload()
       }
       else{ toast.error('failed to delete')}
    }

    return (
        <Card className='max-w-[400px] w-full'>
            <div className='relative'>
                <Image
                    src={imageUrl}
                    alt={petName}
                    width={300}
                    height={100}
                    className='w-full h-56  object-cover rounded-2xl'
                ></Image>
                <Badge
                size='sm'
                className={`absolute top-3 right-5 p-1 font-semibold ${status === 'available' ? 'bg-pink-700 text-white' : 'bg-gray-500 text-white'}`}
                >
         {status}
                </Badge>
            </div>
                    
                    <div className='flex justify-between'>
                        <h2 className='text-pink-500 font-semibold text-xl'>{petName}</h2>
                        <p className='text-green-700 font-bold' >${adoptionFee}</p>
                    </div>
                    <div className='flex  gap-7 font-bold text-amber-800 px-5'>
                        <li>{species}</li>
                        <li>{breed}</li>
                    </div>
                    
                    <hr className='my-4 ' />

                      <div className='grid grid-cols-2 justify-items-center gap-3'>
                        <Link href={`/pet-details/${_id}`}>
                        <Button size="sm" className='bg-pink-600 text-white'>
                            View <IoEnterOutline className='inline-block' />
                        </Button>
                    </Link>
                     <Link href={`/dashboard/edit-pet/${_id}`}>
                        <Button size="sm" variant="bordered">
                            Edit <FaEdit className='inline-block' />
                        </Button>
                    </Link>
                
                      <RequestsModal petId={_id}
                    petName={petName}
                    ></RequestsModal> 
                
                     <Button
                        size="sm"
                        variant='danger-soft'
                        onPress={handleDelete}
                    >
                        Delete <MdDeleteOutline className='inline-block' />
                    </Button>
                      </div>
        </Card>
           
    );
};

export default MyListingCard;