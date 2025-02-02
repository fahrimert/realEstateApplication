import prismadb from "@/lib/db";
import { Metadata } from "next";
import Navbar from "@/components/clientComponent/clientNavbar";
import HomePageMain from "@/components/clientComponent/HomePageMain";
import HomePageFooter from "@/components/clientComponent/HomePageFooter";
import { JsonArray, JsonObject } from "@prisma/client/runtime/library";
import { formatter } from "@/lib/utils";
export declare type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonObject
  | JsonArray
export const metadata: Metadata = {
  title: "Ana Sayfa | ",
};
export default async function Home() {

  const anaSayfaVitrinİlanları = await prismadb.ilan.findMany({
    where: {
      anaVitrin: true,
    },
    include: {
      images: true,
    },
  });
 
  const formattedAnavitrin = anaSayfaVitrinİlanları.map((c) =>( {
         id: c.id,
         IlanTipiId: c.IlanTipiId,
         IlanTuruId: c.IlanTuruId,
         order: c.order,
         json : c.json,
         name:c.name,
         price: formatter.format(c.price.toNumber()),
         anaVitrin: c.anaVitrin,
         fırsatVitrini: c.FirsatVitrini,
         acilVitrini: c.AcilVitrini,
         satildi: c.satildi,
         Kiralandi: c.Kiralandi,
         images: c.images,
         createdAt: c.createdAt,
         updatedAt: c.updatedAt,
  
  }))


  const fırsatVitrinİlanları = await prismadb.ilan.findMany({
    where: {
      FirsatVitrini: true,
    },
    include: {
      images: true,
    },
  });
  const formatfırsatVitrinİlanları = fırsatVitrinİlanları.map((c) =>( {
    id: c.id,
    IlanTipiId: c.IlanTipiId,
    IlanTuruId: c.IlanTuruId,
    order: c.order,
    json : c.json,
    name:c.name,
    price: formatter.format(c.price.toNumber()),
    anaVitrin: c.anaVitrin,
    fırsatVitrini: c.FirsatVitrini,
    acilVitrini: c.AcilVitrini,
    satildi: c.satildi,
    Kiralandi: c.Kiralandi,
    images: c.images,
    createdAt: c.createdAt,
    updatedAt: c.updatedAt,

}))
  const acilVitriniİlanları = await prismadb.ilan.findMany({
    where: {
      AcilVitrini: true,
    },
    include: {
      images: true,
    },
  });
  const acilVVitriniİlanları = acilVitriniİlanları.map((c) =>( {
    id: c.id,
    IlanTipiId: c.IlanTipiId,
    IlanTuruId: c.IlanTuruId,
    order: c.order,
    json : c.json,
    name:c.name,
    price: formatter.format(c.price.toNumber()),
    anaVitrin: c.anaVitrin,
    fırsatVitrini: c.FirsatVitrini,
    acilVitrini: c.AcilVitrini,
    satildi: c.satildi,
    Kiralandi: c.Kiralandi,
    images: c.images,
    createdAt: c.createdAt,
    updatedAt: c.updatedAt,

}))
  const result = await prismadb.ilanTipi.findMany({
    include: {
      IlanTuru: true,
    },
  });
  const ilanlar = await prismadb.ilan.findMany({
    include:{
      images:true
    }
  })
  const firstİlanForCTA = await prismadb.ilanTuru.findFirst({});
  const danısman = await prismadb.user.findMany({
    where: {
      role: "DANISMAN",
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
 

  const sloganİnfo = await prismadb.slogan.findFirst({});
  return (
    <div>
      <div className=" w-full h-full ">
        <div className=" w-full h-fit flex flex-col  gap-[20px]">
          <Navbar result={result} resulta={resulta} />
          <HomePageMain
            firstİlanForCTA={firstİlanForCTA}
            ilanlar = {ilanlar.slice(0,6)}
            sloganİnfo={sloganİnfo}
            anaSayfaVitrinİlanları={formattedAnavitrin.slice(0, 5)}
            fırsatVitrinİlanları={formatfırsatVitrinİlanları.slice(0, 5)}
            acilVitriniİlanları={formatfırsatVitrinİlanları.slice(0, 5)}
            danısman={danısman}
          />
          <HomePageFooter firstİlanForCTA={firstİlanForCTA} />
        </div>
      </div>
    </div>
  );
}
