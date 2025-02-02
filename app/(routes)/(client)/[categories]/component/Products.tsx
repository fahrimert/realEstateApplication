"use client"
import React, { useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import SingleProduct from "./SingleProduct";
import {  Ilan,IlanTipi, Image as Imagee } from "@prisma/client";
import GayrimenkulFiltre from "./GayrimenkulFiltre";
interface ProductsProps {
  formattedProducts: {
    id: string | undefined;
    categoryName: string | undefined;
    IlanTipiId: string | undefined;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    ilan: {
      id: string;
      IlanTipiId: string;
      IlanTuruId: string;
      json :any
      order: number;
      name: string;
      price: string;
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
  }[] | undefined
  
  
  }
}

const Products :React.FC<ProductsProps> = ({formattedProducts}) => {
  const params = useParams()
  const searchParams = useSearchParams()
  const sehira =searchParams.get('sehir')?.split("--")[0]
  const ilce =searchParams.get('ilce')
  const mahalle =searchParams.get('mahalle')

 
  const filteredProducts =  formattedProducts?.ilan?.filter((ilan) =>
    ilan.json && ilan.json.some(
      (entry:any) => entry.key.trim() === "İlçe" && entry.value === ilce
    )
  )
  const filteredProductsForMahalle= formattedProducts?.ilan?.filter((ilan) =>
    ilan.json && ilan.json.some(
       (entry:any) => entry.key.trim() === "Mahalle"   && entry.value === mahalle
    )
  )

  return (

<>
  <GayrimenkulFiltre />
    <div className=" w-full h-fit flex flex-col justify-center items-center gap-[40px] pt-[70px]">
    <div className=" relative w-full  h-fit grid grid-cols-2  justify-center items-center gap-[10px] bg-white  max-xl:grid max-xl:grid-cols-1 max-md:grid max-md:grid-cols-1  ">
 
      
    {ilce &&  mahalle && filteredProductsForMahalle?.map((item,index) => 
<SingleProduct 
key={index}
item = {item}/>

    )}
    { ilce &&  !mahalle && filteredProducts?.map((item,index) => 
<SingleProduct 
key={index}
item = {item}/>

    )} 
    {!sehira && !ilce &&  !mahalle && formattedProducts?.ilan?.map((item,index) => 
<SingleProduct 
key={index}
item = {item}/>

    )}
   </div>
 </div></>)
}

export default Products