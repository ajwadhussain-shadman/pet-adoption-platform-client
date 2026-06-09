import { auth } from '@/lib/auth';
import PetCard from '@/shared/PetCard';
import { headers } from 'next/headers';
import React from 'react';

const MyListings = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;
    console.log(user?.email)
    const res = await fetch(`http://localhost:8000/pets`);
    const pets = await res.json();
    const myPets = await pets.filter(pet => pet.ownerEmail === user?.email);

    return (
        <div className='p-5 '>
            <h2 className='text-2xl font-bold text-pink-600'>My Listings</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center my-5 gap-3'>{
               myPets.map(pet=>{
                return <PetCard key={pet._id} pet={pet}></PetCard>
               })
     
            }</div>
        </div>
    );
};

export default MyListings;