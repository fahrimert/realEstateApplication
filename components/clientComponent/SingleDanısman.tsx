"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
  item: {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
    password: string | null;
    role: "ADMIN" | " DANISMAN";
    createdAt: Date;
    updatedAt: Date;
}
}
const SingleDanısman: React.FC<ProductsProps> = ({ item }) => {

  return (
    <Link href={`/danismanLıstesı`}>
      <div className=" relative w-[full] h-full flex flex-col items-center justify-center gap-[10px] ">
        <div className="  relative  h-[400px] w-full  flex flex-col justify-center items-center gap-[10px] ">
      {item.image ?          <Image
            src={item.image}
            alt="232"
            className="w-full h-full z-0 object-cover"
            height={300}
            width={300}
            objectPosition="center"
          />
     : null}
 
      
         
        </div>
        <div className=" relative w-full h-full  flex flex-col justify-end items-end  bg-[##4F4F4F] z-10 gap-[20px]">
          <h2 className="w-full h-fit font-inter  text-black text-[16px]  tracking-[-0.48]    ">
            {item.name}
          </h2>
          <div className="relative w-full h-fit flex flex-col justify-center items-start gap-[10px]">
         
            <h2>
            İletişim Bilgilerini Sıralamak Lazım
            </h2>
           
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleDanısman;
