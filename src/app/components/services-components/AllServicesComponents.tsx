import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import React from 'react'
import { ImCheckmark } from 'react-icons/im'
import { motion } from 'motion/react'
import { animateFadeUp, animateFromLeft, animateFromRight } from '@/app/animation/animationVariants'

export const AllServicesComponent = () => {
    const serviceInfo = {
        // Core Services (from Homepage)
        "Media Authority & TV Placements": {
            "description": ["Guaranteed placement on Tier-1 international broadcasters", "Media training for high-stakes interviews", "controlled narrative environment"],
            "image": "/images/pictures/bg-touch.webp"
        },
        "Crisis Management & War Rooms": {
            "description": ["Rapid response units for reputational threats", "24/7 narrative monitoring and counter-messaging", "Stakeholder containment strategies"],
            "image": "/images/pictures/ai-service.webp"
        },
        "Reputation Architecture": {
            "description": ["Wikipedia page creation and protection", "Google Knowledge Graph optimization", "Digital footprint scrubbing and reconstruction"],
            "image": "/images/pictures/sbg.webp"
        },

        // AI & Extended Services
        "AI-Powered Public Relations": { "description": ["Automated press release creation and distribution", "Predictive media outreach and crisis monitoring", "Real-time sentiment analysis with AI"], "image": "/images/pictures/ai-power.webp" },
        "AI-Led Marketing Campaigns": { "description": ["Hyper-targeted multi-channel campaigns", "AI-powered copy, video, and creative generation", "Advanced campaign analytics and ROI tracking"], "image": "/images/pictures/bg-welcome2.webp" },
        "Corporate Communications": { "description": ["AI-assisted stakeholder messaging strategies", "Internal comms automation (emails, reports, etc.)", "Reputation management and leadership positioning using AI sentiment insights"], "image": "/images/pictures/comm.webp" },
        "AI-Enhanced Event Management": { "description": ["Fully automated event workflows", "Real-time engagement feedback and analytics", "Virtual and hybrid events powered by intelligent tech"], "image": "/images/pictures/ai-enhanced.webp" },
        "Propagar Originals": { "description": ["AI-informed branded films, documentaries & corporate videos", "Social campaigns tailored using audience data", "Impact storytelling that moves hearts—and numbers"], "image": "/images/pictures/originals.webp" }
    };

    let itemIndex: number = -1;

    return (
        <div className='lg:py-[8rem] py-[4rem] min-h-svh flex justify-center items-center relative bg-gradient-to-b from-black via-[#0B0B15] to-black overflow-hidden'>

            {/* Ambient Background Elements */}
            <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
                <div className='absolute top-[10%] right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]' />
                <div className='absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]' />
            </div>

            <PageMarginContainer>


                <div className='flex flex-col gap-y-24'>
                    {

                        Object.entries(serviceInfo).map(([key, value]) => {
                            itemIndex++;

                            return <div key={"serviceInfo" + key} className={`group ${itemIndex % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col flex gap-8 lg:gap-24 justify-center items-center`}>

                                {/* Image Section */}
                                <motion.div
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: false, amount: 0.3 }}
                                    variants={itemIndex % 2 !== 0 ? animateFromRight : animateFromLeft}
                                    className={`w-full lg:w-1/2 flex ${itemIndex % 2 !== 0 ? "lg:justify-end" : "lg:justify-start"} justify-center`}
                                >
                                    <div className='relative w-full max-w-[500px] h-[350px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 group-hover:border-blue-500/30 transition-all duration-500'>
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10' />
                                        <img src={value.image} alt={key} className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700' />

                                        {/* Overlay Title for Mobile/Visual pop */}
                                        {/* <div className='absolute bottom-6 left-6 z-20 md:hidden'>
                                        <h3 className='text-2xl font-bold text-white'>{key}</h3>
                                     </div> */}
                                    </div>
                                </motion.div>

                                {/* Text Section */}
                                <motion.div
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: false, amount: 0.3 }}
                                    variants={animateFadeUp}
                                    className='w-full lg:w-1/2 flex flex-col gap-y-6'
                                >
                                    <h3 className='text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors'>
                                        {key}
                                    </h3>

                                    <div className='h-1 w-20 bg-gradient-to-r from-blue-600 to-red-600 rounded-full' />

                                    <ul className='flex flex-col gap-y-4'>
                                        {
                                            value.description.map((descriptionItem, descriptionIndex) =>
                                                <li key={"servicesDescription" + descriptionIndex} className='flex gap-x-4 items-start text-gray-300'>
                                                    <div className='mt-1 text-blue-500 bg-blue-500/10 p-1 rounded-full text-xs'>
                                                        <ImCheckmark />
                                                    </div>
                                                    <span className='text-lg'>{descriptionItem}</span>
                                                </li>
                                            )
                                        }
                                    </ul>

                                </motion.div>

                            </div>
                        })
                    }
                </div>


            </PageMarginContainer>
        </div>
    )
}
