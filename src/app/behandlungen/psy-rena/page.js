import Hero_Section from "@/app/components/Hero_Section";
import Kooperationspartner from "@/app/components/Kooperationspartner";
import About_Service_section from "@/app/components/About_Service_section";
import FAQ_section from "@/app/components/FAQ_section";
import React from "react";

const page = () => {
  return (
    <>
      <Hero_Section
        title="Psy-RENA:"
        subtitle="Reha-Nachsorge für langfristige Stabilität"
        points={[
          "Unterstützung bei der Rückkehr in den Alltag nach der psychosomatischen Reha",
           "Gruppentherapie zur Stabilisierung & Weiterentwicklung von Reha-Zielen",
           "Kurzfristige Termine, individuelle Beratung & Therapie-Konzeptee"
        ]}
        buttonText="Jetzt Termin vereinbaren"
        buttonLink="/kontakt"
        imageSrc="/images/treatments-hero.png"
      />
      <Kooperationspartner />
      <About_Service_section
          title="Psy-RENA – Nachsorge nach der psychosomatischen Reha"
        description={[
          "Nach einer psychosomatischen Reha fällt es oft nicht leicht, den Übergang in den Alltag zu meistern. Deswegen hilft Psy-RENA (Psychosomatische Reha-Nachsorge) als strukturiertes Nachsorgeprogramm Menschen, die eine stationäre psychosomatische Rehabilitation abgeschlossen haben oder kurz vor der Entlassung stehen. In einer therapeutisch begleiteten Gruppe werden Therapieerfolge gefestigt und das Gelernte nachhaltig in den Alltag integriert.",
        ]}
        listItems={[
          "Unterstützung bei der Umsetzung der Reha-Ziele im Alltag",
          "Erfahrungsaustausch mit anderen Betroffenen unter professioneller Leitung- Förderung von Selbstfürsorge & psychischer Stabilität",
        ]}
        bgColor="bg-[#FFF2CE]"
   
        imageSrc="/images/treatment-img-1.png"
        reverse={false}
      />
      <About_Service_section
         title="Ablauf & Kostenübernahme"
        description={[
          "Das Programm besteht aus einer Kombination aus Gruppen- und Einzelgesprächen, die über mehrere Wochen hinweg stattfinden.",
        ]}
        listItems={[
          "Aufnahmegespräch (50 Minuten) zur individuellen Zielsetzung",
          "Bis zu 25 Gruppensitzungen (60-90 Minuten) mit therapeutischer Begleitung",
          "Abschlussgespräch (50 Minuten) zur Reflexion & Weiterentwicklung",
          "Kostenübernahme: Die Deutsche Rentenversicherung trägt die Kosten, für Versicherte fallen keine Zuzahlungen an. Fahrtkosten können bezuschusst werden.",
        ]}
        bgColor="bg-[#FFF2CE]"
   
        imageSrc="/images/treatment-img-2.png"
        reverse={true}
      />
    
      <FAQ_section
      title="FAQ zu Psy-RENA"
        faqs={[
  {
    question: "Was ist Psy-RENA?",
    answer: `Psy-RENA ist eine psychosomatische Reha-Nachsorge für Menschen mit psychischen Erkrankungen. Sie besteht aus Gruppentherapien und dient der Stabilisierung nach einer stationären oder teilstationären Behandlung.`,
  },
  
  {
    question: "Was bringt Psy-RENA?",
    answer: `Psy-RENA hilft, Therapieerfolge zu festigen, den Alltag besser zu bewältigen und Rückfälle zu vermeiden.`,
  },
  
  {
    question: "Wer bezahlt Psy-RENA?",
    answer: `Die Kosten für Psy-RENA übernimmt in der Regel die Deutsche Rentenversicherung. Ein Antrag muss vor Beginn der Therapie gestellt werden.`,
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
