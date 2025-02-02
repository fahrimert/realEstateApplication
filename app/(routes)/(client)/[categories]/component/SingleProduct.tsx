"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

interface ProductsProps {
  item: {
    id: string;
    IlanTipiId: string;
    IlanTuruId: string;
    order: number;
    name: string;
    price: string;
    json :any

    anaVitrin: boolean;
    fırsatVitrini: boolean;
    acilVitrini: boolean;
    satildi: boolean;
    Kiralandi: boolean;
    images: {
      id: string;
      productId: string;
      url: string;
      createdAt: Date;
      updatedAt: Date;
  }[]
    createdAt: Date;
    updatedAt: Date;
}
}
const SingleProduct: React.FC<ProductsProps> = ({ item }) => {
  const params = useParams();
 

  return (
    <div className=" w-full h-fit flex flex-row items-center justify-center bg-white  gap-[10px]">

    <Link href={`${params.categories}/${item.id}`}>
      <div className="   background-color: #fdf1ec;  " >

<div className="  h-[420px] w-[654px] shadow-[0px_14px_32px_0px_rgba(0,0,0,0.15)] mx-auto my-[50px] rounded-[7px_7px_7px_7px]; /* VIA CSS MATIC https://goo.gl/cIbnS */
">

    <div className="float-left h-[420px] w-[327px]">
    <Image
            src={item.images.map((a) => a.url)[0]}
            alt="232"
            className="w-full h-full  object-contain"
            width={200} 
            height={200}
          />
    </div>
    <div className="float-left h-[420px] w-[327px] bg-white rounded-[0_7px_10px_7px]">

      <div className=" h-fit w-[327px] mt-[50px]">
  
        <h1 className = "text-[34px] text-[#474747] ml-[38px] mr-0 my-0 ">Etiket :
           {item.satildi ? "Satıldı" : null}
        {item.Kiralandi? "Kiralandı" : null}
        </h1>
        <h1 className = "text-[34px] text-[#474747] ml-[38px] mr-0 my-0 ">{item.name}</h1>
        <h2 className="text-[13px] font-normal uppercase text-[#d2d2d2] tracking-[0.2em] ml-[38px] mr-0 mt-0">Adana/Çukurova -- {item.name}</h2>
        <p className=" h-fit text-[#8d8d8d] leading-[1.7em] text-[15px] font-[lighter] overflow-hidden ml-[38px] mr-0 my-0">
{`${item.json !== null ? item.json.filter((entry:any) => entry.key.trim() === "Oda Sayısı" || entry.key.trim() === "OdaSayısı" ).map((entry:any) => entry.value): "Oda Sayısı Bilgisi Yok"}`}

 </p>
 <p className=" h-fit text-[#8d8d8d] leading-[1.7em] text-[15px] font-[lighter] overflow-hidden ml-[38px] mr-0 my-0">

 {`${item.json !== null ? item.json.filter((entry:any) => entry.key.trim() === "Metre kare" || entry.key.trim() === "Metrekare" ).map((entry:any) => entry.value): "MetreKare Bilgisi yok"}`}
 </p>

      </div>
      <div className="h-fit w-[327px] relative mt-[17px]">
  
        <p className=" inline-block  h-[50px] text-[28px] font-[lighter] text-[#474747] ml-[38px] mr-0 my-0"><span className="inline-block h-[50px] text-[34px]">{item.price} TL</span></p>
        <button type="button" className="float-right inline-block h-[50px] w-44 box-border text-sm font-medium uppercase tracking-[0.2em] text-white bg-[#9cebd5] cursor-pointer ml-4 mr-10 my-0 rounded-[60px] border-[transparent] hover:bg-[#79b0a1];">İnceleyin</button>
      </div>
      </div>
    </div>
</div>
 
    </Link>

    </div>

  );
};

export default SingleProduct;
