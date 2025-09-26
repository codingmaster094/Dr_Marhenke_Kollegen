import Head from 'next/head';
 
export default function FAQSchema({ faqs }) {
  // Transform WordPress ACF repeater data into schema.org format
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.faq_content_title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.faq_content_description
      }
    }))
  };
 
  return (
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema, null, 2)
        }}
      />
    </head>
  );
}
 
