import Hero_Section from "@/app/components/Hero_Section"
import About_Service_section from "@/app/components/About_Service_section";

const page = () => {
return (
    <>
       <Hero_Section
        title="Dr. Marhenke &"
        subtitle="Kollegen Psychologische/r Psychotherapeut/in"
        points={[
          "Approbierte Psychotherapeut/in ab April 2025",
          "Teilzeit – Stundenzahl nach Vereinbarung",
          "Unbefristete Anstellung",
        ]}
        buttonText="Jetzt bewerben"
        buttonLink="/"
        imageSrc="/images/job-ads-hero.png"
      />
     <About_Service_section
         title="Das zeichnet die Arbeit bei uns aus:"
         description={[]}
        listItems={[
            "Gute Infrastruktur in modern eingerichteter Praxis mit großzügigen Räumlichkeiten",
            "Sehr gute Erreichbarkeit mit öffentlichen Verkehrsmitteln",
            "Überdurchschnittliche, leistungsbezogene Bezahlung",
            "Unterstützung bei organisatorischen und inhaltlichen Fragen",
            ]}
        bgColor="bg-[#FFF2CE]"
        imageSrc="/images/job-ads-img-1.png"
        reverse={false}
      />
     <About_Service_section
         title="Vorausgesetzt werden:"
         description={[]}
        listItems={[
            "Approbation als Psychologische/r Psychotherapeut/in",
            "Arztregistereintrag",
            "Fachkunde im Richtlinienverfahren VT oder TP",
            "Zulassung zur Durchführung von Gruppentherapien",
            ]}
        bgColor=""
        imageSrc="/images/job-ads-img-2.png"
        reverse={true}
      />
    </>
)
}

export default page