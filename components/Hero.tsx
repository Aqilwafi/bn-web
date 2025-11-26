"use client";

import { useState, useEffect } from "react";

const images = [
  "/images/FLYR-BAITUNNAIM-01.jpg",
  "/images/FLYR-BAITUNNAIM-02.jpg",
  "/images/FLYR-BAITUNNAIM-03.jpg"
];

export default function Hero2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full aspect-[3/1] max-h-screen overflow-hidden">

      {/* Slide wrapper */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms]
              ${i === currentIndex ? "opacity-100" : "opacity-0"}
            `}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
    </section>
  );
}
