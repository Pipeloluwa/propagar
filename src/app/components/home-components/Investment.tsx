import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import { playFont } from '@/app/fonts/fontsConfig'
import Link from 'next/link'
import React from 'react'

export const Investment = () => {
    return (
        <div className='lg:py-[8rem] py-[4rem] bg-black flex relative'>

            <div className='absolute left-0 right-0 top-0 bottom-0 h-full flex items-center'>
                <div className='w-full h-full bg-gradient-to-b from-transparent via-[#273180] to-[#0f1333] mx-auto' />
                {/* <img src="/images/pictures/bg-welcome4gold.png" alt="Welcome Background " className='w-full h-full flex object-cover' /> */}
            </div>


            <div className='z-20  w-full flex flex-col'>
                <PageMarginContainer>


                    <div className='w-full flex flex-col gap-y-3 items-center justify-center'>
                        <h3 className='blue-red-grad bg-clip-text text-center text-transparent md:text-5xl text-3xl font-bold'>
                                {"Investment Opportunity"}
                        </h3>

                        <p >
                            {"These are the tools we use to deliver the best results for our clients."}
                        </p>
                    </div>



            <div className='animated-background w-[800px] min-h-[400px] mx-auto flex rounded-3xl p-[4px] overflow-hidden shadow-xl shadow-blue-500'>

                <div className='w-full min-h-[400px] px-12 py-8 flex flex-col gap-x-4 gap-y-20 items-center justify-center rounded-3xl overflow-hidden bg-gradient-to-t from-black to-[#273180]'>

                        <div className='w-full flex justify-between'>

                            <div className='flex flex-col gap-y-4'>
                                <h6 className='text-2xl font-bold'>
                                    {"Projected ROI"}
                                </h6>

                                <p className='text-sm text-gray-300'>
                                    {"30–50% in 3–5 years"}
                                </p>

                            </div>


                            <div className='flex flex-col gap-y-4'>
                                <h6 className='text-2xl font-bold'>
                                    {"Exit Options"}
                                </h6>

                                <p className='text-sm text-gray-300'>
                                    {"Buyback, Acquisition, or Strategic Merger"}
                                </p>

                            </div>

                        </div>


                        <div className='w-full flex justify-center items-center gap-x-8'>

                            <Link href={"/project100"} className={`big-button text-[16px] w-[250px] h-[60px] flex justify-center items-center rounded-xl font-bold blue-red-grad`}>
                                {"Download Investment Deck"}
                            </Link>


                            <Link href={"/project100"} className={`big-button text-[16px] w-[150px] h-[60px] flex justify-center items-center rounded-xl font-bold blue-red-grad`}>
                                {"Talk to Us"}
                            </Link>

                        </div>

                    </div>

            </div>
                    
                </PageMarginContainer>
            </div>

        </div>
    )
}
