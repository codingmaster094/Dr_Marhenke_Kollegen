import React from "react";
import Hero_Section from "../components/Hero_Section";
import Psychotherapie_Praxis from "../components/Psychotherapie_Praxis";
import Kooperationspartner from "../components/Kooperationspartner";
import About_Service_section from "../components/About_Service_section";
import Map from "../Map/page";
import Uber_AboutSection from "../components/Uber_AboutSection";
import BlogComponent from "../components/BlogComponent";

const page = () => {
  return (
    <>
      <Hero_Section
        title="Psychotherapie in Köln:"
        subtitle="individuelle Unterstützung in einer wertschätzenden Umgebung"
        points={[
          "Moderne Physiotherapie-Praxis an 3 Standorten in Köln – Rodenkirchen, Südstadt & Hürth",
          "Erfahrenes Team aus approbierten Psychotherapeuten",
          "Individuelle Therapieangebote für Mitglieder der GKV, PKV & DRV",
        ]}
        buttonText="Jetzt Termin vereinbaren"
        buttonLink="/kontakt"
        imageSrc="/images/about-us-hero.png"
      />
      <About_Service_section
         title="Das sind Dr. Marhenke & Kollegen"
         description={[
          "Unsere Praxis für Psychotherapie in Köln steht für eine moderne, wissenschaftlich fundierte und zugleich einfühlsame Behandlung. Unser Ziel ist es, Menschen in schwierigen Lebenssituationen individuell zu begleiten und gemeinsam nachhaltige Lösungswege zu finden.",
         "Was im 20XX als kleine Praxis begann, hat sich über die Jahre zu einem etablierten Zentrum für psychotherapeutische Behandlung entwickelt. Wir bieten ein breites Spektrum an Leistungen – von Einzel- und Gruppentherapie über Paar- und Sexualtherapie bis hin zu Online-Therapie und Psy-RENA-Nachsorge."
        ]}
        listItems={[]}
        bgColor="bg-[#FFF2CE]"
        imageSrc="/images/about-img-1.png"
        reverse={false}
      />

      <Psychotherapie_Praxis 
          title={`Das ist unsere Praxis für
                  Psychotherapie in Köln`}
          description={[
            "Unsere Psychotherapie-Praxis finden Sie in Köln an 3 Standorten: in Rodenkirchen, in der Südstadt und in Hürth. Durch ihre zentrale Lage, eine Anbindung an öffentliche Verkehrsmittel und Parkmöglichkeiten vor Ort erreichen Sie uns einfach und bequem.",
            "In unserer Praxis bieten Ihnen eine sichere und vertrauensvolle Umgebung für Ihre Therapie. Helle und freundliche Räume in einem klaren und modern Ambiente sorgen für eine angenehme Atmosphäre, in der Sie sich wohl und gut aufgehoben fühlen."
          ]}
          listItems={[]}
          bgColor=""
          imageSrc="/images/about-img-3.png" 
          reverse={true}
      />
      <Map/>
      <Kooperationspartner />
     <Uber_AboutSection/>
     <BlogComponent/>
    </>
  );
};

export default page;
