import React from "react";
import MeetHeroSection from "@/components/PageComponents/MeetTheTeam/MeetHeroSection";
import AboutPrimeClinics from "@/components/PageComponents/MeetTheTeam/AboutPrimeClinics";
import JoinThePrime from "@/components/PageComponents/MeetTheTeam/JoinThePrime";
import ExpertiseMatters from "@/components/PageComponents/MeetTheTeam/ExpertiseMatters";
import HomeFAQ from "@/components/PageComponents/Home/HomeFAQ";
import usePageMeta from "@/hooks/usePageMeta";

function MeetTheTeam() {
  usePageMeta(
    "The Prime Standard: Our Clinical Experts | Prime Clinics",
    "Meet the medical doctors and specialists at Prime Clinics dedicated to your health optimization and internal engineering."
  );

  return (
    <>
      <MeetHeroSection />
      <AboutPrimeClinics />
      <JoinThePrime />
      <ExpertiseMatters />
      <HomeFAQ />
    </>
  );
}

export default MeetTheTeam;
