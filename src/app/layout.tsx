"use client";

import Header from "~/components/Header";
import "../styles/globals.css";
import localFont from "@next/font/local";
import Lenis from "@studio-freight/lenis";

const hkgrotesk = localFont({
  src: "../font/HKGrotesk-Regular.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //smooth scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <html className={hkgrotesk.className} lang="en">
      <body className=" bg-[#EAE6D8]">
        <Header />
        {children}
      </body>
    </html>
  );
}
