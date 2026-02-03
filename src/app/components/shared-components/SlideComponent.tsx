import { pacificoFont } from '@/app/fonts/fontsConfig';
import { motion } from "motion/react"
import Marquee from 'react-fast-marquee';
import { animateBlurIn } from '@/app/animation/animationVariants';

export const SlideComponent = () => {
    const slideItems = [
        "OpenAI", "Canva AI", "Zapier", "Notion AI"
    ];

    const slideIcons = [
        "/images/icons/our-tools/FRAME (4).png", "/images/icons/our-tools/FRAME (5).png",
        "/images/icons/our-tools/FRAME (6).png", "/images/icons/our-tools/FRAME (7).png"
    ]


    return (
        <Marquee
            className='h-full w-full'>
            {
                slideItems.map((item, index) => {
                    return (
                        <div className='min-w-[220px] flex justify-center items-center gap-x-6'>
                            <img src={slideIcons[index]} alt='AI tools icon' className='w-[35px] object-contain' />

                            <motion.p
                                viewport={{ once: true }}
                                key={`inspirationalKey${index}`}
                                variants={animateBlurIn}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                className={`${pacificoFont.className} text-center text-lg tracking-wider`}>

                                {item}
                            </motion.p>
                        </div>
                    )
                })
            }
        </Marquee>
    )
}
