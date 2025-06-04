import React from "react";
import Hero_Section from "../components/Hero_Section";
import ServiceSection from "../components/ServiceSection";
import Pattern_section from "../components/Pattern_section";
import Kooperationspartner from "../components/Kooperationspartner";
import Review_section from "../components/Review_section";
const page = () => {
  return (
    <>
      <Hero_Section
        title="Psychotherapie in Köln:"
        subtitle="alle Behandlungen auf einen Blick"
        points={[
          "Einzel-, Gruppen- & Paartherapien",
          "Online-Therapie & Reha-Nachsorge für flexible Unterstützung",
          "Kurzfristige Termine, individuelle Beratung & Therapie-Konzepte",
        ]}
        buttonText="Jetzt Termin vereinbaren"
        buttonLink="/kontakt"
        imageSrc="/images/services-hero.png"
      />

      <ServiceSection
        title="Einzel- & Gruppentherapie – individuelle oder gemeinschaftliche Unterstützung"
        description={[
          "Einzel- und Gruppentherapie bieten unterschiedliche Wege, um psychische Belastungen zu bewältigen. Während die Einzeltherapie Raum für persönliche Themen schafft, ermöglicht Gruppentherapie den Austausch mit anderen und die Stärkung sozialer Kompetenzen.",
        ]}
        listItems={[
          "Einzeltherapie: individuelle Begleitung bei psychischen Belastungen, Ängsten & Depressionen",
          "Gruppentherapie: gegenseitige Unterstützung & neue Perspektiven durch gemeinsames Lernen",
          "Kombinationstherapie: Kombination aus Einzel- & Gruppentherapie",
        ]}
        bgColor="bg-[#FFF2CE]"
        buttonText="Mehr erfahren"
        buttonLink="/"
        imageSrc="/images/service-img-3.png"
        reverse={false}
      />

      <ServiceSection
        title="Paar- & Sexualtherapie - Beziehungen stärken & Nähe schaffen"
        description={[
          "Eine erfüllte Beziehung basiert auf Kommunikation, Vertrauen und Intimität. Doch Konflikte, Stress oder unausgesprochene Wünsche können zu Missverständnissen und Distanz führen. In der Paartherapie helfen wir Ihnen, Streit zu lösen, das gegenseitige Verständnis zu verbessern und eine tiefere Verbindung aufzubauen.",

          "Bei sexuellen Funktionsstörungen, Lustlosigkeit oder UnsicherheitenAuch unsere Sexualtherapie bietet Raum, um Herausforderungen anzusprechen - sei es bei sexuellen Funktionsstörungen, Lustlosigkeit oder Unsicherheiten. Wir begleiten Sie dabei, Blockaden zu lösen und eine erfüllte Sexualität zu entwickeln – individuell oder als Paar.",
        ]}
        listItems={[]}
        bgColor=""
        buttonText="Mehr erfahren"
        buttonLink="/"
        imageSrc="/images/service-img-4.png"
        reverse={true}
      />

      <Pattern_section btn={true} />

      <ServiceSection
        title="Kinder- & Jugendlichenpsychotherapie – Unterstützung für junge Menschen"
        description={[
          "Kinder und Jugendliche erleben psychische Belastungen oft anders als Erwachsene. Manche ziehen sich zurück, andere reagieren mit Wutausbrüchen oder Unsicherheiten im sozialen Umfeld. Eine psychotherapeutische Begleitung kann helfen, emotionale Herausforderungen zu bewältigen und das Selbstbewusstsein zu stärken. Dann kann eine Therapie sinnvoll sein:",
        ]}
        listItems={[
          "Anhaltende Ängste, sozialer Rückzug oder starke Stimmungsschwankungen",
          "Schwierigkeiten in der Schule oder im Umgang mit Gleichaltrigen",
          "Belastende familiäre oder persönliche Ereignisse",
        ]}
        bgColor=""
        buttonText="Mehr erfahren"
        buttonLink="/"
        imageSrc="/images/service-img-5.png"
        reverse={false}
      />

      <ServiceSection
        title="Online-Psychotherapie – flexibel & ortsunabhängig"
        description={[
          "Nicht jeder kann regelmäßig eine Praxis aufsuchen. Online-Psychotherapie ermöglicht Ihnen trotzdem professionelle Unterstützung. Einfach von zuhause aus – sicher & datenschutzkonform.",
        ]}
        listItems={[
          "Flexibilität: Therapie unabhängig von Ort & Zeit",
          "Sicherheit: geschützte Video-Plattformen für vertrauliche Gespräche",
          "Zugang: keine langen Wartezeiten & unkomplizierte Terminvereinbarung",
        ]}
        bgColor="bg-[#FFF2CE]"
        buttonText="Mehr erfahren"
        buttonLink="/"
        imageSrc="/images/service-img-6.png"
        reverse={true}
      />

      <Pattern_section btn={true} />

      <ServiceSection
        title="Psy-RENA – begleitete Reha-Nachsorge für langfristige Stabilität"
        description={[
          "Nach einer psychosomatischen Rehabilitation ist eine gezielte Nachsorge wichtig, um Therapieerfolge zu sichern. Psy-RENA hilft dabei, Gelerntes langfristig in den Alltag zu integrieren. Das Programm umfasst:",
        ]}
        listItems={[
          "Gruppensitzungen zur Stabilisierung nach der Reha",
          "Aufnahme- & Abschlussgespräch für individuelle Zielsetzung",
          "Kostenübernahme durch die Deutsche Rentenversicherung",
        ]}
        bgColor="bg-[#FFF2CE]"
        buttonText="Mehr erfahren"
        buttonLink="/"
        imageSrc="/images/service-img-7.png"
        reverse={false}
      />

      <Kooperationspartner />
      <Review_section bg="bg-[#FFF2CE]" />
      <Pattern_section btn={false} />
    </>
  );
};

export default page;
