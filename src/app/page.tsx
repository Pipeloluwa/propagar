'use client';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavValue } from "./state_management/reducers/client-reducers/navValue";

// Components
import { WelcomeComponent } from "./components/home-components/WelcomeComponent";
import { TrustFramingComponent } from "./components/home-components/TrustFramingComponent";
import { WhatWeDoComponent } from "./components/home-components/WhatWeDoComponent";
import { WhyChooseComponent } from "./components/home-components/WhyChooseComponent";
import { WhoWeWorkWithComponent } from "./components/home-components/WhoWeWorkWithComponent";
import { AboutComponent } from "./components/home-components/AboutComponent";
import { DiscretionComponent } from "./components/home-components/DiscretionComponent";
import { OurTools } from "./components/home-components/OurTools";
import { ServicesComponent } from "./components/home-components/ServicesComponent";
import { HowWeWorkComponent } from "./components/home-components/HowWeWorkComponent";
import { TrustComponent } from "./components/home-components/TrustComponent";
import { FaqComponent } from "./components/home-components/FaqComponent";
import { FooterSectionComponent } from "./components/home-components/FooterSectionComponent";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavValue({ action: "Home" }));
  }, []);


  return (
    <>
      <WelcomeComponent />
      <TrustFramingComponent />
      <WhatWeDoComponent />
      <WhyChooseComponent />
      <WhoWeWorkWithComponent />
      <AboutComponent />
      <DiscretionComponent />
      <OurTools />
      <ServicesComponent />
      <HowWeWorkComponent />
      <TrustComponent />
      <FaqComponent />
      <FooterSectionComponent />
    </>
  );
}
