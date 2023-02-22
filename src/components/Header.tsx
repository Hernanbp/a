"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";

interface item {
  id: number;
  name: string;
}

const Header = () => {
  const menu = [
    { id: 1, name: "Portfolio" },
    { id: 2, name: "Sobre mi" },
    { id: 3, name: "Blog" },
  ];

  return (
    <header className=" text-[#282728]">
      <div className="mx-auto block w-[1580px] max-w-[90%]">
        <div className="flex items-center justify-between py-10">
          <div>Logo</div>
          <nav className="pointer-events-auto hidden items-center justify-between text-[0.83rem] font-medium md:flex">
            {menu.map((item: item) => (
              <div key={item.id} className="cursor-pointer px-[1.5rem]">
                <span className="relative  after:invisible after:absolute after:-bottom-[3px] after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-[.25s] after:ease-[cubic-bezier(.25,.46,.45,.94)] after:content-[''] hover:after:visible hover:after:w-full">
                  {item.name}
                </span>
              </div>
            ))}
            <div className="ml-8 flex items-center gap-2">
              <button className="rounded-full bg-[#282728] px-6 py-3 text-white">
                Contacto
              </button>

              <button className="flex items-center gap-2 rounded-full border border-[#282728] px-6 py-3">
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
