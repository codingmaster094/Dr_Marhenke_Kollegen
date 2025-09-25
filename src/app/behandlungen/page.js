import React from "react";
import Hero_Section from "../components/Hero_Section";
import ServiceSection from "../components/ServiceSection";
import Pattern_section from "../components/Pattern_section";
import Kooperationspartner from "../components/Kooperationspartner";
import ReviewsData from "../ReviewsData/page";
import Alldata from "../utils/AllDataFetxh";
import SEO_schema from "../components/SEO_schema";
const page = async() => {
  let behandlungenData;
    try {
      behandlungenData = await Alldata("/behandlungen");
    } catch (error) {
      console.error("Error fetching data:", error);
      return <div>Error loading data.</div>;
    }
  
    if (!behandlungenData) {
      return <div>No data available.</div>;
    }
  return (
    <>
    {await SEO_schema({ slug: "/behandlungen" })}
      <Hero_Section
        title={behandlungenData.acf.leistungen_hero_main_title}
        subtitle={""}
        points={behandlungenData.acf.leistungen_hero_content_listing}
        BTN={behandlungenData.acf.leistungen_hero_button}
        // buttonLink="/kontakt"
        imageSrc={behandlungenData.acf.leistungen_hero_image.url}
      />

      <ServiceSection
        behandlungenServiceSection1={
          behandlungenData.acf.leistungen_all_sub_services_1
        }
      />
      <Pattern_section
        title={behandlungenData.acf.leistungen_anfrage_1_main_title}
        content={behandlungenData.acf.leistungen_anfrage_1_content}
        btn={behandlungenData.acf.leistungen_anfrage_1_button}
      />
      <ServiceSection
        behandlungenServiceSection2={
          behandlungenData.acf.leistungen_all_sub_services_2
        }
      />

      <Kooperationspartner
        title={behandlungenData?.acf.leistungen_partners_main_title}
        logosData={behandlungenData.acf.leistungen_all_partners}
        BTN={behandlungenData.acf.leistungen_partners_button}
      />

      <Pattern_section
        title={behandlungenData.acf.leistungen_anfrage_3_main_title}
        content={behandlungenData.acf.leistungen_anfrage_3_content}
        btn={behandlungenData.acf.anfrage_button_2}
      />
      <ReviewsData />

    </>
  );
};

export default page;
