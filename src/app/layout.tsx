"use client";

import Header from "~/components/Header";
import "../styles/globals.css";
import localFont from "@next/font/local";
import Lenis from "@studio-freight/lenis";
import MouseTrailer from "~/utils/MouseTrailer";

const graphik = localFont({
  src: [
    {
      path: "../font/graphik/GraphikLCG-Light.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../font/graphik/GraphikLCG-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/graphik/GraphikLCG-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../font/graphik/GraphikLCG-Semibold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../font/graphik/GraphikLCG-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  display: "swap",
});

interface LenisOptions {
  duration: number;
  easing: (t: number) => number;
  direction: "vertical" | "horizontal";
  gestureDirection: "vertical" | "horizontal";
  smooth: boolean;
  mouseMultiplier: number;
  smoothTouch: boolean;
  touchMultiplier: number;
  infinite: boolean;
}

interface LenisInterface {
  raf: (time: DOMHighResTimeStamp) => void;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //smooth scroll
  const options: LenisOptions = {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  };
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const lenis = new Lenis(options) as LenisInterface;

  function raf(time: DOMHighResTimeStamp) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <html className={graphik.className} lang="en">
      <body className="overflow-hidden bg-[#141414]">
        <Header />
        <MouseTrailer />
        {children}
      </body>
    </html>
  );
}
