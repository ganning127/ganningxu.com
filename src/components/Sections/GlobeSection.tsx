"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import tempPlaces from "@/data/places.json";
import { Place } from "@/interfaces/Place";

import type { GlobeMethods } from "react-globe.gl";
import { Spinner } from "../Util/Spinner";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { UnorderedList } from "../Typography/UnorderedList";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const places: Place[] = tempPlaces;
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export function GlobeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [globeInstance, setGlobeInstance] = useState<GlobeMethods | null>(null);
  const [size, setSize] = useState({ width: 400, height: 400 });
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  // ✨ New state to control rotation
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (globeInstance) {
      // Center the globe on USA and set initial speed
      globeInstance.pointOfView(
        { lat: 37.0902, lng: -95.7129, altitude: 2 },
        1000
      );
      globeInstance.controls().autoRotateSpeed = 0.8; // Adjusted speed slightly
    }
  }, [globeInstance]);

  useEffect(() => {
    if (globeInstance) {
      // Pause if a place is selected, otherwise respect the isRotating state
      globeInstance.controls().autoRotate = isRotating;
    }
  }, [isRotating, globeInstance]);

  // ✨ Handle modal state separately
  useEffect(() => {
    setModalOpen(!!selectedPlace);
    setIsRotating(!selectedPlace);
  }, [selectedPlace]);

  // ✨ Toggle function for the button
  const toggleRotation = () => {
    setIsRotating((prev) => !prev);
  };

  return (
    <div>
      {loading && (
        <div className="text-center">
          <Spinner className="w-12 h-12 mt-8" />
        </div>
      )}

      <Dialog
        open={modalOpen}
        onOpenChange={(newOpen) => {
          if (!newOpen) setSelectedPlace(null);
          setModalOpen(newOpen);
        }}
      >
        <DialogContent>
          <DialogTitle className="text-2xl font-bold mb-4">
            {selectedPlace?.name}
          </DialogTitle>
          <p>Times I&apos;ve been here:</p>
          <UnorderedList>
            {selectedPlace?.dates.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </UnorderedList>
        </DialogContent>
      </Dialog>

      <div
        ref={containerRef}
        className="w-full h-[500px] md:h-[700px] lg:h-[800px] mt-4 relative"
      >
        {/* ✨ New Pause/Play Button */}
        {!loading && (
          <button
            onClick={toggleRotation}
            className="absolute top-4 right-4 z-10 p-2 "
            aria-label={isRotating ? "Pause rotation" : "Play rotation"}
          >
            {isRotating ? (
              <FaPauseCircle className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white" />
            ) : (
              <FaPlayCircle className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-colors focus:outline-none focus:ring-2 focus:ring-white" />
            )}
          </button>
        )}

        <Globe
          // @ts-expect-error This is fine
          ref={(node) => {
            if (node && !globeInstance) {
              setGlobeInstance(node);
            }
          }}
          width={size.width}
          showAtmosphere={true}
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
          labelColor={() => "#a21caf"}
          onLabelClick={(place) => {
            setSelectedPlace(place as Place);
          }}
          onGlobeReady={() => {
            setLoading(false);
          }}
        />
      </div>
    </div>
  );
}
