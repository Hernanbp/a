"use client";

import { ArrowDownIcon } from "@radix-ui/react-icons";
import React, { useEffect } from "react";
import gsap from "gsap";

const Divider = () => {
  useEffect(() => {
    gsap.fromTo(
      ".scale-125",
      { y: 0 },
      {
        y: 5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <div>
      <div className="mx-auto flex h-[60px] w-[1580px] max-w-[90%] items-center justify-start">
        <p className="flex items-center  gap-4 text-sm  text-white">
          <span className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-full border border-white">
            <ArrowDownIcon className="scale-125 text-white" />
          </span>
          Scroll Down
        </p>
      </div>
    </div>
  );
};

export default Divider;
