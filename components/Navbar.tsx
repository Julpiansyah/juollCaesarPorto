"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Menu, Sun, Moon } from "lucide-react";
import clsx from "clsx";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => !prev);
  }, []);

  useEffect(() => {
    const body = document.getElementById("body") || document.body;
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    const scanlines = document.getElementById("scanlines");

    if (isDark) {
      body.style.backgroundColor = "#111111";
      body.style.color = "#ffffff";
      if (header) {
        header.style.backgroundColor = "#111111";
        header.style.borderColor = "#03dffc";
      }
      if (footer) {
        footer.style.backgroundColor = "#111111";
        footer.style.borderColor = "#03dffc";
      }
      if (scanlines) {
        scanlines.className =
          "scanline-overlay-dark fixed inset-0 pointer-events-none z-50 opacity-10";
      }

      document.querySelectorAll(".project-card").forEach((el) => {
        (el as HTMLElement).style.backgroundColor = "#1a1a1a";
      });
      document.querySelectorAll(".about-card").forEach((el) => {
        (el as HTMLElement).style.backgroundColor = "#1a1a1a";
        (el as HTMLElement).style.color = "#ffffff";
      });
      const aboutSection = document.querySelector(".about-section") as HTMLElement | null;
      if (aboutSection) aboutSection.style.backgroundColor = "#111111";
    } else {
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#000000";
      if (header) {
        header.style.backgroundColor = "#ffffff";
        header.style.borderColor = "#000000";
      }
      if (footer) {
        footer.style.backgroundColor = "#ffffff";
        footer.style.borderColor = "#000000";
      }
      if (scanlines) {
        scanlines.className =
          "scanline-overlay fixed inset-0 pointer-events-none z-50 opacity-10";
      }

      document.querySelectorAll(".project-card").forEach((el) => {
        (el as HTMLElement).style.backgroundColor = "#ffffff";
      });
      document.querySelectorAll(".about-card").forEach((el) => {
        (el as HTMLElement).style.backgroundColor = "#ffffff";
        (el as HTMLElement).style.color = "#000000";
      });
      const aboutSection = document.querySelector(".about-section") as HTMLElement | null;
      if (aboutSection) aboutSection.style.backgroundColor = "#ffffff";
    }
  }, [isDark]);

  const handleNavClick = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  return (
    <>
      {/* Header */}
      <header
        id="header"
        className="fixed top-0 left-0 right-0 z-40 bg-white border-b-4 border-black transition-all duration-500"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="#home"
              className="pixel-font text-sm sm:text-base tracking-tighter text-cyan-neon"
            >
              PIXEL<span className="text-black">.DEV</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold hover:text-cyan-neon transition-colors border-b-4 border-transparent hover:border-cyan-neon"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Dark Mode Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle */}
              <button
                type="button"
                aria-label="Toggle dark mode"
                className="relative w-16 h-8 bg-black border-4 border-black rounded-none transition-all duration-300 overflow-hidden"
                onClick={toggleTheme}
              >
                <div
                  className={clsx(
                    "absolute top-0 left-0 w-6 h-6 bg-cyan-neon transition-transform duration-300 flex items-center justify-center",
                    isDark && "translate-x-6"
                  )}
                >
                  <Sun size={16} strokeWidth={1.5} />
                </div>
                <Moon
                  size={16}
                  strokeWidth={1.5}
                  className="absolute right-1 top-1 text-white"
                />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                aria-label="Toggle mobile menu"
                className="md:hidden p-2 border-4 border-black"
                onClick={() => setIsMobileOpen((prev) => !prev)}
              >
                <Menu size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "md:hidden bg-white border-t-4 border-black transition-all",
            isMobileOpen ? "block" : "hidden"
          )}
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block font-semibold py-2 border-b-4 border-transparent hover:border-cyan-neon transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
