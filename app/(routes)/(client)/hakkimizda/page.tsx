import prismadb from "@/lib/db";
import { Metadata } from "next";
import Navbar from "@/components/clientComponent/clientNavbar";
import HomePageFooter from "@/components/clientComponent/HomePageFooter";
import HakkimizdaPage from "./components/HakkimizdaPage";
export const metadata: Metadata = {
  title: "Yardım Sayfası | ",
};
export default async function Home() {
  const firstİlanForCTA = await prismadb.ilanTuru.findFirst({})

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
  const result = await prismadb.ilanTipi.findMany({
    include: {
      IlanTuru:true
    },
  });
  const danısman = await prismadb.user.findMany({
    where: {
      role: "DANISMAN",
    },
  
  });
  const iletisimBilgileri = await prismadb.iletisim.findFirst({})
  return (
    <div>
      <div>
        <Navbar result={result} resulta={resulta} />
        <div className=" w-full h-fit flex flex-col  gap-[30px]">
          <HakkimizdaPage 
          iletisimBilgileri = {iletisimBilgileri}
          danısman = {danısman}
          firstİlanForCTA = {firstİlanForCTA}/>
          <HomePageFooter firstİlanForCTA = {firstİlanForCTA} 
          
          />
        </div>

      </div>
    </div>
  );
}
