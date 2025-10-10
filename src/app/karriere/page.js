import React from "react";
import Hero_Section from "../components/Hero_Section";
import Alldata from "../utils/AllDataFetxh";
import generatePageMetadata from "../utils/generatePageMetadata";
import SEO_schema from "../components/SEO_schema";
import KARRIEREPOST_GET from "../utils/karrierePostList";
import KARRIERPost from "../components/KARRIERPost";
import POST_GET from "../utils/PostsGet";

const page = async () => {
  let BlogData;
  let karriereData;
  try {
    karriereData = await Alldata("/karriere");
    BlogData = await POST_GET("/karriere");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!BlogData || !karriereData) {
    return <div>No data available.</div>;
  }

  return (
    <>
        <SEO_schema slug="/karriere"  />
      <Hero_Section
        title={karriereData.acf.hero_title_1}
        subtitle={karriereData.acf.home_hero_title}
        points={karriereData.acf.home_hero_content}
        BTN={karriereData.acf.home_hero_button}
        imageSrc={karriereData.acf.home_hero_image.url}
        videoSrc={""}
        classes="pb-inner_spc"
      />
      <KARRIERPost
        title={"Artikel-Übersicht"}
        BTN={"Jetzt suchen"}
        blogsData={BlogData}
      />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return generatePageMetadata("/karriere", {
    title: "karriere",
    description: "karriere",
  });
}
