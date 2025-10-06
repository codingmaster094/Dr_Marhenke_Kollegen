"use client";
import React from "react";
import LeafletMapWrapper from "@/app/components/LeafletMapWrapper";
import Image from "next/image";
import Link from "next/link";

export default function MapPageClient({ map_url, Map_image, title, locations, classes } = {}) {
  const defaultCenter = [50.1109, 8.6821];
  const center =
    locations?.length > 0
      ? [parseFloat(locations[0]?.latitude), parseFloat(locations[0]?.longitude)]
      : defaultCenter;

  return (
    <section className={`text-center bg-[#fffbf2] bg-opacity-25 ${classes ?? ""}`}>
      <div className="d">
        <h2
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: title || "" }}
        />
        <span className="w-28 h-1 bg-yellow block mx-auto"></span>
        <div className="mt-10 !h-[600px]">
          {Map_image ? (
            <Link href={map_url} target="_blank" rel="noopener noreferrer">
              {Map_image?.url ? (
                <Image
                  src={Map_image.url}
                  alt={Map_image || "map-image"}
                  width={1905}
                  height={600}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <p className="text-gray-500">No map image available</p>
                </div>
              )}
            </Link>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-gray-500">No map URL available</p>
            </div>
          )}
            {/* <LeafletMapWrapper locations={locations} center={center} /> */}
        </div>
      </div>
    </section>
  );
}
