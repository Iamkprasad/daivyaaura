import HeroSection from "@/components/home/HeroSection";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import BestSellers from "@/components/home/BestSellers";
import ConsultationCTA from "@/components/home/ConsultationCTA";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import { Helmet } from "react-helmet-async";

const Index = () => (
  <>
    <Helmet>
      <title>Daivyaura | Divine Energy Astrology & Spiritual Products India</title>
      <meta name="description" content="Shop authentic energized sprays, sacred tilaks & spiritual wellness products. Book astrology & numerology consultations with experienced Vedic astrologers. Free shipping above ₹999." />
      <link rel="canonical" href="https://daivyaaura.lovable.app/" />
    </Helmet>
    <HeroSection />
    <FeaturedCategories />
    <BestSellers />
    <ConsultationCTA />
    <Testimonials />
    <Newsletter />
  </>
);

export default Index;
