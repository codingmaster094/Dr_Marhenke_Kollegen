import React from "react";
import Hero_Section from "../components/Hero_Section";
import Psychotherapeuten from "../components/Psychotherapeuten";
import Psychotherapie_Praxis from "../components/Psychotherapie_Praxis";
import Kooperationspartner from "../components/Kooperationspartner";
import Pattern_section from "../components/Pattern_section";
import Team_section from "../components/Team_section";
import Review_section from "../components/Review_section";
import FAQ_section from "../components/FAQ_section";

const page = () => {
  return (
    <>
      <Hero_Section
        title="Psychotherapie-Praxis in Köln:"
        subtitle="Unterstützung für jede Lebenslage"
        points={[
          "Erfahrene Psychotherapeuten unterstützen in schwierigen Lebenslagen",
          "Einzel-, Gruppen- und Paartherapie – vor Ort oder online",
          "Individuelle Therapieangebote für Mitglieder der GKV, PKV & DRV",
        ]}
        buttonText="Jetzt Termin vereinbaren"
        buttonLink="/kontakt"
        imageSrc="/images/hero-img.png"
        videoSrc="/vedio/home.mp4"
      />
      <Psychotherapeuten />
      <Pattern_section btn={true}/>
      <Psychotherapie_Praxis 
        title="Dr. Marhenke & Kollegen: unsere Psychotherapie-Praxis in Köln"
          description={[
            "Die Standorte unserer Psychotherapie-Praxis in Köln Rodenkirchen, Südstadt und Hürth bieten Ihnen eine sichere und vertrauensvolle Umgebung für Ihre Therapie. Helle und freundliche Räume in einem klaren und modern Ambiente sorgen für eine angenehme Atmosphäre, in der Sie sich wohl und gut aufgehoben fühlen."
          ]}
          listItems={[]}
          bgColor="bg-[#FFF2CE]"
          imageSrc="/images/service-img-2.png"
          reverse={true}
       />
      <Kooperationspartner />
      <Pattern_section btn={true}/>
      <Team_section />
      <Review_section bg="" />
      <Pattern_section btn={true}/>
      <FAQ_section
      title="FAQ zur Psychotherapie in Köln"
        faqs={[
          {
            question: "Was ist Psychotherapie?",
            answer: `Eine Psychotherapie kann helfen, seelische Belastungen zu verstehen und zu bewältigen. Durch Gespräche und gezielte Methoden können Gedanken, Gefühle und Verhaltensweisen positiv verändert werden.`,
          },
          {
            question: "Wann lohnt sich Psychotherapie?",
            answer: `Wenn Ängste, Stress oder depressive Gedanken Ihren Alltag beeinträchtigen, kann eine Psychotherapie helfen. Auch bei Lebenskrisen oder traumatischen Erlebnissen bietet sie Ihnen wertvolle Unterstützung.`,
          },
          {
            question: "Was macht eine Praxis für Psychotherapie?",
            answer: `Eine Praxis für Psychotherapie ist ein geschützter Raum, in dem psychische Beschwerden professionell behandelt werden. Ein Therapeut hilft dabei, belastende Muster zu erkennen und Lösungen oder Wege zu finden. diese zu überwinden.`,
          },
          {
            question: "Wie lange dauert eine Psychotherapie?",
            answer: `In der Regel finden Therapiesitzungen einmal pro Woche statt. Die Sitzungsdauer beträgt jeweils 50 Minuten.
        Die Gesamtdauer der Therapie richtet sich nach der Art und Schwere der Erkrankungen. Bei der Krankenkasse wird entweder eine Kurzzeittherapie (12–24 Sitzungen) oder eine Langzeittherapie (60 Sitzungen) beantragt. Verlängerungen sind bei Bedarf möglich.`,
          },
          {
            question: "Wer darf sich Praxis für Psychotherapie nennen?",
            answer: `Nur approbierte Psychotherapeuten oder Ärzte mit einer entsprechenden Weiterbildung dürfen eine Praxis für Psychotherapie führen.`,
          },
          {
            question:
              "Was ist der Unterschied zwischen Psychiater und Psychotherapeut?",
            answer: `Ein Psychiater ist ein Facharzt, der psychische Erkrankungen diagnostizieren, behandeln und Medikamente verschreiben kann. Ein Psychotherapeut darf psychische Erkrankungen ebenfalls behandeln, aber keine Medikamente verordnen.`,
          },
          {
            question: "Soll ich zum Psychologen oder Psychiater?",
            answer: `Das hängt von Ihren individuellen Bedürfnissen ab. Wenn Sie Unterstützung in Form von Gesprächstherapie suchen, kann ein Psychotherapeut helfen, belastende Gedanken und Verhaltensmuster zu verstehen und zu verändern. Dies kann besonders bei Depressionen, Ängsten oder persönlichen Krisen sinnvoll sein.

Bei schweren Erkrankungen wie Depressionen oder Angststörungen kann ein Psychiater die richtige Anlaufstelle sein. Er kann eine Diagnose stellen und gegebenenfalls Medikamente verschreiben.

Wenn Sie unsicher sind, welche Therapie die richtige ist, nehmen wir uns gerne die Zeit für eine ausführliche Beratung.`,
          },
          {
            question: "Wie komme ich schnell an eine Psychotherapie?",
            answer: `Ein Therapieplatz kann je nach Region und Verfügbarkeit schwer zu finden sein. Es gibt jedoch mehrere Möglichkeiten, schneller an eine Psychotherapie zu kommen:

– Mehrere Praxen kontaktieren: Viele Therapeuten führen Wartelisten oder bieten kurzfristige Termine an. Es lohnt sich, mehrere Praxen in der Umgebung anzufragen.
– Terminservicestellen der Kassenärztlichen Vereinigungen nutzen: Diese helfen, zeitnah ein Erstgespräch bei einem Kassentherapeuten zu bekommen.
– Private Praxen in Betracht ziehen: In Privatpraxen gibt es oft kürzere Wartezeiten. Gesetzlich Versicherte können unter bestimmten Bedingungen eine Kostenerstattung bei der Krankenkasse beantragen.
– Flexible Therapieangebote nutzen: Neben klassischen Sitzungen vor Ort kann auch eine Online-Therapie eine kurzfristige Alternative sein.`,
          },
          {
            question: "Was darf Psychotherapie kosten?",
            answer: `Die Kosten für Psychotherapie sind je nach Versicherungsart und Abrechnungsmethode unterschiedlich:

– Gesetzliche Krankenversicherung (GKV): Die Kosten werden nach dem einheitlichen Bewertungsmaßstab (EBM) festgelegt und vollständig von der Krankenkasse übernommen, wenn die Therapie bei einem zugelassenen Psychotherapeuten erfolgt.
– Private Krankenversicherung (PKV): Die Abrechnung erfolgt nach der Gebührenordnung für Psychotherapeuten (GOP). Eine 50-minütige Sitzung kostet in der Regel zwischen 100 und 170 €, abhängig vom Steigerungsfaktor und der Therapieform.
– Selbstzahler: Die Kosten entsprechen denen der privaten Abrechnung und können je nach Steigerungsfaktor variieren. Beim 3,5-fachen Satz der GOP kostet eine Sitzung etwa 150 bis 170 €.

Zusätzliche Kosten können für Diagnostik oder spezielle Testverfahren anfallen.`,
          },
          {
            question: "Wird eine Psychotherapie von der Krankenkasse bezahlt?",
            answer: `Ja, gesetzliche Krankenkassen übernehmen die Kosten einer Psychotherapie, wenn:

– eine psychische Erkrankung mit Krankheitswert vorliegt (z. B. Depression, Angststörung oder Suchterkrankung).
– die Behandlung durch einen approbierten Therapeuten mit Kassenzulassung erfolgt.
– ein Antrag auf Kostenübernahme gestellt und genehmigt wurde.`,
          },
          {
            question: "Psychotherapie – was übernimmt die Krankenkasse?",
            answer: `Die Kostenübernahme der Krankenkasse für eine Psychotherapie umfasst:

– Psychotherapeutische Sprechstunde (mindestens 50 Minuten)
– Probatorische Sitzungen (2 bis 4, bei Kindern und Jugendlichen 2 bis 6)
– Akuttherapie (bis zu 12 Sitzungen)
– Kurzzeittherapie (bis zu 24 Sitzungen)
– Langzeittherapie (je nach Verfahren bis zu 60, 80, 100 oder 300 Sitzungen)

Nicht übernommen werden Paartherapien, eine Erziehungsberatung oder Behandlungen zur Persönlichkeitsentwicklung.`,
          },
        ]}
      />
    </>
  );
};

export default page;
