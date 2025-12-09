import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Oliveira",
    treatment: "Clareamento Dental",
    rating: 5,
    text: "Fiz o clareamento e estou encantada! O atendimento foi excelente, a equipe muito profissional e o resultado superou minhas expectativas. Super recomendo!",
  },
  {
    name: "Roberto Almeida",
    treatment: "Implante Dentário",
    rating: 5,
    text: "Tinha muito medo de fazer o implante, mas a equipe me deixou super tranquilo. O procedimento foi rápido e a recuperação foi ótima. Hoje tenho meu sorriso de volta!",
  },
  {
    name: "Fernanda Santos",
    treatment: "Ortodontia",
    rating: 5,
    text: "Minha filha faz tratamento ortodôntico aqui e adora! O ambiente é acolhedor e a Dra. Marina tem um jeito especial com as crianças. Nota 10!",
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
            A satisfação dos nossos pacientes é nossa maior recompensa. 
            Veja alguns depoimentos de quem já transformou o sorriso conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
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
                <p className="font-semibold text-foreground">{testimonial.name}</p>
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
