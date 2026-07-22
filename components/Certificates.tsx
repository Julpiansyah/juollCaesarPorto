"use client";

import { useState } from "react";
import Image from "next/image";
import { certificates } from "@/data/certificates";
import type { Certificate } from "@/data/certificates";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import clsx from "clsx";

const tagColorMap: Record<string, string> = {
  cyan: "text-cyan-neon",
  magenta: "text-magenta-neon",
  yellow: "text-yellow-neon",
};

function CertificateCard({ cert }: { cert: Certificate }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full flex flex-col bg-white border-4 border-black transition-all duration-300 hover:-translate-y-2 project-card"
      style={{
        boxShadow: isHovered
          ? `12px 12px 0 ${cert.hoverShadow}`
          : "8px 8px 0 #000",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail — gambar sertifikat */}
      <div className="relative h-52 flex-shrink-0 overflow-hidden border-b-4 border-black">
        <Image
          src={cert.imageUrl}
          alt={cert.title}
          fill
          className={clsx(
            "object-cover transition-transform duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badge nomor */}
        <div className="absolute top-3 left-3 bg-black px-2 py-1">
          <span className="pixel-font text-xs text-white">
            {String(cert.id).padStart(2, "0")}
          </span>
        </div>
        {/* Badge CERT */}
        <div className="absolute top-3 right-3 bg-black px-2 py-1">
          <span className="pixel-font text-xs text-yellow-neon">CERT</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className={clsx(
            "text-xl font-bold mb-1 pb-2 border-b-4",
            cert.borderColor
          )}
        >
          {cert.title}
        </h3>
        <div className="flex items-start justify-between mb-4 flex-1">
          <p className="inter-font text-sm font-semibold mt-2">{cert.issuer}</p>
          <span className="pixel-font text-xs bg-black text-white px-2 py-1 mt-2 flex-shrink-0 ml-2">
            {cert.year}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {cert.tags.map((tag) => (
            <span
              key={tag.label}
              className={clsx(
                "pixel-font text-xs px-3 py-1 bg-black",
                tagColorMap[tag.color]
              )}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 opacity-5 diagonal-lines" />

      <Container className="relative">
        <SectionTitle
          subtitle="MY ACHIEVEMENTS"
          title="CERTIFICATES"
          barColor="bg-magenta-neon"
          subtitleColor="text-magenta-neon"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </div>
      </Container>
    </section>
  );
}
