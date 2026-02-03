'use client';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavValue } from "../state_management/reducers/client-reducers/navValue";
import { PageMarginContainer } from "../Containers/PageMarginContainer";
import { FooterComponent } from "../components/shared-components/FooterComponent"; // Reuse global footer form? Or just Faq.
// Actually allow the PageContainer footer to show, maybe just add FAQ here.

import { FaqComponent } from "../components/home-components/FaqComponent";

import { WelcomeGenericComponent } from "../components/shared-components/WelcomeGenericComponent";

export default function ContactPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavValue({ action: "Contact" }));
    }, []);

    return (
        <div className="bg-black text-white pt-20 min-h-screen">
            <WelcomeGenericComponent
                title="Contact"
                description="Ready to discuss your strategy? We are ready to listen."
                imageSrc="/images/pictures/ai-power.webp"
            />
            {/* <PageMarginContainer>
                <div className="py-20 text-center">
                    <h1 className="text-5xl font-bold mb-6">{"Contact Us"}</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {"Ready to discuss your strategy? We are ready to listen."}
                    </p>
                </div>
            </PageMarginContainer> REMOVED REPLACED BY WELCOME GENERIC */}

            <FaqComponent />
            {/* Global Footer will be appended by layout/PageContainer */}
        </div>
    );
}
