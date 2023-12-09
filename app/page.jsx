import RootLayout from "../app/layout";
import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamsSection from "@/components/TeamsSection";

const Header = () => {
  return (
    <RootLayout hasHeader={true}>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <TeamsSection />
    </RootLayout>
  );
};

export default Header;
