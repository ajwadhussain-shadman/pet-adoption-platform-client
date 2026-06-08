import { Card } from '@heroui/react';
import React from 'react';
import dogImg from '@/assets/dog.jpg'
import cat1Img from "@/assets/cat-1.jpg"  
import cat2Img from "@/assets/cat-2.jpg"  
import Image from 'next/image';
const SuccessStories = () => {
    return (
         <div className='w-11/12 mx-auto'>
                    <h2 className='text-2xl font-bold text-center'>Success Stories</h2>
                    <div className='flex flex-col md:flex-row gap-4 my-5'>
                        <Card>
                          <div className='mb-3'>
                              <Image src={dogImg} alt="dog image" className='rounded-2xl mb-4' ></Image>
                            <div>
                                <h2 className='text-gray-600'>Rocky was scared and alone on the street. <br />
                                Now he is happy,healthy and full of love
                                </h2>
                                <p className='text-pink-600 font-semibold mt-4'>
                                    <span className='text-slate-800'>- </span>
                                    Rakib
                                </p>
                            </div>
                          </div>
                        </Card>
                        <Card>
                          <div className='mb-3'>
                              <Image src={cat1Img} alt="dog image" className='rounded-2xl mb-4' ></Image>
                            <div>
                                <h2 className='text-gray-600'> Lilly found her forever home and become the queen of the home
                                </h2>
                                <p className='text-pink-600 font-semibold mt-4'>
                                    <span className='text-slate-800'>- </span>
                                    Abrar
                                </p>
                            </div>
                          </div>
                        </Card>
                        <Card>
                          <div className='mb-3'>
                              <Image src={cat2Img} alt="dog image" className='rounded-2xl mb-4' ></Image>
                            <div>
                                <h2 className='text-gray-600'> Max was abandoned, but today he has a family who loves him
                                </h2>
                                <p className='text-pink-600 font-semibold mt-4'>
                                    <span className='text-slate-800'>- </span>
                                    Raisa
                                </p>
                            </div>
                          </div>
                        </Card>
                        
                    </div>
                </div>
    );
};

export default SuccessStories;