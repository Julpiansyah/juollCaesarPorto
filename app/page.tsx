import Scanlines from "@/components/Scanlines";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Scanlines />
      <Navbar />
      <main>
        <Hero />
        <ScrollReveal>
          <Projects />
        </ScrollReveal>
        <ScrollReveal>
          <Certificates />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
