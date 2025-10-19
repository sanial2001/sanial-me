"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AnimatedFigure() {
  const [activeScene, setActiveScene] = useState(0);
  
  const scenes = [
    { id: 0, name: "coding" },
    { id: 1, name: "cycling" },
    { id: 2, name: "running" },
    { id: 3, name: "traveling" }
  ];

  const images = [
    "/activity-images/coding.png",
    "/activity-images/cycling.png",
    "/activity-images/running.png",
    "/activity-images/travelling.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScene((prev) => (prev + 1) % scenes.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Image Display */}
      <div className="relative w-full h-full">
        {scenes.map((scene, index) => (
          <div
            key={scene.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              activeScene === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={images[index]}
              alt={`${scene.name} scene`}
              fill
              className="object-cover rounded-2xl"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Activity Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full">
        {scenes.map((scene, idx) => (
          <div
            key={scene.id}
            className={`rounded-full transition-all duration-300 ${
              activeScene === idx
                ? "bg-white w-5 h-2"
                : "bg-white/50 w-2 h-2 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}