"use client";

import React, { useEffect, useState } from "react";

export function GrainOverlay() {
  const [bgUrl, setBgUrl] = useState<string>("");

  useEffect(() => {
    // Generate a tiny 64x64 static noise texture ONCE in memory
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const imgData = ctx.createImageData(64, 64);
    const data = imgData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = Math.floor(Math.random() * 255);
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 12; // ultra-subtle tactile grain
    }
    ctx.putImageData(imgData, 0, 0);
    setBgUrl(canvas.toDataURL("image/png"));
  }, []);

  if (!bgUrl) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9990]"
      style={{
        backgroundImage: `url(${bgUrl})`,
        backgroundRepeat: "repeat",
      }}
    />
  );
}
