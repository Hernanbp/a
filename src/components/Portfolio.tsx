import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <section className="section h-full min-h-screen bg-[#F8F8F8]">
        <div className="mx-auto flex h-full w-[1580px] max-w-[90%] flex-col  items-center gap-20 py-20">
          {/* texto de arriba  */}
          <div className="flex h-1/2 w-full gap-20">
            {/* lado izquierdo */}
            <div className="flex w-1/2 items-start">
              <div className="flex items-center gap-4">
                <div className="flex h-[2em] w-[2em] items-center justify-center rounded-full bg-[#282728] p-4 text-sm text-white">
                  01
                </div>
                <button className="rounded-full border border-[#282728] px-4 py-1 text-sm">
                  Portfolio
                </button>
              </div>
            </div>
            {/* lado derecho */}
            <div className="w-1/2 ">
              <div className="flex flex-col">
                <h2 className="pb-8 text-[2.375rem] font-semibold tracking-tighter text-[#282728]">
                  Digital Products & Services
                </h2>
                <p className="max-w-[600px] text-[1.375rem] font-normal leading-[1.3] tracking-tighter text-[#282728]">
                  From idea to a product: creating successful digital services
                  for innovative startups and established businesses with
                  cutting-edge UX, UI design,front and back-end development.
                </p>
              </div>
            </div>
          </div>

          {/* imagenes  */}
          <div className="flex h-full w-full gap-20">
            <div className="flex w-1/2 flex-col">
              <div className="interactable relative h-full min-h-[350px] cursor-pointer overflow-hidden bg-[#070707] transition-all duration-500 hover:rounded-xl ">
                {/* <Image
                  datatype="image"
                  alt="test"
                  src="/img1.png"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="interactable opacity-[.9] transition-all duration-300 ease-[cubic-bezier(.25,.46,.45,.94)] hover:scale-105 hover:opacity-100"
                /> */}
              </div>
              <div className="mt-2">
                <p className="tracking-tight">Follow Art</p>
                <p className="tracking-tight text-[#6a6a6a]">Marketplace</p>
              </div>
            </div>
            <div className="flex w-1/2 flex-col">
              <div className="interactable relative  h-full min-h-[350px] cursor-pointer overflow-hidden bg-[#070707] transition-all duration-500 hover:rounded-xl ">
                {/* <Image
                  datatype="image"
                  alt="test"
                  src="/1.jpg"
                  fill={true}
                  style={{ objectFit: "cover" }}
                  className="interactable opacity-[.9] transition-all duration-300 ease-[cubic-bezier(.25,.46,.45,.94)] hover:scale-105 hover:opacity-100"
                /> */}
              </div>
              <div className="mt-2">
                <p className="tracking-tight">Follow Art</p>
                <p className="tracking-tight text-[#6a6a6a]">Marketplace</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
