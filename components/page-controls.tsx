"use client";

import { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

export function PageControls() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const controlsRef = useRef<HTMLDivElement>(null);
  const isVisible = visible || menuOpen;

  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    let frame = 0;

    const updateVisibility = () => {
      frame = 0;
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const currentY = Math.max(0, Math.min(window.scrollY, maxY));
      const delta = currentY - previousY;

      if (currentY <= 24) {
        setVisible(true);
        previousY = currentY;
      } else if (Math.abs(delta) >= 8) {
        setVisible(delta < 0);
        previousY = currentY;
      }
    };

    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 640px)");
    const closeDesktopMenu = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    desktop.addEventListener("change", closeDesktopMenu);
    return () => desktop.removeEventListener("change", closeDesktopMenu);
  }, []);

  useEffect(() => {
    if (controlsRef.current) controlsRef.current.inert = !isVisible;
  }, [isVisible]);

  return (
    <div
      ref={controlsRef}
      aria-hidden={!isVisible}
      data-page-controls
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex items-start justify-between px-3 py-6 transition-[translate,opacity] duration-200 motion-reduce:transition-none sm:px-6 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <Navigation open={menuOpen} onOpenChange={setMenuOpen} />
      <ThemeToggle />
    </div>
  );
}
