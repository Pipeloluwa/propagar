"use client";

import emailjs from "@emailjs/browser";
import { animateFadeUp } from "@/app/animation/animationVariants";
import { PageMarginContainer } from "@/app/Containers/PageMarginContainer";
import { motion } from "motion/react";
import Link from "next/link";
import { RefObject, useRef, useState } from "react";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { ResponseComponent } from "./ResponseComponent";



export const FooterComponent = () => {


    const form: RefObject<HTMLFormElement | null> = useRef(null);
    const [formProcessing, setFormProcessing] = useState<boolean>(false);
    const [mailDialog, setMailDialog] = useState("");

    const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

    const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current && EMAIL_SERVICE_ID !== undefined && EMAIL_TEMPLATE_ID !== undefined && EMAIL_PUBLIC_KEY !== undefined) {
            setFormProcessing(true);
            await emailjs
                .sendForm(EMAIL_SERVICE_ID!, EMAIL_TEMPLATE_ID!, form.current, {
                    publicKey: EMAIL_PUBLIC_KEY,
                })
                .then(
                    () => {
                        setMailDialog("Successful");
                    },
                    () => {
                        setMailDialog("Sorry, could not send information, something went wrong");
                    },
                ).catch(() => {
                    setMailDialog("Sorry, could not send information, something went wrong");
                });

            setFormProcessing(false);
        }

    }




    return (
        <footer className='lg:pt-[8rem] pt-[4rem] w-full relative flex flex-col justify-between bg-gradient-to-b from-black via-[#101c74] to-[#000105]'>

            <div className='absolute left-0 right-0 top-0 h-full opacity-10'>
                <img src="/images/pictures/bg-shine.webp" alt="Welcome Background " className='w-full h-full flex object-cover' />
            </div>



            <div className='z-20  w-full flex flex-col justify-between'>
                <PageMarginContainer>
                    <div className='w-full flex flex-col gap-y-3 items-center justify-center'>

                        <div className='mb-4 w-full flex flex-col gap-y-3 items-center justify-center'>
                            <h3 className='py-2 xl:w-[65%] lg:w-[75%] blue-red-grad bg-clip-text text-center text-transparent md:text-5xl text-3xl font-bold'>
                                {"Let's Build the Future of Communications Together"}
                            </h3>
                        </div>




                        <div className="w-full flex sm:flex-row flex-col gap-y-3 gap-x-16 justify-center text-gray  text-sm">

                            <div className="flex items-center gap-x-2">
                                <IoMdMail className="size-[30px]" />

                                <Link href={"mailto:hello@propagarmedia.com"} >
                                    {"hello@propagarmedia.com"}
                                </Link>

                            </div>


                            <div className="flex items-center gap-x-2">
                                <FaPhoneAlt className="size-[22px]" />

                                <h6 >
                                    {"+234 8036109371"}
                                </h6>

                            </div>

                        </div>




                        <ul className="w-full flex sm:flex-row flex-col gap-y-3 gap-x-16 justify-center  text-gray">

                            <li className='flex gap-x-2 items-center'>
                                <FaFacebook className="size-[30px]" />

                                <Link href='' target="_blank" rel="noopener noreferrer">
                                    {"Propagar Media"}
                                </Link>

                            </li>

                            <li className='flex gap-x-2 items-center'>
                                <RiInstagramFill className="size-[30px]" />

                                <Link href='' target="_blank" rel="noopener noreferrer">
                                    {"propagar.media"}
                                </Link>

                            </li>

                        </ul>






                        <motion.form
                            ref={form}
                            onSubmit={submitMessage}
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0.25}

                            className="xl:w-[65%] lg:w-[75%] w-full mt-8 flex flex-col justify-between gap-y-4 lg:p-12 p-6  rounded-[2.5rem]">

                            <input name='message_type' defaultValue={"Tour"} className='hidden' />

                            <motion.div
                                viewport={{ once: true }}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}
                            >
                                <input
                                    placeholder="Name" required type="text"
                                    name="from_name"
                                    className='w-full bg-transparent lg:px-4 h-[50px] outline-none border-b'
                                />
                            </motion.div>


                            <motion.div
                                viewport={{ once: true }}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.1}
                            >
                                <input
                                    placeholder="Email" required type="email"
                                    name="from_email"
                                    className='w-full bg-transparent lg:px-4 h-[50px] outline-none border-b'
                                />
                            </motion.div>


                            <motion.div
                                viewport={{ once: true }}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.2}
                            >
                                <input
                                    placeholder="Phone Number" required type="tel"
                                    name="from_phone"
                                    // pattern="\+[0-9]{1,3}[0-9]{10}"
                                    className='w-full bg-transparent lg:px-4 h-[50px] outline-none border-b'
                                />
                            </motion.div>


                            <motion.div
                                viewport={{ once: true }}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.3}
                            >
                                <textarea
                                    placeholder="Any Important Information?"
                                    name="message"
                                    className='w-full bg-white/10 lg:px-4 h-[100px] outline-none'
                                />
                            </motion.div>


                            <motion.div
                                viewport={{ once: true }}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.4}
                            >
                                <button
                                    type='submit'
                                    disabled={formProcessing}
                                    className={`${formProcessing ? "pointer-events-none" : "cursor-pointer"} tracking-widest text-[15px] bg-gray-900 big-button sm:hover:bg-[#f0f0f0]
                                text-white blue-red-grad`}
                                >

                                    <span className='capitalize'>
                                        {formProcessing ? "Sending..." : "Send"}
                                    </span>
                                </button>
                            </motion.div>



                            <ResponseComponent mailDialog={mailDialog} setMailDialog={setMailDialog} />


                        </motion.form>



                    </div>
                </PageMarginContainer>

                <div className="mt-[70px] py-[30px] px-6 md:px-[100px] w-full flex flex-col md:flex-row gap-y-4 items-center justify-between border-t border-gray-500">

                    <h6 className="text-white text-xl text-center md:text-left">
                        {"Propagar Media"}
                    </h6>


                    <h6 className="text-gray-400 text-sm text-center md:text-right">
                        {"© 2024 Propagar Media. All rights reserved."}
                    </h6>

                </div>
            </div>

        </footer>
    )
}
