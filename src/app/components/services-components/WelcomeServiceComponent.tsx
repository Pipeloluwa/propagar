
import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { playFont, urbanistFont } from '@/app/fonts/fontsConfig'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react';


export const WelcomeServiceComponent = () => {
    return (
        <div className='bg-black -mt-[80px] pt-[50px] w-full min-h-svh relative flex'>

            <div className='absolute left-0 right-0 top-0 bottom-0 h-full flex items-center'>
                <div className='bg-blue-shadow mx-auto rounded-full ' />
            </div>


            <div className='z-20 w-full flex flex-col'>

                <PageMarginContainer>
                    <div className='lg:py-[6rem] py-[4rem] flex flex-col gap-y-10 items-center justify-center'>
                        <div className='flex flex-col gap-y-10 items-center justify-center'>
                            <h1 className='animated-background-text1 bg-clip-text font-bold text-center lg:text-[70px]  md:text-[60px] text-5xl leading-[70px]'>
                                <span className='text-transparent'>
                                    {"Services"}
                                </span>
                            </h1>


                            <p className='w-[70%] mx-auto text-center'>
                                {"Smart solutions powered by AI — from strategy to execution, we elevate your communication and marketing outcomes"}
                            </p>



                            <motion.div
                                // animate={{ x: [0, 50, 0], }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className='border-animate w-full h-[400px] overflow-hidden '
                            >

                                <img src="/images/pictures/bg-welcome3.webp" alt="Welcome Background " className='w-full h-full flex object-cover' />
                            </motion.div>
                        </div>


                    </div>
                </PageMarginContainer>


            </div>


        </div>
    )
}
