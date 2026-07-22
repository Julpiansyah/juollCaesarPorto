export interface Project {
  id: number;
  title: string;
  description: string;
  tags: { label: string; color: "cyan" | "magenta" | "yellow" }[];
  gradient: string;
  numberColor: string;
  borderColor: string;
  hoverShadow: string;
  githubUrl: string;
  techIcon: string; // devicon class name
  techIconLabel: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Inventaris-FE",
    description:
      "Platform e-commerce full-stack dengan integrasi payment gateway dan dashboard admin.",
    tags: [
      { label: "Express-JS", color: "cyan" },
      { label: "Dart", color: "magenta" },
      { label: "Front-end", color: "yellow" },
    ],
    gradient: "from-cyan-neon to-magenta-neon",
    numberColor: "text-white",
    borderColor: "border-cyan-neon",
    hoverShadow: "#03dffc",
    githubUrl: "https://github.com/Julpiansyah/FE-Inventaris",
    techIcon: "devicon-react-original",
    techIconLabel: "React",
  },
  {
    id: 2,
    title: "Inventari BE",
    description:
      "Aplikasi manajemen tugas dengan fitur real-time collaboration dan notifikasi.",
    tags: [
      { label: "Express-JS", color: "cyan" },
      { label: "Dart", color: "magenta" },
      { label: "Back-end", color: "yellow" },
    ],
    gradient: "from-yellow-neon to-magenta-neon",
    numberColor: "text-black",
    borderColor: "border-magenta-neon",
    hoverShadow: "#ff03fc",
    githubUrl: "https://github.com/Julpiansyah/BE-inventNew",
    techIcon: "devicon-express-original",
    techIconLabel: "Express.js",
  },
  {
    id: 3,
    title: "Pembelian Tiket Konser",
    description:
      "Website portfolio personal dengan desain retro-futuristik dan animasi interaktif.",
    tags: [
      { label: "Laravel", color: "cyan" },
      { label: "Blade", color: "magenta" },
      { label: "Full-stack", color: "yellow" },
    ],
    gradient: "from-cyan-neon to-yellow-neon",
    numberColor: "text-black",
    borderColor: "border-yellow-neon",
    hoverShadow: "#fcff03",
    githubUrl: "https://github.com/Julpiansyah/Pembelian-Tiket-Konser",
    techIcon: "devicon-laravel-original",
    techIconLabel: "Laravel",
  },
  {
    id: 4,
    title: "GymPro",
    description:
      "Aplikasi sinopsis film dengan pencarian cerdas dan sistem rating komunitas.",
    tags: [
      { label: "C++", color: "cyan" },
      { label: "Flutter", color: "magenta" },
      { label: "Mobile", color: "yellow" },
    ],
    gradient: "from-magenta-neon to-cyan-neon",
    numberColor: "text-white",
    borderColor: "border-cyan-neon",
    hoverShadow: "#03dffc",
    githubUrl: "https://github.com/Julpiansyah/gymPro-Mobile",
    techIcon: "devicon-cplusplus-plain",
    techIconLabel: "C++",
  },
  {
    id: 5,
    title: "Pembelian Tiket Kolam Renang",
    description:
      "Sistem manajemen inventaris dengan laporan otomatis dan tracking stok real-time.",
    tags: [
      { label: "LARAVEL", color: "cyan" },
      { label: "BLADE", color: "magenta" },
      { label: "MYSQL", color: "yellow" },
    ],
    gradient: "from-yellow-neon to-cyan-neon",
    numberColor: "text-black",
    borderColor: "border-magenta-neon",
    hoverShadow: "#ff03fc",
    githubUrl: "https://github.com/Julpiansyah/Tiket-Kolam-Renang",
    techIcon: "devicon-laravel-original",
    techIconLabel: "Laravel",
  },
  {
    id: 6,
    title: "Portofolio Gen 1",
    description:
      "Aplikasi pesan instan dengan enkripsi end-to-end dan dukungan media sharing.",
    tags: [
      { label: "REACT", color: "cyan" },
      { label: "NODE", color: "magenta" },
      { label: "JavaScript", color: "yellow" },
    ],
    gradient: "from-cyan-neon to-magenta-neon",
    numberColor: "text-white",
    borderColor: "border-yellow-neon",
    hoverShadow: "#fcff03",
    githubUrl: "https://github.com/Julpiansyah/PortofolioJulpiansyah",
    techIcon: "devicon-react-original",
    techIconLabel: "React",
  },
];
