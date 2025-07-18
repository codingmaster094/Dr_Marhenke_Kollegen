"use client";
import React, { useState, useEffect } from "react";
import LeafletMap from "./LeafletMap";

export default function LeafletMapWrapper({ locations, center }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loader if you prefer
  }

  return <LeafletMap locations={locations} center={center} />;
}
