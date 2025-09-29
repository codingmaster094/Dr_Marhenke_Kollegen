import React from "react";
import Hero_Section from "../components/Hero_Section";
import Alldata from "../utils/AllDataFetxh";
import POST_GET from "../utils/PostsGet";
import Blog from "../components/Blog";
import SEODATA from "../utils/SEO_Data";
import generatePageMetadata from "../utils/generatePageMetadata";
import SEO_schema from "../components/SEO_schema";

const page = async () => {
  let BlogData;
  let RatgeberData;
  try {
    RatgeberData = await Alldata("/ratgeber");
    BlogData = await POST_GET("/ratgeber");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!BlogData || !RatgeberData) {
    return <div>No data available.</div>;
  }

  return (
    <>
        <SEO_schema slug="/ratgeber"  />
      <Hero_Section
        title={RatgeberData.acf.hero_slider_main_title}
        subtitle={RatgeberData.acf.home_hero_title}
        points={RatgeberData.acf.hero_slider_content}
        BTN={RatgeberData.acf.ratgeber_mehr_erfahren_button}
        imageSrc={RatgeberData.acf.hero_slider_image.url}
        videoSrc={""}
      />
      <Blog
        title={"Artikel-Übersicht"}
        BTN={"Jetzt suchen"}
        blogsData={BlogData}
      />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return generatePageMetadata("/ratgeber", {
    title: "ratgeber",
    description: "ratgeber",
  });
}
