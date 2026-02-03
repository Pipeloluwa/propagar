import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { playFont } from '@/app/fonts/fontsConfig'
import React from 'react'
import { motion } from 'motion/react'
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'

export const TrustComponent = () => {
    return (
        <div className='py-[6rem] bg-black text-white relative overflow-hidden'>
            <div className='absolute left-0 right-0 top-0 bottom-0 h-full flex items-center justify-center pointer-events-none'>
                <div className='bg-blue-shadow opacity-40 mx-auto rounded-full w-[80%] h-[80%]' />
            </div>
            <PageMarginContainer>

                {/* Why Clients Trust Propagar */}
                <div className='mb-24 flex flex-col items-center text-center'>
                    <motion.h2
                        variants={animateGradualSpacing}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: false }}
                        className='text-3xl md:text-5xl font-bold mb-8'
                    >
                        {"WHY CLIENTS TRUST PROPAGAR"}
                    </motion.h2>

                    <ul className='flex flex-wrap justify-center gap-6 md:gap-12 mb-12 text-gray-300 font-medium'>
                        {["We explain the rules", "We set boundaries", "We refuse shortcuts", "We prioritise longevity", "We operate comfortably under scrutiny"].map((item, i) => (
                            <motion.li
                                key={i}
                                variants={animateFadeUp}
                                initial="offscreen"
                                whileInView="onscreen"
                                custom={0.1 * i}
                                viewport={{ once: false }}
                                className='flex items-center gap-2'
                            >
                                <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                                {item}
                            </motion.li>
                        ))}
                    </ul>

                    <div className='max-w-3xl mx-auto'>
                        <motion.p
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.5}
                            viewport={{ once: false }}
                            className={`${playFont.className} text-2xl md:text-3xl italic text-gray-200`}
                        >
                            {"“The loudest agencies sell speed. The best ones sell judgment.”"}
                        </motion.p>
                    </div>
                </div>



                {/* Trusted At The Highest Level */}
                <div className='flex flex-col gap-y-16'>
                    <div className='text-center mb-8'>
                        <motion.h3
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: false }}
                            className='text-2xl md:text-4xl font-bold mb-4'
                        >
                            {"TRUSTED AT THE HIGHEST LEVEL"}
                        </motion.h3>
                        <motion.p
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.2}
                            viewport={{ once: false }}
                            className='text-gray-400 max-w-2xl mx-auto'
                        >
                            {"Propagar is trusted in environments where mistakes are public, records are permanent, and credibility has consequences."}
                        </motion.p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                        {/* Case Study 1 */}
                        <motion.div
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0}
                            viewport={{ once: false }}
                            className='bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors'
                        >
                            <h4 className='text-xl font-bold text-blue-400 mb-2'>{"International Political & Policy Media Response"}</h4>
                            <h5 className='text-lg font-semibold text-white mb-4'>{"Global Broadcast Engagement"}</h5>
                            <p className='text-sm text-gray-400 mb-4'>{"During a period of heightened international scrutiny, Propagar advised on media response for a senior political figure."}</p>

                            <div className='mb-4'>
                                <p className='text-xs font-bold text-gray-500 uppercase mb-2'>{"What was required"}</p>
                                <ul className='text-sm text-gray-300 list-disc list-inside space-y-1'>
                                    <li>{"Precise narrative control under pressure"}</li>
                                    <li>{"Alignment between institutional position and international media framing"}</li>
                                    <li>{"Zero margin for error"}</li>
                                </ul>
                            </div>

                            <div>
                                <p className='text-xs font-bold text-gray-500 uppercase mb-2'>{"What was delivered"}</p>
                                <ul className='text-sm text-gray-300 list-disc list-inside space-y-1'>
                                    <li>{"International television placement on a global broadcaster"}</li>
                                    <li>{"Accurate representation of the institution’s position by Tier-1 international media"}</li>
                                    <li>{"Narrative stability during a volatile public moment"}</li>
                                </ul>
                            </div>
                        </motion.div>


                        {/* Case Study 2 */}
                        <motion.div
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.2}
                            viewport={{ once: false }}
                            className='bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors'
                        >
                            <h4 className='text-xl font-bold text-blue-400 mb-2'>{"National Political Campaign Visibility"}</h4>
                            <h5 className='text-lg font-semibold text-white mb-4'>{"Election-Cycle Communications"}</h5>
                            <p className='text-sm text-gray-400 mb-4'>{"Propagar supported communications for a public office holder during an election cycle."}</p>

                            <div className='mb-4'>
                                <p className='text-xs font-bold text-gray-500 uppercase mb-2'>{"What was required"}</p>
                                <ul className='text-sm text-gray-300 list-disc list-inside space-y-1'>
                                    <li>{"Controlled national exposure"}</li>
                                    <li>{"Media-trained messaging under adversarial questioning"}</li>
                                    <li>{"Consistency across television and print"}</li>
                                </ul>
                            </div>

                            <div>
                                <p className='text-xs font-bold text-gray-500 uppercase mb-2'>{"What was delivered"}</p>
                                <ul className='text-sm text-gray-300 list-disc list-inside space-y-1'>
                                    <li>{"Multiple national TV appearances"}</li>
                                    <li>{"Structured interview readiness to prevent reputational damage"}</li>
                                    <li>{"Coordinated narrative across platforms"}</li>
                                </ul>
                            </div>
                        </motion.div>


                        {/* Case Study 3 */}
                        <motion.div
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.4}
                            viewport={{ once: false }}
                            className='bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors'
                        >
                            <h4 className='text-xl font-bold text-blue-400 mb-2'>{"International Executive Media Exposure"}</h4>
                            <h5 className='text-lg font-semibold text-white mb-4'>{"Global Business Television"}</h5>
                            <p className='text-sm text-gray-400 mb-4'>{"Propagar contributed to campaign strategy supporting executive-level international media appearances."}</p>

                            <div className='mb-4'>
                                <p className='text-xs font-bold text-gray-500 uppercase mb-2'>{"What was required"}</p>
                                <ul className='text-sm text-gray-300 list-disc list-inside space-y-1'>
                                    <li>{"Access without overexposure"}</li>
                                    <li>{"Editorial framing aligned with institutional standards"}</li>
                                    <li>{"Reputation-safe execution"}</li>
                                </ul>
                            </div>

                            <div>
                                <p className='text-xs font-bold text-gray-500 uppercase mb-2'>{"What was delivered"}</p>
                                <ul className='text-sm text-gray-300 list-disc list-inside space-y-1'>
                                    <li>{"International business television interviews"}</li>
                                    <li>{"Credible positioning before a global audience"}</li>
                                    <li>{"Exposure that strengthened authority rather than diluted it"}</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Case Study 4 */}
                        <motion.div
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.6}
                            viewport={{ once: false }}
                            className='bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-colors'
                        >
                            <h4 className='text-xl font-bold text-blue-400 mb-2'>{"Authority & Notability Footprint Building"}</h4>
                            <h5 className='text-lg font-semibold text-white mb-4'>{"Editorial Presence That Endures"}</h5>
                            <p className='text-sm text-gray-400 mb-4'>{"Propagar has supported professionals and institutions seeking long-term public credibility."}</p>

                            <div className='mb-4'>
                                <p className='text-xs font-bold text-gray-500 uppercase mb-2'>{"What was required"}</p>
                                <ul className='text-sm text-gray-300 list-disc list-inside space-y-1'>
                                    <li>{"Independent, verifiable coverage"}</li>
                                    <li>{"Editorial standards aligned with global platforms"}</li>
                                    <li>{"Avoidance of artificial authority signals"}</li>
                                </ul>
                            </div>

                            <div>
                                <p className='text-xs font-bold text-gray-500 uppercase mb-2'>{"What was delivered"}</p>
                                <ul className='text-sm text-gray-300 list-disc list-inside space-y-1'>
                                    <li>{"National newspaper features"}</li>
                                    <li>{"Durable editorial references"}</li>
                                    <li>{"Foundations for sustainable public authority"}</li>
                                </ul>
                            </div>
                        </motion.div>

                    </div>

                    <div className='mt-12 text-center'>
                        <motion.p
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.8}
                            viewport={{ once: false }}
                            className='text-lg font-bold text-white uppercase tracking-widest'
                        >
                            {"This work is designed to last not trend."}
                        </motion.p>
                    </div>

                </div>

            </PageMarginContainer>
        </div>
    )
}
