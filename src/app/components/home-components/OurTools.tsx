import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import React from 'react'
import { motion } from 'motion/react'
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'

export const OurTools = () => {
    return (
        <div className='lg:py-[8rem] py-[4rem] flex relative bg-gradient-to-b from-black via-[#101c74] to-[#000105]'>


            <div className='absolute left-0 right-0 top-0 bottom-0 h-full flex items-center opacity-10'>
                <img src="/images/pictures/ai-bg.webp" alt="Welcome Background " className='w-full h-full absolute left-0 right-0 bottom-0 top-0 flex object-cover' />
            </div>


            <div className='absolute left-0 right-0 bottom-0 h-[500px] flex items-center'>
                <div className='bg-gradient-to-b from-transparent to-black w-full h-full ' />
            </div>

            <div className='z-20 w-full flex flex-col gap-y-20 items-center justify-center'>

                <PageMarginContainer>

                    {/* INTO */}
                    <div className='w-full flex flex-col gap-y-6 items-center justify-center text-center mb-12'>
                        <motion.h3
                            variants={animateGradualSpacing}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false }}
                            className='blue-red-grad bg-clip-text text-center text-transparent md:text-5xl text-3xl font-bold'
                        >
                            {"HOW WE USE AI"}
                        </motion.h3>

                        <motion.p
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.2}
                            viewport={{ once: false }}
                            className='text-xl text-gray-200'
                        >
                            {"Propagar is AI-powered not because we automate publicity, but because we model narratives, risk, and attention before acting."}
                        </motion.p>

                        <motion.div
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.4}
                            viewport={{ once: false }}
                            className='bg-white/10 p-4 rounded-xl'
                        >
                            <p className='text-gray-300 italic'>
                                {"AI does not replace judgment. It sharpens it."}
                            </p>
                        </motion.div>

                    </div>




                    <div className='w-full flex flex-col gap-y-12 justify-between'>

                        <div className='lg:pb-[4rem] pb-[2rem] w-full flex flex-col gap-y-8'>

                            <ul className='grid lg:grid-cols-2 gap-8'>

                                {/* PREDICT */}
                                <motion.li
                                    variants={animateFadeUp}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    custom={0}
                                    viewport={{ once: false }}
                                    className='w-full flex flex-col gap-y-6 justify-start rounded-3xl p-8 overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors'
                                >
                                    <div>
                                        <h6 className='text-3xl font-bold text-white mb-2'>
                                            {"PROPAGAR PREDICT"}
                                        </h6>
                                        <p className='text-blue-400 font-bold'>{"Narrative Intelligence & Risk Awareness"}</p>
                                    </div>

                                    <p className='text-gray-300'>
                                        {"Propagar Predict helps us understand the environment before we enter it."}
                                    </p>

                                    <div className='flex flex-col gap-4'>
                                        <div className='bg-black/20 p-4 rounded-lg'>
                                            <p className='text-sm font-bold text-gray-400 uppercase mb-2'>{"Supports analysis of:"}</p>
                                            <ul className='list-disc list-inside text-gray-200 space-y-1'>
                                                <li>{"Media sentiment trends"}</li>
                                                <li>{"Topic volatility"}</li>
                                                <li>{"Narrative saturation"}</li>
                                                <li>{"Timing and exposure risk"}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='mt-auto pt-4 border-t border-white/10'>
                                        <p className='text-sm text-gray-400'>
                                            {"Propagar Predict informs strategy. It does not dictate outcomes."}
                                        </p>
                                    </div>

                                </motion.li>


                                {/* CREATE */}
                                <motion.li
                                    variants={animateFadeUp}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    custom={0.2}
                                    viewport={{ once: false }}
                                    className='w-full flex flex-col gap-y-6 justify-start rounded-3xl p-8 overflow-hidden bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors'
                                >
                                    <div>
                                        <h6 className='text-3xl font-bold text-white mb-2'>
                                            {"PROPAGAR CREATE"}
                                        </h6>
                                        <p className='text-blue-400 font-bold'>{"AI-Assisted Content & Narrative Development"}</p>
                                    </div>

                                    <p className='text-gray-300'>
                                        {"Propagar Create supports the development of media-ready narratives, thought leadership positioning, and digital content frameworks."}
                                    </p>

                                    <div className='flex flex-col gap-4'>
                                        <div className='bg-black/20 p-4 rounded-lg'>
                                            <p className='text-sm font-bold text-gray-400 uppercase mb-2'>{"Allows us to:"}</p>
                                            <ul className='list-disc list-inside text-gray-200 space-y-1'>
                                                <li>{"Iterate faster"}</li>
                                                <li>{"Maintain narrative consistency"}</li>
                                                <li>{"Improve clarity and articulation"}</li>
                                                <li>{"Support scalable execution"}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='mt-auto pt-4 border-t border-white/10'>
                                        <p className='text-sm text-gray-400'>
                                            {"Every client receives a complimentary AI-generated brand video, refined and approved before public use."}
                                        </p>
                                    </div>

                                </motion.li>

                            </ul>

                        </div>

                        {/* IMPORTANT CLARITY */}
                        <motion.div
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.4}
                            viewport={{ once: false }}
                            className='w-full bg-red-900/20 border border-red-500/30 p-8 rounded-2xl'
                        >
                            <h6 className='text-2xl font-bold text-red-500 mb-4'>
                                {"IMPORTANT CLARITY"}
                            </h6>
                            <p className='text-gray-300 mb-4'>
                                {"Our AI systems:"}
                            </p>
                            <ul className='grid md:grid-cols-2 gap-4 text-gray-200'>
                                <li className='flex items-center gap-2'><span className='text-red-500 font-bold'>&times;</span>{"Do not replace human editorial judgment"}</li>
                                <li className='flex items-center gap-2'><span className='text-red-500 font-bold'>&times;</span>{"Do not guarantee media outcomes"}</li>
                                <li className='flex items-center gap-2'><span className='text-red-500 font-bold'>&times;</span>{"Do not create Wikipedia pages"}</li>
                                <li className='flex items-center gap-2'><span className='text-red-500 font-bold'>&times;</span>{"Do not prepare clients for TV interviews"}</li>
                            </ul>
                            <div className='mt-6 text-center text-white font-bold text-lg'>
                                {"They exist to improve strategic rigor not to automate credibility."}
                            </div>

                        </motion.div>

                    </div>


                </PageMarginContainer>
            </div>


        </div>
    )
}
