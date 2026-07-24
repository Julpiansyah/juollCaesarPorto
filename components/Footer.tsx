import { ArrowUp } from "lucide-react";
import { personal } from "@/data/personal";
import Container from "./Container";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-white border-t-4 border-black py-8 relative transition-all duration-500"
    >
      <div className="absolute inset-0 opacity-5 horizontal-lines" />

      <Container className="relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="pixel-font text-xs text-center sm:text-left">
            &copy; 2026 {personal.name.first.toUpperCase()} {personal.name.last.toUpperCase()} {"// ALL RIGHTS RESERVED"}
          </p>

          {/* Back to Top */}
          <a
            href="#home"
            className="group flex items-center gap-2 px-4 py-2 bg-cyan-neon border-4 border-black transition-all duration-200 hover:-translate-y-1"
            style={{ boxShadow: "4px 4px 0 #000" }}
          >
            <ArrowUp
              size={20}
              strokeWidth={1.5}
              className="group-hover:animate-bounce"
            />
            <span className="pixel-font text-xs">BACK TO TOP</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
