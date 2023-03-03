import Portfolio from "~/components/Portfolio";
import Hero from "~/components/Hero";
import Divider from "~/utils/Divider";
import About from "~/components/About";
import Projects from "~/components/Projects";

export const metadata = {
  title: "Hernan Barrios Paz",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Divider />
      {/* <Portfolio /> */}
      <About />
      <Projects />
    </>
  );
}
