import { auth } from '@/lib/auth';
import MyListingCard from '@/shared/MyListingCard';
import { Card } from '@heroui/react';

import { headers } from 'next/headers';
import React from 'react';

const MyListings = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const {token}= await auth.api.getToken(
            {headers : await headers()}
        )
    const user = session?.user;
    console.log(user?.email)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets?email=${user?.email}`,{
            headers:{
                authorization:`Bearer ${token}`
            }
        });
    const myPets = await res.json();
 
    const availablePets= myPets.filter(pet=> pet.status==='available')
    const adoptedPets= myPets.filter(pet=> pet.status==='adopted')

    return (
        <div className='p-5 '>
            <h2 className='text-2xl font-bold text-pink-600'>My Listings</h2>
            <Card className=' my-5 flex md:flex-row justify-between'>
               <p className='text-pink-600  text-lg md:text-xl font-bold'>Total Listings: {myPets.length}</p>
               <p className='text-pink-600  text-lg md:text-xl font-bold'>Available: {availablePets.length}</p>
               <p className='text-pink-600  text-lg md:text-xl font-bold'>Adopted: {adoptedPets.length}</p>
            </Card>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center my-5 gap-3'>{
               myPets.map(pet=>{
                return <MyListingCard key={pet._id} pet={pet}></MyListingCard >
               })
     
            }</div>
        </div>
    );
};

export default MyListings;