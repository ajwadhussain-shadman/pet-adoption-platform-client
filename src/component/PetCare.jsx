import { Card } from '@heroui/react';
import React from 'react';
import { BiSolidInjection } from 'react-icons/bi';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { FaBowlFood } from 'react-icons/fa6';
import { IoIosWater } from 'react-icons/io';

const PetCare = () => {
    return (
        <div className='w-11/12 mx-auto'>
                    <h2 className='text-2xl font-bold  text-pink-600 text-center'>Pet Care Tips</h2>
                    <div className='flex flex-col md:flex-row gap-4  my-5'>
                        <Card>
                          <div className='flex flex-col items-center gap-5'>
                              <p className='border border-pink-500 p-2 text-4xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><BiSolidInjection /></p>
                            <div className='text-center'>
                                <h2 className='font-semibold text-lg'>Regular Vaccination</h2>
                                <p className='text-slate-500'>Keep your pet up to date on vaccines to keep them healthy</p>
                            </div>
                          </div>
                        </Card>
                       <Card>
                          <div className='flex flex-col items-center gap-5'>
                              <p className='border border-pink-500 p-2 text-4xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><FaBowlFood /></p>
                            <div className='text-center'>
                                <h2 className='font-semibold text-lg'>Healthy Food</h2>
                                <p className='text-slate-500'>Provide balanced and nutritios food for a strong body</p>
                            </div>
                          </div>
                        </Card>
                        <Card>
                          <div className='flex flex-col items-center gap-5'>
                              <p className='border border-pink-500 p-2 text-4xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><IoIosWater /></p>
                            <div className='text-center'>
                                <h2 className='font-semibold text-lg'>Clean Water</h2>
                                <p className='text-slate-500'>Fresh and clean water should always be available</p>
                            </div>
                          </div>
                        </Card>
                         <Card>
                          <div className='flex flex-col items-center gap-5'>
                              <p className='border border-pink-500 p-2 text-4xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><FaHandHoldingHeart /></p>
                            <div className='text-center'>
                                <h2 className='font-semibold text-lg'>Love & Care</h2>
                                <p className='text-slate-500'>Your love and attention make your pet feel safe and happy</p>
                            </div>
                          </div>
                        </Card>
                    </div>
                </div>
    );
};

export default PetCare;