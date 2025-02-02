import prismadb from "@/lib/db";
import { formatter } from "@/lib/utils";
import { format } from "util";
import { Metadata } from "next";
import Navbar from "@/components/clientComponent/clientNavbar";
import HomePageFooter from "@/components/clientComponent/HomePageFooter";
import IletisimPage from "./components/İletisimPage";
export const metadata: Metadata = {
  title: "Yardım Sayfası | ",
};
export default async function Home() {
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
  const iletisimBilgileri = await prismadb.iletisim.findFirst({}) as
  {
    id: string;
    sirketAd: string;
    sirketAdres: string;
    sirkettelefon: number;
    kisiselTelefon: number;
    destekemail: string;
    facebookLink: string | null;
    instaLink: string | null;
    twitterLink: string | null;
    createdAt: Date;
    updatedAt: Date;
} | null
  
  const firstİlanForCTA = await prismadb.ilanTuru.findFirst({})

  const result = await prismadb.ilanTipi.findMany({
    include: {
      IlanTuru: true
    },
  });
  return (
    <div>
      <div>
        <Navbar result={result} resulta={resulta} />
        <div className=" w-full h-fit flex flex-col  gap-[30px]">

            <IletisimPage iletisimBilgileri = {iletisimBilgileri}/>

          <HomePageFooter  firstİlanForCTA={firstİlanForCTA}/>
        </div>

      </div>
    </div>
  );
}
