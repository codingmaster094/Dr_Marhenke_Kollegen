import React from "react";
import Hero_Section from "../components/Hero_Section";
import ServiceSection from "../components/ServiceSection";
import Pattern_section from "../components/Pattern_section";
import SliderSection from "../components/SliderSection";
import ReviewsData from "../ReviewsData/page";
import DoctorList from "../components/DoctorList";
import Contact_form from "../components/Contact_form";
import Alldata from "../utils/AllDataFetxh";
import Custom_Post from "../utils/CustomPost";

const Page = async({ params }) => {
  const { slug } = await params;

  let Custom_Page;
  let Doctor_listData;
    try {
      Custom_Page = await Alldata(`/${slug}`);
      Doctor_listData = await Custom_Post("/team");
    } catch (error) {
      console.error("Error fetching data:", error);
      return <div>Error loading data.</div>;
    }
  
    if (!Custom_Page || !Doctor_listData) {
      return <div>No data available.</div>;
    }

  return (
    <>
      <Hero_Section
        title={Custom_Page.acf.standort_single_hero_title}
        subtitle={Custom_Page.acf.subtitle}
        points={Custom_Page.acf.standort_single_hero_content}
        BTN={Custom_Page.acf.standort_single_hero_button}
        imageSrc={Custom_Page.acf.standort_single_hero_image.url}
      />
      <ServiceSection CustomPageServiceSection1={Custom_Page.acf.praxis} />

      <Pattern_section
        title={Custom_Page.acf.standort_single_anfrage_title}
        content={Custom_Page.acf.standort_single_anfrage_description}
        btn={Custom_Page.acf.standort_single_anfrage_button}
      />

      <ReviewsData />

      <SliderSection
        main_title={Custom_Page.acf.standort_single_galerie_title}
        gallery_images={Custom_Page.acf.standort_single_galerie_partner}
      />
      <DoctorList
        title={Custom_Page.acf.standort_single_team_section_title}
        Data={Doctor_listData}
      />
      <Contact_form />
    </>
  );
};

export default Page;
