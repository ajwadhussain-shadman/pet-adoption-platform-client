import { Card } from '@heroui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const RelatedVideos = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-2xl font-bold  text-pink-600 '>Related Videos <FaArrowRight className='inline-block' /></h2>
            <div className='flex flex-col md:flex-row gap-4 justify-between  my-5'>
                <Card className='transition-transform duration-300 sm:hover:scale-130'>
                    <div className='flex flex-col items-center gap-5'>

                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/lOKASgtr6kU?si=54prZ9nW5fmam4et"
                            title="YouTube video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Card>
                 <Card className='transition-transform duration-300 sm:hover:scale-130'>
                    <div className='flex flex-col items-center gap-5'>

                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/GWeTHp1fG5E?si=Ua4SJHifdrn-mGJR"
                            title="YouTube video"
                         
                            allowFullScreen
                        ></iframe>
                    </div>
                </Card>
                 <Card className='transition-transform duration-300 sm:hover:scale-130'>
                    <div className='flex flex-col items-center gap-5'>

                        <iframe
                            width="100%"
                            height="200"
                            src="https://www.youtube.com/embed/iLrW05LHMzI?si=Yg82zGlUUMufhd7q" 
                            title="YouTube video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default RelatedVideos;