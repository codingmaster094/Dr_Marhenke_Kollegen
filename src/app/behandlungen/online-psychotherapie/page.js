import Hero_Section from "@/app/components/Hero_Section";
import Kooperationspartner from "@/app/components/Kooperationspartner";
import About_Service_section from "@/app/components/About_Service_section";
import FAQ_section from "@/app/components/FAQ_section";
import React from "react";

const page = () => {
  return (
    <>
      <Hero_Section
        title="Online-Psychotherapie in Köln:"
        subtitle="flexible Unterstützung, wo Sie sie brauchen"
        points={[
          "Ortsunabhängige & flexible psychotherapeutische Begleitung",
           "Sicher & diskret durch zertifizierte Online-Plattformen",
           "Kurzfristige Termine, individuelle Beratung & Therapie-Konzeptee"
        ]}
        buttonText="Jetzt Termin vereinbaren"
        buttonLink="/kontakt"
        imageSrc="/images/treatments-hero.png"
      />
      <Kooperationspartner />
      <About_Service_section
         title="Online-Psychotherapie - flexibel & sicher von zuhause aus"
        description={[
          "Online-Psychotherapie bietet die gleiche professionelle Unterstützung wie eine Behandlung vor Ort – mit dem Vorteil, dass Sie keine langen Anfahrtswege haben und auch sehr kurzfristig einen Termin bekommen können. Sie benötigen lediglich eine stabile Internetverbindung sowie ein Gerät mit Kamera und Mikrofon.-Sichere & zertifizierte Video-Plattformen",
        ]}
        listItems={[
          "Einzel- & Paartherapie auch online möglich",
          "Ortsunabhängig & flexibel in den Alltag integrierbar",
        ]}
        bgColor="bg-[#FFF2CE]"
       
        imageSrc="/images/treatment-img-1.png"
        reverse={false}
      />
      <About_Service_section
         title="Wann ist Online-Psychotherapie eine gute Wahl?"
        description={[
          "Diese Therapieform eignet sich besonders für Menschen, die aus verschiedenen Gründen nicht persönlich in die Praxis kommen können oder eine flexible Lösung bevorzugen.",
        ]}
        listItems={[
          "Personen mit eingeschränkter Mobilität oder langen Anfahrtswegen",
          "Menschen mit einem vollen Alltag, die die Therapie flexibel integrieren möchten",
          "Patienten, die sich in ihrer gewohnten Umgebung wohler fühlen",
        ]}
        bgColor="bg-[#FFF2CE]"
       
        imageSrc="/images/treatment-img-2.png"
        reverse={true}
      />
      <About_Service_section
        title="Wie läuft die Online-Therapie ab?"
        description={[
          "Der Ablauf ähnelt der klassischen Therapie: In einem Erstgespräch wird geklärt, welche Unterstützung sinnvoll ist. Danach folgen regelmäßige Sitzungen per Videochat.",
        ]}
        listItems={[
          "Probatorische Sitzungen zum Kennenlernen",
          "Regelmäßige Termine nach individueller Absprache",
          "Kostenübernahme: Viele gesetzliche und private Krankenkassen erstatten Online-Therapie vollständig",
        ]}
        bgColor="bg-[#FFF2CE]"
       
        imageSrc="/images/treatment-img-3.png"
        reverse={false}
      />

      <FAQ_section
      title="FAQ zur Online-Psychotherapie"
        faqs={[
  {
    question: "Kann man Psychotherapie auch online machen?",
    answer: `Ja, viele Therapieformen sind inzwischen auch online möglich. Dies bietet Flexibilität und eine niedrigere Hemmschwelle für den Einstieg.`,
  },
  
  {
    question: "Ist Online-Psychotherapie erlaubt?",
    answer: `Ja, Online-Psychotherapie ist erlaubt bzw. gesetzlich zugelassen, wenn sie von einem approbierten Psychotherapeuten durchgeführt wird.`,
  },
  
  {
    question: "Wird Online-Psychotherapie von der Krankenkasse bezahlt?",
    answer: `Gesetzliche Krankenkassen übernehmen die Kosten, wenn die Therapie von einem zugelassenen Therapeuten durchgeführt wird. Private Kassen erstatten je nach Tarif.`,
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
