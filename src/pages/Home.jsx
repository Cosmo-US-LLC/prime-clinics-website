import HomeHero from "@/components/PageComponents/Home/HomeHero";
import HomeWhoWeAre from "@/components/PageComponents/Home/HomeWhoWeAre";
import StepIntoPrime from "@/components/PageComponents/Home/StepIntoPrime";
import HomeOurSpecialties from "@/components/PageComponents/Home/HomeOurSpecialties";
import HomeKnowYourNumbers from "@/components/PageComponents/Home/HomeKnowYourNumbers";
import HomeSignatureProcess from "@/components/PageComponents/Home/HomeSignatureProcess";
import HomeFounder from "@/components/PageComponents/Home/HomeFounder";
import HomeFAQ from "@/components/PageComponents/Home/HomeFAQ";
import HomeTestimonials from "@/components/PageComponents/Home/HomeTestimonials";
import { HomeFAQData } from "@/constants/generalFaqData";
import usePageMeta from "@/hooks/usePageMeta";

function Home() {
  usePageMeta(
    "Prime Clinics | Performance Medicine & Optimization",
    'Stop settling for "normal" labs. Prime Clinics bridges the gap between medicine and peak performance with data-driven TRT and advanced diagnostics.'
  );
  return (
    <>
      <HomeHero />
      <HomeWhoWeAre />
      <HomeOurSpecialties />
      <HomeSignatureProcess />
      <HomeKnowYourNumbers />
      {/* <HomeFounder /> */}
      <HomeTestimonials />
      <HomeFAQ
        items={HomeFAQData}
        heading="Frequently Asked Questions"
        description="Everything you need to know about our services, privacy, and how we support your transformation."
      />
      <StepIntoPrime />
    </>
  );
}

export default Home;
