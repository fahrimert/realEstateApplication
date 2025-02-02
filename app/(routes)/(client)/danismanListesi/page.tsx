import prismadb from "@/lib/db";
import { Metadata } from "next";
import Navbar from "@/components/clientComponent/clientNavbar";
import HomePageFooter from "@/components/clientComponent/HomePageFooter";
import DanısmanListesi from "./components/DanısmanListesi";
export const metadata: Metadata = {
  title: "Yardım Sayfası | ",
};
export default async function Home() {
  const resulta = await prismadb.ilan.findMany({
    include: {
      images: true,
      IlanTipi: {
        include: {
          IlanTuru: true,
        },
      },
    },
  });
  const firstİlanForCTA = await prismadb.ilanTuru.findFirst({});

  const result = await prismadb.ilanTipi.findMany({
    include: {
      IlanTuru: true,
    },
  });
  const iletisimBilgileri = await prismadb.iletisim.findFirst({});

  const danısman = await prismadb.user.findMany({
    where: {
      role: "DANISMAN",
    },
  });
  return (
    <div>
      <Navbar result={result} resulta={resulta} />
      <DanısmanListesi
        danısman={danısman}
        iletisimBilgileri={iletisimBilgileri}
      />

      <HomePageFooter firstİlanForCTA={firstİlanForCTA} />
    </div>
  );
}
