import Portfolio from "~/components/Portfolio";
import Hero from "~/components/Hero";
import About from "~/components/About";
import Footer from "~/components/Footer";

export const metadata = {
  title: "Hernan Barrios Paz",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
}
