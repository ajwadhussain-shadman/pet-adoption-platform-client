import { Avatar, Badge, Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { GoDot } from 'react-icons/go';

const PetCard = ({ pet }) => {
    const {_id,petName,gender,age,breed,species,imageUrl,adoptionFee,status}=pet;
    return (
        <div>
            <Card className='max-w-[400px]'>
               <div className="h-[280px] w-full ">
                   <img
      src={imageUrl}
      alt={petName}
      className="h-full w-full object-cover rounded-2xl "
    />

  
        
        <Badge color="" size="sm" className={` ${status==="available" ? "bg-pink-700  text-white" :" "} top-10 right-10 p-1 font-bold`}>
          {status}
        </Badge>

                </div>
                <div className='p-2 space-y-3'>
                    <h2 className='text-pink-600 font-bold text-xl '>{petName}</h2>
                    <ol className='flex justify-between text-gray-500'>
                        <li><GoDot className='inline-block items-center mr-1 text-pink-600' />{gender}</li>
                        <li><GoDot className='inline-block items-center mr-1 text-pink-600' />{species}</li>
                        <li><GoDot className='inline-block items-center mr-1 text-pink-600' />{breed}</li>
                    </ol>
                    <p className='text-xl font-semibold text-pink-700'> ${adoptionFee}</p>
                </div>
                <div className='flex gap-15 justify-center bg-slate-200 p-2 rounded-full'>
                    <Button className='bg-pink-600'> <Link href={`/pet-details/${_id}`} >View Details</Link> </Button>
                    
                </div>
            </Card>
        </div>
    );
};

export default PetCard;