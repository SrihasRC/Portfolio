import Image from "next/image";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <>
     <Navbar />
     <Header />
     <About />
     <Skills />
    </>
  );
}
