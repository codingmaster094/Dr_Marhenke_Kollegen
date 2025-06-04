import React from "react";
import Hero_Section from "../components/Hero_Section";
import ServiceSection from "../components/ServiceSection";
import Pattern_section from "../components/Pattern_section";
import Review_section from "../components/Review_section";
import SliderSection from "../components/SliderSection";
import TeamsProfile from "../components/TeamsProfile";
import No_slug_page from "../components/No_slug_page";

const Page = async({ params }) => {
  const { slug } = params;
  let Hero_data = null;
  let Service_data = null;
  let Slider_section_data = null;
  let Team_data = null;

  if (slug === "koeln-rodenkirchen") {
    Hero_data = [
      {
        title: "Psychotherapie in Köln Rodenkirchen:",
        subtitle: "gemeinsam neue Wege gehen",
        points: [
          "Einzel-, Gruppen- & Paartherapien",
          "Online-Therapie & Reha-Nachsorge für flexible Unterstützung",
          "Kurzfristige Termine, individuelle Beratung & Therapie-Konzepte",
        ],
        buttonText: "Termin vereinbaren",
        buttonLink: "/kontakt",
        imageSrc: "/images/location-hero.webp",
      },
    ];

    Service_data = [
      {
        title:
          "Das ist unsere Praxis für Psychotherapie in Köln Rodenkirchen",
        description: [
          "Unsere Psychotherapie-Praxis in Köln Rodenkirchen liegt in zentraler Lage und hat eine gute eine Anbindung an öffentliche Verkehrsmittel – auch Parkmöglichkeiten vor Ort sind vorhanden. In unserer Praxis bieten Ihnen eine sichere und vertrauensvolle Umgebung für Ihre Therapie. Helle und freundliche Räume in einem klaren und modern Ambiente sorgen für eine angenehme Atmosphäre, in der Sie sich wohl und gut aufgehoben fühlen.",
        ],
        listItems: [
          "Gustav-Radbruch-Straße 1, 50996 Köln",
          "Telefon: 0221/42 31 39 56",
          "E-Mail: kontakt[@]psycho-therapie-koeln.de",
        ],
        bgColor: "bg-[#FFF2CE]",
        buttonText: "",
        buttonLink: "",
        imageSrc: "/images/location-img-1.webp",
        reverse: false,
      },
    ];

    Slider_section_data = [
      {
        title: "Unsere Praxis für Psychotherapie in Köln Rodenkirchen",
        Images: [
          "/images/location-img-4 (1).webp",
          "/images/location-img-3.webp",
          "/images/location-img-2.webp",
          "/images/location-img-5.webp",
          "/images/location-img-2.webp",
        ],
      },
    ];

    Team_data = [
      {
        title: "Psychotherapie-Praxis in Köln Rodenkirchen: unser Team",
      },
    ];
  }
  if (slug === "koeln-suedstadt") {
    Hero_data = [
      {
        title: "Psychotherapie in Köln Südstadt:",
        subtitle: "gemeinsam neue Wege gehen",
        points: [
          "Einzel-, Gruppen- & Paartherapien",
          "Online-Therapie & Reha-Nachsorge für flexible Unterstützung",
          "Kurzfristige Termine, individuelle Beratung & Therapie-Konzepte",
        ],
        buttonText: "Termin vereinbaren",
        buttonLink: "/kontakt",
        imageSrc: "/images/location-hero.webp",
      },
    ];

    Service_data = [
      {
        title: "Das ist unsere Praxis für Psychotherapie in Köln Südstadt",
        description: [
          "Unsere Psychotherapie-Praxis in Köln Südstadt liegt in zentraler Lage und hat eine gute eine Anbindung an öffentliche Verkehrsmittel – auch Parkmöglichkeiten vor Ort sind vorhanden. In unserer Praxis bieten Ihnen eine sichere und vertrauensvolle Umgebung für Ihre Therapie. Helle und freundliche Räume in einem klaren und modern Ambiente sorgen für eine angenehme Atmosphäre, in der Sie sich wohl und gut aufgehoben fühlen.",
        ],
        listItems: [
          "Rolandstraße 55, 50677 Köln",
          "Telefon: 0221/17 00 40 36",
          "E-Mail: kontakt[@]psycho-therapie-koeln.de",
        ],
        bgColor: "",
        buttonText: "",
        buttonLink: "",
        imageSrc: "/images/location-img-1.webp",
        reverse: false,
      },
    ];

    Slider_section_data = [
      {
        title: "Unsere Praxis für Psychotherapie in Köln Südstadt",
        Images: [
          "/images/location-img-4 (1).webp",
          "/images/location-img-3.webp",
          "/images/location-img-2.webp",
          "/images/location-img-5.webp",
          "/images/location-img-2.webp",
        ],
      },
    ];

    Team_data = [
      {
        title: "Psychotherapie-Praxis in Köln Südstadt: unser Team",
      },
    ];
  }
  if (slug === "huerth") {
    Hero_data = [
      {
        title: "Psychotherapie in Köln Hürth:",
        subtitle: "gemeinsam neue Wege gehen",
        points: [
          "Einzel-, Gruppen- & Paartherapien",
          "Online-Therapie & Reha-Nachsorge für flexible Unterstützung",
          "Kurzfristige Termine, individuelle Beratung & Therapie-Konzepte",
        ],
        buttonText: "Termin vereinbaren",
        buttonLink: "/kontakt",
        imageSrc: "/images/location-hero.webp",
      },
    ];

    Service_data = [
      {
        title: "Das ist unsere Praxis für Psychotherapie in Köln Hürth",
        description: [
          "Unsere Psychotherapie-Praxis in Köln Hürth liegt in zentraler Lage und hat eine gute eine Anbindung an öffentliche Verkehrsmittel – auch Parkmöglichkeiten vor Ort sind vorhanden. In unserer Praxis bieten Ihnen eine sichere und vertrauensvolle Umgebung für Ihre Therapie. Helle und freundliche Räume in einem klaren und modern Ambiente sorgen für eine angenehme Atmosphäre, in der Sie sich wohl und gut aufgehoben fühlen.",
        ],
        listItems: [
          "Rolandstraße 55, 50677 Köln",
          "Telefon: 0221/17 00 40 36",
          "E-Mail: kontakt[@]psycho-therapie-koeln.de",
        ],
        bgColor: "",
        buttonText: "",
        buttonLink: "",
        imageSrc: "/images/location-img-1.webp",
        reverse: false,
      },
    ];

    Slider_section_data = [
      {
        title: "Unsere Praxis für Psychotherapie in Köln Südstadt",
        Images: [
          "/images/location-img-4 (1).webp",
          "/images/location-img-3.webp",
          "/images/location-img-2.webp",
          "/images/location-img-5.webp",
          "/images/location-img-2.webp",
        ],
      },
    ];

    Team_data = [
      {
        title: "Psychotherapie-Praxis in Köln Südstadt: unser Team",
      },
    ];
  }

  if (
    slug !== "koeln-rodenkirchen" &&
    slug !== "koeln-suedstadt" &&
    slug !== "huerth"
  ) {
    return <No_slug_page />;
  }
  

  return (
    <>
      {Hero_data && (
        <Hero_Section
          title={Hero_data[0].title}
          subtitle={Hero_data[0].subtitle}
          points={Hero_data[0].points}
          buttonText={Hero_data[0].buttonText}
          buttonLink={Hero_data[0].buttonLink}
          imageSrc={Hero_data[0].imageSrc}
        />
      )}

      {Service_data && (
        <ServiceSection
          title={Service_data[0].title}
          description={Service_data[0].description}
          listItems={Service_data[0].listItems}
          bgColor={Service_data[0].bgColor}
          buttonText={Service_data[0].buttonText}
          buttonLink={Service_data[0].buttonLink}
          imageSrc={Service_data[0].imageSrc}
          reverse={Service_data[0].reverse}
        />
      )}

      <Pattern_section btn={true} BTN="Termin vereinbaren" />
      <Review_section bg="" />
      <SliderSection 
        main_title={Slider_section_data[0].title}
        gallery_images={Slider_section_data[0].Images}
      />
      <TeamsProfile title={Team_data[0].title} />
    </>
  );
};

export default Page;
