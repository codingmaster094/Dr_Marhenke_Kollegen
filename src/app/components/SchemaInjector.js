"use client";
import { useEffect } from "react";

export default function SchemaInjector({ schemaJSON, faqSchema }) {
  useEffect(() => {
    if (!schemaJSON && !faqSchema) return;

    const schemaArray = [];
    if (schemaJSON) {
      // Ensure context exists
      if (!schemaJSON["@context"]) schemaJSON["@context"] = "https://schema.org";
      schemaArray.push(schemaJSON);
    }
    if (faqSchema) {
      if (!faqSchema["@context"]) faqSchema["@context"] = "https://schema.org";
      schemaArray.push(faqSchema);
    }

    console.log('schemaArray', schemaArray)
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "rank-math-schema";
    script.text = JSON.stringify(schemaArray);

    const oldScript = document.getElementById("rank-math-schema");
    if (oldScript) oldScript.remove();

    document.head.appendChild(script);
  }, [schemaJSON, faqSchema]);

  return null;
}
