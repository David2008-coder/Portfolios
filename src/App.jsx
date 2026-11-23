import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useReveal from "./components/useReveal";

export default function App() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
