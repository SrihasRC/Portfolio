import Image from "next/image";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function Home() {
  return (
    <>
     <Navbar />
     <Header />
     <About />
     <Skills />
     <Projects />
     <Contact />
    </>
  );
}
