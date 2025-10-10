import React from "react";
import Hero_Section from "../components/Hero_Section";
import ServiceSection from "../components/ServiceSection";
import Pattern_section from "../components/Pattern_section";
import SliderSection from "../components/SliderSection";
import ReviewsData2 from "../components/Review2";
import DoctorList from "../components/DoctorList";
import Contact_form from "../components/Contact_form";
import Alldata from "../utils/AllDataFetxh";
import Custom_Post from "../utils/CustomPost";
import { notFound } from "next/navigation";
import SEO_schema from "../components/SEO_schema";
import generatePageMetadata from "../utils/generatePageMetadata";
import POST_GET from "../utils/PostsGet";

const Page = async ({ params }) => {
  const { slug } = await params;
  let Custom_Page;
  let Doctor_listData;
  let ReviewDataAPI;

  try {
    Custom_Page = await Alldata(`/${slug}`);
    Doctor_listData = await Custom_Post("/team");
    ReviewDataAPI = await POST_GET("/options");

    // Guard clause if any required data is missing
    if (!Custom_Page || !Custom_Page.acf || !ReviewDataAPI) {
      console.error("Missing page or ACF data for slug:", slug);
      notFound(); // Redirect to 404
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    notFound(); // Return 404 on fetch error
  }

  return (
    <>
      <SEO_schema slug={`/${slug}`} />
      <Hero_Section
        title={Custom_Page?.acf?.hero_title_1 || ""}
        subtitle={Custom_Page?.acf?.standort_single_hero_title || ""}
        points={Custom_Page?.acf?.standort_single_hero_content || []}
        BTN={Custom_Page?.acf?.standort_single_hero_button || {}}
        imageSrc={
          Custom_Page?.acf?.standort_single_hero_image?.url ||
          "/default-image.jpg"
        }
        classes="py-inner_spc"
      />

      <ServiceSection
        CustomPageServiceSection1={Custom_Page?.acf?.praxis || {}}
        classes=""
      />
  
      {/* <Pattern_section
        title={Custom_Page?.acf?.standort_single_anfrage_title || ""}
        content={Custom_Page?.acf?.standort_single_anfrage_description || ""}
        btn={Custom_Page?.acf?.standort_single_anfrage_button || {}}
        classes="py-inner_spc"
      /> */}

      <ReviewsData2
        classes="py-inner_spc"
        main_title={ReviewDataAPI.logo_title}
        content={ReviewDataAPI.logo_content}
        reviewlogos={Custom_Page?.acf?.logo_slider}
        slider={ReviewDataAPI.slider}
        hideshow={true}
      />

      <SliderSection
        main_title={Custom_Page?.acf?.standort_single_galerie_title || ""}
        gallery_images={Custom_Page?.acf?.standort_single_galerie_partner || []}
        classes="py-inner_spc"
      />

      <DoctorList
        title={Custom_Page?.acf?.standort_single_team_section_title || ""}
        Data={Doctor_listData || []}
        classes="py-inner_spc"
      />

      <Contact_form classes="pb-inner_spc" />
    </>
  );
};

export default Page;

export async function generateMetadata({ params }) {
  const { slug } = await params
  return generatePageMetadata(`${slug}`, {
    title: `${slug}`,
    description: `${slug}`,
  });
}
