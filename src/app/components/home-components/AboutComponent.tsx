import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { playFont } from '@/app/fonts/fontsConfig'
import React from 'react'
import { ImCheckmark } from 'react-icons/im'
import { motion } from 'motion/react'
import { animateFadeUp, animateFromRight, animateGradualSpacing } from '@/app/animation/animationVariants'

export const AboutComponent = () => {
    return (
        <div className='py-[6rem] bg-black relative overflow-hidden'>
            <div className='absolute right-0 bottom-0 top-0 w-1/2 opacity-10 bg-gradient-to-l from-blue-900 via-transparent to-transparent pointer-events-none' />

            <PageMarginContainer>
                <div className='flex flex-col lg:flex-row gap-16 items-start'>

                    <div className='lg:w-1/2'>
                        <motion.h2
                            variants={animateGradualSpacing}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false }}
                            className='text-sm tracking-[0.2em] text-blue-500 uppercase font-bold mb-4'
                        >
                            About Propagar
                        </motion.h2>
                        <motion.h3
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.2}
                            viewport={{ once: false }}
                            className='text-3xl md:text-5xl font-bold text-white mb-6 leading-tight'
                        >
                            {"An institution built for credibility, not publicity."}
                        </motion.h3>
                        <motion.p
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.4}
                            viewport={{ once: false }}
                            className={`${playFont.className} text-xl text-gray-300 leading-relaxed mb-6`}
                        >
                            {"Propagar Media was created to solve a modern problem:"}
                            <br />
                            <span className='font-bold text-white'>{"Visibility is easy. Credibility is not."}</span>
                        </motion.p>
                        <motion.p
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.6}
                            viewport={{ once: true }}
                            className='text-gray-400 mb-6'
                        >
                            {"In an era of shortcuts, paid placements, and manufactured influence, Propagar exists to design defensible public authority."}
                        </motion.p>
                    </div>

                    <motion.div
                        variants={animateFromRight}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        className='lg:w-1/2 p-8 rounded-2xl bg-white/5 border border-white/10'
                    >
                        <h4 className='text-xl font-bold text-white mb-6'>
                            {"Our work sits at the intersection of:"}
                        </h4>

                        <ul className='space-y-4'>
                            {[
                                "Journalism",
                                "Strategic communications",
                                "Media relations",
                                "Reputation governance",
                                "Data-informed narrative strategy"
                            ].map((item, idx) => (
                                <li key={idx} className='flex items-center gap-3'>
                                    <div className='text-blue-500'>
                                        <ImCheckmark />
                                    </div>
                                    <span className='text-gray-200 font-medium'>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className='mt-8 pt-6 border-t border-white/10'>
                            <p className='text-sm text-gray-400 italic'>
                                {"We operate deliberately and within strict ethical boundaries because credibility cannot be rushed, bought, or gamed."}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </PageMarginContainer>
        </div>
    )
}
