import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá%2C%20vi%20o%20site%20da%20Green%20Smile%20e%20gostaria%20de%20agendar%20uma%20avaliação.";
const PHONE_NUMBER = "tel:+5511999999999";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 md:pt-20 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Consultório moderno da Green Smile Odontologia"
          className="w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/20 text-primary-foreground border border-primary/30 animate-fade-in">
            Clínica Odontológica em Jabaquara
          </span>

          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up"
          >
            Seu sorriso merece o{" "}
            <span className="text-primary">melhor cuidado</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in-up animation-delay-100">
            Na Green Smile, combinamos tecnologia avançada e atendimento humanizado 
            para transformar a saúde do seu sorriso. Agende sua avaliação gratuita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-200">
            <Button variant="cta" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Agendar Avaliação
                <ChevronRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero" size="xl" asChild>
              <a href={PHONE_NUMBER}>
                <Phone className="w-5 h-5" />
                (11) 99999-9999
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in-up animation-delay-300">
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">+</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">15+</p>
                  <p className="text-sm text-primary-foreground/70">Anos de experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">★</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">5.0</p>
                  <p className="text-sm text-primary-foreground/70">Avaliação Google</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">♥</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary-foreground">5000+</p>
                  <p className="text-sm text-primary-foreground/70">Pacientes atendidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
