"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";

// Fix for default marker icon in Leaflet
const icon = new Icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface FarmLocation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  products: string[];
}

// Sample data - replace with actual API call
const sampleLocations: FarmLocation[] = [
  {
    id: "1",
    name: "Green Acres Farm",
    latitude: 9.0820,
    longitude: 8.6753,
    products: ["Rice", "Tomatoes"]
  },
  {
    id: "2",
    name: "Sunshine Agricultural Hub",
    latitude: 6.5244,
    longitude: 3.3792,
    products: ["Poultry", "Small Ruminants"]
  }
];

export default function MapComponent() {
  const [locations, setLocations] = useState<FarmLocation[]>([]);

  useEffect(() => {
    // Replace with actual API call
    setLocations(sampleLocations);
  }, []);

  return (
    <MapContainer
      center={[9.0820, 8.6753]}
      zoom={6}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
          icon={icon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{location.name}</h3>
              <p className="text-sm">Products: {location.products.join(", ")}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}