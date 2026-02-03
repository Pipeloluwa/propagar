import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import React from 'react'
import { motion } from 'motion/react'
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'

export const WhyChooseComponent = () => {
    return (
        <div className='lg:py-[8rem] py-[4rem] min-h-svh flex relative bg-gradient-to-b from-black via-[#101c74] to-[#000105]'>

            <div className='absolute left-0 right-0 top-0 bottom-0 h-full flex items-center'>
                <img src="/images/pictures/Looper BG_.png" alt="Welcome Background " className='w-full h-full flex object-cover' />
            </div>

            <div className='z-20  w-full flex flex-col'>
                <PageMarginContainer>

                    <div className='w-full flex flex-col gap-y-3 items-center justify-center mb-16'>
                        <motion.h3
                            variants={animateGradualSpacing}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false }}
                            className='blue-red-grad bg-clip-text text-center text-transparent md:text-5xl text-3xl font-bold'
                        >
                            {"OUR DIFFERENCE"}
                        </motion.h3>
                        <motion.p
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.2}
                            viewport={{ once: false }}
                            className='text-xl text-center font-semibold text-white'
                        >
                            {"We build for scrutiny, not applause."}
                        </motion.p>
                        <motion.p
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.4}
                            viewport={{ once: false }}
                            className='text-center text-gray-400 max-w-2xl'
                        >
                            {"Anyone can publish an article. Few can withstand editors, critics, platforms, or time."}
                        </motion.p>
                    </div>



                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 items-start justify-center'>

                        <motion.div
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0}
                            viewport={{ once: false }}
                            className='flex flex-col gap-y-3 justify-center items-center bg-white/5 p-6 rounded-2xl h-full border border-white/10 hover:border-blue-500/50 transition-colors'
                        >

                            {/* <img src='/images/icons/why-choose/one.png' alt='Standard' className='object-contain h-12 mb-2' /> */}

                            <h6 className='font-bold text-xl text-center text-white'>
                                {"Journalistic Standards"}
                            </h6>
                            <p className='text-sm text-center text-gray-400'>
                                {"We adhere to the rigor required by top-tier editorial boards."}
                            </p>

                        </motion.div>



                        <motion.div
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.2}
                            viewport={{ once: false }}
                            className='flex flex-col gap-y-3 justify-center items-center bg-white/5 p-6 rounded-2xl h-full border border-white/10 hover:border-blue-500/50 transition-colors'
                        >

                            {/* <img src='/images/icons/why-choose/ai.png' alt='Logic' className='object-contain h-12 mb-2' /> */}

                            <h6 className='font-bold text-xl text-center text-white'>
                                {"Editorial Logic"}
                            </h6>
                            <p className='text-sm text-center text-gray-400'>
                                {"Structuring narratives that make sense to editors, not just algorithms."}
                            </p>

                        </motion.div>



                        <motion.div
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.4}
                            viewport={{ once: false }}
                            className='flex flex-col gap-y-3 justify-center items-center bg-white/5 p-6 rounded-2xl h-full border border-white/10 hover:border-blue-500/50 transition-colors'
                        >

                            {/* <img src='/images/icons/why-choose/cost.png' alt='Discipline' className='object-contain h-12 mb-2' /> */}

                            <h6 className='font-bold text-xl text-center text-white'>
                                {"Strategic Discipline"}
                            </h6>
                            <p className='text-sm text-center text-gray-400'>
                                {"Communications grounded in long-term goals, not short-term hype."}
                            </p>

                        </motion.div>



                        <motion.div
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.6}
                            viewport={{ once: false }}
                            className='flex flex-col gap-y-3 justify-center items-center bg-white/5 p-6 rounded-2xl h-full border border-white/10 hover:border-blue-500/50 transition-colors'
                        >

                            {/* <img src='/images/icons/why-choose/scalable.png' alt='Thinking' className='object-contain h-12 mb-2' /> */}

                            <h6 className='font-bold text-xl text-center text-white'>
                                {"Institutional Thinking"}
                            </h6>
                            <p className='text-sm text-center text-gray-400'>
                                {"Building authority that serves the institution, not just the individual."}
                            </p>

                        </motion.div>

                    </div>

                    <div className='mt-16 text-center'>
                        <motion.p
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.8}
                            viewport={{ once: false }}
                            className='text-lg font-bold text-white'
                        >
                            {"This is why we do not promise guarantees — and why our work lasts."}
                        </motion.p>
                    </div>

                </PageMarginContainer>

            </div>

        </div>
    )
}
