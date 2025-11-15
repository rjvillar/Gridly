"use client";

import { MapContainer, TileLayer } from "react-leaflet";

export default function MapComponent() {
  return (
    <MapContainer
      center={[12.8797, 121.774]}
      zoom={6}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
