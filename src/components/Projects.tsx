import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto h-screen w-[1580px] max-w-[90%]">
        <div className="relative h-[400px] w-[600px]">
          <Image
            src="/img1.png"
            alt="img"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
