const Footer = () => {
  return (
    <section className="h-screen bg-[#0e0e0e]">
      <div className="mx-auto flex h-full w-[1580px] max-w-[90%] flex-col justify-end">
        <div className="">
          <h2 className="text-[5.5rem] font-semibold leading-[80%] tracking-tight text-[#fff]">
            Start a project
          </h2>
        </div>
        <p className="mt-28 text-lg text-white">
          Create an experience that’s as remarkable as your business.
        </p>
        <div className="my-20 flex justify-between text-sm text-white">
          <ul className="flex gap-[4rem]">
            <li>
              <span className="text-[#F1584F]">Located in</span> <br />
              Buenos Aires, Argentina
            </li>
            <li>
              <span className="text-[#F1584F]">Contact</span> <br />
              hernanbp.hb@gmail.com
            </li>
            <li>
              <span className="text-[#F1584F]">Socials</span> <br />
              Github, LinkedIn
            </li>
          </ul>
          <p className="self-end">
            All rights reserved @ Hernan Barrios Paz - 2022
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
