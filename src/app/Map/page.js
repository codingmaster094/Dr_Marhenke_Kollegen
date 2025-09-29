"use client";
import React from "react";
import LeafletMapWrapper from "@/app/components/LeafletMapWrapper";

export default function MapPageClient({ title, locations,classes }) {
  const defaultCenter = [50.1109, 8.6821];
  const center =
    locations?.length > 0
      ? [parseFloat(locations[0].latitude), parseFloat(locations[0].longitude)]
      : defaultCenter;

  return (
    <section className={`text-center bg-[#fffbf2] bg-opacity-25 ${classes}`}>
      <div className="d">
        <h2
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: title || "" }}
        />
        <span className="w-28 h-1 bg-yellow block mx-auto"></span>
        <div className="mt-10">
          <LeafletMapWrapper locations={locations} center={center} />
        </div>
      </div>
    </section>
  );
}
