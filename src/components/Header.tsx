/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useEffect, useRef } from "react";

interface item {
  id: number;
  name: string;
}

const Header = () => {
  const navRef = useRef<HTMLDivElement>(null);

  //opacity 0 to nav if scrolling down
  const handleScroll = () => {
    const nav: HTMLDivElement | null = navRef.current;
    const scroll: number = window.scrollY;

    if (scroll > 50) {
      if (nav) {
        nav.classList.add("opacity-0");
        nav.classList.add("translate-y-[-100%]");
      }
    } else {
      if (nav) {
        nav.classList.remove("opacity-0");
        nav.classList.remove("translate-y-[-100%]");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { id: 1, name: "Portfolio" },
    { id: 2, name: "Sobre mi" },
  ];

  return (
    <header className="fixed right-0 top-0 left-0 z-40 text-[#282728]">
      <div className="mx-auto block w-[1580px] max-w-[90%]">
        <div className="flex items-center justify-between py-10">
          <h1 className="text-sm font-semibold uppercase">Hernan B. Paz</h1>
          <nav
            ref={navRef}
            className="
            pointer-events-auto hidden items-center
            justify-between text-[.875rem] transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] md:flex lg:text-[.78rem]"
          >
            {menu.map((item: item) => (
              <div key={item.id} className="cursor-pointer px-[1.5rem]">
                <span className="relative font-medium after:invisible after:absolute after:-bottom-[3px] after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-[.25s] after:ease-[cubic-bezier(.25,.46,.45,.94)] after:content-[''] hover:after:visible hover:after:w-full">
                  {item.name}
                </span>
              </div>
            ))}
            <div className="ml-4 flex items-center gap-1">
              <button className="rounded-full bg-[#282728] px-[1rem] py-3 font-medium text-white xl:px-4">
                Contacto
              </button>
              <button className="flex items-center gap-2 rounded-full border border-[#282728] px-[1rem] py-3 font-medium xl:px-4">
                ESP
                <ChevronDownIcon />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
