import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'

export const FooterSectionComponent = () => {
    return (
        <div className='bg-black pt-[6rem] pb-[4rem] text-white border-t border-white/10'>
            <PageMarginContainer>

                {/* A NOTE ON DISCRETION */}
                <div className='flex flex-col items-center justify-center text-center'>
                    <motion.h6
                        variants={animateGradualSpacing}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false }}
                        className='text-sm font-bold text-gray-500 uppercase tracking-widest mb-6'
                    >
                        {"A NOTE ON DISCRETION"}
                    </motion.h6>
                    <motion.p
                        variants={animateFadeUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={0.2}
                        viewport={{ once: false }}
                        className='text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed'
                    >
                        {"Much of our work cannot be publicly attributed. This is standard in executive, political, and policy-facing communications."}
                    </motion.p>
                    <motion.p
                        variants={animateFadeUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={0.4}
                        viewport={{ once: false }}
                        className='text-2xl md:text-3xl font-bold text-white mb-12'
                    >
                        {"Our discretion is not absence. It is the reason we are trusted."}
                    </motion.p>
                    <motion.div
                        variants={animateFadeUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={0.4}
                        viewport={{ once: false }}
                        className='flex justify-center'
                    >
                        <Link href={"/contact"} className={`small-button blue-red-grad text-[16px] min-w-[300px] px-6  py-5 h-auto min-h-[60px] text-center leading-tight flex justify-center items-center rounded-xl text-white font-bold cursor-pointer`}>
                            {"Request a Strategy Session →"}
                        </Link>
                    </motion.div>




                </div>

            </PageMarginContainer >
        </div >
    )
}
