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
        "@type": "FAQPage",
        "@context": "https://schema.org",
        "name": "Häufig gestellte Fragen", // 👈 add this line
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.faq_content_title,
          acceptedAnswer: {
            "@type": "Answer",
           text: faq.faq_content_description.replace(/<\/?p>/g, "")
          },
        })),
      }
    : null;



    return <SchemaInjector schemaJSON={schemaJSON} faqSchema={faqSchema} />;
  } catch (error) {
    console.error("Error fetching SEO schema:", error);
    return null;
  }
};

export default SEO_schema;
