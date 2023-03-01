const Hero = () => {
  return (
    <section className="h-[85vh]  min-h-[550px] bg-[#ead8d8]">
      <div className="mx-auto flex h-full w-[1580px] max-w-[90%]">
        <div className="flex flex-col justify-center">
          <h1 className="mb-[4rem] flex flex-col font-semibold leading-[80%] tracking-tight text-[#222222] lg:text-[5rem] xl:text-[5.5rem]">
            <span>look at — usual things</span>
            <span>with unusual eyes.</span>
          </h1>
          <p className="text-[1.125rem] text-[#222222]">
            - making memorable experiences through digital design
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
