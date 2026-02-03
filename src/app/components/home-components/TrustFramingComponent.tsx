import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { playFont } from '@/app/fonts/fontsConfig'
import React from 'react'
import { motion } from 'motion/react'
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'

export const TrustFramingComponent = () => {
    return (
        <div className='py-[6rem] bg-black text-white relative overflow-hidden'>
            <div className='absolute left-0 right-0 top-0 bottom-0 h-full flex items-center justify-center opacity-20'>
                <div className='bg-blue-shadow transform scale-150 rounded-full blur-3xl' />
            </div>

            <PageMarginContainer>
                <div className='relative z-10 flex flex-col items-center text-center gap-y-6 max-w-4xl mx-auto'>
                    <motion.h2
                        variants={animateGradualSpacing}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false, amount: 0.5 }}
                        className='text-sm tracking-[0.2em] text-gray uppercase font-bold mb-2'
                    >
                        Trust Framing
                    </motion.h2>

                    <motion.p
                        variants={animateFadeUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={0}
                        viewport={{ once: false, amount: 0.5 }}
                        className='md:text-4xl text-2xl font-medium leading-relaxed'
                    >
                        {"Propagar works with individuals and institutions whose visibility carries consequences."}
                    </motion.p>

                    <motion.p
                        variants={animateFadeUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={0.2}
                        viewport={{ once: false, amount: 0.5 }}
                        className={`${playFont.className} md:text-xl text-lg text-gray-300 md:w-[80%] mx-auto leading-relaxed`}
                    >
                        {"Much of our work operates under editorial constraints, NDAs, and public-interest sensitivity."}
                        <br />
                        <span className='text-white font-bold block mt-4 text-2xl'>
                            {"Discretion is not a preference, it is a requirement."}
                        </span>
                    </motion.p>
                </div>
            </PageMarginContainer>
        </div>
    )
}
