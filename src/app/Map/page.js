"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Dynamic imports for React-Leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false }
);
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});

const markers = [
  {
    position: [48.1351, 11.582],
    name: "Munchen, Germany",
    buttonText: "Mehr erfahren",
    link: "/huerth",
  },
  {
    position: [50.1109, 8.6821],
    name: "Darmstadt, Germany",
    buttonText: "Mehr erfahren",
    link: "/koeln-suedstadt",
  },
  {
    position: [52.52, 13.405],
    name: "Berlin, Germany",
    buttonText: "Mehr erfahren",
    link: "/koeln-rodenkirchen",
  },
];

export default function Page() {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // Load Leaflet only on client
    import("leaflet").then((L) => {
      const customIcon = new L.Icon({
        iconUrl: "/images/marker-icon.png",
        iconSize: [30, 40],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
      });
      setIcon(customIcon);
    });
  }, []);

  const center = [50.1109, 8.6821];

  return (
    <section className="py-14 lg:py-20 2xl:py-100 text-center bg-[#FFF2CE] bg-opacity-25">
      <div className="">
        <h2 className="mb-4">
          Praxis für Psychotherapie Dr. Marhenke: unsere Standorte in Köln
        </h2>
        <span className="w-28 h-1 bg-yellow block mx-auto"></span>

        <div className="mt-10">
          <MapContainer
            center={center}
            zoom={6}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {icon &&
              markers.map((marker, i) => (
                <Marker key={i} position={marker.position} icon={icon}>
                  <Popup>
                    <p>{marker.name}</p>
                    <Link
                      className="loc-popup-btn"
                      href={marker.link}
                    >
                      {marker.buttonText}
                    </Link>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
