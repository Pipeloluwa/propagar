import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { playFont } from '@/app/fonts/fontsConfig'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { animateFadeUp, animateFromLeft, animateFromRight } from '@/app/animation/animationVariants'

export const WhoWeWorkWithComponent = () => {

    const list = [
        "Founders and CEOs",
        "Senior executives and industry leaders",
        "Consultants and public-facing professionals",
        "Africans in the diaspora building global authority",
        "Talent visa and international positioning candidates",
        "Institutions and individuals operating under public scrutiny"
    ]

    return (
        <div className='py-[6rem] bg-[#0E0E12]'>
            <PageMarginContainer>
                <div className='flex flex-col md:flex-row gap-12 items-center'>

                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={animateFromLeft}
                        custom={0}
                        className='md:w-1/2'
                    >
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white'>
                            {"WHO WE WORK WITH"}
                        </h2>
                        <div className='w-20 h-1 bg-blue-600 mb-8 rounded-full'></div>
                        <p className={`${playFont.className} text-xl text-gray-300 mb-8`}>
                            {"We work with:"}
                        </p>

                        <div className='grid gap-4'>
                            {list.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: false, amount: 0.1 }}
                                    variants={animateFadeUp}
                                    custom={0.1 * idx}
                                    className='flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:border-blue-500/30 transition-all'
                                >
                                    <div className='h-2 w-2 bg-blue-500 rounded-full'></div>
                                    <span className='text-lg font-medium text-gray-200'>{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={animateFromRight}
                        custom={0.2}
                        className='md:w-1/2 flex flex-col gap-y-8 items-center justify-center text-center p-8 bg-gradient-to-br from-blue-900/20 to-black rounded-3xl border border-blue-900/30'
                    >
                        <h3 className='text-3xl font-bold text-white'>
                            {"If visibility matters to your future,"}
                            <br />
                            <span className='text-blue-500'>{"Propagar is built for you."}</span>
                        </h3>

                        <Link href={"/contact"} className={`small-button blue-red-grad text-[16px] min-w-[300px] px-6 py-5 h-auto min-h-[60px] text-center leading-tight flex justify-center items-center rounded-xl text-white font-bold cursor-pointer mt-4 shadow-lg shadow-blue-900/50 hover:scale-105 transition-transform`}>
                            {"Request a Strategy Session →"}
                        </Link>
                    </motion.div>

                </div>
            </PageMarginContainer>
        </div>
    )
}
