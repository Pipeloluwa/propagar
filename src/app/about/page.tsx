'use client';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavValue } from "../state_management/reducers/client-reducers/navValue";

// Components
import { TrustFramingComponent } from "../components/home-components/TrustFramingComponent";
import { AboutComponent } from "../components/home-components/AboutComponent";
import { WhyChooseComponent } from "../components/home-components/WhyChooseComponent";
import { WhoWeWorkWithComponent } from "../components/home-components/WhoWeWorkWithComponent";
import { DiscretionComponent } from "../components/home-components/DiscretionComponent";
import { TrustComponent } from "../components/home-components/TrustComponent";
import { WelcomeGenericComponent } from "../components/shared-components/WelcomeGenericComponent";

export default function AboutPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setNavValue({ action: "About" }));
    }, []);

    return (
        <div className="bg-black text-white pt-20">
            <WelcomeGenericComponent
                title="About"
                description="Credibility over publicity. We build authority that withstands scrutiny."
                imageSrc="/images/pictures/bg-touch.webp"
            />
            {/* <AboutComponent /> remove checking if redundant or keep as content section */}
            <AboutComponent />
            <TrustFramingComponent />
            <WhyChooseComponent />
            <DiscretionComponent />
            <WhoWeWorkWithComponent />
            <TrustComponent />
        </div>
    );
}
