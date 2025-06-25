"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
  useEffect(() => {
    // Check if screen width is more than 768px (desktop or tablet)
    const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;

    if (!isDesktop) return; // Don't enable Lenis on mobile

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
