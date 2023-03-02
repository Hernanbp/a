"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const main = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      x: 150,
      rotate: -1,
      ease: "none",
      duration: 5,
      scrollTrigger: {
        trigger: main.current,
        start: "top center",
        end: "bottom center",
        scrub: 10,
      },
    });

    gsap.to(textRef2.current, {
      // move x based on scroll
      x: -250,
      ease: "none",
      duration: 5,
      scrollTrigger: {
        trigger: main.current,
        start: "top center",
        end: "bottom center",
        scrub: 10,
      },
    });

    gsap.to(textRef3.current, {
      // move x based on scroll
      x: 300,
      ease: "none",
      rotate: 1,
      duration: 5,
      scrollTrigger: {
        trigger: main.current,
        start: "top center",
        end: "bottom center",
        scrub: 10,
      },
    });
  }, []);

  return (
    <div className="relative h-[120vh] min-h-screen overflow-hidden  text-[#fff]">
      <div
        ref={main}
        className="mx-auto flex h-full w-[1580px] max-w-[90%] flex-col items-center justify-center"
      >
        <h2
          ref={textRef}
          className="flex items-center gap-2 text-[8rem] font-medium tracking-tighter"
        >
          <span className="block">crafting</span>
        </h2>
        <h2
          ref={textRef2}
          className="flex translate-x-[-10rem] items-center gap-2 text-[8rem] font-medium tracking-tighter"
        >
          <span className="block">digital</span>
        </h2>
        <h2
          ref={textRef3}
          className="flex items-center gap-2 text-[8rem] font-medium tracking-tighter"
        >
          <span className="block translate-x-[-14rem]">experiences</span>
        </h2>
        <div className="absolute  -z-10 flex h-[50vh] w-[1200px] max-w-[90%] border border-[#5c5c5c]">
          <div className="flex h-full w-[200px] flex-col justify-center border-r border-[#5c5c5c]">
            <div className="h-[112.1px] w-full rounded-full border border-[#5c5c5c]"></div>
            <div className="h-[200px] w-full rounded-full border border-[#5c5c5c]"></div>
          </div>
          <div className="h-full w-[200px] border-r border-[#5c5c5c]"></div>
          <div className="h-full w-[200px] border-r border-[#5c5c5c]">
            <div className="h-full w-full rounded-full border border-[#5c5c5c]"></div>
          </div>
          <div className="h-full w-[200px] border-r border-[#5c5c5c]"></div>
          <div className="flex h-full w-[200px] flex-col justify-end border-r border-[#5c5c5c] p-4">
            <p className="text-sm font-light tracking-tight">
              Quality is the common thread in everything I do.
            </p>
          </div>
          <div className="h-full w-[200px]">
            <div className="h-[200px] w-full rounded-full border border-[#5c5c5c]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
