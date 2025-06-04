"use client"; // Ensure this component is client-side only

import { Icon } from "leaflet";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";
// Dynamically import react-leaflet components to avoid SSR issues
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
const Circle = dynamic(
  () => import("react-leaflet").then((mod) => mod.Circle),
  { ssr: false }
);
const CircleMarker = dynamic(
  () => import("react-leaflet").then((mod) => mod.CircleMarker),
  { ssr: false }
);
const Polygon = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polygon),
  { ssr: false }
);
const Rectangle = dynamic(
  () => import("react-leaflet").then((mod) => mod.Rectangle),
  { ssr: false }
);
const Tooltip = dynamic(
  () => import("react-leaflet").then((mod) => mod.Tooltip),
  { ssr: false }
);


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

const customIcon = new Icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [38, 38],
  });

const center = [48.1351, 11.582]; // Köln
const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
];

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
];

function TooltipCircle() {
  const [clickedCount, setClickedCount] = React.useState(0);
  const eventHandlers = React.useMemo(
    () => ({
      click() {
        setClickedCount((count) => count + 1);
      },
    }),
    []
  );

  const clickedText =
    clickedCount === 0
      ? "Click this Circle to change the Tooltip text"
      : `Circle click: ${clickedCount}`;

  return (
    <Circle
      center={center}
      eventHandlers={eventHandlers}
      pathOptions={{ fillColor: "blue" }}
      radius={200}
    >
      <Tooltip>{clickedText}</Tooltip>
    </Circle>
  );
}

export default function Map() {
  return (
    <section className="py-14 lg:py-20 2xl:py-100 text-center bg-[#FFF2CE] bg-opacity-25">
    <div className="container">
      <div>
        <h2 className="mb-4">
          Praxis für Psychotherapie Dr. Marhenke: unsere Standorte in Köln
        </h2>
        <span className="w-28 h-1 bg-yellow block mx-auto"></span>
      </div>
          <MapContainer
            center={center}
            zoom={6}
          >
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map((marker, i) => {
              return (
                <Marker
                  position={marker.position}
                  icon={customIcon}
                  scrollWheelZoom={false}
                  key={i}
                >
                  <Popup>
                    <div
                      className="leaflet-popup  leaflet-zoom-animated"
                      style={{
                        opacity: 1,
                        transform: "translate3d(1222px, 66px, 0px)",
                        bottom: "-7px",
                        left: "-88px",
                      }}
                    >
                      <div className="leaflet-popup-content-wrapper">
                        <div
                          className="leaflet-popup-content"
                          style={{ width: "135px" }}
                        >
                          <p>{marker.name}</p>
                          <Link className="loc-popup-btn" href={marker.link}>
                            {marker.buttonText}
                          </Link>
                        </div>
                      </div>
                      <div className="leaflet-popup-tip-container">
                        <div className="leaflet-popup-tip"></div>
                      </div>
                      <Link
                        className="leaflet-popup-close-button"
                        role="button"
                        aria-label="Close popup"
                        href="#close"
                      >
                        <span aria-hidden="true">×</span>
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
    </section>
  );
}
