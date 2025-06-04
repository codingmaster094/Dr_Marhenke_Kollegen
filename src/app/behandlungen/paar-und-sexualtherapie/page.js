import Hero_Section from "@/app/components/Hero_Section";
import Kooperationspartner from "@/app/components/Kooperationspartner";
import About_Service_section from "@/app/components/About_Service_section";
import FAQ_section from "@/app/components/FAQ_section";

import React from "react";

const page = () => {
  return (
    <>
      <Hero_Section
        title="Paar- & Sexualtherapie:"
        subtitle="Nähe, Verständnis & Intimität stärken"
        points={[
          "Unterstützung bei Kommunikationsproblemen, Vertrauensbrüchen & sexuellen Funktionsstörungen",
          "Einfühlsame Begleitung für Paare & Einzelpersonen",
          "Kurzfristige Termine, individuelle Beratung & Therapie-Konzepte",
        ]}
        buttonText="Jetzt Termin vereinbaren"
        buttonLink="/kontakt"
        imageSrc="/images/treatments-hero.png"
      />
      <Kooperationspartner />

      <About_Service_section
         title="Paartherapie – Konflikte verstehen & gemeinsam lösen"
        description={[
          "Jede Beziehung erlebt Höhen und Tiefen. In der Paartherapie helfen wir Ihnen, Missverständnisse zu klären, Vertrauen wieder aufzubauen und eine erfüllte Partnerschaft zu gestalten.",
        ]}
        listItems={[
          "Unterstützung bei Kommunikationsproblemen und Streitigkeiten",
          "Verarbeitung von Vertrauensbrüchen (z. B. Affären)",
          "Stärkung von Nähe, Intimität und gegenseitigem Verständnis",
        ]}
        bgColor="bg-[#FFF2CE]"
        
        imageSrc="/images/treatment-img-1.png"
        reverse={false}
      />
      <About_Service_section
         title="Sexualtherapie – für ein erfülltes Liebesleben"
        description={[
          "Sexuelle Probleme sind oft Ausdruck tieferliegender Beziehungs- oder psychischer Themen. Wir helfen Ihnen, Unsicherheiten und Blockaden zu überwinden, um eine erfüllte Sexualität zu erleben.",
        ]}
        listItems={[
          "Therapie bei sexuellen Funktionsstörungen (Erektionsprobleme, Orgasmusstörungen, Schmerzen beim Geschlechtsverkehr)",
          "Unterstützung bei Lustlosigkeit oder unterschiedlichem Verlangen",
          "Hilfe bei Ängsten oder Unsicherheiten in der Sexualität",
        ]}
        bgColor="bg-[#FFF2CE]"
        
        imageSrc="/images/treatment-img-2.png"
        reverse={true}
      />
      <About_Service_section
         title="Individuelle Sexualität – Bedürfnisse verstehen & akzeptieren"
        description={[
          "Sexuelle Vorlieben und Fantasien sind individuell – doch nicht immer leicht anzusprechen. Wir begleiten Sie dabei, Ihre Wünsche besser zu verstehen und offen in die Partnerschaft zu integrieren.",
        ]}
        listItems={[
          "Umgang mit Unsicherheiten in der sexuellen Identität oder Orientierung",
          "Unterstützung bei Paraphilien, wenn Leidensdruck besteht",
          "Sensible Gespräche in einem geschützten Rahmen",
        ]}
        bgColor="bg-[#FFF2CE]"
        
        imageSrc="/images/treatment-img-3.png"
        reverse={false}
      />
      

      <FAQ_section
      title="FAQ zur Paar- & Sexualtherapie"
        faqs={[
  {
    question: "Was ist der Unterschied zwischen Eheberatung und Paartherapie?",
    answer: `Eheberatung hilft bei akuten Konflikten und bietet praktische Lösungsansätze für konkrete Probleme. Sie ist meist kurzfristig angelegt und fokussiert auf Verständigung und Kompromisse. Paartherapie geht tiefer: Sie beleuchtet Beziehungsmuster, emotionale Verletzungen und Kommunikationsprobleme. Das Ziel ist eine nachhaltige Veränderung, um die Partnerschaft langfristig zu stärken.`,
  },
  
  {
    question: "Für wen lohnt sich eine Paartherapie?",
    answer: `Eine Paartherapie kann sinnvoll sein, wenn Konflikte immer wieder auftreten, die Kommunikation leidet oder eine Krise wie Untreue oder Entfremdung die Beziehung belastet.`,
  },
  
  {
    question: "Welche Arten von Paartherapie gibt es?",
    answer: `Es gibt verschiedene Ansätze, um Beziehungskonflikte zu lösen und die Partnerschaft zu stärken:
    - Verhaltenstherapeutische Paartherapie: Hilft, ungünstige Kommunikations- und Verhaltensmuster zu erkennen und zu verändern.
    - Systemische Paartherapie: Betrachtet die Beziehung im größeren Kontext und fördert neue Perspektiven.
    - Tiefenpsychologisch fundierte Paartherapie: Untersucht unbewusste Muster und emotionale Verletzungen aus der Vergangenheit.
    - Emotionsfokussierte Paartherapie (EFT): Stärkt die emotionale Bindung und hilft, alte Verletzungen zu heilen.
    - Kognitive Verhaltenstherapie (KVT) für Paare: Unterstützt bei der Veränderung negativer Denk- und Verhaltensweisen.
    - Psychodynamische Paartherapie: Beleuchtet, wie frühere Beziehungserfahrungen aktuelle Konflikte beeinflussen.
    Je nach Situation kann eine Kombination verschiedener Methoden sinnvoll sein.`,
  },
  
  {
    question: "Wann brauche ich eine Sexualtherapie?",
    answer: `Eine Sexualtherapie kann helfen, wenn sexuelle Probleme das Wohlbefinden oder die Beziehung belasten. Dazu gehören:
    - Sexuelle Funktionsstörungen: z. B. Erektionsstörungen, vorzeitige Ejakulation, Orgasmusstörungen, Vaginismus oder Schmerzen beim Geschlechtsverkehr.
    - Libido-Probleme: geringes sexuelles Verlangen oder Hypersexualität.
    - Psychische Belastungen: Ängste, Stress oder traumatische Erfahrungen, die sich auf die Sexualität auswirken.
    - Beziehungsprobleme: Kommunikationsschwierigkeiten oder fehlende Intimität in der Partnerschaft.`,
  },
  
  {
    question: "Was macht man in einer Sexualtherapie?",
    answer: `In einem geschützten Rahmen werden Ursachen für sexuelle Probleme besprochen und Wege zur Verbesserung der Sexualität entwickelt. Die Therapie kann Einzel-, Paar- oder Gruppensitzungen umfassen.`,
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
