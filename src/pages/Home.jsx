import HomeHero from "@/components/PageComponents/Home/HomeHero";
import HomeWhoWeAre from "@/components/PageComponents/Home/HomeWhoWeAre";
import StepIntoPrime from "@/components/PageComponents/Home/StepIntoPrime";
import HomeOurSpecialties from "@/components/PageComponents/Home/HomeOurSpecialties";
import HomeKnowYourNumbers from "@/components/PageComponents/Home/HomeKnowYourNumbers";
import HomeSignatureProcess from "@/components/PageComponents/Home/HomeSignatureProcess";
import HomeFounder from "@/components/PageComponents/Home/HomeFounder";
import HomeFAQ from "@/components/PageComponents/Home/HomeFAQ";
import HomeTestimonials from "@/components/PageComponents/Home/HomeTestimonials";

function Home() {
  return (
    <>
      <HomeHero />
      <HomeWhoWeAre />
      <HomeOurSpecialties />
      <HomeSignatureProcess />
      <HomeKnowYourNumbers />
      {/* <HomeFounder /> */}
      <HomeTestimonials />
      <HomeFAQ />
      <StepIntoPrime />
    </>
  );
}

export default Home;
