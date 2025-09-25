// components/SEO_schema.jsx
import React from "react";
import dynamic from "next/dynamic";
import SEODATA from "../utils/SEO_Data";

const SchemaInjector = dynamic(() => import("../components/SchemaInjector"), {
  ssr: true,
});

const SEO_schema = async ({ slug }) => {
  console.log('slug', slug)
  try {
    const metadata = await SEODATA(slug);
    const schemaJSON = metadata?.schema ? JSON.stringify(metadata.schema) : null;

    if (!schemaJSON) return null;

    return <SchemaInjector schemaJSON={schemaJSON} />;
  } catch (error) {
    console.error("Error fetching SEO schema:", error);
    return null;
  }
};

export default SEO_schema;
