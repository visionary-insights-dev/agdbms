"use client";

import { Card } from "@/components/ui/card";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/map/map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] flex items-center justify-center bg-muted">
      Loading map...
    </div>
  ),
});

export default function MapPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Farmer Distribution Map</h1>
      <Card className="p-0 overflow-hidden">
        <MapComponent />
      </Card>
    </div>
  );
}