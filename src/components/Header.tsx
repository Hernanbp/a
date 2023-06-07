/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  DividerVerticalIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
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
    { id: 2, name: "About" },
  ];

  return (
    <header className="fixed right-0 top-0 left-0 z-40 text-[#fff]">
      <div className="mx-auto block w-[1580px] max-w-[90%]">
        <div className="flex items-center justify-between pt-6">
          <h1 className="text-xl font-semibold ">hbp</h1>
          <nav
            ref={navRef}
            className="
            pointer-events-auto hidden items-center
            justify-between text-[.8rem] transition-all duration-700 ease-[cubic-bezier(.25,.46,.45,.94)] md:flex"
          >
            {menu.map((item: item) => (
              <div key={item.id} className="cursor-pointer px-2 text-sm">
                <span className="font-base relative after:invisible after:absolute after:-bottom-[3px] after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-[.25s] after:ease-[cubic-bezier(.25,.46,.45,.94)] after:content-[''] hover:after:visible hover:after:w-full">
                  {item.name}
                </span>
              </div>
            ))}
            <DividerVerticalIcon />
            <div className="ml-4 flex items-center gap-4">
              <a href="github.com">
                <GitHubLogoIcon className="scale-110" />
              </a>
              <a href="github.com">
                <LinkedInLogoIcon className="scale-110" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
