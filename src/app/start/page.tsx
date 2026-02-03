'use client';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavValue } from "../state_management/reducers/client-reducers/navValue";
import { PageMarginContainer } from "../Containers/PageMarginContainer";
import Link from "next/link";

export default function StartPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavValue({ action: "Start" }));
    }, []);

    return (
        <div className="bg-black text-white pt-20 min-h-screen flex items-center">
            <PageMarginContainer>
                <div className="py-20 flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">
                        {"Start Your Journey"}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                        {"You are ready to command your narrative. Let's begin with a strategy session."}
                    </p>

                    <div className="flex gap-6 flex-wrap justify-center">
                        <Link href={"/contact"} className={`small-button blue-red-grad text-[16px] min-w-[250px] flex justify-center items-center rounded-xl text-white font-bold cursor-pointer`}>
                            {"Book Strategy Session →"}
                        </Link>
                    </div>
                </div>
            </PageMarginContainer>
        </div>
    );
}
