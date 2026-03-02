import React from "react";
import MeetHeroSection from "@/components/PageComponents/MeetTheTeam/MeetHeroSection";
import AboutPrimeClinics from "@/components/PageComponents/MeetTheTeam/AboutPrimeClinics";
import JoinThePrime from "@/components/PageComponents/MeetTheTeam/JoinThePrime";
import ExpertiseMatters from "@/components/PageComponents/MeetTheTeam/ExpertiseMatters";
import HomeFAQ from "@/components/PageComponents/Home/HomeFAQ";

function MeetTheTeam() {
  return (
    <>
        <MeetHeroSection/>
        <AboutPrimeClinics/>
        <JoinThePrime/>
        <ExpertiseMatters/>
        <HomeFAQ/>
    </>
  );
}

export default MeetTheTeam;
