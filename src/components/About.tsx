"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.to(containerRef.current, {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 4,
      },
    });

    const textLineAnim = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "none",
      },
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 0.5,
      },
    });
  });

  return (
    <div ref={containerRef} className="h-[100vh] min-h-screen bg-[#f8f8f8]">
      <div className="mx-auto flex h-full w-[1580px] max-w-[90%] flex-col items-center justify-center">
        <h2 ref={textRef} className=" text-[8rem] font-bold tracking-tighter">
          Experience
        </h2>
        <h2 ref={textRef2} className=" text-[8rem] font-bold tracking-tighter">
          I know what Im doing
        </h2>
      </div>
    </div>
  );
};

export default About;
