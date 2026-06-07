import PetCard from '@/shared/PetCard';
import React from 'react';

const page = async () => {
     
    const res= await fetch("http://localhost:8000/pets");
    const allPets=await res.json();

    return (
        <div className=' w-11/12 mx-auto m-5 bg-amber-50/50 pb-10 px-10'>
          <h2 className='font-bold text-3xl text-center text-pink-600 my-5'>All Pets ({allPets.length})</h2>
          <div className='grid grid-cols-1 md:grid-cols-3  gap-5 '>
            {
                allPets.map(pet=>{
                     return <PetCard key={pet._id} pet={pet}></PetCard> 
                    })
            }
          </div>
        </div>
    );
};

export default page;