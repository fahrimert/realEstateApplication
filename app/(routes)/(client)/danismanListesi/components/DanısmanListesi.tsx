import React from "react";
import { Iletisim } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
interface MainPageProps {
  danısman: {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
    definition: string | null
    password: string | null;
    role:   "ADMIN" | "DANISMAN";
    createdAt: Date;
    updatedAt: Date;
  }[];
  iletisimBilgileri: Iletisim | null;
}
const DanısmanListesi: React.FC<MainPageProps> = ({
  danısman,
  iletisimBilgileri,
}) => {
  return (
    <>
      <div className=" w-full h-full flex flex-col justify-center items-center ">
        <div
          id="danışmanlarımız"
          className="relative w-full h-fit flex flex-col justify-center items-center gap-[80px] px-[64px] py-[112px]"
        >
          <div className="relative w-fit h-fit flex flex-col justify-center items-center  gap-[16px] p-0">
            <div className="relative w-full  h-fit flex flex-row items-center">
              <h2 className=" w-full h-fit text-[18px] leading-[24px] flex items-center justify-center">
                Takımımız
              </h2>
            </div>
            <div className="relative w-full h-fit flex flex-col items-end justify-end gap-[10px] ">
              <h2 className=" w-fit h-fit text-[32px] leading-[48px] flex items-center justify-center ">
                Şirketimizdeki Danışmanlarımızla Tanışın
              </h2>

              <h2 className=" w-fit h-fit text-[18px] leading-[24px] flex items-center justify-center flex-grow">
                Şirketimizin azimli danışmanları size istediğiniz servisi vermekte uzmanlaşmışdır.
              </h2>
            </div>
          </div>

          <div className=" relative w-full h-fit flex flex-col justify-start items-start flex-nowrap gap-[64px] p-0">
            <div className=" relative w-full h-fit flex flex-row justify-start items-start gap-[32px] max-xl:flex-col bg-[#050505] p-[20px] ">
              {danısman.map((d) => (
                 <Link key={d.id} href={`/danismanListesi/${d.id}`} className="relative w-full h-fit flex flex-col justify-start items-center gap-[24px] p-0 hover:transition-all hover:p-[20px] hover:text-black hover:border-slate-400 hover:rounded-[30px] hover:ring hover:ring-inset-2 ">
                  <Image
                    alt="2132"
                    width={300}
                    height={300}
                    className=" relative"
                    src={d.image!}
                  />
                  <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[12px] hover:bg-slate-400 hover:transition-all ">
                    <div className=" relative w-full h-fit flex flex-col justify-start items-center">
                      <h2 className=" w-full h-fit text-[20px] leading-[30px] flex justify-center text-white  ">
                        {d.name}
                      </h2>
                      <h2 className=" w-full h-fit text-[18px] leading-[27px] flex justify-center text-white">
                        {d.role}
                      </h2>
                    </div>
                    <h2 className=" w-fit h-fit text-[16px] leading-[24px] text-white">
                      {d.definition}
                    </h2>
                  </div>
                </Link>

              ))}
            </div>
          </div>
        </div>

     
      </div>

    
    </>
  );
};

export default DanısmanListesi;
