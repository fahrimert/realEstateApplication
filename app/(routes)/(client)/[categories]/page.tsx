import prismadb from "@/lib/db";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { formatter } from "@/lib/utils";
import Products from "./component/Products";
import Navbar from "@/components/clientComponent/clientNavbar";
import HomePageFooter from "@/components/clientComponent/HomePageFooter";
import { notFound } from "next/navigation";


const HomePage = async ({
  params,
  searchParams,
}: {
  params: { categories: string };
  searchParams: { color: string };
}) => {

  const ilanTürüİd = params.categories
  const products = await prismadb.ilanTuru.findUnique({
    where: {
      id: ilanTürüİd,
    },
    include:{
      Ilan:{
        include:{images:true,
        
        }
      }
    }
  
  });
  const firstİlanForCTA = await prismadb.ilanTuru.findFirst({});



  const formattedProducts = {
    id: products?.id,
    categoryName: products?.IlanTuruIsmi,
    IlanTipiId: products?.IlanTipiId,
    createdAt: products?.createdAt,
    updatedAt: products?.updatedAt,
    ilan: products?.Ilan.map((item) => ({
      id: item.id,
      IlanTipiId: item.IlanTipiId,
      IlanTuruId: item.IlanTuruId,
      order: item.order,
      json : item.json,
      name:item.name,
      price: formatter.format(item.price.toNumber()),
      anaVitrin: item.anaVitrin,
      fırsatVitrini: item.FirsatVitrini,
      acilVitrini: item.AcilVitrini,
      satildi: item.satildi,
      Kiralandi: item.Kiralandi,
      images: item.images,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    })),
  };
  const result = await prismadb.ilanTipi.findMany({
    include: {
      IlanTuru: true
    },
  });
  const resulta = await prismadb.ilan.findMany({
    include: {
      images: true,
      IlanTipi: {
        include: {
          IlanTuru: true
        },
      },
    },
  });

  const ilanTurIds = await prismadb.ilanTuru.findMany({
    select:{id:true}
  });

  const categoryNamee = params.categories;
  if (!ilanTurIds.map((item) => item.id).includes(categoryNamee)) {
    throw notFound();
  }
 return (
    <>
      <div className=" relative w-full h-fit flex flex-col justify-start items-center gap-[15px] bg-white">
        <div className=" relative w-full h-fit flex flex-col justify-center items-center gap-[10px]">
          <Navbar 
          result = {result} 
          resulta = {resulta}
          
          />
          <Products 
          
          formattedProducts={formattedProducts} />
        </div>
      </div>
      <HomePageFooter firstİlanForCTA={firstİlanForCTA} />
    </>
  );
};
export default HomePage;

export const dynamicParams = false;


