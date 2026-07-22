"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import clsx from "clsx";

const tagColorMap: Record<string, string> = {
  cyan: "text-cyan-neon",
  magenta: "text-magenta-neon",
  yellow: "text-yellow-neon",
};

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasUrl = Boolean(project.githubUrl);

  const cardContent = (
    <div
      className={clsx(
        "h-full flex flex-col bg-white border-4 border-black transition-all duration-300 project-card",
        hasUrl ? "hover:-translate-y-2" : "opacity-70 cursor-not-allowed"
      )}
      style={{
        boxShadow: isHovered && hasUrl
          ? `12px 12px 0 ${project.hoverShadow}`
          : "8px 8px 0 #000",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className={clsx(
          "relative h-48 flex-shrink-0 bg-gradient-to-br overflow-hidden crt-effect",
          project.gradient
        )}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <i
            className={clsx(project.techIcon, "text-6xl drop-shadow-lg")}
            style={{ filter: "drop-shadow(2px 2px 0px rgba(0,0,0,0.5))" }}
          />
          <span className="pixel-font text-xs bg-black bg-opacity-40 px-2 py-1 text-white">
            {project.techIconLabel}
          </span>
        </div>
      </div>

      {/* Content — flex-1 so all cards stretch to the same height */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className={clsx(
            "text-xl font-bold mb-2 pb-2 border-b-4",
            project.borderColor
          )}
        >
          {project.title}
        </h3>
        {/* flex-1 pushes tags to the bottom */}
        <p className="inter-font text-sm mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
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

  if (hasUrl) {
    return (
      <Link
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block group h-full"
      >
        {cardContent}
      </Link>
    );
  }

  return <div className="block h-full">{cardContent}</div>;
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-32 relative">
      <div className="absolute inset-0 opacity-5 diagonal-lines" />

      <Container className="relative">
        <SectionTitle subtitle="MY WORK" title="PROJECTS" barColor="bg-cyan-neon" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
