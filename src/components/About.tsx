"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      x: "-300px",
      ease: "sine",
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 4,
      },
    });
    gsap.to(textRef2.current, {
      x: "300px",
      ease: "sine",
      duration: 1,
      scrollTrigger: {
        trigger: textRef2.current,
        start: "top center",
        end: "bottom center",
        scrub: 4,
      },
    });
  });

  return (
    <div className="h-[200vh] min-h-screen bg-red-500">
      <div className="mx-auto flex h-full w-[1580px] max-w-[90%] flex-col items-center justify-center">
        <h2 ref={textRef} className=" text-[7rem] font-bold tracking-tighter">
          Experience
        </h2>
        <h2 ref={textRef2} className=" text-[7rem] font-bold tracking-tighter">
          I know what Im doing
        </h2>
      </div>
    </div>
  );
};

export default About;
