import NavLink from '@/shared/NavLink';
import { Button, Card } from '@heroui/react';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className="p-5 flex flex-col md:flex-row ">
         
       <div>
          <div className="space-y-1">
        <h2 className="font-bold text-4xl text-pink-600 ">DashBoard</h2>
        <p className="text-slate-500">Manage your pet adoption activities</p>
      </div>
      <Card className="m-5 flex flex-col md:h-screen">
        <h2 className=" text-lg md:text-2xl font-semibold">Quick Links</h2>
        <div className=" flex-row text-sm md:flex-col  flex gap-5">
             <NavLink  href={'/dashboard/add-pet'}>Add Pet</NavLink>
             <NavLink href={'/dashboard/my-requests'}>My Requests</NavLink>
            <NavLink href={'/dashboard/my-listings'}>My Listings</NavLink>
        </div>

      </Card>
       </div>

      <div>
        {children}
      </div>
   </div>
    );
};

export default layout;