import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { motion } from 'motion/react'
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'


export const FaqComponent = () => {

    const faqs = [
        {
            q: "What does Propagar do?",
            a: "We help individuals and institutions manage public visibility under real scrutiny — across media, television, and digital platforms."
        },
        {
            q: "Are you a PR agency or a media booking service?",
            a: "We are a strategic communications firm. We design credibility, not publicity."
        },
        {
            q: "Can you guarantee media coverage or TV appearances?",
            a: "No. Credible media coverage is earned, not guaranteed. We guarantee responsible strategy and execution."
        },
        {
            q: "Which media platforms do you work with?",
            a: "Local and international newspapers, television, and digital media — determined by editorial fit and readiness."
        },
        {
            q: "Do you help with television interview preparation?",
            a: "Yes. Television is unforgiving. We prepare clients to be clear, composed, and credible under pressure."
        },
        {
            q: "Do you create or guarantee Wikipedia pages?",
            a: "No. We help build verifiable public footprints that make Wikipedia sustainable — not forced."
        },
        {
            q: "How do you use AI?",
            a: "We use AI internally to support strategy and narrative development. We do not automate credibility."
        },
        {
            q: "Why don’t you show client names or testimonials?",
            a: "Much of our work operates under NDAs, editorial limits, and institutional confidentiality. Discretion is standard at this level."
        },
        {
            q: "Who do you work with?",
            a: "Founders, executives, industry leaders, diaspora professionals, and institutions where visibility carries consequences."
        },
        {
            q: "How do engagements begin?",
            a: "Every engagement starts with a strategy session to assess fit, risk, and readiness."
        }
    ]

    return (
        <div className='py-[6rem] bg-[#0E0E12] relative overflow-hidden'>
            <div className='absolute left-0 right-0 top-0 bottom-0 h-full flex items-center justify-center pointer-events-none'>
                <div className='bg-red-500/10 blur-[100px] w-[500px] h-[500px] rounded-full absolute bottom-0 right-0' />
                <div className='bg-blue-500/10 blur-[100px] w-[500px] h-[500px] rounded-full absolute top-0 left-0' />
            </div>
            <PageMarginContainer>
                <motion.h2
                    variants={animateGradualSpacing}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: false }}
                    className='text-3xl md:text-5xl font-bold text-center text-white mb-16'
                >
                    {"FREQUENTLY ASKED QUESTIONS"}
                </motion.h2>

                <div className='grid gap-6 max-w-4xl mx-auto'>
                    {faqs.map((faq, idx) => (
                        <motion.div
                            key={idx}
                            variants={animateFadeUp}
                            initial="offscreen"
                            whileInView="onscreen"
                            custom={0.1 * idx}
                            viewport={{ once: false, amount: 0.1 }}
                            className='bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/20 transition-all group'
                        >
                            <details className='w-full'>
                                <summary className='flex justify-between items-center p-6 cursor-pointer font-bold text-white list-none'>
                                    {faq.q}
                                    <IoIosArrowDown className='text-blue-500 transition-transform group-open:rotate-180' />
                                </summary>
                                <div className='px-6 pb-6 text-gray-400'>
                                    {faq.a}
                                </div>
                            </details>
                        </motion.div>
                    ))}
                </div>


                <div className='mt-20 text-center'>
                    <p className='text-2xl font-bold text-white mb-6'>
                        {"Visibility is easy. Credibility is not."}
                    </p>
                    <Link href={"/contact"} className={`small-button blue-red-grad text-[16px] min-w-[300px] px-6 py-5 h-auto min-h-[60px] text-center leading-tight flex justify-center items-center rounded-xl text-white font-bold cursor-pointer mx-auto`}>
                        {"Request a Strategy Session →"}
                    </Link>
                </div>

            </PageMarginContainer>
        </div>
    )
}
