import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { playFont } from '@/app/fonts/fontsConfig'
import Link from 'next/link'
import React from 'react'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { ImCheckmark } from 'react-icons/im'
import { motion } from 'motion/react'
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'

export const ServicesComponent = () => {
    return (
        <div className='lg:py-[8rem] py-[4rem] bg-black flex relative'>

            <div className='absolute left-0 right-0 top-0 bottom-0 h-full flex items-center'>
                <div className='bg-blue-shadow mx-auto rounded-full ' />
            </div>

            <div className='z-20  w-full flex flex-col'>
                <PageMarginContainer>
                    <div className='z-20 w-full flex flex-col gap-y-20 items-center justify-center'>

                        <div className='w-full flex flex-col gap-y-3 items-center justify-center'>
                            <motion.h3
                                variants={animateGradualSpacing}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: false }}
                                className='blue-red-grad bg-clip-text text-center text-transparent md:text-5xl text-3xl font-bold'
                            >
                                {"SERVICES"}
                            </motion.h3>

                            <motion.p
                                variants={animateFadeUp}
                                initial="offscreen"
                                whileInView="onscreen"
                                custom={0.2}
                                viewport={{ once: false }}
                                className='text-gray-400 text-center max-w-2xl'
                            >
                                {"Visibility without credibility is noise. We avoid noise."}
                            </motion.p>
                        </div>


                        <div className='w-full flex flex-col gap-y-12'>

                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                                {/* MEDIA AUTHORITY */}
                                <motion.div
                                    variants={animateFadeUp}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    custom={0}
                                    viewport={{ once: false }}
                                    className='blue-red-grad2 py-8 px-6 w-full min-h-[250px] flex flex-col gap-y-4 justify-start rounded-2xl overflow-hidden'
                                >
                                    <div className='w-full flex flex-col gap-y-2 justify-center items-start'>
                                        {/* <img src='/images/icons/services/relation.png' alt='Media' className='object-contain h-12' /> */}
                                        <h5 className='font-bold text-xl'>
                                            {"MEDIA AUTHORITY & VISIBILITY"}
                                        </h5>
                                    </div>
                                    <p className='text-sm text-gray-200'>
                                        {"We help clients secure independent, credible coverage across online newspapers and national/international media platforms."}
                                    </p>
                                    <p className='text-xs text-white/80 font-bold mt-auto pt-4 border-t border-white/10'>
                                        {"All placements are guided by editorial relevance and long-term authority, not vanity metrics."}
                                    </p>
                                </motion.div>


                                {/* TV PLACEMENTS */}
                                <motion.div
                                    variants={animateFadeUp}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    custom={0.2}
                                    viewport={{ once: false }}
                                    className='blue-red-grad2 py-8 px-6 w-full min-h-[250px] flex flex-col gap-y-4 justify-start rounded-2xl overflow-hidden'
                                >
                                    <div className='w-full flex flex-col gap-y-2 justify-center items-start'>
                                        {/* <img src='/images/icons/services/marketing.png' alt='TV' className='object-contain h-12' /> */}
                                        <h5 className='font-bold text-xl'>
                                            {"TELEVISION PLACEMENTS & INTERVIEW READINESS"}
                                        </h5>
                                    </div>
                                    <p className='text-sm text-gray-200'>
                                        {"Media access is only valuable if you can handle it. We support clients with local and international TV access, interview briefing, and message discipline."}
                                    </p>
                                    <p className='text-xs text-white/80 font-bold mt-auto pt-4 border-t border-white/10'>
                                        {"Television is unforgiving. We ensure clients are ready before they step in."}
                                    </p>
                                </motion.div>


                                {/* WIKIPEDIA */}
                                <motion.div
                                    variants={animateFadeUp}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    custom={0.4}
                                    viewport={{ once: false }}
                                    className='blue-red-grad2 py-8 px-6 w-full min-h-[250px] flex flex-col gap-y-4 justify-start rounded-2xl overflow-hidden'
                                >
                                    <div className='w-full flex flex-col gap-y-2 justify-center items-start'>
                                        {/* <img src='/images/icons/services/communication.png' alt='Wikipedia' className='object-contain h-12' /> */}
                                        <h5 className='font-bold text-xl'>
                                            {"WIKIPEDIA READINESS & NOTABILITY SUPPORT"}
                                        </h5>
                                    </div>
                                    <p className='text-sm text-gray-200'>
                                        {"We do not create or guarantee Wikipedia pages. We help clients build verifiable, independent public footprints aligned with notability standards."}
                                    </p>
                                    <p className='text-xs text-white/80 font-bold mt-auto pt-4 border-t border-white/10'>
                                        {"Anyone can publish a page. Few can sustain one."}
                                    </p>
                                </motion.div>


                                {/* DIGITAL AMPLIFICATION */}
                                <motion.div
                                    variants={animateFadeUp}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    custom={0.6}
                                    viewport={{ once: false }}
                                    className='blue-red-grad2 py-8 px-6 w-full min-h-[250px] flex flex-col gap-y-4 justify-start rounded-2xl overflow-hidden'
                                >
                                    <div className='w-full flex flex-col gap-y-2 justify-center items-start'>
                                        {/* <img src='/images/icons/services/communication.png' alt='Digital' className='object-contain h-12' /> */}
                                        <h5 className='font-bold text-xl'>
                                            {"DIGITAL AMPLIFICATION"}
                                        </h5>
                                    </div>
                                    <p className='text-sm text-gray-200'>
                                        {"Narratives do not end at publication. We support responsible amplification through strategic digital campaigns and thought leadership distribution."}
                                    </p>
                                    <p className='text-xs text-white/80 font-bold mt-auto pt-4 border-t border-white/10'>
                                        {"Visibility without credibility is noise. We avoid noise."}
                                    </p>
                                </motion.div>


                            </div>

                            <motion.div
                                variants={animateFadeUp}
                                initial="offscreen"
                                whileInView="onscreen"
                                custom={0.8}
                                viewport={{ once: false }}
                                className='flex justify-center'
                            >
                                <Link href={"/contact"} className={`small-button blue-red-grad text-[16px] min-w-[300px] px-6  py-5 h-auto min-h-[60px] text-center leading-tight flex justify-center items-center rounded-xl text-white font-bold cursor-pointer`}>
                                    {"Request a Strategy Session →"}
                                </Link>
                            </motion.div>

                        </div>

                    </div>
                </PageMarginContainer>
            </div>
        </div>
    )
}
