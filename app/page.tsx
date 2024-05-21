"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import anime from "animejs";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {

  type ComponentType = 'about' | 'education' | 'skills' | 'projects' | 'contact' | null;

  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)
  const [activeComponent, setActiveComponent] = useState<ComponentType>(null);

  const animate = () => {
    const loader = anime.timeline({
      autoplay: true,
      delay: 0
    });
    loader.add({
      targets: '#nameTitle',
      opacity: 0,
      easing: "easeOutExpo",
      duration: 0,
    }).add({
      targets: '#nameTitle',
      opacity: 1,
      delay: 0, 
      easing: "easeOutExpo",
      duration: 2000,
    });
  }

  const componentAnimate = () => {
    const loader = anime.timeline().add({
      targets: '#component',
      scale: 0.5,
      delay: 0,
      duration: 0,
      easing: "easeOutExpo"
    }).add({
      targets: '#component',
      scale: 1,
      delay: 0,
      easing: "easeOutExpo"
    })
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case 'about':
        componentAnimate();
        return <About />;
      case 'education':
        componentAnimate();
        return <Education />;
      case 'skills':
        componentAnimate();
        return <Skills />;
      case 'projects':
        componentAnimate();
        return <Projects />
      case 'contact':
        componentAnimate();
        return <Contact />;
      default:
        return null;
    }
  }

  useEffect(() => {
    animate()
    if (isLoading) return
  }, [isLoading])
  

  return (
    <body>
      {isLoading && isHome ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <body id="nameTitle" className="px-[8vw] py-[2vh] md:px-[8vw] md:py-[10vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 text-white">
            <header className="md:self-start p-[5vw]">
              <div className="flex flex-col">
                <div className="tracking-tighter text-3xl font-bold py-1">M A R L O N</div>
                <div className="tracking-tighter text-3xl font-bold pt-1">V E R G A R A</div>
                <br />
                <div>B.S. COMPUTER ENGINEERING</div>
                <div>MINOR IN COMPUTER SCIENCE</div>
              </div>
              <div className="flex">
                <div className="flex flex-col pt-[5vh]">
                  <ul className="font-bold">
                    <li className="py-1 text-white duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer"><a href="#" onClick={() => setActiveComponent('about')}>about</a></li>
                    <li className="py-1 text-white duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer"><a href="#" onClick={() => setActiveComponent('education')}>education</a></li>
                    <li className="py-1 text-white duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer"><a href="#" onClick={() => setActiveComponent('skills')}>skills</a></li>
                    <li className="py-1 text-white duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer"><a href="#" onClick={() => setActiveComponent('projects')}>projects</a></li>
                    <li className="py-1 text-white duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer"><a href="#" onClick={() => setActiveComponent('contact')}>contact</a></li>
                  </ul>
                </div>
              </div>
            </header>
            <div id="component" className="flex text-red-200 items-center justify-start text-left p-[5vw] md:text-right md:justify-end">
              {renderComponent()}
            </div>
          </div>
        </body>
      )}
    </body>
  );
}
