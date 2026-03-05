import React from "react";
import AboutHero from "@/components/PageComponents/AboutUs/AboutHero";
import WhoWeAre from "@/components/PageComponents/AboutUs/WhoWeAre";
import OurPurposeYourPrime from "@/components/PageComponents/AboutUs/OurPurposeYourPrime";
import OurCommitment from "@/components/PageComponents/AboutUs/OurCommitment";
import OurPhilosophy from "@/components/PageComponents/AboutUs/OurPhilosophy";
import ReadyToOptimize from "@/components/PageComponents/AboutUs/ReadyToOptimize";
import StepIntoPrime from "@/components/PageComponents/Home/StepIntoPrime";
import usePageMeta from "@/hooks/usePageMeta";

function AboutUs() {
  usePageMeta(
    "Who We Are: Redefining Performance Standards | Prime Clinics",
    "Meet the experts bridging clinical medicine and peak potential. Discover our commitment to internal engineering and results at Prime Clinics."
  );

  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <OurPurposeYourPrime />
      <OurPhilosophy />
      <OurCommitment />
      <ReadyToOptimize />
      <StepIntoPrime />
    </>
  );
}

export default AboutUs;