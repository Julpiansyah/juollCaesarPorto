"use client";

import Image from "next/image";
import Container from "./Container";
import { personal } from "@/data/personal";

export default function Hero() {
  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="home" className="min-h-screen pt-20 sm:pt-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dot-pattern" />

      {/* Geometric Shapes */}
      <div className="absolute top-32 left-10 w-20 h-20 border-4 border-magenta-neon rotate-45 hidden sm:block" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-neon opacity-50 hidden sm:block" />
      <div className="absolute top-1/2 right-20 w-16 h-16 border-4 border-cyan-neon hidden lg:block" />

      <Container className="py-12 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image with CRT Effect */}
          <div className="relative">
            <div
              className="relative w-64 h-64 sm:w-80 sm:h-80 border-8 border-black crt-effect overflow-hidden"
              style={{ boxShadow: "12px 12px 0 #03dffc" }}
            >
              <Image
                src="/julpiansyah.png"
                alt="Muhamad Mulyana Julpiansyah | Fulstack-Developer | SMK Wikrama Bogor"
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover object-center"
                priority
              />
              {/* Scanline Animation */}
              <div className="absolute inset-0 overflow-hidden z-10">
                <div className="w-full h-2 bg-white opacity-10 animate-scanline" />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-magenta-neon -z-10" />
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <p className="pixel-font text-xs sm:text-sm mb-4 text-cyan-neon">
              HELLO, I&apos;M
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
              {personal.name.first.toUpperCase()}
              <br />
              <span className="relative inline-block">
                {personal.name.last.toUpperCase()}
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-neon" />
              </span>
            </h1>
            <p
              className="pixel-font text-base sm:text-lg mb-8 text-magenta-neon"
              style={{ textShadow: "2px 2px 0 #03dffc" }}
            >
              {personal.role.toUpperCase()}
            </p>
            <p className="inter-font text-base sm:text-lg max-w-md mb-8 mx-auto lg:mx-0">
              Building digital experiences with bold aesthetics and
              cutting-edge technology.
            </p>
            <button
              onClick={scrollToProjects}
              className="inline-block px-8 py-4 bg-cyan-neon text-black font-bold border-4 border-black transition-all duration-200 hover:translate-x-1 hover:translate-y-1 animate-float cursor-pointer"
              style={{ boxShadow: "6px 6px 0 #000" }}
            >
              VIEW PROJECTS
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
