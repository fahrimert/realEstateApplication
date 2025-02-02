import prismadb from "@/lib/db";
import { formatter } from "@/lib/utils";
import { format } from "util";
import { Metadata } from "next";
import Navbar from "@/components/clientComponent/clientNavbar";
import HomePageFooter from "@/components/clientComponent/HomePageFooter";
import HakkimizdaPage from "./components/GalleryLıstPage";
import GalleryLıstComponent from "./components/GalleryLıstPage";
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
  const result = await prismadb.ilanTipi.findMany({
    include: {
      IlanTuru: true
    },
  });
  const firstİlanForCTA = await prismadb.ilanTuru.findFirst({});

  return (
    <div>
      <div>
        <Navbar result={result} resulta={resulta} />
        <div className=" w-full h-fit flex flex-col  gap-[30px]">
          <GalleryLıstComponent/>
          <HomePageFooter  firstİlanForCTA={firstİlanForCTA}/>
        </div>

 
      </div>
    </div>
  );
}
