import { CodeSquare, Palette, Server, Smartphone } from "lucide-react";
import { skills } from "@/data/skills";
import { personal } from "@/data/personal";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import clsx from "clsx";

const skillColorMap: Record<string, { text: string; bg: string }> = {
  cyan: { text: "text-cyan-neon", bg: "bg-cyan-neon" },
  magenta: { text: "text-magenta-neon", bg: "bg-magenta-neon" },
  yellow: { text: "text-yellow-neon", bg: "bg-yellow-neon" },
};

const tools = [
  { icon: CodeSquare, label: "Code" },
  { icon: Palette, label: "Design" },
  { icon: Server, label: "Backend" },
  { icon: Smartphone, label: "Mobile" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-32 relative about-section"
    >
      <div className="absolute inset-0 opacity-5 dot-pattern-lg" />

      <Container className="relative">
        <SectionTitle
          subtitle="WHO AM I"
          title="ABOUT ME"
          subtitleColor="text-cyan-neon"
          barColor="bg-magenta-neon"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            {/* School info */}
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="pixel-font text-xs px-3 py-1 bg-black text-cyan-neon">
                {personal.school.toUpperCase()}
              </span>
              <span className="pixel-font text-xs px-3 py-1 bg-black text-magenta-neon">
                {personal.major.toUpperCase()}
              </span>
            </div>

            {personal.bio.map((paragraph, index) => (
              <p
                key={index}
                className={clsx("inter-font text-lg", index === 0 ? "mb-6" : "mb-8")}
              >
                {paragraph}
              </p>
            ))}

            {/* Skill Bars */}
            <div className="space-y-6">
              {skills.map((skill) => {
                const colors = skillColorMap[skill.color];
                return (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span
                        className={clsx("pixel-font text-xs", colors.text)}
                      >
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-6 bg-black border-4 border-black overflow-hidden">
                      <div
                        className={clsx("h-full progress-bar-stripe", colors.bg)}
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Geometric Illustration */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Main Shape */}
              <div
                className="absolute inset-0 bg-cyan-neon border-4 border-black"
                style={{ boxShadow: "8px 8px 0 #000" }}
              />
              {/* Overlapping Shapes */}
              <div className="absolute top-8 left-8 w-full h-full border-4 border-magenta-neon" />
              <div className="absolute top-16 left-16 w-full h-full border-4 border-yellow-neon" />

              {/* Tool Icons */}
              <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-6 p-8">
                {tools.map((tool) => (
                  <div
                    key={tool.label}
                    className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center"
                    style={{ boxShadow: "4px 4px 0 #000" }}
                  >
                    <tool.icon size={32} strokeWidth={1.5} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="pixel-font text-xs sm:text-sm text-center mb-8 text-cyan-neon">
            TECH STACK
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="about-card bg-white border-4 border-black p-6" style={{ boxShadow: "6px 6px 0 #000" }}>
              <h4 className="font-bold text-lg mb-4 pb-2 border-b-4 border-cyan-neon">FRONTEND</h4>
              <div className="flex flex-wrap gap-2">
                {personal.techStack.frontend.map((tech) => (
                  <span key={tech} className="pixel-font text-xs px-3 py-1 bg-black text-cyan-neon">
                    {tech.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
            {/* Backend */}
            <div className="about-card bg-white border-4 border-black p-6" style={{ boxShadow: "6px 6px 0 #000" }}>
              <h4 className="font-bold text-lg mb-4 pb-2 border-b-4 border-magenta-neon">BACKEND</h4>
              <div className="flex flex-wrap gap-2">
                {personal.techStack.backend.map((tech) => (
                  <span key={tech} className="pixel-font text-xs px-3 py-1 bg-black text-magenta-neon">
                    {tech.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
            {/* Database */}
            <div className="about-card bg-white border-4 border-black p-6" style={{ boxShadow: "6px 6px 0 #000" }}>
              <h4 className="font-bold text-lg mb-4 pb-2 border-b-4 border-yellow-neon">DATABASE</h4>
              <div className="flex flex-wrap gap-2">
                {personal.techStack.database.map((tech) => (
                  <span key={tech} className="pixel-font text-xs px-3 py-1 bg-black text-yellow-neon">
                    {tech.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
            {/* Tools */}
            <div className="about-card bg-white border-4 border-black p-6" style={{ boxShadow: "6px 6px 0 #000" }}>
              <h4 className="font-bold text-lg mb-4 pb-2 border-b-4 border-cyan-neon">TOOLS</h4>
              <div className="flex flex-wrap gap-2">
                {personal.techStack.tools.map((tech) => (
                  <span key={tech} className="pixel-font text-xs px-3 py-1 bg-black text-cyan-neon">
                    {tech.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
            {/* Learning */}
            <div className="about-card bg-white border-4 border-black p-6 sm:col-span-2 lg:col-span-2" style={{ boxShadow: "6px 6px 0 #000" }}>
              <h4 className="font-bold text-lg mb-4 pb-2 border-b-4 border-magenta-neon">SEDANG DIPELAJARI</h4>
              <div className="flex flex-wrap gap-2">
                {personal.techStack.learning.map((tech) => (
                  <span key={tech} className="pixel-font text-xs px-3 py-1 bg-black text-magenta-neon">
                    {tech.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
