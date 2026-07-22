export interface Skill {
  name: string;
  percentage: number;
  color: "cyan" | "magenta" | "yellow";
}

export const skills: Skill[] = [
  { name: "FRONTEND", percentage: 95, color: "cyan" },
  { name: "BACKEND", percentage: 85, color: "magenta" },
  { name: "UI/UX DESIGN", percentage: 90, color: "yellow" },
];
