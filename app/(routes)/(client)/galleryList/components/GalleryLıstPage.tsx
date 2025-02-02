import { IstokRegular, ıstok_bold } from "@/public/fonts/font";
import Image from "next/image";
import imageD from "@/public/ProfıleImage.jpg";

const GalleryLıstComponent = () => {
  return (
    <div className="relative w-full h-fit flex flex-col  justify-start items-center gap-[10px]">
      <div className="relative w-full h-fit flex flex-col  justify-center items-center gap-[10px]">
        <div className="relative w-full h-fit flex flex-col  justify-center items-center gap-[15px]">
          <h2
            className={`relative font-${ıstok_bold} w-fit  h-fit text-[50px]  leading-[60px] gap-[10px]   tracking-[-1px]  `}
          >
            Fotoğraf Galerimiz
          </h2>
        </div>

        <div className=" relative w-full h-fit grid grid-cols-3 gap-[10px] max-xl:grid  max-xl:grid-cols-2  max-[1000px]:grid max-[1000px]:grid-cols-1  animate-fade animate-once animate-duration-1000 animate-normal animate-fill-forwards ">
          <div className=" relative  h-[620px] w-full  animate-fade animate-once animate-duration-2000 animate-normal animate-fill-forwards ">
            <Image
              src={imageD}
              width={200}
              height={200}
              alt="SAD"
              className=" bg-black h-full w-full animate-fade animate-once animate-duration-1000 animate-normal animate-fill-forwards"
            />
          </div>
          <div className=" relative  h-[620px] w-full  animate-fade animate-once animate-duration-2000 animate-normal animate-fill-forwards ">
            <Image
              src={imageD}
              width={200}
              height={200}
              alt="SAD"
              className=" bg-black h-full w-full animate-fade animate-once animate-duration-1000 animate-normal animate-fill-forwards"
            />
          </div>
          <div className=" relative  h-[620px] w-full  animate-fade animate-once animate-duration-2000 animate-normal animate-fill-forwards ">
            <Image
              src={imageD}
              width={200}
              height={200}
              alt="SAD"
              className=" bg-black h-full w-full animate-fade animate-once animate-duration-1000 animate-normal animate-fill-forwards"
            />
          </div>
          <div className=" relative  h-[620px] w-full  animate-fade animate-once animate-duration-2000 animate-normal animate-fill-forwards ">
            <Image
              src={imageD}
              width={200}
              height={200}
              alt="SAD"
              className=" bg-black h-full w-full animate-fade animate-once animate-duration-1000 animate-normal animate-fill-forwards"
            />
          </div>
          <div className=" relative  h-[620px] w-full  animate-fade animate-once animate-duration-2000 animate-normal animate-fill-forwards ">
            <Image
              src={imageD}
              width={200}
              height={200}
              alt="SAD"
              className=" bg-black h-full w-full animate-fade animate-once animate-duration-1000 animate-normal animate-fill-forwards"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryLıstComponent;
