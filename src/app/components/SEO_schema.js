// components/SEO_schema.jsx
import React from "react";
import dynamic from "next/dynamic";
import SEODATA from "../utils/SEO_Data";

const SchemaInjector = dynamic(() => import("../components/SchemaInjector"), {
  ssr: true,
});

const SEO_schema = async ({ slug, faqs }) => {
  try {
    const metadata = await SEODATA(slug);
    const schemaJSON = metadata?.schema || null;

    if (!schemaJSON && (!faqs || faqs.length === 0)) return null;
    // Build FAQ Schema
   const faqSchema =
  faqs && faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://dr-marhenke-kollegen.vercel.app/#faqpage", // 👈 unique ID
        "url": "https://dr-marhenke-kollegen.vercel.app/",         // 👈 required for some tools
        "mainEntityOfPage": {
          "@id": "https://dr-marhenke-kollegen.vercel.app/"
        },
        "name": "FAQ – Psychotherapie",
        "headline": "Häufig gestellte Fragen zur Psychotherapie",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "@id": `https://dr-marhenke-kollegen.vercel.app/#faq-${faq.faq_content_title.replace(/\s+/g, "-").toLowerCase()}`,
          "name": faq.faq_content_title,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.faq_content_description.replace(/<\/?p>/g, "")
          }
        }))
      }
    : null;

      console.log('schemaJSON', schemaJSON)
      console.log('faqSchema', faqSchema)



    return <SchemaInjector schemaJSON={schemaJSON} faqSchema={faqSchema} />;
  } catch (error) {
    console.error("Error fetching SEO schema:", error);
    return null;
  }
};

export default SEO_schema;
