'use client'
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  }, [])
  

  useEffect(() => {
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode])
  
  return (
    <>
     <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
     <Header isDarkMode={isDarkMode} />
     <About isDarkMode={isDarkMode} />
     <Skills isDarkMode={isDarkMode} />
     <Projects isDarkMode={isDarkMode} />
     <Contact isDarkMode={isDarkMode} />
     <Footer isDarkMode={isDarkMode} />
    </>
  );
}
