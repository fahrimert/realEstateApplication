import prismadb from "@/lib/db";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Navbar from "@/components/clientComponent/clientNavbar";
import HomePageFooter from "@/components/clientComponent/HomePageFooter";
import IlanWithDetail from "./component/IlanWithDetail";
const HomePage = async ({ params }: { params: { ilanIds: string } }) => {
  const ilanIds = params.ilanIds;
  const ilans = await prismadb.ilan.findUnique({
    where: {
      id: ilanIds,
    },
    include: {
      images: true,
      user:true
    },
  });

  const firstİlanForCTA = await prismadb.ilanTuru.findFirst({});

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

  return (
    <>
      <div className=" relative w-full h-fit flex flex-col justify-start items-center gap-[15px] bg-white">
        <div className=" relative w-full h-fit flex flex-col justify-center items-center gap-[10px]">
          <Navbar result={result} resulta={resulta} />
          <Separator />
           <IlanWithDetail ilans = {ilans}/>
        </div>
      </div>
      <HomePageFooter firstİlanForCTA = {firstİlanForCTA} />
    </>
  );
};
export default HomePage;


