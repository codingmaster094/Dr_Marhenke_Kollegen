import React from 'react'
import ContactSection from '../components/ContactSection'
import Contact_form from '../components/Contact_form'
import Hero_Section from '../components/Hero_Section'
import Alldata from "../utils/AllDataFetxh";
const page = async() => {
  let kontaktData;
  try {
    kontaktData = await Alldata("/home");
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }

  if (!kontaktData) {
    return <div>No data available.</div>;
  }
  return (
    <>
        <Hero_Section
        title="Psychotherapie in Köln:"
        subtitle="Wir sind jederzeit für Sie da"
        points={[
          "Telefon, E-Mail oder Online-Formular – wir melden uns schnell zurück",
          "Gut erreichbar mit Bus, Bahn & Auto – zentrale Lage in Köln Rodenkirchen, Südstadt & Hürth",
          "Termine vor Ort oder per Video-Sprechstunde möglich",
        ]}
        buttonText=""
        buttonLink="/"
        imageSrc="/images/praxis-kontakt.jpg"
      />
        <ContactSection/>
        <Contact_form/>
    </>
  )
}

export default page