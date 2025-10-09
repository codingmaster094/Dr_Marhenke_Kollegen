import React from "react";
import Hero_Section from "../components/Hero_Section";
import ServiceSection from "../components/ServiceSection";
import Pattern_section from "../components/Pattern_section";
import Kooperationspartner from "../components/Kooperationspartner";
import ReviewsData from "../ReviewsData/page";
import Alldata from "../utils/AllDataFetxh";
import SEO_schema from "../components/SEO_schema";
import generatePageMetadata from "../utils/generatePageMetadata";
const page = async () => {
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
      <SEO_schema slug="/behandlungen" />
      <Hero_Section
        title={behandlungenData.acf.leistungen_hero_main_title}
        subtitle={""}
        points={behandlungenData.acf.leistungen_hero_content_listing}
        BTN={behandlungenData.acf.leistungen_hero_button}
        // buttonLink="/kontakt"
        imageSrc={behandlungenData.acf.leistungen_hero_image.url}
        classes="pb-inner_spc"
      />

      <ServiceSection
        behandlungenServiceSection1={
          behandlungenData.acf.leistungen_all_sub_services_1
        }
        classes="pb-inner_spc"
      />
      <Pattern_section
        title={behandlungenData.acf.leistungen_anfrage_1_main_title}
        content={behandlungenData.acf.leistungen_anfrage_1_content}
        btn={behandlungenData.acf.leistungen_anfrage_1_button}
        classes="py-inner_spc"
      />
      <ServiceSection
        behandlungenServiceSection2={
          behandlungenData.acf.leistungen_all_sub_services_2
        }
        classes="pt-inner_spc"
      />

      {/* <Kooperationspartner
        title={behandlungenData?.acf.leistungen_partners_main_title}
        logosData={behandlungenData.acf.leistungen_all_partners}
        BTN={behandlungenData.acf.leistungen_partners_button}
        classes="py-inner_spc"
      /> */}

      <Pattern_section
        title={behandlungenData.acf.leistungen_anfrage_3_main_title}
        content={behandlungenData.acf.leistungen_anfrage_3_content}
        btn={behandlungenData.acf.anfrage_button_2}
        classes="py-inner_spc"
      />
      <ReviewsData classes="py-inner_spc" />

    </>
  );
};

export default page;

export async function generateMetadata() {
  return generatePageMetadata("/behandlungen", {
    title: "behandlungen",
    description: "behandlungen",
  });
}