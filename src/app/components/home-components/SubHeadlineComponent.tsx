import { PageMarginContainer } from '@/app/Containers/PageMarginContainer'
import Link from 'next/link'
import React from 'react'

export const SubHeadlineComponent = () => {
    return (
        <div className='lg:py-[8rem] py-[4rem] min-h-svh flex bg-gradient-to-b from-black via-[#101c74] to-[#000105]'>

            <PageMarginContainer>

                <h3 className='blue-red-grad py-2 bg-clip-text text-center text-transparent md:text-5xl text-3xl font-bold'>
                    {"Propagar Media"}
                </h3>



                <div className='w-full flex gap-x-24 justify-center items-center'>

                    <div className='w-full h-[400px] flex rounded-3xl overflow-hidden shadow-xl shadow-blue-500'>
                        <img src="/images/pictures/bg-welcome3.webp" alt="Welcome Background " className='w-full h-full flex object-cover' />
                    </div>


                    <div className='w-full flex flex-col gap-y-10 items-center justify-center'>

                        <p className='w-full mx-auto text-xl'>
                            {"Propagar Media is your one-stop shop for AI-driven Public Relations, Marketing, Corporate Communications, and Events. We eliminate fragmentation, reduce cost, and deliver smarter, faster, results-backed campaigns."}

                            <br />
                            <br />
                            {"We combine storytelling, strategy and AI to help brands cut through the noise, spark engagement and deliver measurable impact."}
                        </p>


                        <Link href={"/project100"} className={`big-button blue-red-grad text-[16px] flex justify-center items-center rounded-xl text-white font-bold`}>
                            {"Know more about us"}
                        </Link>

                    </div>


                </div>


            </PageMarginContainer>

        </div>
    )
}
