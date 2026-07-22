export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  tags: { label: string; color: "cyan" | "magenta" | "yellow" }[];
  borderColor: string;
  hoverShadow: string;
  imageUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    year: "2024",
    tags: [
      { label: "HTML", color: "cyan" },
      { label: "CSS", color: "magenta" },
      { label: "Web", color: "yellow" },
    ],
    borderColor: "border-cyan-neon",
    hoverShadow: "#03dffc",
    imageUrl: "/Dicoding Belajar Pemrograman Web.png",
  },
  {
    id: 2,
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2024",
    tags: [
      { label: "JavaScript", color: "cyan" },
      { label: "ES6+", color: "magenta" },
      { label: "Programming", color: "yellow" },
    ],
    borderColor: "border-magenta-neon",
    hoverShadow: "#ff03fc",
    imageUrl: "/Docoding Belajar Pemrograman Javascript.png",
  },
  {
    id: 3,
    title: "Belajar AI Generatif",
    issuer: "Dicoding Indonesia",
    year: "2024",
    tags: [
      { label: "AI", color: "cyan" },
      { label: "Generative", color: "magenta" },
      { label: "Pemula", color: "yellow" },
    ],
    borderColor: "border-yellow-neon",
    hoverShadow: "#fcff03",
    imageUrl: "/Dicoding Belajar AI.png",
  },
  {
    id: 4,
    title: "E-Sertifikat IGDX",
    issuer: "IGDX Academy",
    year: "2024",
    tags: [
      { label: "Game Dev", color: "cyan" },
      { label: "IGDX", color: "magenta" },
      { label: "Academy", color: "yellow" },
    ],
    borderColor: "border-cyan-neon",
    hoverShadow: "#03dffc",
    imageUrl: "/E-Sertifikat IGDX.png",
  },
  {
    id: 5,
    title: "Keselamatan & Kesehatan Kerja",
    issuer: "E-Learning K3",
    year: "2024",
    tags: [
      { label: "K3", color: "cyan" },
      { label: "Safety", color: "magenta" },
      { label: "E-Learning", color: "yellow" },
    ],
    borderColor: "border-magenta-neon",
    hoverShadow: "#ff03fc",
    imageUrl: "/E-Learning K3.png",
  },
];
