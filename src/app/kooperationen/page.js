import React from "react";
import Hero_Section from "../components/Hero_Section";
import Kooperationen_Service from "../components/Kooperationen_Service";
import ReviewsData from "../ReviewsData/page";
import Alldata from "../utils/AllDataFetxh";
import generatePageMetadata from "../utils/generatePageMetadata";
import SEO_schema from "../components/SEO_schema";
const page = async() => {
  let kooperationenData;
  try {
    kooperationenData = await Alldata("/kooperationen");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!kooperationenData) {
    return <div>No data available.</div>;
  }
  return (
    <>
     <SEO_schema slug="/kooperationen" />
      <Hero_Section
        title={kooperationenData.acf.hero_title_1}
        subtitle={kooperationenData.acf.kooperationen_hero_title}
        points={kooperationenData.acf.kooperationen_content_listing}
        BTN={kooperationenData.acf.standort_single_hero_button}
        imageSrc={kooperationenData.acf.kooperationen_hero_image.url}
      />

      <Kooperationen_Service
        KooperationenData={kooperationenData.acf.kooperationen__description}
        classes="py-inner_spc mt-inner_spc"
      />

         <ReviewsData classes="pb-inner_spc" />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return generatePageMetadata("/kooperationen", {
    title: "kooperationen",
    description: "kooperationen",
  });
}
