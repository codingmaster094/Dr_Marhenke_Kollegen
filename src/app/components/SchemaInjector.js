// components/SchemaInjector.jsx
"use client";
import { useEffect } from "react";

export default function SchemaInjector({ schemaJSON, faqSchema }) {
  useEffect(() => {
    if (!schemaJSON && !faqSchema) return;

    // Merge into one array
    const schemaArray = [];
    if (schemaJSON) schemaArray.push(schemaJSON); // already an object
    if (faqSchema) schemaArray.push(faqSchema);

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "rank-math-schema";
    script.text = JSON.stringify(schemaArray);

    // Remove old one if exists
    const oldScript = document.getElementById("rank-math-schema");
    if (oldScript) oldScript.remove();

    document.head.appendChild(script);
  }, [schemaJSON, faqSchema]);

  return null;
}
