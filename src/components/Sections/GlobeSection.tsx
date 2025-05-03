"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import tempPlaces from "@/data/places.json";
import { Place } from "@/interfaces/Place";

import type { GlobeMethods } from "react-globe.gl";
import { TravelLocationModal } from "@/components/Modals/TravelLocationModal";

const places: Place[] = tempPlaces;
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export function GlobeSection() {
  const containerRef = useRef(null);
  const [globeInstance, setGlobeInstance] = useState<GlobeMethods | null>(null);
  const [size, setSize] = useState({ width: 400, height: 400 });
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (typeof window === "undefined") return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [containerRef]);

  useEffect(() => {
    if (globeInstance) {
      // Center the globe on USA
      globeInstance.pointOfView(
        { lat: 37.0902, lng: -95.7129, altitude: 2 },
        1000
      );

      const controls = globeInstance.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
    }
  }, [globeInstance]);

  return (
    <div>
      {selectedPlace && (
        <div className="mt-6 p-2 rounded-md">
          <h2>
            Seems like you&apos;re interested in stalking. Don&apos;t worry
            though, I don&apos;t mind nor store this information :)
          </h2>

          <TravelLocationModal
            place={selectedPlace}
            onClose={() => {
              setSelectedPlace(null);
            }}
          />
        </div>
      )}

      <div
        ref={containerRef}
        className="w-full h-[500px] md:h-[700px] lg:h-[800px] mt-4"
      >
        <Globe
          // @ts-expect-error This is fine
          ref={(node) => {
            if (node && !globeInstance) {
              console.log("Globe mounted!", node);
              setGlobeInstance(node);
            }
          }}
          width={size.width}
          showAtmosphere={false}
          height={size.height}
          backgroundColor="#ffffff"
          globeTileEngineUrl={(x, y, l) =>
            `https://tile.openstreetmap.org/${l}/${x}/${y}.png`
          }
          labelsData={places}
          labelLat={(d) => (d as Place).lat}
          labelLng={(d) => (d as Place).lng}
          labelText={(d) => (d as Place).name}
          labelSize={0.4}
          labelDotRadius={0.8}
          labelColor={() => {
            return "#a21caf";
          }}
          onLabelClick={(place) => {
            setSelectedPlace(place as Place);
          }}
        />
      </div>
    </div>
  );
}
