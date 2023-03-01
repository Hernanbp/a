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
    // move text to the right for as long as the scroll is happening
    gsap.to(textRef.current, {
      // move x based on scroll
      x: 150,
      rotate: -1,
      ease: "none",
      duration: 5,
      scrollTrigger: {
        trigger: main.current,
        start: "top center",
        end: "bottom center",
        scrub: 30,
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
        scrub: 30,
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
        scrub: 30,
      },
    });
  }, []);

  return (
    <div className="relative h-screen min-h-screen overflow-hidden text-[#191919]">
      <div
        ref={main}
        className="mx-auto flex h-full w-[1580px] max-w-[90%] flex-col items-center justify-center"
      >
        <h2
          ref={textRef}
          className="flex items-center gap-2 text-[8rem] font-medium tracking-tighter"
        >
          <span className="block">Developing</span>
        </h2>
        <h2
          ref={textRef2}
          className="flex items-center gap-2 text-[8rem] font-medium tracking-tighter"
        >
          <span className="block">Digital</span>
        </h2>
        <h2
          ref={textRef3}
          className="flex items-center gap-2 text-[8rem] font-medium tracking-tighter"
        >
          <span className="block translate-x-[-10rem]">Experiences</span>
        </h2>
        <div className="absolute  -z-10 flex h-[50vh] w-[1200px] max-w-[90%] border border-[#191919]">
          <div className="flex h-full w-[200px] flex-col justify-center border-r border-[#191919]">
            <div className="h-[112.1px] w-full rounded-full border border-[#3d3d3d]"></div>
            <div className="h-[200px] w-full rounded-full border border-[#3d3d3d]"></div>
          </div>
          <div className="h-full w-[200px] border-r border-[#191919]"></div>
          <div className="h-full w-[200px] border-r border-[#191919]">
            <div className="h-full w-full rounded-full border border-[#3d3d3d]"></div>
          </div>
          <div className="h-full w-[200px] border-r border-[#191919]"></div>
          <div className="flex h-full w-[200px] flex-col justify-end border-r border-[#191919] p-4">
            <p className="text-sm tracking-tighter">
              Quality is the common thread in everything we do. It’s not
              something we say, it’s something we’ve been recognized for. And we
              proudly hold these awards as a reminder of how the way you do
              things matters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
