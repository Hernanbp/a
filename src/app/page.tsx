import About from "~/components/About";
import Hero from "~/components/Hero";

export const metadata = {
  title: "Page",
};

export default function Page() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
