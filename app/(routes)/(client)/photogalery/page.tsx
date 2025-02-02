
import 'swiper/css';

import Navbar from "@/components/clientComponent/clientNavbar";
import HomePageFooter from "@/components/clientComponent/HomePageFooter";
import prismadb from "@/lib/db";
import PhotoGalery from "./components/A";


const page =  async() => {

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
  const result = await prismadb.ilanTipi.findMany({
    include: {
      IlanTuru: true
    },
  });
  const photosOfGalery = await prismadb.photoGaleryAdmin.findFirst({
   include:{
    photoGaleryAdminImage:true
   }
  })
  const firstİlanForCTA = await prismadb.ilanTuru.findFirst({});

  console.log(photosOfGalery);
    return (
        <>
        <Navbar result={result} resulta={resulta}/>
   <PhotoGalery photosOfGalery = {photosOfGalery}/>
    <HomePageFooter firstİlanForCTA = {firstİlanForCTA}/>
    </>

  )
}

export default page