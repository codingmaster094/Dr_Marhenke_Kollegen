import Hero_Section from "@/app/components/Hero_Section";
import Kooperationspartner from "@/app/components/Kooperationspartner";
import About_Service_section from "@/app/components/About_Service_section";
import FAQ_section from "@/app/components/FAQ_section";
import React from "react";

const page = () => {
  return (
    <>
      <Hero_Section
        title="Kinder- & Jugendlichen-psychotherapie:"
        subtitle="Ängste & Sorgen bewältigen"
        points={[
          "Altersgerechte Therapie bei Ängsten, Stress & Verhaltensproblemen",
           "Kreative Ansätze & enge Einbindung der Eltern für nachhaltige Veränderungen",
           "Kurzfristige Termine, individuelle Beratung & Therapie-Konzepte"
        ]}
        buttonText="Jetzt Termin vereinbaren"
        buttonLink="/kontakt"
        imageSrc="/images/treatments-hero.png"
      />
      <Kooperationspartner />
      <About_Service_section
        title="Hilfe für junge Menschen"
        description={[
          "Kinder und Jugendliche stehen vor besonderen Herausforderungen – sei es in der Schule, in der Familie oder im sozialen Umfeld. Unsere psychotherapeutische Begleitung hilft, Ängste zu überwinden, das Selbstwertgefühl zu stärken und emotionale Belastungen zu verarbeiten. Eine Therapi kann in den folgenden Fällen sinnvoll sein:",
        ]}
        listItems={[
          "Ängste oder soziale Unsicherheiten",
          "Schulprobleme oder Leistungsdruck",
          "Wutausbrüche oder Rückzug aus dem sozialen Umfeld"
        ]}
        bgColor="bg-[#FFF2CE]"
        
        imageSrc="/images/treatment-img-1.png"
        reverse={false}
      />
      <About_Service_section
        title="Altersgerechte Ansätze"
        description={[
          "Eine gute Psychotherapie für Kinder oder Jugendliche muss sich an die Bedürfnisse junger Menschen anpassen. In einem geschützten Rahmen können sie Sorgen und Ängste ausdrücken – durch Gespräche, kreatives Arbeiten oder spielerische Methoden.",
        ]}
        listItems={[
          "Probatorische Sitzungen zum Kennenlernen",
          "Spielerische, kreative oder gesprächsbasierte Therapieformen",
          "Enge Zusammenarbeit mit den Eltern für eine ganzheitliche Unterstützung",
        ]}
        bgColor="bg-[#FFF2CE]"
        
        imageSrc="/images/treatment-img-2.png"
        reverse={true}
      />
      <About_Service_section
        title="Unterstützung von Eltern & Familie"
        description={[
          "Eltern spielen eine entscheidende Rolle bei der Entwicklung und Stabilisierung ihres Kindes. Deshalb beziehen wir sie aktiv in den Therapieprozess mit ein.",
        ]}
        listItems={[
          "Regelmäßige Elterngespräche zur Begleitung der Therapie",
          "Beratung zu Herausforderungen im Alltag & im Umgang mit schwierigen Situationen",
          "Gemeinsame Lösungswege für ein harmonisches Familienleben",
        ]}
        bgColor="bg-[#FFF2CE]"
        
        imageSrc="/images/treatment-img-3.png"
        reverse={false}
      />


      <FAQ_section
      title="FAQ zur Kinder- & Jugendlichenpsychotherapie"
        faqs={[
  {
    question: "Was macht eine Kinder- und Jugendpsychotherapie?",
    answer: `Sie hilft Kindern und Jugendlichen, psychische Probleme wie z. B. Ängste, Depressionen oder Verhaltensauffälligkeiten zu bewältigen. Die Therapie ist altersgerecht und oft spielerisch gestaltet.`,
  },
  
  {
    question: "Wie läuft eine Kinderpsychotherapie ab?",
    answer: `Jedes Kind ist einzigartig – genauso wie der Ablauf einer Therapie für Kinder. I. d. R. beginnt eine Therapie mit einem ersten Gespräch, in dem Kind und Eltern den Therapeuten kennenlernen. Dabei wird gemeinsam besprochen, welche Schwierigkeiten bestehen und ob eine Therapie sinnvoll ist. In den folgenden probatorischen Sitzungen (bis zu 5–7) wird dann genauer untersucht, wie das Kind unterstützt werden kann.
    Anschließend beginnt die Therapie, die verschiedene Ansätze vereint:
    - Spieltherapie hilft jüngeren Kindern, Gefühle auszudrücken, wenn Worte schwerfallen.
    - Verhaltenstherapie unterstützt dabei, ungünstige Denkmuster und Reaktionen zu verändern.
    - Tiefenpsychologisch fundierte oder analytische Therapie hilft, tieferliegende Ursachen zu verstehen.
    Eltern sind ein wichtiger Teil der Psychotherapie für Kinder. Regelmäßige Gespräche (z. B. alle 4 Wochen) helfen dabei, das Kind auch außerhalb der Sitzungen bestmöglich zu unterstützen.`,
  },
  
  {
    question: "Bis wann Kinder- und Jugendpsychotherapie?",
    answer: `Eine Psychotherapie für Kinder oder Jugendliche kann bis zum vollendeten 21. Lebensjahr in Anspruch genommen werden, wenn die Therapie bereits im Jugendalter begonnen wurde.`,
  },
  
  {
    question: "Was muss ich zum ersten Termin mitbringen?",
    answer: `Zum ersten Termin bringen Sie das Versichertenkärtchen (elektronische Gesundheitskarte) bei gesetzlicher Versicherung bzw. die Daten Ihrer privaten Versicherung bei Privatversicherten (Name und Anschrift der privaten Krankenversicherung).`,
  },
  
  {
    question: "Was passiert, wenn ich einen Termin kurzfristig absagen muss?",
    answer: `Wenn Sie eine Einzelsitzung bis zu 2 Werktage vor dem geplanten Termin schriftlich per E-Mail an kontakt[@]psycho-therapie-koeln.de absagen, gilt der Termin als storniert und Sie können gleich einen neuen Termin vereinbaren.
    Bei der Absage einer Einzelsitzung innerhalb von 2 Werktagen vor dem Termin oder einer unentschuldigten Absage wird ein sogenanntes Ausfallhonorar erhoben, welches den Verdienstausfall des Therapeuten ersetzt. Die Höhe des Ausfallhonorars beträgt i. d. R. 102,57 € (orientierend am Stundensatz für Psychotherapie) und wird weder von den gesetzlichen noch von den privaten Krankenkassen erstattet.
    In beidseitigem Interesse empfehlen wir Ihnen, uns Ihren Stornierungswunsch rechtzeitig mitzuteilen.`,
  },
]}
      />
    </>
  );
};

export default page;
