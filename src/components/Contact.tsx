import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_LINK = "https://wa.me/5511970604418?text=Olá%2C%20vi%20o%20site%20da%20Green%20Smile%20e%20gostaria%20de%20agendar%20uma%20avaliação.";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve para confirmar seu agendamento.",
    });

    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return value;
  };

  return (
    <section id="contato" className="section-padding bg-background" aria-labelledby="contact-heading">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-light text-primary">
              Contato
            </span>
            <h2 id="contact-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Agende sua avaliação gratuita
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Preencha o formulário ou entre em contato diretamente pelos 
              nossos canais. Estamos prontos para atender você!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Av. Eng. Armando de Arruda Pereira, 2357<br />
                    Jabaquara, São Paulo - SP<br />
                    CEP 04309-011
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefone</h3>
                  <a href="tel:+5511970604418" className="text-muted-foreground hover:text-primary transition-colors">
                    (11) 97060-4418
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-mail</h3>
                  <a href="mailto:contato@greensmile.com.br" className="text-muted-foreground hover:text-primary transition-colors">
                    contato@greensmile.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Horário de Funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 9h - 19h<br />
                    Sábado: 9h - 14h
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="whatsapp" size="lg" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card">
            <h3 className="text-2xl font-semibold mb-6">Solicite seu agendamento</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  maxLength={15}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                  placeholder="(11) 97060-4418"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Serviço de interesse *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="avaliacao">Avaliação Geral</SelectItem>
                    <SelectItem value="clareamento">Clareamento Dental</SelectItem>
                    <SelectItem value="ortodontia">Ortodontia</SelectItem>
                    <SelectItem value="implante">Implante Dentário</SelectItem>
                    <SelectItem value="odontopediatria">Odontopediatria</SelectItem>
                    <SelectItem value="lentes">Lentes de Contato</SelectItem>
                    <SelectItem value="estetica">Estética Dental</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Data preferida</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Observações</Label>
                <Textarea
                  id="message"
                  maxLength={1000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Alguma informação adicional..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Solicitação
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-card h-80">
          <iframe
            title="Localização Green Smile Odontologia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0!2d-46.639955!3d-23.648364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM4JzU0LjEiUyA0NsKwMzgnMjMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
