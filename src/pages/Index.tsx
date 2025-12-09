import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const Index = () => {
  return (
    <>
      <LocalBusinessSchema />
      
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Header />
      
      <main id="main-content">
        <Hero />
        <Services />
        <Team />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <MobileCTA />
    </>
  );
};

export default Index;
