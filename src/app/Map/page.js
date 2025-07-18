"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Dynamic imports for Leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

import "leaflet/dist/leaflet.css";

// Fix Leaflet icon issue
import L from "leaflet";
const customIcon = new L.Icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export default function Page({ title,locations }) {
  // Use default center if no locations are available
  const defaultCenter = [50.1109, 8.6821];
  const center =
    locations && locations.length > 0
      ? [parseFloat(locations[0].latitude), parseFloat(locations[0].longitude)]
      : defaultCenter;

  return (
    <section className="py-14 lg:py-20 2xl:py-100 text-center bg-[#fffbf2] bg-opacity-25">
      <div className="d">
        <h2 className="mb-4" dangerouslySetInnerHTML={{ __html: title }}>
        </h2>
        <span className="w-28 h-1 bg-yellow block mx-auto"></span>

        <div className="mt-10">
          {typeof window !== "undefined" && (
            <MapContainer
              center={center}
              zoom={6}
              scrollWheelZoom={false}
              style={{ height: "600px", width: "100%" }}
            >
              <TileLayer
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {locations?.map((location, i) => (
                <Marker
                  key={i}
                  position={[
                    parseFloat(location.latitude),
                    parseFloat(location.longitude),
                  ]}
                  icon={customIcon}
                >
                  <Popup>
                    <p className="font-semibold">{location.address}</p>
                    <Link
                      className="loc-popup-btn text-blue-600 underline inline-block mt-2"
                      href={location.button.url}
                      target={location.button.target || "_self"}
                    >
                      {location.button.title}
                    </Link>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </div>
    </section>
  );
}
