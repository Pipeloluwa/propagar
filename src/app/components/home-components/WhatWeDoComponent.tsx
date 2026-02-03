import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { playFont } from '@/app/fonts/fontsConfig'
import React from 'react'
import { ImCheckmark } from 'react-icons/im'
import { motion } from 'motion/react'
import { animateFadeUp, animateFromLeft, animateFromRight } from '@/app/animation/animationVariants'

export const WhatWeDoComponent = () => {
    const services = [
        "Secure independent, credible media coverage",
        "Access local and international television platforms",
        "Prepare for high-stakes public visibility",
        "Build durable authority across news, digital, and public records",
        "Amplify narratives responsibly through digital channels"
    ]

    return (
        <div className='lg:py-[8rem] py-[4rem] bg-gradient-to-b from-black to-[#0E0E12] relative'>
            <PageMarginContainer>
                <div className='flex flex-col lg:flex-row gap-16 items-start justify-between'>

                    {/* Left Side: Headline */}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={animateFromLeft}
                        custom={0}
                        className='lg:w-1/2 flex flex-col gap-y-6'
                    >
                        <h2 className='blue-red-grad bg-clip-text text-transparent md:text-6xl text-4xl font-bold'>
                            {"What We Do"}
                        </h2>
                        <h3 className='text-3xl font-bold text-white leading-tight'>
                            {"Most agencies chase attention."}
                            <br />
                            <span className='text-gray-400'>{"We design legitimacy."}</span>
                        </h3>
                        <div className='mt-8 p-6 border-l-4 border-blue-600 bg-white/5 backdrop-blur-sm rounded-r-xl'>
                            <p className={`${playFont.className} text-xl italic text-gray-200`}>
                                {"“We do not sell hype. We build authority.”"}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: List */}
                    <div className='lg:w-1/2 flex flex-col gap-y-6 pl-4'>
                        <motion.p
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false }}
                            variants={animateFadeUp}
                            custom={0.2}
                            className='text-xl text-gray-300 mb-4'
                        >
                            {"Propagar helps clients:"}
                        </motion.p>
                        <ul className='flex flex-col gap-y-6'>
                            {services.map((service, index) => (
                                <motion.li
                                    key={index}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: false, amount: 0.5 }}
                                    variants={animateFadeUp}
                                    custom={0.1 * index}
                                    className='flex items-start gap-x-4 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors duration-300'
                                >
                                    <div className='mt-1 text-blue-500 bg-blue-500/10 p-2 rounded-full'>
                                        <ImCheckmark size={18} />
                                    </div>
                                    <span className={`${playFont.className} text-lg text-gray-200`}>
                                        {service}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                    </div>

                </div>
            </PageMarginContainer>
        </div>
    )
}
