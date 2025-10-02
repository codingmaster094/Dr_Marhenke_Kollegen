import React from "react";
import Hero_Section from "../components/Hero_Section";
import Psychotherapie_Praxis from "../components/Psychotherapie_Praxis";
import Kooperationspartner from "../components/Kooperationspartner";
import About_Service_section from "../components/About_Service_section";
import Uber_AboutSection from "../components/Uber_AboutSection";
import BlogComponent from "../components/BlogComponent";
import Alldata from "../utils/AllDataFetxh";
import Custom_Post from "../utils/CustomPost";
import MapPageClient from "../Map/page";
import ReviewsData from "../ReviewsData/page";
import POST_GET from "../utils/PostsGet";
import Praxis_section from "../components/Praxis_section";
import generatePageMetadata from "../utils/generatePageMetadata";
import SEO_schema from "../components/SEO_schema";
const page = async () => {
  let ueberunsData;
  let Doctor_listData;
  let PostData;
  let BlogData;
  try {
    ueberunsData = await Alldata("/ueber-uns");
    Doctor_listData = await Custom_Post("/team");
    PostData = await POST_GET("/stellenausschreibung");
    BlogData = await POST_GET("/ratgeber");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!ueberunsData || !Doctor_listData || !PostData || !BlogData) {
    return <div>No data available.</div>;
  }

  return (
    <>
        <SEO_schema slug="/ueber-uns" />
      <Hero_Section
        title={ueberunsData.acf.hero_title_1}
        subtitle={ueberunsData.acf.ueber_uns_hero_main_title}
        points={ueberunsData.acf.ueber_uns_hero_content_listing}
        BTN={ueberunsData.acf.ueber_uns_hero_button}
        // buttonLink="/kontakt"
        imageSrc={ueberunsData.acf.ueber_uns_hero_image.url}
        videoSrc={""}
      />

      <Praxis_section
        title={ueberunsData.acf.ueber_uns_praxis_title}
        description={ueberunsData.acf.ueber_uns_praxis_content}
        imageSrc={ueberunsData?.acf.ueber_uns_praxis_image.url}
        reverse={false}
        classes="py-inner_spc"
      />
      <Psychotherapie_Praxis
        title={ueberunsData.acf.ueber_uns_standorte_main_title}
        description={ueberunsData.acf.ueber_uns_standorte_content}
        sliderData={ueberunsData.acf.ueber_uns_section_standort_data}
        imageSrc={ueberunsData?.acf.ueber_uns_standorte_image.url}
        reverse={true}
      />
      <MapPageClient
        title={ueberunsData?.acf.hero_title_1}
        locations={ueberunsData?.acf.locations}
        Map_image={ueberunsData?.acf?.upload_map_image_}
        map_url={ueberunsData?.acf?.map_url}
        classes="py-inner_spc"
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
        classes="py-inner_spc"
      />
      <BlogComponent
        PostData={PostData}
        title={ueberunsData.acf.ueber_uns_stellenausschreibungen_main_title}
        description={ueberunsData.acf.ueber_uns_stellenausschreibungen_content}
      />
      <ReviewsData classes="py-inner_spc" />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return generatePageMetadata("/ueber-uns", {
    title: "ueber-uns",
    description: "ueber-uns",
  });
}
