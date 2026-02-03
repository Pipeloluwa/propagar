'use client';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNavValue } from "../state_management/reducers/client-reducers/navValue";
import { WelcomeGenericComponent } from "../components/shared-components/WelcomeGenericComponent";
import { AllServicesComponent } from "../components/services-components/AllServicesComponents";



export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavValue({ action: "Services" }));
  }, []);


  return (
    <>
      <WelcomeGenericComponent
        title="Services"
        description="Smart solutions powered by AI — from strategy to execution, we elevate your communication and marketing outcomes"
        imageSrc="/images/pictures/bg-welcome3.webp"
      />
      <AllServicesComponent />
    </>
  );
}
