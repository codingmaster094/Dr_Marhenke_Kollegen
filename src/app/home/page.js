import React from "react";
import Hero_Section from "../components/Hero_Section";
import Psychotherapeuten from "../components/Psychotherapeuten";
import Psychotherapie_Praxis from "../components/Psychotherapie_Praxis";
import Kooperationspartner from "../components/Kooperationspartner";
import Pattern_section from "../components/Pattern_section";
import Team_section from "../components/Team_section";
import Review_section from "../components/Review_section";
import FAQ_section from "../components/FAQ_section";
import Alldata from "../utils/AllDataFetxh";
import Contact_form from "../components/Contact_form";

const page = async() => {
  let HomePageData;
  try {
    HomePageData = await Alldata("/start");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!HomePageData) {
    return <div>No data available.</div>;
  }

  return (
    <>
      <Hero_Section
        title={HomePageData.acf.hero_title_1}
        subtitle={HomePageData.acf.home_hero_title}
        points={HomePageData.acf.home_hero_content}
        BTN={HomePageData.acf.home_hero_button}
        // buttonLink="/kontakt"
        imageSrc={HomePageData.acf.home_hero_image.url}
        videoSrc={HomePageData.acf.upload_video}
      />
      <Psychotherapeuten
        image={HomePageData.acf.philosophie_image.url}
        title={HomePageData.acf.philosophie_title}
        content={HomePageData.acf.philosophie_content}
        postsData={HomePageData.acf.behandlungen_post}
      />
      <Pattern_section
        title={HomePageData.acf.anfrage_ttile}
        content={HomePageData.acf.anfrage_content}
        btn={HomePageData.acf.anfrage_button}
      />
      <Psychotherapie_Praxis
        title={HomePageData.acf.praxis_title}
        description={HomePageData.acf.praxis_content}
        sliderData={HomePageData.acf.praxis_standort_data}
        imageSrc={HomePageData?.acf.praxis_image.url}
        reverse={true}
      />
      <Kooperationspartner
        title={HomePageData?.acf.kooperationen_title}
        logosData={HomePageData.acf.kooperationen_company_logo}
        BTN={HomePageData.acf.kooperationen_button}
      />
      <Pattern_section
        title={HomePageData.acf.anfrage_ttile_2}
        content={HomePageData.acf.anfrage_content_2}
        btn={HomePageData.acf.anfrage_button_2}
      />
      <Team_section
        title={HomePageData.acf.vorteile_title}
        content={HomePageData.acf.vorteile_content}
        bg_image={HomePageData?.acf.vorteile_image.url}
      />
      <Review_section
        title={HomePageData.acf.home_bewertungen_title}
        des={HomePageData.acf.home_bewertungen_description}
        bg=""
      />
      <FAQ_section
        title={HomePageData.acf.faq_ttile}
        faqs={HomePageData.acf.faq_content}
      />
    </>
  );
};

export default page;
