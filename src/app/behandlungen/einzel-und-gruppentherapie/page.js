import Hero_Section from "@/app/components/Hero_Section";
import Kooperationspartner from "@/app/components/Kooperationspartner";
import About_Service_section from "@/app/components/About_Service_section";
import FAQ_section from "@/app/components/FAQ_section";

import React from "react";

const page = () => {
  return (
    <>
      <Hero_Section
        title="Einzel- & Gruppentherapie:"
        subtitle="individuelle Begleitung & gemeinsamer Austausch"
        points={[
          "Einzel- & Gruppentherapie für verschiedene psychische Belastungen",
          "Unterstützung bei der persönlichen Entwicklung",
          "Kurzfristige Termine, individuelle Beratung & Therapie-Konzepte",
        ]}
        buttonText="Jetzt Termin vereinbaren"
        buttonLink="/kontakt"
        imageSrc="/images/treatments-hero.png"
      />

      <Kooperationspartner />

      <About_Service_section
        title="Einzeltherapie – Ihr geschützter Raum zur persönlichen Entwicklung"
        imageSrc="/images/treatment-img-1.png"
        description={[
          "Die Einzeltherapie bietet einen vertraulichen Rahmen, um persönliche Herausforderungen zu besprechen. In den Sitzungen arbeiten Sie gemeinsam mit Ihrem Therapeuten daran, belastende Gedanken und Verhaltensmuster zu reflektieren und gezielt zu verändern.",
        ]}
        listItems={[
          "Individuelle und maßgeschneiderte Therapieansätze",
          "Tiefgehende Auseinandersetzung mit eigenen Themen",
          "Sitzungsdauer: 50 Minuten, flexibel an persönliche Bedürfnisse anpassbar",
        ]}
        bgColor="bg-[#FFF2CE]"
        imageSrc="/images/treatment-img-1.png"
        reverse={false}
      />
      <About_Service_section
        title="Gruppentherapie – Unterstützung durch Austausch"
        description={[
          "In der Gruppe entsteht eine besondere Dynamik, die Heilungsprozesse fördern kann. Der Austausch mit anderen zeigt, dass man mit seinen Problemen nicht allein ist. Außerdem kann das Feedback der Gruppe neue Perspektiven eröffnen und das Selbstwertgefühl stärken.",
        ]}
        listItems={[
          "Gegenseitige Unterstützung & gemeinsames Lernen",
          "Soziale Interaktion als Therapie-Element",
          "Sitzungsdauer: 100 Minuten, feste Gruppenstruktur für Vertrauen und Kontinuität",
        ]}
        bgColor="bg-[#FFF2CE]"
        imageSrc="/images/treatment-img-2.png"
        reverse={true}
      />
      <About_Service_section
        title="Kombinationstherapie – persönliche Reflexion & Austausch mit anderen"
        description={[
          "Viele Patienten profitieren von einer Kombination aus Einzel- und Gruppentherapie. Während die Einzeltherapie Raum für persönliche Reflexion bietet, ermöglicht die Gruppentherapie das Üben sozialer Kompetenzen und den Austausch mit anderen.",
        ]}
        listItems={[
          "Probatorische Sitzungen zum Kennenlernen (werden von der Krankenkasse übernommen)",
          "Nach Antragstellung Bewilligung von 12, 24, 60 oder 80 Sitzungen möglich",
          "Gesetzliche und private Krankenkassen übernehmen in der Regel die Kosten bei entsprechender Diagnose",
        ]}
        bgColor="bg-[#FFF2CE]"
        imageSrc="/images/treatment-img-3.png"
        reverse={false}
      />

      <FAQ_section
        title="FAQ zur Einzel- & Gruppentherapie"
        faqs={[
          {
            question: "Was ist eine Einzeltherapie?",
            answer: `In einer Einzeltherapie arbeitet ein Therapeut in Einzelgesprächen mit einem Patienten, um persönliche Probleme zu bewältigen. Dabei steht die individuelle Betreuung im Mittelpunkt, um gezielt auf die Bedürfnisse und Ziele des Patienten einzugehen.`,
          },
          {
            question: "Warum ist Gruppentherapie sinnvoll?",
            answer: `Eine Gruppentherapie bietet Ihnen die Möglichkeit, von den Erfahrungen anderer zu lernen und sich gegenseitig zu unterstützen. Der Austausch in der Gruppe stärkt das soziale Miteinander und hilft, neue Perspektiven zu entwickeln.`,
          },
          {
            question: "Welche Vorteile hat Gruppentherapie?",
            answer: `Das sind die Vorteile einer Gruppentherapie: - Unterstützung durch Menschen mit ähnlichen Problemen - Neue Lösungsansätze & Perspektiven - Soziale Kontakte & das Gefühl, nicht allein zu sein - Geringere Wartezeiten im Vergleich zur Einzeltherapie.`,
          },
          {
            question: "Was muss ich zum ersten Termin mitbringen?",
            answer: `Zum ersten Termin bringen Sie das Versichertenkärtchen (elektronische Gesundheitskarte) bei gesetzlicher Versicherung bzw. die Daten Ihrer privaten Versicherung bei Privatversicherten (Name und Anschrift der privaten Krankenversicherung).`,
          },
          {
            question:
              "Was passiert, wenn ich einen Termin kurzfristig absagen muss?",
            answer: `Wenn Sie eine Einzelsitzung bis zu 2 Werktage vor dem geplanten Termin schriftlich per E-Mail an kontakt[@]psycho-therapie-koeln.de absagen, gilt der Termin als storniert und Sie können gleich einen neuen Termin vereinbaren. Bei der Absage einer Einzelsitzung innerhalb von 2 Werktagen vor dem Termin oder einer unentschuldigten Absage wird ein sogenanntes Ausfallhonorar erhoben, welches den Verdienstausfall des Therapeuten ersetzt. Die Höhe des Ausfallhonorars beträgt i. d. R. 102,57 € (orientierend am Stundensatz für Psychotherapie) und wird weder von den gesetzlichen noch von den privaten Krankenkassen erstattet. In beidseitigem Interesse empfehlen wir Ihnen, uns Ihren Stornierungswunsch rechtzeitig mitzuteilen.`,
          },
        ]}
      />
    </>
  );
};

export default page;
