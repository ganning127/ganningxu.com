// components/RideMap.tsx
"use client";

import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Polyline,
  TileLayer,
  Popup,
  Marker,
} from "react-leaflet";

import L from "leaflet";

// Green start icon
const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Red end icon
const redIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function RideMap({
  polyline,
}: {
  polyline: LatLngExpression[];
}) {
  const start: LatLngExpression = polyline[0];
  const end: LatLngExpression = polyline[polyline.length - 1];

  return (
    <MapContainer
      center={polyline[0]}
      zoom={13}
      scrollWheelZoom={true}
      className="rounded-md h-64 w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap"
      />
      <Polyline positions={polyline} color="red" />

      <Marker position={start} icon={greenIcon}>
        <Popup>Start</Popup>
      </Marker>

      <Marker position={end} icon={redIcon}>
        <Popup>End</Popup>
      </Marker>
    </MapContainer>
  );
}
