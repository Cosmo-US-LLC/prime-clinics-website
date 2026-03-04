import React from "react";
import AboutHero from "@/components/PageComponents/AboutUs/AboutHero";
import WhoWeAre from "@/components/PageComponents/AboutUs/WhoWeAre";
import OurPurposeYourPrime from "@/components/PageComponents/AboutUs/OurPurposeYourPrime";
import OurCommitment from "@/components/PageComponents/AboutUs/OurCommitment";
import OurPhilosophy from "@/components/PageComponents/AboutUs/OurPhilosophy";
import ReadyToOptimize from "@/components/PageComponents/AboutUs/ReadyToOptimize";
import StepIntoPrime from "@/components/PageComponents/Home/StepIntoPrime";

function AboutUs() {
    return (
        <>
            <AboutHero/> 
            <WhoWeAre/>
            <OurPurposeYourPrime/>
            <OurPhilosophy/>
            <OurCommitment/>
            <ReadyToOptimize/> 
            <StepIntoPrime />
        </>
    );

}

export default AboutUs;