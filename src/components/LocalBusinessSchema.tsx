const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://greensmile.com.br/#dentist",
    name: "Green Smile Odontologia",
    description: "Clínica odontológica especializada em ortodontia, implantes, clareamento dental e estética. Atendimento humanizado em Jabaquara, São Paulo.",
    url: "https://greensmile.com.br",
    telephone: "+55 11 99999-9999",
    email: "contato@greensmile.com.br",
    image: "https://greensmile.com.br/og-image.jpg",
    logo: "https://greensmile.com.br/logo.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Eng. Armando de Arruda Pereira, 1234",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: "04309-000",
      addressCountry: "BR",
      neighborhood: "Jabaquara",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -23.646,
      longitude: -46.641,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "13:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      "https://instagram.com/greensmileodonto",
      "https://facebook.com/greensmileodonto",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços Odontológicos",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clareamento Dental",
            description: "Clareamento dental profissional com resultados duradouros",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ortodontia",
            description: "Aparelhos ortodônticos tradicionais e invisíveis",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Implantes Dentários",
            description: "Implantes dentários com tecnologia avançada",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Odontopediatria",
            description: "Atendimento odontológico especializado para crianças",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lentes de Contato Dental",
            description: "Facetas ultrafinas para transformar seu sorriso",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Estética Dental",
            description: "Procedimentos estéticos para harmonização do sorriso",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
