import { CTA } from "@/components/PageComponents/Home/CTA";
import { FAQ } from "@/components/PageComponents/Home/FAQ";
import { FeatureCard } from "@/components/PageComponents/Home/FeatureCards";
import { Hero } from "@/components/PageComponents/Home/Hero";
import { Process } from "@/components/PageComponents/Home/Process";
import { Testimonials } from "@/components/PageComponents/Home/Testimonials";
import { ImageGallery } from "@/components/PageComponents/Home/ImageGallery";

function Home() {
  return (
    <div>
      <Hero />
      <ImageGallery />
      <FeatureCard />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}

export default Home;
