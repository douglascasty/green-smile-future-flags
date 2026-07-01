import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const WHATSAPP_LINK = "https://wa.me/5511970604418?text=Olá%2C%20vi%20o%20site%20da%20Green%20Smile%20e%20gostaria%20de%20agendar%20uma%20avaliação.";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground" role="contentinfo">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
              <span className="font-bold text-xl">Green Smile</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Cuidando do seu sorriso com tecnologia, carinho e excelência há mais de 15 anos.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/greensmileodonto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram da Green Smile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/greensmileodonto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook da Green Smile"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp da Green Smile"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#contato" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Clareamento Dental
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Ortodontia
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Implantes Dentários
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Odontopediatria
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  Estética Dental
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-primary-foreground/70">
                  Av. Eng. Armando de Arruda Pereira, 2357<br />
                  Jabaquara, São Paulo - SP<br />
                  CEP 04309-011
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <a href="tel:+5511970604418" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  (11) 97060-4418
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <a href="mailto:contato@greensmile.com.br" className="text-primary-foreground/70 hover:text-primary transition-colors">
                  contato@greensmile.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Green Smile Odontologia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacidade" className="text-primary-foreground/60 hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos" className="text-primary-foreground/60 hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
