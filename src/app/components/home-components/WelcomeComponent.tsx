
import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { playFont, urbanistFont } from '@/app/fonts/fontsConfig'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react';
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants';


export const WelcomeComponent = () => {
    return (
        <div className='bg-black -mt-[80px] w-full h-svh relative flex overflow-hidden'>

            <div className='absolute left-0 right-0 bottom-0 top-0 opacity-30'>
                <img src="/images/pictures/bg-black.webp" alt="Welcome Background " className='w-full h-full flex' />
            </div>

            <div className='absolute left-0 right-0 top-0 bottom-0 h-full flex items-center'>
                <div className='bg-blue-shadow mx-auto rounded-full ' />
            </div>


            <div className='z-20 w-full flex flex-col h-full justify-center'>

                <PageMarginContainer>
                    <main className='xl:-mt-6 lg:mt-18 sm:mt-12 pt-[4rem] flex flex-col gap-y-4 items-center justify-center h-full'>
                        <div className='sm:h-auto h-full flex flex-col xl:gap-y-2 gap-y-4 justify-center'>

                            <div className='h-[65%] flex flex-col gap-y-4 justify-center z-20'>
                                <motion.h1
                                    variants={animateGradualSpacing}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: false }}
                                    className='animated-background-text1 bg-clip-text flex md:flex-row flex-col gap-x-4 justify-center items-center font-bold text-center lg:text-[50px]  md:text-[40px] text-4xl leading-tight pb-2'
                                >
                                    <span className='text-transparent'>
                                        {"Nigeria’s first "}
                                    </span>
                                    <span className='text-transparent'>
                                        {"AI-powered"}
                                    </span>
                                </motion.h1>

                                <motion.h1
                                    variants={animateFadeUp}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    custom={0.2}
                                    viewport={{ once: false }}
                                    className='text-white  font-bold text-center md:text-[20px] text-lg leading-normal'
                                >
                                    {"PR, Communications & Marketing company"}
                                </motion.h1>

                                <motion.p
                                    variants={animateFadeUp}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    custom={0.4}
                                    viewport={{ once: false }}
                                    className={`${playFont.className} xl:w-[65%] w-full mx-auto text-center text-lg mt-2`}
                                >
                                    {"We engineer public credibility that survives scrutiny across media, platforms, and borders."}
                                </motion.p>

                                <motion.div
                                    variants={animateFadeUp}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    custom={0.6}
                                    viewport={{ once: false }}
                                    className="mt-4 mx-auto w-fit bg-white/5 backdrop-blur-md border border-white/10 rounded-xl py-3 px-6 shadow-2xl shadow-blue-900/20"
                                >
                                    <span className="font-bold block text-center text-gray-200 text-sm tracking-wide">
                                        {"Narrative control. Reputation protection. Influence at scale."}
                                    </span>
                                </motion.div>



                                <motion.div
                                    variants={animateFadeUp}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    custom={0.8}
                                    viewport={{ once: false }}
                                    className='mt-4 flex gap-x-4 justify-center items-center'
                                >

                                    <Link href={"/contact"} className={`small-button blue-red-grad text-[14px] min-w-[300px] px-6  py-5 h-auto min-h-[60px] text-center leading-tight flex justify-center items-center rounded-xl text-white font-bold cursor-pointer`}>
                                        {"Request a Strategy Session →"}
                                    </Link>

                                </motion.div>
                            </div>


                            <motion.div
                                animate={{ x: [0, 50, 0], }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className='2xl:-mt-20 xl:-mt-28 h-[35%] flex items-end'
                            >

                                <img src="/images/pictures/welcome-bg.webp" alt="Welcome Background " className='mx-auto w-full flex' />
                            </motion.div>
                        </div>










                        {/* <div className={`${playFont.className} xl:w-[85%] w-full mx-auto text-center text-xl`}>
                            {"Propagar Media is your one-stop shop for AI-driven Public Relations, Marketing, Corporate Communications, and Events. We eliminate fragmentation, reduce cost, and deliver smarter, faster, results-backed campaigns."}
                        </div>

                        <p className={`${playFont.className} text-center`}>
                            {"We combine storytelling, strategy and AI to help brands cut through the noise, spark engagement and deliver measurable impact."}
                        </p>


                                                <Link href={"/project100"} className={`big-button text-[16px] w-[250px] h-[60px] flex justify-center items-center rounded-xl text-gray-800 font-bold bg-gradient-to-b from-[#e2be3b] from-[30%] to-[#a78304]`}>
                            {"Work With Us"}
                        </Link> */}


                    </main>
                </PageMarginContainer>


            </div>


        </div>
    )
}
