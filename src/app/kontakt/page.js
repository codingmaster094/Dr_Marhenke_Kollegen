import React from 'react'
import ContactSection from '../components/ContactSection'
import Contact_form from '../components/Contact_form'
import Hero_Section from '../components/Hero_Section'

const page = () => {
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
        imageSrc="/images/contact-hero.png"
      />
        <ContactSection/>
        <Contact_form/>
    </>
  )
}

export default page