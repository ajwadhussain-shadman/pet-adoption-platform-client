import { auth } from '@/lib/auth';
import RequestCard from '@/shared/RequestCard';
import { headers } from 'next/headers';
import React from 'react';

const MyRequests =async() => {
    const session = await auth.api.getSession({
            headers: await headers(),
        });
        const user = session?.user;
        console.log(user?.email)
        const res = await fetch(`http://localhost:8000/request?email=${user?.email}`);
        const myRequest = await res.json();
        console.log(myRequest)
    return (
        <div className=' w-full md:w-4xl md:ml-10  mx-auto'>
            <h2 className='text-2xl md:text-center  font-bold text-pink-600 mt-3'>My Requests</h2>

            {
                myRequest.length===0 ? <p className='text-center my-10 font-bold text-xl text-pink-600'>No Request available</p> :  <div className='space-y-5 my-3'>
                
                {myRequest.map(req=>{
                    return <RequestCard key={req._id} req={req}></RequestCard>
                })}
            </div>
            }
           
        </div>
    );
};

export default MyRequests;