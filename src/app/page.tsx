import About from "~/components/About";
import Hero from "~/components/Hero";
import Divider from "~/utils/Divider";

export const metadata = {
  title: "Hernan Barrios Paz",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Divider />
      <About />
    </>
  );
}
