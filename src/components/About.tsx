"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const paraRef = useRef(null);

  useEffect(() => {
    const para = paraRef.current;

    gsap.from(para, {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".h-screen",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="h-screen bg-[#282728]">
      <div className="justiy-center mx-auto flex h-full w-[1580px] max-w-[90%] items-center">
        <p ref={paraRef} className="text-4xl font-bold text-white">
          Sobre mi
        </p>
      </div>
    </section>
  );
};

export default About;
