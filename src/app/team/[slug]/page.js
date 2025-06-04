import Hero_Section from "@/app/components/Hero_Section";
import About_Service_section from "@/app/components/About_Service_section";

const page = async ({ params }) => {
  const { slug } = params;
  const blogPosts = [
    {
      id: 1,
      title: "<span>Dr. Tristan Marhenke</span>",
      image: "/images/team-member-1.png",
      link: "/tristan-marhenke",
      description: ["Psychologischer Psychotherapeut", "Praxisinhaber"],
      content_title: "Über Dr. Tristan Marhenke",
      content: `<p>Dr. phil. Tristan Marhenke ist Psychologe und approbierter Psychologischer Psychotherapeut mit der Fachkunde im Richtlinienverfahren Verhaltenstherapie. Er ist Mitglied der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der Kassenärztlichen Vereinigung Nordrhein.</p>
      <p>Dr. Marhenke forscht und publiziert bei sexual- und paartherapeutischen Fragestellungen und ist zertifizierter Systemischer Paar- und Sexualtherapeut der Deutschen Gesellschaft für Sexualforschung (DGfS). Herr Dr. Marhenke engagiert sich sowohl in der studentischen Lehre an der Hochschule Fresenius als auch in der Ausbildung für PsychotherapeutInnen in Ausbildung für die Köln-Bonner Akademie für Verhaltenstherapie (kbav) und das Rhein-Eifel-Institut. Er ist seit 2016 in eigener Privat- und Kassenarztpraxis psychotherapeutische tätig.</p>`,
    },
    {
      id: 2,
      title: "<span>M.Sc. Aida Marhenke</span>",
      image: "/images/team-member-2.png",
      link: "/aida-marhenke",
      description: ["Psychologische Psychotherapeutin"],
      content_title: "Über M.Sc. Aida Marhenke",
      content: `<p>M.Sc. Aida Marhenke ist Psychologin und Psychotherapeutin mit der Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie verfügt über umfassende therapeutische Erfahrungen im klinisch-psychiatrischen und ambulanten Bereich. Unter anderem arbeitete sie als klinische Psychologin in der LVR-Klinik für Psychiatrie, Psychotherapie und Psychosomatik in Viersen und war tätig in der Allgemeinen Psychiatrie der LVR-Klinik in Düren.</p>
      <p>Aida Marhenke befindet sich in Weiterbildung zur Trauma-fokussierten Therapeutin und zeichnet sich durch eine wertschätzende und von Akzeptanz geprägt Grundhaltung aus.</p>`,
    },
    {
      id: 3,
      title: "<span>M.Sc. Roja Jansen</span>",
      image: "/images/team-member-3.png",
      link: "/roja-jansen",
      description: ["Psychologische Psychotherapeutin"],
      content_title: "Über M.Sc. Roja Jansen",
      content: `<p>M.Sc. Roja Jansen ist Psychologin und approbierte psychologische Psychotherapeutin mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie ist Mitglied in der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der kassenärztlichen Vereinigung Nordrhein.</p>
      <p>Frau Jansen verfügt über langjährige Erfahrung in der Psychosomatischen Rehabiliation und über umfassende therapeutische Kenntnisse im ambulanten sowie stationären Bereich.</p>`,
    },
    {
      id: 4,
      title: "<span>M.Sc. Helen Limberg</span>",
      image: "/images/4.jpg",
      link: "/helen-limberg",
      description: ["Psychologische Psychotherapeutin"],
      content_title: "Über M.Sc. Helen Limberg",
      content: `<p>M.Sc. Helen Limberg ist Psychologin und Psychologische Psychotherapeutin mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie verfügt über Erfahrungen im ambulanten und stationären Setting.</p>
      <p>Frau Limberg legt viel Wert auf eine empathische und wertschätzende Arbeit. Ihr Ziel ist es, dass die Patienten/innen wieder Hoffnung schöpfen, die eigenen Probleme nicht nur angehen zu können, sondern auch an ihnen zu wachsen.</p>`,
    },
    {
      id: 5,
      title: "<span>M.Sc. Mara Schraft</span>",
      image: "/images/5.jpg",
      link: "/mara-schraft",
      description: ["Psychologische Psychotherapeutin (i. A.)"],
      content_title: "Über M.Sc. Mara Schraft",
      content: `<p>Frau M.Sc. Mara Schraft ist Psychologin und in der Ausbildung zur Psychologischen Psychotherapeutin mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie hat lange auf einer Station für Neurodegenerative Erkrankungen und Gerontopsychiatrie des Universitätsklinikums Bonn gearbeitet und engagiert sich als Pädagogische Fachkraft in der ambulanten Familienhilfe.</p>
      <p>Frau Schraft zeichnet sich durch eine wertschätzende und von Akzeptanz geprägt Grundhaltung aus.</p>`,
    },
    {
      id: 6,
      title: "<span>M.Sc. Nikolai Mennicken</span>",
      image: "/images/6.jpg",
      link: "/nikolai-mennicken",
      description: ["Psychologischer Psychotherapeut"],
      content_title: "Über M.Sc. Nikolai Mennicken",
      content: `<p>Herr M.Sc. Nikolai Mennicken ist Psychologe und approbierter Psychologischer Psychotherapeut mit der Fachkunde im Richtlinienverfahren Verhaltenstherapie. Er ist Mitglied der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der Kassenärztlichen Vereinigung Nordrhein.</p>
      <p>Herr Mennicken hat lange auf einer allgemeinpsychiatrischen Station des Universitätsklinikums Bonn gearbeitet und sich engagiert als Sozialpädagogischer Familienhelfer mit dem Schwerpunkt der ambulanten Betreuung von Familien mit psychisch erkrankten Elternteilen.</p>`,
    },
    {
      id: 7,
      title: "<span>M.Sc. Susanne Kohns</span>",
      image: "/images/7.jpg",
      link: "/susanne-kohns",
      description: ["Psychologische Psychotherapeutin"],
      content_title: "Über M.Sc. Susanne Kohns",
      content: `<p>Frau Susanne Kohns ist Psychologin und approbierte psychologische Psychotherapeutin mit der Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie ist Mitglied in der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der kassenärztlichen Vereinigung Nordrhein.</p>
      <p>Frau Kohns hat lange in der Klinik für Psychiatrie und Psychotherapie der Main-Kinzig-Klinik gearbeitet und in der Limes Schlossklinik eine beziehungsorientierte Psychotherapie und hochindividualisierte Behandlung durchgeführt.</p>`,
    },
    {
      id: 8,
      title: "<span>M.Sc. Sophie Volz</span>",
      image: "/images/8.jpg",
      link: "/sophie-volz",
      description: ["Psychologische Psychotherapeutin (i. A.)"],
      content_title: "Über M.Sc. Sophie Volz",
      content: `<p>Frau M.Sc. Sophie Volz ist Psychologin und in der Ausbildung zur Psychologischen Psychotherapeutin mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie hat Ihren Master in Forensic Psychology an der Universität Maastricht absolviert und verfügt über Erfahrung im stationären und ambulanten therapeutischen Bereich.</p>
      <p>Frau Volz zeichnet sich durch eine wertschätzende und von Akzeptanz geprägt Grundhaltung aus.</p>`,
    },
    {
      id: 9,
      title: "<span>M.Sc. Ambra Mueller</span>",
      image: "/images/9.jpg",
      link: "/ambra-mueller",
      description: ["Psychologische Psychotherapeutin"],
      content_title: "Über M.Sc. Ambra Mueller",
      content: `<p>Frau M.Sc. Ambra Mueller ist Psychologin und Psychologische Psychotherapeutin mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie hat langjährige Erfahrung gesammelt in der Psychotraumatologie des Alexianer Krankenhauses in Krefeld und in der Neurologischen Rehabilitation.</p>
      <p>Frau Mueller zeichnet sich durch eine wertschätzende und von Akzeptanz geprägt Grundhaltung aus</p>`,
    },
    {
      id: 10,
      title: `<span>Dr. rer. nat.</span> Annegret Meermeier`,
      image: "/images/10.jpg",
      link: "/annegret-meermeier",
      description: ["Psychologische Psychotherapeutin"],
      content_title: "ÜÜber Dr. rer. nat. Annegret Meermeier",
      content: `<p>Frau Dr. Meermeier ist Psychologin und approbierte psychologische Psychotherapeutin mit der Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie ist Mitglied in der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der kassenärztlichen Vereinigung Nordrhein. Frau Dr. Meermeier hat lange in der Uniklinik Köln gearbeitet und ist spezialisiert auf die Behandlung von Menschen mit Störungen im Autismus-Spektrum.</p>
      <p>Neben der psychotherapeutischen Tätigkeit war Frau Dr. Meermeier in internationale Forschungskooperationen der Boston University eingebunden und schloss ihren Promotion zum Dr. rer. nat. mit „magna cum laude“ ab. Frau Dr. Meermeier arbeitet hochindividualisiert und beziehungsorientiert.</p>`,
    },
    {
      id: 11,
      title: "<span>M.Sc. Charlotte Friederike </span> Korsch",
      image: "/images/11.jpg",
      link: "/friederike-korsch",
      description: ["Psychologische Psychotherapeutin"],
      content_title: "Über M.Sc. Charlotte Friederike Korsch",
      content: `<p>Frau M.Sc. Korsch ist Psychologin und approbierte Psychologische Psychotherapeutin mit der Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie ist Mitglied der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der Kassenärztlichen Vereinigung Nordrhein.</p>
      <p>Frau Korsch ist langjährig tätig als Psychologin auf einer Station für chronisch kranke Kinder und erfahren in der Behandlung von Menschen mit psychosomatischen Störungsbildern.</p>`,
    },
    {
      id: 12,
      title: "<span>Dipl.-Psych. Kerstin Höhmann</span>",
      image: "/images/_12.jpg",
      link: "/kerstin-hoehmann",
      description: ["Psychologische Psychotherapeutin"],
      content_title: "Über Dipl.-Psych. Kerstin Höhmann",
      content: `<p>Dipl.-Psych. Kerstin Höhmann ist Psychologin und approbierte psychologische Psychotherapeutin mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie ist Mitglied in der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der kassenärztlichen Vereinigung Nordrhein.</p>
      <p>Frau Höhmann verfügt über langjährige Erfahrung in der Psychosomatischen Rehabiliation und über umfassende therapeutische Kenntnisse im ambulanten sowie stationären Bereich.</p>`,
    },
    {
      id: 13,
      title: "<span>M.Sc. Florian Kuhlmann</span>",
      image: "/images/13.jpg",
      link: "/florian-kuhlmann",
      description: ["Psychologischer Psychotherapeut (i. A.)"],
      content_title: "Über M.Sc. Florian Kuhlmann",
      content: `<p>Herr M.Sc. Florian Kuhlmann ist Psychologe und in der Ausbildung zum Psychologischen Psychotherapeuten mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Er hat langjährige Erfahrung gesammelt in der Klinik für Psychiatrie und Psychotherapie am Universitätsklinikum Gießen und auf der Station für Klinische Psychoonkologie am Universitätsklinikum Köln.</p>
      <p>Herr Kuhlmann zeichnet sich durch eine wertschätzende und von Akzeptanz geprägt Grundhaltung aus.</p>`,
    },
    {
      id: 14,
      title: "<span>M.Sc. Jana Jamuna </span> Halscheid",
      image: "/images/14.jpg",
      link: "/jana-jamuna-halscheid",
      description: ["Psychologische Psychotherapeutin (i. A.)"],
      content_title: "Über M.Sc. Jana Jamuna Halscheid",
      content: `<p>Frau M.Sc. Jamuna Halscheid ist Psychologin und in der Ausbildung zur Psychologischen Psychotherapeutin mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie hat ihren Master an der Westfälischen Wilhelms-Universität Münster absolviert und verfügt über Erfahrungen in der Neuropädiatrie sowie in der Behandlung von Menschen mit ADHS.</p>
      <p>Frau Halscheid zeichnet sich durch eine wertschätzende und von Akzeptanz geprägt Grundhaltung aus.</p>`,
    },
    {
      id: 15,
      title: "<span>M.Sc. Pauline Bitsch</span>",
      image: "/images/15.jpg",
      link: "/pauline-bitsch",
      description: ["Psychologische Psychotherapeutin (i. A.)"],
      content_title: "Über M.Sc. Pauline Bitsch",
      content: `<p>Frau M.Sc. Pauline Bitsch ist Psychologin und in der Ausbildung zur Psychologischen Psychotherapeutin mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie arbeitet im Zentrum für Seelische Gesundheit in Marienheide und ist engagiert für den Kinderschutz in der Medizin.</p>
      <p>Frau Bitsch zeichnet sich durch eine wertschätzende und von Akzeptanz geprägt Grundhaltung aus.</p>`,
    },
    {
      id: 16,
      title: "<span>B.A. Jill Jannasch</span>",
      image: "/images/16.jpg",
      link: "/jill-jannasch",
      description: ["Soziotherapeutin"],
      content_title: "Über B.A. Jill Jannasch",
      content: `<p>Frau Jannasch ist ausgebildete Systemische Therapeutin und Soziotherapeutin. Sie verfügt über langjährige Erfahrung als Gruppen- und Bezugstherapeutin für Menschen mit Sucht- und Doppeldiagnosen. Sie ist erfahren in der Behandlung von Menschen mit sozialpsychiatrischem Behandlungsbedarf.</p>`,
    },
    {
      id: 17,
      title: "<span>M.Sc. Franka Rossel</span>",
      image: "/images/17.jpg",
      link: "/franka-rossel",
      description: ["Psychologische Psychotherapeutin (i. A.)"],
      content_title: "Über M.Sc. Franka Rossel",
      content: `<p>Frau M.Sc. Franka Rossel ist Psychologin und in der Ausbildung zur Psychologischen Psychotherapeutin mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie arbeitete in der Asklepios Klinik Sankt Augustin sowie in der Median Klink Tönisstein.</p>
      <p>Frau Rossel zeichnet sich durch eine wertschätzende und von Akzeptanz geprägt Grundhaltung aus.</p>`,
    },
    {
      id: 18,
      title: "<span>Dipl.-Psych. Georg Haarhaus</span>",
      image: "/images/18.jpg",
      link: "/georg-haarhaus",
      description: ["Psychologischer Psychotherapeut"],
      content_title: "Über Dipl.-Psych. Georg Haarhaus",
      content: `<p>Herr Haarhaus ist Psychologe und Psychologischer Psychotherapeut mit Gesprächspsychotherapeutischem Schwerpunkt. Er verfügt über langjährige Erfahrung in der Psychosomatischen Rehabilitation und über umfassende therapeutische Kenntnisse im ambulanten sowie stationären Bereich.</p>`,
    },
    {
      id: 19,
      title: "<span>MFA Cansel Gökyar</span>",
      image: "/images/19.jpg",
      link: "/cansel-goekyar",
      description: ["Praxismanagerin"],
      content_title: "Über MFA Cansel Gökyar",
      content: `<p>Frau Gökyar ist in der Praxis als Ihre Ansprechpartnerin für Anfragen und Rückfragen zu Psychotherapieplätzen tätig. Sie ist Ihre Ansprechpartnerin für jegliche organisatorische Angelegenheiten rund um den Praxis- und Therapieablauf – z. B. zum die Terminkoordination oder auch die Gruppenorganisation. Frau Gökyar ist ausgebildete Medizinische Fachangestellte.</p>`,
    },
    {
      id: 20,
      title: "<span>M.Sc. Sarah Krain</span>",
      image: "/images/20.jpg",
      link: "/sarah-krain",
      description: ["Psychologische Psychotherapeutin"],
      content_title: "Über M.Sc. Sarah Krain",
      content: `<p>M.Sc. Sarah Krain ist Psychologin und approbierte psychologische Psychotherapeutin mit Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie ist Mitglied in der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der kassenärztlichen Vereinigung Nordrhein.</p>
      <p>Frau Krain verfügt über langjährige Erfahrung in der Beratung von Menschen mit Psychischem Unterstützungsbedarf und über umfassende therapeutische Kenntnisse im ambulanten sowie stationären Bereich.</p>`,
    },
    {
      id: 21,
      title: "<span>M.Sc. Alina Ostermann-Myrau</span>",
      image: "/images/location-img-5.webp",
      link: "/alina-ostermann-myrau",
      description: ["Psychologische Psychotherapeutin"],
      content_title: "Über M.Sc. Alina Ostermann-Myrau",
      content: `<p>Frau Ostermann-Myrau ist Psychologin und approbierte psychologische Psychotherapeutin mit der Fachkunde im Richtlinienverfahren Verhaltenstherapie. Sie ist Mitglied in der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der kassenärztlichen Vereinigung Nordrhein.</p>
      <p>Frau Ostermann-Myrau hat lange im Kreiskrankenhaus Gummersbach gearbeitet sowie in der ambulanten psychotherapeutischen Versorgung in Leverkusen eine beziehungsorientierte Psychotherapie und hochindividualisierte Behandlung durchgeführt. Sie ist spezialisiert auf die Behandlung von Menschen mit Posttraumatischer Belastungsstörung.</p>`,
    },
    {
      id: 22,
      title: "<span>ZFA Yeliz Erdogmus</span>",
      image: "/images/21.jpg",
      link: "/yeliz-erdogmus",
      description: ["Praxismanagerin"],
      content_title: "Über ZFA Yeliz Erdogmus",
      content: `<p>Frau Erdogmus ist in der Praxis als Ihre Ansprechpartnerin für Anfragen und Rückfragen zu Psychotherapieplätzen tätig. Sie ist Ihre Ansprechpartnerin für jegliche organisatorische Angelegenheiten rund um den Praxis- und Therapieablauf – z. B. die Terminkoordination oder auch die Gruppenorganisation.</p>
      <p>Frau Erdogmus ist ausgebildete Zahnmedizinische Fachangestellte.</p>`,
    },
    {
      id: 23,
      title: "<span>B.Sc. (cand.) Jessica</span> Peters",
      image: "/images/22.jpg",
      link: "/jessica-peters",
      description: ["Praxismanagerin"],
      content_title: "Über B.Sc. (cand.) Jessica Peters",
      content: `<p>Frau Peters ist in der Praxis als Sprechstundenhilfe für allgemeine, organisatorische Bürotätigkeiten sowie für die Kommunikation mit den Patient*innen zuständig. Sie ist Ihre Ansprechpartnerin für jegliche organisatorische Angelegenheiten rund um den Praxis- und Therapieablauf – z. B. die Terminkoordination oder auch die Gruppenorganisation.</p>
      <p>Frau Peters studiert im Bachelor Psychologie an der Universität zu Köln.</p>`,
    },
    {
      id: 24,
      title: "<span>M.Sc. Joke Werner</span>",
      image: "/images/23.jpg",
      link: "/alina-ostermann-myrau-2",
      description: ["Psychologische Psychotherapeutin"],
      content_title: "Über M.Sc. Joke Werner",
      content: `Frau M.Sc. Joke Werner ist Psychologin und approbierte psychologische Psychotherapeutin für Erwachsene mit der Fachkunde Verhaltenstherapie. Sie verfügt sowohl über Erfahrungen im therapeutischen ambulanten als auch im stationären Setting.</p>
      <p>Frau Werner behandelte mit hochindividualisierten, intensivtherapeutischen Therapiekonzepten Patienten in der EOS-Klinik Münster, arbeitete im betreuten Wohnen und in der Spezialsprechstunde für Kinder mit Geschlechtsinkongruenz oder Geschlechtsdysphorie (trans*) sowie Variationen der geschlechtlichen Entwicklung (inter*) in der Kinder- und Jugendspsychiatrie der Uniklinik Münster.</p>
     <p>Frau Werner absolviert berufsbegleitend die Weiterbildung zu Kinder- und Jugendpsychotherapeutin. Sie ist Mitglied in der Psychotherapeutenkammer NRW und eingetragen in das Arztregister der kassenärztlichen Vereinigung Nordrhein.</p>`,
    },
  ];

  const getPostBySlug = (slug) => {
    return blogPosts.find((post) => post.link === `/${slug}`);
  };

  const post = getPostBySlug(slug);

  return (
    <>
      <Hero_Section
        title={post.title}
        subtitle=""
        points={post.description}
        buttonText=""
        buttonLink="/"
        imageSrc={"/images/team-hero.png"}
      />
      <About_Service_section
        title={post.content_title}
        description={post.content}
        listItems={[]}
        bgColor="bg-[#FFF2CE]"
        imageSrc={post.image}
        reverse={false}
      />
    </>
  );
};

export default page;
