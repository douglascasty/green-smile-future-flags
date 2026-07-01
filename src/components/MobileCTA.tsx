import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5511970604418?text=Olá%2C%20vi%20o%20site%20da%20Green%20Smile%20e%20gostaria%20de%20agendar%20uma%20avaliação.";
const PHONE_NUMBER = "tel:+5511970604418";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 animate-fade-in">
      <div className="flex gap-3">
        <Button variant="phone" size="lg" asChild className="flex-1">
          <a href={PHONE_NUMBER} aria-label="Ligar para Green Smile">
            <Phone className="w-5 h-5" />
            Ligar Agora
          </a>
        </Button>
        <Button variant="whatsapp" size="lg" asChild className="flex-1">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Agendar via WhatsApp">
            <WhatsAppIcon className="w-5 h-5" />
            Agendar
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileCTA;
