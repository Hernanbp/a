"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const paraRef = useRef(null);
  const paraRef2 = useRef(null);

  useEffect(() => {
    const para = paraRef.current;
    const para2 = paraRef2.current;

    gsap.fromTo(
      para,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: para,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      para2,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: para,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="h-screen bg-[#282728]">
      <div className="mx-auto flex h-full w-[1580px] max-w-[90%] items-center justify-center border-4">
        <p ref={paraRef} className="text-4xl font-bold text-white">
          Sobre mi
        </p>
        <p ref={paraRef2} className="text-4xl font-bold text-white">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </section>
  );
};

export default About;
