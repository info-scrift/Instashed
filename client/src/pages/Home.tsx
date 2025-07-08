import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesPreview from "@/components/FeaturesPreview";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import BlogSection from "@/components/BlogSection";
import ClientTestimonials from "@/components/ClientTestimonials";
import HomePageFAQ from "@/components/HomePageFAQ";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturesPreview />
      <HowItWorks />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <BlogSection />
      <ClientTestimonials />
      <HomePageFAQ />
      <ContactFormSection />
      <Footer />
    </div>
  );
}
