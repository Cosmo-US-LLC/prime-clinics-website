import HomeFAQ from "@/components/PageComponents/Home/HomeFAQ";
import ReadyToYourVIP from "@/components/PageComponents/VipAccess/ReadyToYourVIP";
import VipDiscretionSection from "@/components/PageComponents/VipAccess/VipDiscretionSection";
import VipHero from "@/components/PageComponents/VipAccess/VipHero";
import VipSignatureProcessSection from "@/components/PageComponents/VipAccess/VipSignatureProcessSection";
import { vipAccessFaqData } from "@/constants/generalFaqData";
import React from "react";
import usePageMeta from "@/hooks/usePageMeta";

function VipAccess() {
  usePageMeta(
    "Private Clinical Access & On-Demand Care | Prime Clinics",
    "Healthcare at your speed. Get bespoke scheduling, discreet clinical access, and a dedicated team for your high-performance lifestyle at Prime Clinics."
  );

  return (
    <>
      <VipHero />
      <VipSignatureProcessSection />
      <VipDiscretionSection />
      <ReadyToYourVIP />
      <HomeFAQ
        heading="VIP Access – Frequently Asked Questions"
        description="Information regarding the Prime Clinics experience."
        items={vipAccessFaqData}
      />
    </>
  );
}

export default VipAccess;
