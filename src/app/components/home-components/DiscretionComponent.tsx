import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { playFont } from '@/app/fonts/fontsConfig'
import React from 'react'
import { motion } from 'motion/react'
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'

export const DiscretionComponent = () => {
    return (
        <div className='py-[6rem] bg-[#050C35] text-white relative'>
            <PageMarginContainer>
                <div className='flex flex-col items-center justify-center text-center max-w-4xl mx-auto'>

                    <motion.h2
                        variants={animateGradualSpacing}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false }}
                        className='text-sm tracking-[0.2em] text-gray-400 uppercase font-bold mb-6'
                    >
                        ON DISCRETION
                    </motion.h2>

                    <motion.p
                        variants={animateFadeUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={0.2}
                        viewport={{ once: false }}
                        className={`${playFont.className} text-2xl md:text-3xl leading-relaxed mb-10`}
                    >
                        {"Much of our experience operates behind NDAs and editorial limitations."}
                    </motion.p>

                    <div className='grid md:grid-cols-3 gap-6 w-full text-left'>
                        {[
                            "Executive communications",
                            "Political and policy-facing work",
                            "Crisis-era media response",
                            "International broadcast engagements"
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={animateFadeUp}
                                initial="offscreen"
                                whileInView="onscreen"
                                custom={0.3 + (idx * 0.1)}
                                viewport={{ once: false }}
                                className={`bg-black/30 p-6 rounded-xl border border-white/5 ${idx === 3 ? 'md:col-start-2' : ''}`}
                            >
                                <p className='font-semibold text-gray-200'>{item}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        variants={animateFadeUp}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={0.8}
                        viewport={{ once: false }}
                        className='mt-12 p-6 bg-gradient-to-r from-transparent via-white/5 to-transparent w-full'
                    >
                        <p className='text-2xl font-bold'>
                            {"Our discretion is not a lack of experience. It is evidence of it."}
                        </p>
                    </motion.div>

                </div>
            </PageMarginContainer>
        </div>
    )
}
