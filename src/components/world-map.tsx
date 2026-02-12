"use client";
import WorldMap from "@/components/ui/world-map";

export function WorldMapComponent() {
  return (
    <div className="w-full h-full">
      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -25.7975, lng: -54.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -25.7975, lng: -54.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: 4.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 10.6139, lng: 84.209 }, // New Delhi
          },
          {
            start: { lat: 10.6139, lng: 84.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 10.6139, lng: 84.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
