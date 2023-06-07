"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const text = useRef(null);
  const text2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      text.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.1,
        ease: "expo",
      }
    );
    gsap.fromTo(
      text2.current,
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "expo",
      }
    );
  }, []);

  return (
    <>
      <section className="h-[85vh]  min-h-[550px]">
        <div className="mx-auto flex h-full w-[1580px] max-w-[90%]">
          <div className="flex flex-col justify-center">
            <h1 className="mb-[4rem] flex flex-col overflow-hidden font-semibold leading-[80%] tracking-tight text-[#fff] lg:text-[5rem] xl:text-[5.5rem]">
              <span ref={text2}>look at — usual things</span>
              <span className="text-[#F1584F]" ref={text}>
                with unusual eyes.
              </span>
            </h1>
            <div className="flex flex-col">
              <p className="text-[1.15rem] leading-tight text-[#fff]">
                <span className="block font-medium leading-tight tracking-tight">
                  Hernan Barrios Paz
                </span>
                <span className="font-extralight tracking-tight text-[#ccc]">
                  Fullstack Developer & Web Designer
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
