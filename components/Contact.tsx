"use client";

import { useState, type FormEvent } from "react";
import { Mail, Send } from "lucide-react";
import { personal } from "@/data/personal";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

function GithubIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${personal.email}`,
    hoverBg: "hover:bg-cyan-neon hover:border-cyan-neon hover:text-black",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    href: personal.social.github,
    hoverBg: "hover:bg-magenta-neon hover:border-magenta-neon hover:text-black",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: personal.social.linkedin,
    hoverBg: "hover:bg-yellow-neon hover:border-yellow-neon hover:text-black",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: personal.social.instagram,
    hoverBg: "hover:bg-magenta-neon hover:border-magenta-neon hover:text-black",
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-20 sm:py-32 relative bg-black text-white">
      <div className="absolute inset-0 opacity-10 vertical-lines" />

      <Container className="relative">
        <SectionTitle
          subtitle="GET IN TOUCH"
          title="CONTACT"
          subtitleColor="text-cyan-neon"
          barColor="bg-magenta-neon"
        />

        <div className="max-w-2xl mx-auto">
          {/* Terminal Style Form */}
          <div
            className="bg-black border-4 border-cyan-neon p-6 sm:p-8"
            style={{ boxShadow: "8px 8px 0 #03dffc" }}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-cyan-neon">
              <div className="w-3 h-3 rounded-full bg-magenta-neon" />
              <div className="w-3 h-3 rounded-full bg-yellow-neon" />
              <div className="w-3 h-3 rounded-full bg-cyan-neon" />
              <span className="pixel-font text-xs ml-4 text-cyan-neon">
                CONTACT.EXE
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="pixel-font text-xs text-cyan-neon mb-2 block">
                  NAME_
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-4 border-cyan-neon px-4 py-3 text-white inter-font focus:outline-none focus:border-magenta-neon transition-colors"
                  placeholder="Enter your name..."
                />
              </div>
              <div>
                <label className="pixel-font text-xs text-cyan-neon mb-2 block">
                  EMAIL_
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-4 border-cyan-neon px-4 py-3 text-white inter-font focus:outline-none focus:border-magenta-neon transition-colors"
                  placeholder="Enter your email..."
                />
              </div>
              <div>
                <label className="pixel-font text-xs text-cyan-neon mb-2 block">
                  MESSAGE_
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent border-4 border-cyan-neon px-4 py-3 text-white inter-font focus:outline-none focus:border-magenta-neon transition-colors resize-none"
                  placeholder="Type your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-cyan-neon text-black font-bold border-4 border-cyan-neon transition-all duration-200 hover:bg-magenta-neon hover:border-magenta-neon animate-glow flex items-center justify-center gap-2"
              >
                <Send size={18} />
                SEND MESSAGE
              </button>
            </form>

            {/* Terminal Output */}
            <div className="mt-6 pt-4 border-t-2 border-cyan-neon">
              <p className="pixel-font text-xs text-cyan-neon">
                &gt; READY TO RECEIVE YOUR MESSAGE...
              </p>
              <p className="pixel-font text-xs text-cyan-neon mt-1">
                &gt;<span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`w-14 h-14 bg-transparent border-4 border-white flex items-center justify-center transition-all duration-200 ${social.hoverBg}`}
                style={{ boxShadow: "4px 4px 0 #fff" }}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
