import { Phone, Menu, X } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/greensmile-logo.jpg.asset.json";

const WHATSAPP_LINK = "https://wa.me/5511970604418?text=Olá%2C%20vi%20o%20site%20da%20Green%20Smile%20e%20gostaria%20de%20agendar%20uma%20avaliação.";
const PHONE_NUMBER = "tel:+5511970604418";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#estrutura", label: "Estrutura" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-custom" aria-label="Navegação principal">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 group" aria-label="Green Smile Clínica Odontológica - Página inicial">
            <img
              src={logo.url}
              alt="Green Smile Clínica Odontológica"
              className="h-10 md:h-12 w-auto"
              width={200}
              height={130}
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href={PHONE_NUMBER} aria-label="Ligar para Green Smile">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">(11) 97060-4418</span>
              </a>
            </Button>
            <Button variant="whatsapp" size="sm" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Contato via WhatsApp">
                <WhatsAppIcon className="w-4 h-4" />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden py-4 border-t border-border animate-fade-in"
          >
            <ul className="flex flex-col gap-4" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-2 text-foreground hover:text-primary font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-border">
              <Button variant="outline" asChild className="w-full">
                <a href={PHONE_NUMBER}>
                  <Phone className="w-4 h-4" />
                  Ligar Agora
                </a>
              </Button>
              <Button variant="whatsapp" asChild className="w-full">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
