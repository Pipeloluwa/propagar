"use client";
import React from 'react'
import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { motion } from 'motion/react';
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants';

interface WelcomeGenericProps {
    title: string;
    description: string;
    imageSrc?: string;
}

export const WelcomeGenericComponent = ({ title, description, imageSrc }: WelcomeGenericProps) => {
    return (
        <div className='bg-black -mt-[80px] pt-[50px] w-full min-h-svh relative flex overflow-hidden'>

            <div className='absolute left-0 right-0 top-0 bottom-0 h-full flex items-center justify-center pointer-events-none'>
                {/* Gradient background touch */}
                <div className='bg-blue-900/20 blur-[150px] w-[60%] h-[60%] rounded-full absolute top-[-10%] left-[-10%]' />
                <div className='bg-red-900/10 blur-[150px] w-[60%] h-[60%] rounded-full absolute bottom-[-10%] right-[-10%]' />
            </div>


            <div className='z-20 w-full flex flex-col h-full justify-center'>

                <PageMarginContainer>
                    <div className='lg:grid lg:grid-cols-2 flex flex-col gap-10 items-center justify-center h-full min-h-[80vh]'>

                        {/* Text Section */}
                        <div className='flex flex-col gap-y-6 lg:gap-y-10 items-center lg:items-start justify-center order-2 lg:order-1'>
                            <motion.h1
                                variants={animateGradualSpacing}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false }}
                                className='animated-background-text1 bg-clip-text font-bold text-center lg:text-left lg:text-[60px] md:text-[50px] text-4xl leading-tight uppercase'
                            >
                                <span className='text-transparent'>
                                    {title}
                                </span>
                            </motion.h1>


                            <motion.p
                                variants={animateFadeUp}
                                initial="offscreen"
                                whileInView="onscreen"
                                custom={0.2}
                                viewport={{ once: false }}
                                className='w-full lg:w-[90%] text-center lg:text-left text-gray-300 text-base md:text-lg'
                            >
                                {description}
                            </motion.p>
                        </div>

                        {/* Image Section */}
                        <div className='w-full flex justify-center items-center order-1 lg:order-2 h-full'>
                            {imageSrc && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className='w-full max-w-[500px] aspect-square lg:aspect-auto lg:h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20'
                                >
                                    <img src={imageSrc} alt={`${title} Background`} className='w-full h-full object-cover' />
                                </motion.div>
                            )}

                            {!imageSrc && (
                                <div className='h-[200px] lg:h-full'></div>
                            )}
                        </div>

                    </div>
                </PageMarginContainer>


            </div>


        </div>
    )
}
