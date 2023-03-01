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
      x: () => {
        return window.innerWidth / 2;
      },
      rotate: -1,
      ease: "none",
      scrollTrigger: {
        trigger: main.current,
        start: "top center",
        end: "bottom center",
        scrub: 14,
      },
    });

    gsap.to(textRef2.current, {
      // move x based on scroll
      x: () => {
        return -window.innerWidth / 2;
      },
      ease: "none",
      scrollTrigger: {
        trigger: main.current,
        start: "top center",
        end: "bottom center",
        scrub: 14,
      },
    });

    gsap.to(textRef3.current, {
      // move x based on scroll
      x: () => {
        return window.innerWidth / 2;
      },
      ease: "none",
      rotate: 1,
      scrollTrigger: {
        trigger: main.current,
        start: "top center",
        end: "bottom center",
        scrub: 14,
      },
    });
  }, []);

  return (
    <div className="h-screen min-h-screen overflow-hidden bg-[#161616]  text-white">
      <div
        ref={main}
        className="mx-auto flex h-full w-[1580px] max-w-[90%] flex-col items-center justify-center"
      >
        <h2
          ref={textRef}
          className="font-base flex items-center gap-2 text-[8rem] tracking-tighter"
        >
          <span className="block">Developing</span>
          <span className="block">Developing</span>
          <span className="block">Developing</span>
          <span className="block">Developing</span>
          <span className="block">Developing</span>
          <span className="block">Developing</span>
          <span className="block">Developing</span>
        </h2>
        <h2
          ref={textRef2}
          className="font-base flex items-center gap-2 text-[8rem] tracking-tighter"
        >
          <span className="block">Digital</span>
          <span className="block">Digital</span>
          <span className="block">Digital</span>
          <span className="block">Digital</span>
          <span className="block">Digital</span>
          <span className="block">Digital</span>
          <span className="block">Digital</span>
        </h2>
        <h2
          ref={textRef3}
          className="font-base flex items-center gap-2 text-[8rem] tracking-tighter"
        >
          <span className="block">Experiences</span>
          <span className="block">Experiences</span>
          <span className="block">Experiences</span>
          <span className="block">Experiences</span>
          <span className="block">Experiences</span>
          <span className="block">Experiences</span>
          <span className="block">Experiences</span>
        </h2>
      </div>
    </div>
  );
};

export default About;
