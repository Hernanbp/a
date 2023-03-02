const Hero = () => {
  return (
    <section className="h-[85vh]  min-h-[550px]">
      <div className="mx-auto flex h-full w-[1580px] max-w-[90%]">
        <div className="flex flex-col justify-center">
          <h1 className="mb-[4rem] flex flex-col font-semibold leading-[80%] tracking-tight text-[#fff] lg:text-[5rem] xl:text-[5.5rem]">
            <span>look at — usual things</span>
            <span>with unusual eyes.</span>
          </h1>
          <p className="text-[1.15rem] leading-tight text-[#fff]">
            <span className="block font-medium leading-tight tracking-tight">
              Hernan Barrios Paz
            </span>
            <span className="font-extralight tracking-tight">
              Frontend Developer & UI Designer
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
