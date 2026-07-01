import clinicReception from "@/assets/clinic-reception.jpg";
import clinicRoom from "@/assets/clinic-room.jpg";
import clinicWaiting from "@/assets/clinic-waiting.jpg";

const spaces = [
  {
    label: "Recepção",
    description:
      "Um espaço acolhedor para receber você com conforto desde o primeiro contato.",
    image: clinicReception,
  },
  {
    label: "Sala de atendimento",
    description:
      "Consultório equipado com tecnologia moderna e ambiente clínico higienizado.",
    image: clinicRoom,
  },
  {
    label: "Área de espera",
    description:
      "Ambiente tranquilo e confortável para o seu bem-estar antes da consulta.",
    image: clinicWaiting,
  },
];

const Team = () => {
  return (
    <section id="estrutura" className="section-padding bg-background" aria-labelledby="structure-heading">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-light text-primary">
            Nossa Estrutura
          </span>
          <h2 id="structure-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Um ambiente pensado para o seu conforto
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça os espaços da Green Smile: limpos, modernos e planejados para
            oferecer a melhor experiência a cada visita.
          </p>
        </div>

        {/* Structure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <article
              key={space.label}
              className="group bg-card rounded-2xl overflow-hidden card-elevated animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={space.image}
                  alt={`${space.label} da Green Smile Odontologia`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                    {space.label}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{space.label}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {space.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
