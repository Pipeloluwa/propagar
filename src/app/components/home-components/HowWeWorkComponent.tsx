import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { playFont } from '@/app/fonts/fontsConfig'
import React from 'react'
import { ImCheckmark } from 'react-icons/im'
import { motion } from 'motion/react'
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'

export const HowWeWorkComponent = () => {
    return (
        <div className='lg:py-[8rem] py-[4rem] bg-[#0E0E12] relative overflow-hidden'>
            <div className='absolute left-0 right-0 top-0 bottom-0 h-full flex items-center justify-center pointer-events-none'>
                <div className='bg-blue-shadow opacity-50 mx-auto rounded-full' />
            </div>
            <PageMarginContainer>

                <motion.h2
                    variants={animateGradualSpacing}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false }}
                    className='text-3xl md:text-5xl font-bold text-center text-white mb-16'
                >
                    {"HOW WE WORK"}
                </motion.h2>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                    {/* 1 */}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false }}
                        variants={animateFadeUp}
                        custom={0}
                        className='flex flex-col gap-y-6'
                    >
                        <div className='text-8xl font-black text-white/5'>1</div>
                        <div className='-mt-16 ml-4'>
                            <h3 className='text-2xl font-bold text-white mb-2'>{"STRATEGY SESSION"}</h3>
                            <p className='text-gray-400 mb-4'>{"Every engagement begins with a structured assessment to determine:"}</p>
                            <ul className='space-y-2'>
                                {["Strategic fit", "Narrative readiness", "Risk exposure", "Appropriate visibility level"].map((item, i) => (
                                    <li key={i} className='flex gap-2 items-center text-gray-300 text-sm'>
                                        <div className='w-1 h-1 bg-blue-500 rounded-full'></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className='text-blue-500 font-bold mt-4'>{"We do not onboard casually."}</p>
                        </div>
                    </motion.div>


                    {/* 2 */}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        variants={animateFadeUp}
                        custom={0.2}
                        className='flex flex-col gap-y-6'
                    >
                        <div className='text-8xl font-black text-white/5'>2</div>
                        <div className='-mt-16 ml-4'>
                            <h3 className='text-2xl font-bold text-white mb-2'>{"NARRATIVE ARCHITECTURE"}</h3>
                            <p className='text-gray-400 mb-4'>{"We design:"}</p>
                            <ul className='space-y-2'>
                                {["Core positioning", "Media angles", "Visibility sequencing"].map((item, i) => (
                                    <li key={i} className='flex gap-2 items-center text-gray-300 text-sm'>
                                        <div className='w-1 h-1 bg-blue-500 rounded-full'></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className='text-blue-500 font-bold mt-4'>{"Everything is deliberate."}</p>
                        </div>
                    </motion.div>


                    {/* 3 */}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        variants={animateFadeUp}
                        custom={0.4}
                        className='flex flex-col gap-y-6'
                    >
                        <div className='text-8xl font-black text-white/5'>3</div>
                        <div className='-mt-16 ml-4'>
                            <h3 className='text-2xl font-bold text-white mb-2'>{"EXECUTION & GOVERNANCE"}</h3>
                            <p className='text-gray-400 mb-4'>{"We manage:"}</p>
                            <ul className='space-y-2'>
                                {["Media engagement", "Narrative consistency", "Reputation oversight"].map((item, i) => (
                                    <li key={i} className='flex gap-2 items-center text-gray-300 text-sm'>
                                        <div className='w-1 h-1 bg-blue-500 rounded-full'></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className='text-blue-500 font-bold mt-4'>{"Our role is not just to place clients but to protect them."}</p>
                        </div>
                    </motion.div>

                </div>

            </PageMarginContainer>
        </div>
    )
}
