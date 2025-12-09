import dentist1 from "@/assets/dentist-1.jpg";
import dentist2 from "@/assets/dentist-2.jpg";
import dentist3 from "@/assets/dentist-3.jpg";

const team = [
  {
    name: "Dra. Ana Paula Silva",
    role: "Ortodontia e Estética",
    crm: "CRO-SP 12345",
    bio: "Especialista em ortodontia com mais de 15 anos de experiência. Pós-graduada em estética dental pela USP.",
    image: dentist1,
  },
  {
    name: "Dr. Carlos Eduardo Santos",
    role: "Implantodontia",
    crm: "CRO-SP 23456",
    bio: "Referência em implantes dentários com técnicas minimamente invasivas. Membro da ABIO.",
    image: dentist2,
  },
  {
    name: "Dra. Marina Costa",
    role: "Odontopediatria",
    crm: "CRO-SP 34567",
    bio: "Especialista em atendimento infantil com abordagem lúdica e acolhedora para os pequenos.",
    image: dentist3,
  },
];

const Team = () => {
  return (
    <section id="equipe" className="section-padding bg-background" aria-labelledby="team-heading">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-light text-primary">
            Nossa Equipe
          </span>
          <h2 id="team-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Profissionais dedicados ao seu sorriso
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça os especialistas que fazem da Green Smile referência em 
            odontologia de qualidade em São Paulo.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <article
              key={member.name}
              className="group bg-card rounded-2xl overflow-hidden card-elevated animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={640}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                    {member.crm}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
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
