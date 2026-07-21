
import HeroSection from "./components/HeroSection";
import HeroSectionPet from "./components/HeroSectionPet";
import HomeFAQ from "./components/HomeFaq";
import WhyChooseUs from "./components/whyChoose";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <HeroSectionPet />
      <WhyChooseUs />
      <HomeFAQ />
    </div>
  );
}
