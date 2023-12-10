import RootLayout from "../app/layout";
import HeroSection from "../components/HeroSection";
import AboutUsSection from "../components/AboutUsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamsSection from "@/components/TeamsSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Header = () => {
  return (
    <RootLayout>
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <TeamsSection />
      <Footer />
    </RootLayout>
  );
};

export default Header;
