"use client";

import Image from "next/image";
import { useRef } from "react";

export default function TiltImage() {
  const imgRef = useRef<HTMLImageElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const el = imgRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -80; // max 10 deg
    const rotateY = ((x - centerX) / centerX) * 80;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function handleMouseLeave() {
    const el = imgRef.current;
    if (!el) return;
    el.style.transform = "rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      className="w-fit perspective-[1000px]"
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        ref={imgRef}
        src="/favicon.png"
        alt="Picture of Ganning Xu in front of an orange sunset"
        width={100}
        height={100}
        className="rounded-full transition-transform"
        style={{
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
}
