import { Card } from '@heroui/react';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaClipboardList, FaRegHandshake, FaSearch } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';

const HowAdoptionWork = () => {
    return (
        <div className='w-11/12 mx-auto'>
                            <h2 className='text-2xl font-bold  text-cyan-900 text-center'>How Adoption Works</h2>
                            <div className='flex flex-col md:flex-row gap-4 justify-between  my-5'>
                                <Card>
                                  <div className='flex flex-col items-center gap-5'>
                                      <p className='border border-pink-500 p-2 text-4xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><FaSearch /></p>
                                    <div className='text-center'>
                                        <h2 className='font-semibold text-lg'>1. Browse Pets</h2>
                                    
                                    </div>
                                  </div>
                                </Card>
                               <Card>
                                  <div className='flex flex-col items-center gap-5'>
                                      <p className='border border-pink-500 p-2 text-4xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><FaClipboardList /></p>
                                    <div className='text-center'>
                                        <h2 className='font-semibold text-lg'>2. Submit Requests</h2>
                                        
                                    </div>
                                  </div>
                                </Card>
                                <Card>
                                  <div className='flex flex-col items-center gap-5'>
                                      <p className='border border-pink-500 p-2 text-4xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><IoPerson /></p>
                                    <div className='text-center'>
                                        <h2 className='font-semibold text-lg'>3. Owner Review</h2>
                                    </div>
                                  </div>
                                </Card>
                                 <Card>
                                  <div className='flex flex-col items-center gap-5'>
                                      <p className='border border-pink-500 p-2 text-4xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><FaRegHandshake /></p>
                                    <div className='text-center'>
                                        <h2 className='font-semibold text-lg'>4. Meet the Pet</h2>
                                    
                                    </div>
                                  </div>
                                </Card>
                                 <Card>
                                  <div className='flex flex-col items-center gap-5'>
                                      <p className='border border-pink-500 p-2 text-4xl text-pink-600 rounded-full h-[50px] max-w-[100px] text-center flex items-center justify-center'><AiOutlineHome /></p>
                                    <div className='text-center'>
                                        <h2 className='font-semibold text-lg'>5. Take Home</h2>
                                        
                                    </div>
                                  </div>
                                </Card>
                            </div>
                        </div>
    );
};

export default HowAdoptionWork;