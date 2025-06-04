import React from "react";
import Hero_Section from "../components/Hero_Section";
import Kooperationen_Service from "../components/Kooperationen_Service";

const page = () => {
  return (
    <>
      <Hero_Section
        title="Praxis für Psychotherapie in Köln:"
        subtitle="unsere Kooperationspartner"
        points={[]}
        buttonText=""
        buttonLink="/"
        imageSrc="/images/partners-hero.png"
      />

      <Kooperationen_Service
        title="APK Soziale Dienste gGmbH"
        description={[
          "Die APK Soziale Dienste gGmbH mit Sitz in Hürth ist ein im Rhein-Erft-Kreis seit vielen Jahren etabliertes gemeinnütziges Dienstleistungsunternehmen primär für psychisch kranke und behinderte Menschen und deren Angehörige.",
          "Auftrag und Ziel der APK sind eine personenzentrierte, gemeindenahe Unterstützung und Förderung sowie die Ermöglichung von Teilhabe.",
          "Die APK hält zwei Sozialpsychiatrische Zentren in Hürth und Bergheim mit den Bausteinen Beratung, Tagesstruktur, ambulant betreutes Wohnen und Peerberatung vor.",
          "Zu den weiteren Angeboten zählen eine Besondere Wohnform mit 18 Plätzen in Hürth, die Beratungsstellen KoKoBe und EUTB, der Integrationsfachdienst (IFD), Jobcoaching und Jugend-/Familienhilfe.",
        ]}
        listItems={[]}
        bgColor="bg-[#fffbf2]"
        buttonText="Mehr erfahren"
        buttonLink="https://www.apk-soziale-dienste.de/"
        imageSrc="/images/apk.jpeg"
        reverse={false}
      />
      <Kooperationen_Service
        title="Diakonie Michaelshoven Leben mit Behinderungen gGmbH"
        description={[
          "Die Diakonie Michaelshoven Leben mit Behinderungen gGmbH ist ein soziales Unternehmen und ermöglicht Menschen mit intellektueller und/oder psychischer Beeinträchtigung in Köln und Region ein selbstbestimmtes Leben verbunden mit sozialer Teilhabe.",
        ]}
        listItems={[]}
        bgColor=""
        buttonText="Mehr erfahren"
        buttonLink="https://www.diakonie-michaelshoven.de/"
        imageSrc="/images/DM_Logo_4c.png"
        reverse={true}
      />
      <Kooperationen_Service
        title="Hochschule Fresenius"
        description={[
          "Die Hochschule Fresenius ist eine private, staatlich anerkannte und vom Wissenschaftsrat akkreditierte Hochschule für Angewandte Wissenschaften.",
          "Die Praxis für Psychotherapie Dr. Marhenke & Kollegen bietet Studierenden vom Bachelorstudiengang Psychologie regelmäßig Praktika im Rahmen der Berufsqualifizierenden Tätigkeit I (BQT I) und zum Orientierungspraktikum an.",
        ]}
        listItems={[]}
        bgColor="bg-[#fffbf2]"
        buttonText="Mehr erfahren"
        buttonLink="https://www.hs-fresenius.com/"
        imageSrc="/images/client-logo-1.png"
        reverse={false}
      />

      <Kooperationen_Service
        title="IF Weinheim"
        description={[
          "Das IF Weinheim (Institut für systemische Ausbildung und Entwicklung) ist ein staatlich anerkanntes Ausbildungsinstitut für systemische Psychotherapie.",
          "Unsere Praxis ist in Kooperation mit der IF Weinheim eine staatlich anerkannte Lehrpraxis für Psychotherapeutinnen in Aus- und Weiterbildung.",
        ]}
        listItems={[]}
        bgColor=""
        buttonText="Mehr erfahren"
        buttonLink="https://if-weinheim.de/systemische-ausbildungen/"
        imageSrc="/images/partner-logo-5.png"
        reverse={true}
      />
      <Kooperationen_Service
        title="Institut für Psychotherapie und Psychoanlayse Rhein-Eifel"
        description={[
          "Das Institut für Psychotherapie und Psychoanlayse Rhein-Eifel GmbH ist ein staatlich anerkanntes Ausbildungsinstitut für Tiefenpsychologie, Psychoanalyse, Systemische Psychotherapie und Verhaltenstherapie.",
          "Unsere Praxis ist in Kooperation mit dem Rhein-Eifel-Institut eine staatlich anerkannte Lehrpraxis für Psychotherapeutinnen in Aus- und Weiterbildung.",
        ]}
        listItems={[]}
        bgColor="bg-[#fffbf2]"
        buttonText="Mehr erfahren"
        buttonLink="https://rhein-eifel-institut.de/"
        imageSrc="/images/client-logo-2.png"
        reverse={false}
      />
      <Kooperationen_Service
        title="Köln-Bonner Akademie für Psychotherapie"
        description={[
          "Die Köln-Bonner Akademie für Psychotherapie ist ein staatlich anerkanntes Ausbildungsinstitut für Psychotherapie in Bonn.",
          "Unsere Praxis ist in Kooperation mit der KBAP eine staatlich anerkannte Lehrpraxis für Psychotherapeutinnen in Aus- und Weiterbildung",
        ]}
        listItems={[]}
        bgColor=""
        buttonText="Mehr erfahren"
        buttonLink="https://www.valeara-akademie.de/institute/psychotherapie-kbap"
        imageSrc="/images/kbap.png"
        reverse={true}
      />
      <Kooperationen_Service
        title="Köln-Bonner Akademie für Verhaltenstherapie"
        description={[
          "Die Köln-Bonner Akademie für Verhaltenstherapie (KBAV) ist ein staatlich anerkanntes Ausbildungsinstitut für Verhaltenstherapie in Bonn.",
          "Unsere Praxis ist in Kooperation mit der KBAV eine staatlich anerkannte Lehrpraxis für Psychotherapeutinnen in Aus- und Weiterbildung",
        ]}
        listItems={[]}
        bgColor="bg-[#fffbf2]"
        buttonText="Mehr erfahren"
        buttonLink="https://www.valeara-akademie.de/institute/verhaltenstherapie-kbav"
        imageSrc="/images/partner-logo-3.png"
        reverse={false}
      />
      <Kooperationen_Service
        title="Psy-RENA"
        description={[
          "Psychosomatische Reha-Nachsorge (Psy-RENA) ist ein Angebot für Menschen, die eine stationäre psychosomatische Rehabilitation abgeschlossen haben oder kurz vor der Entlassung sind.",
          "Der Zweck von Psy-RENA ist die Integration und Vervollständigung der Ziele, die Sie in der Reha erreicht haben. Der Kostenträger von Psyrena ist i. d. R. die Deutsche Rentenversicherung.",
        ]}
        listItems={[]}
        bgColor=""
        buttonText="Mehr erfahren"
        buttonLink="https://psyrena.de/"
        imageSrc="/images/partner-logo-4.png"
        reverse={true}
      />
    </>
  );
};

export default page;
