import React from "react";
import Hero_Section from "../components/Hero_Section";
import Psychotherapie_Praxis from "../components/Psychotherapie_Praxis";
import Kooperationspartner from "../components/Kooperationspartner";
import About_Service_section from "../components/About_Service_section";
import Map from "../Map/page";
import Uber_AboutSection from "../components/Uber_AboutSection";
import BlogComponent from "../components/BlogComponent";
import Alldata from "../utils/AllDataFetxh";
import Custom_Post from "../utils/CustomPost";
import POST_GET from "../utils/PostsGet";
const page = async() => {
  let ueberunsData;
  let Doctor_listData;
  let PostData;
  try {
    ueberunsData = await Alldata("/ueber-uns");
    Doctor_listData = await Custom_Post("/team");
    PostData = await POST_GET("/stellenausschreibung");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!ueberunsData || !Doctor_listData || !PostData) {
    return <div>No data available.</div>;
  }
  return (
    <>
      <Hero_Section
        title={ueberunsData.acf.hero_title_1}
        subtitle={ueberunsData.acf.ueber_uns_hero_main_title}
        points={ueberunsData.acf.ueber_uns_hero_content_listing}
        BTN={ueberunsData.acf.ueber_uns_hero_button}
        // buttonLink="/kontakt"
        imageSrc={ueberunsData.acf.ueber_uns_hero_image.url}
        videoSrc={""}
      />

      <Psychotherapie_Praxis
        title={ueberunsData.acf.ueber_uns_standorte_main_title}
        description={ueberunsData.acf.ueber_uns_standorte_content}
        sliderData={ueberunsData.acf.ueber_uns_section_standort_data}
        imageSrc={ueberunsData?.acf.ueber_uns_standorte_image.url}
        reverse={false}
      />
      <Map
        title={ueberunsData?.acf.hero_title_1}
        locations={ueberunsData?.acf.locations}
      />
      <Kooperationspartner
        title={ueberunsData?.acf.ueber_uns_partners_main_title}
        logosData={ueberunsData.acf.ueber_uns_all_partners}
        BTN={ueberunsData.acf.ueber_uns_partners_button}
      />
      <Uber_AboutSection
        title={ueberunsData.acf.ueber_uns_team_main_title}
        content={ueberunsData.acf.ueber_uns_team_content}
        BTN={ueberunsData.acf.ueber_uns_team_mehr_anzeigen_button_label}
        Doctore_list={Doctor_listData}
      />
      <BlogComponent PostData={PostData} />
    </>
  );
};

export default page;
