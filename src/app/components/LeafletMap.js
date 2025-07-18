import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

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

export default function LeafletMap({ locations = [], center }) {
  const customIcon = React.useMemo(() => {
    const L = typeof window !== "undefined" ? require("leaflet") : null;
    if (!L) return null;
    return new L.Icon({
      iconUrl: "/images/marker-icon.png",
      iconSize: [30, 40],
      iconAnchor: [15, 40],
      popupAnchor: [0, -40],
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
    });
  }, []);

  if (!customIcon) return null; // Prevent rendering until icon is created

  return (
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
  );
}
