import { Sparkles, Smile, Shield, Heart, Zap, Eye } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Clareamento Dental",
    description: "Dentes mais brancos e brilhantes com técnicas seguras e resultados duradouros.",
  },
  {
    icon: Smile,
    title: "Ortodontia",
    description: "Aparelhos tradicionais e invisíveis para alinhar seu sorriso com conforto.",
  },
  {
    icon: Shield,
    title: "Implantes Dentários",
    description: "Reposição de dentes perdidos com tecnologia de ponta e alta taxa de sucesso.",
  },
  {
    icon: Heart,
    title: "Odontopediatria",
    description: "Cuidado especial para os pequenos em um ambiente acolhedor e divertido.",
  },
  {
    icon: Zap,
    title: "Lentes de Contato",
    description: "Transforme seu sorriso com facetas ultrafinas de porcelana ou resina.",
  },
  {
    icon: Eye,
    title: "Estética Dental",
    description: "Harmonização orofacial e procedimentos estéticos para realçar sua beleza.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary" aria-labelledby="services-heading">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-light text-primary">
            Nossos Serviços
          </span>
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Cuidado completo para o seu sorriso
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de tratamentos odontológicos com equipamentos 
            modernos e profissionais altamente qualificados.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group bg-card rounded-2xl p-8 card-elevated cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
