import React from "react";
import CareersHero from "@/components/PageComponents/Careers/CareersHero";
import CareersOpenPositions from "@/components/PageComponents/Careers/CareersOpenPositions";
import usePageMeta from "@/hooks/usePageMeta";

function Careers() {
  usePageMeta(
    "Join the Team: Careers in Performance Medicine | Prime Clinics",
    "Help us redefine healthcare. Explore open positions for medical professionals and performance coaches at Prime Clinics."
  );

  return (
    <>
      <CareersHero />
      <CareersOpenPositions />
    </>
  );
}

export default Careers;
