import { Card } from '@heroui/react';
import React from 'react';
import { FaHome, FaPaw, FaRegHeart,FaRegSmileBeam } from 'react-icons/fa';

const WhyAdopt = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-2xl font-bold text-center'>Why Adopt Pets?</h2>
            <div className='flex flex-col md:flex-row gap-4 my-5'>
                <Card>
                  <div className='flex gap-5'>
                      <p className='bg-pink-50 p-2 text-3xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><FaRegHeart /></p>
                    <div>
                        <h2 className='font-semibold text-lg'>Save a Life</h2>
                        <p className='text-slate-500'>You give a homeless pet a shelter and save a life</p>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className='flex gap-5'>
                      <p className='bg-pink-50 p-2 text-3xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><FaHome  /></p>
                    <div>
                        <h2 className='font-semibold text-lg'>Give Them a Home</h2>
                        <p className='text-slate-500'>Every pet deserve a warm and loving forever home</p>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className='flex gap-5'>
                      <p className='bg-pink-50 p-2 text-3xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><FaRegSmileBeam /></p>
                    <div>
                        <h2 className='font-semibold text-lg'>Improve Mental Health</h2>
                        <p className='text-slate-500'>Pets reduce stress, anxiety and bring happiness</p>
                    </div>
                  </div>
                </Card>
                <Card>
                  <div className='flex gap-5'>
                      <p className='bg-pink-50 p-2 text-3xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><FaPaw /></p>
                    <div>
                        <h2 className='font-semibold text-lg'>Loyal Friend</h2>
                        <p className='text-slate-500'>Adopted pets are grateful and truly loyal friends</p>
                    </div>
                  </div>
                </Card>
            </div>
        </div>
    );
};

export default WhyAdopt;