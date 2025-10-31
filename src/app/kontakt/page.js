import React from 'react'
import ContactSection from '../components/ContactSection'
import Contact_form from '../components/Contact_form'
import Hero_Section from '../components/Hero_Section'
import Alldata from "../utils/AllDataFetxh";
import generatePageMetadata from '../utils/generatePageMetadata';
import SEO_schema from '../components/SEO_schema';
const page = async() => {
  let kontaktData;
  try {
    kontaktData = await Alldata("/kontakt");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!kontaktData) {
    return <div>No data available.</div>;
  }

  return (
    <>
    <SEO_schema slug="/kontakt" />
      <Hero_Section
        title={kontaktData.acf.hero_title_1}
        subtitle={kontaktData.acf.kontak_hero_title}
        points={kontaktData.acf.kontak_hero_description}
        BTN={""}
        imageSrc={kontaktData.acf.kontak_hero_image.url}
        videoSrc={""}
      />
      <ContactSection location_cards={kontaktData.acf.location_cards} classes="py-inner_spc" />
      <Contact_form classes="pb-inner_spc"/>
    </>
  );
}

export default page

export async function generateMetadata() {
  return generatePageMetadata("/kontakt", {
    title: "kontakt",
    description: "kontakt",
  });
}