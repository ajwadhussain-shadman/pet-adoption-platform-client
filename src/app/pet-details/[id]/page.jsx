import AdoptModal from '@/component/AdoptModal';
import { auth } from '@/lib/auth';
import PetCard from '@/shared/PetCard';
import { Button, Card, CloseButton } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import { BiInjection } from 'react-icons/bi';
import { GiHealthNormal } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdAttachMoney } from 'react-icons/md';

const PetDetailsPage = async ({ params }) => {

const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user;

    const { id } = await params;
    const {token}= await auth.api.getToken(
        {headers : await headers()}
    )

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pets/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    });
    const pet = await res.json();
    const { _id, petName, gender, age, breed, species, imageUrl, adoptionFee, status, description,
        healthStatus,vaccinationStatus ,location,ownerEmail} = pet;
    console.log(pet)
    return (
        <div className='my-5 mx-2'>
            <Card className="w-full items-stretch md:flex-row">
                <div className="h-full max-w-[400px] ">
                    <img
                        src={imageUrl}
                        alt={petName}
                        className="h-full w-full object-cover rounded-2xl "
                    />

                </div>
                <div className="flex flex-1 flex-col gap-3 my-5">
                    <Card.Header className="gap-1 space-y-5 ">
                        <Card.Title className="pr-8 text-3xl font-bold text-pink-600">{petName}</Card.Title>
                        <Card.Description>
                            {description}
                        </Card.Description>

                        <div className=' grid grid-cols-1 md:grid-cols-2  gap-2 font-semibold text-pink-600'>
                            <p>Age:{age}</p>
                            <p> Species : {species}</p>
                            <p> Breed : {breed}</p>
                            <p> Gender :  {gender}</p>
                            
                        </div>
                        <div className='flex flex-col md:flex-row gap-10 '>
                            <p className='flex items-center gap-1 font-semibold'> <GiHealthNormal className='inline-block text-pink-600 ' />Health: {healthStatus}</p>
                            <p className='flex items-center gap-1 font-semibold'> <BiInjection className='inline-block text-pink-600 ' />Vaccination: {vaccinationStatus}</p>
                        </div>
                        <div>
                
                            <p className='flex items-center gap-1 font-semibold text-slate-500'> <IoLocationSharp className='inline-block text-pink-600 ' />Location: {location},Bangladesh</p>
                        </div>
                        <p className='flex items-center gap-1 font-semibold text-slate-500'> <MdAttachMoney className='inline-block text-pink-600 ' />AdoptionFee : ${adoptionFee}</p>

                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        {
                            ownerEmail===user?.email && <p className='text-pink-600 text-sm font-bold'>(!)You can not adopt your own pet</p>
                        }
                         {
                           (status==='adopted' && ownerEmail!==user?.email )  && <p className='text-pink-600 text-sm font-bold'>(!)This pet is already adopted</p>
                        }
                        {
                           (status!=='adopted' && ownerEmail!==user?.email ) && <AdoptModal pet={pet}></AdoptModal>
                        }
                       
                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
};

export default PetDetailsPage;