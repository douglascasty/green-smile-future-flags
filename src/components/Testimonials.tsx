import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    treatment: "Avaliação Geral",
    rating: 5,
    text: "Minha experiência foi excelente! Sempre fui muito bem atendida, e o resultado superou minhas expectativas. Meus dentes ficaram maravilhosos! Obrigado Dr. Victor.",
  },
  {
    treatment: "Lentes de Contato Dental",
    rating: 5,
    text: "Ótimo lugar com ambiente limpo e agradável. Fui atendido pelo dentista Victor, onde realizei o procedimento de lentes de contato. Trabalho excelente e super acessível da região, além de ter tido todo o suporte de dúvidas no pós. Super recomendo!",
  },
  {
    treatment: "Tratamento de Canal",
    rating: 5,
    text: "Quero parabenizar o atendimento do dentista dr Victor, fiz meu canal com ele e fiquei muito satisfeita, ficou ótimo, agora estou aguardando minha prótese nova. Médico maravilhoso, trabalha com humanização e profissionalismo com os pacientes além do carinho nos atendimentos! Super indico!!",
  },
  {
    treatment: "Restauração de Urgência",
    rating: 5,
    text: "Quebrei meu dente da frente e precisei de uma restauração com urgência. Fui atendido pelo doutor Victor, que fez um trabalho excelente, com muito cuidado e atenção. Além do ótimo atendimento, a clínica é muito agradável. Fiquei muito satisfeita com o resultado e com certeza voltarei mais vezes.",
  },
  {
    treatment: "Lentes de Resina",
    rating: 5,
    text: "Há 5 dias fiz lentes de resina na Green Smile, ótima clínica! O trabalho do Dr. superou minhas expectativas, tinha dentes pequenos e amarelos e ficaram perfeitos. Super indico! Parabéns à Clínica Green Smile pelo profissionalismo e atendimento.",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding bg-secondary" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-primary-light text-primary">
            Depoimentos
          </span>
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O que nossos pacientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Avaliações reais e verificadas de pacientes no Google Business Profile da clínica.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl p-8 card-elevated animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" aria-hidden="true" />

              <div className="flex gap-1 mb-4" aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-border">
                <p className="font-semibold text-foreground">Avaliação verificada no Google</p>
                <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Google Rating Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-card shadow-card">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-foreground font-semibold">5.0</span>
            <span className="text-muted-foreground">no Google</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
