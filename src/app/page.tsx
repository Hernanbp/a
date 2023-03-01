import Portfolio from "~/components/Portfolio";
import Hero from "~/components/Hero";
import Divider from "~/utils/Divider";
import About from "~/components/About";

export const metadata = {
  title: "Hernan Barrios Paz",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
      <Portfolio />
      <div className="h-screen bg-[#f8f8f8]"></div>
    </>
  );
}
