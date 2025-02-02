import {
  FacebookIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
interface FooterPageProps {
    firstİlanForCTA: {
      id: string;
      IlanTuruIsmi: string;
      IlanTipiId: string;
      createdAt: Date;
      updatedAt: Date;
  } | null}
const HomePageFooter:React.FC<FooterPageProps> = ({firstİlanForCTA}) => {
  return (
    <>
 
     <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[32px] p-[64px] bg-[#05050a]">
          <div className="relative w-full h-fit flex flex-row justify-start items-start gap-[128px] p-[48px] border-[2px] max-lg:flex-col">
            <div  className=" relative w-fit h-fit flex flex-col justify-start items-start gap-[24px] ">
<h2 className=" relative w-fit h-fit text-[32px]  flex items-start text-white">Ahmet Emlakçılık</h2>
            </div>

            <div className="relative w-full h-fit flex flex-row justify-start items-start">
              <div className=" relative w-full h-fit flex flex-col justify-start items-start  ">
              <h2 className="text-white relative w-fit h-fit text-[16px]   py-[8px] ">Hızlı Linkler</h2>
              <div className=" relative w-full h-fit flex flex-col justify-start items-start ">
                  <Link href={'/anasayfa'} className="relative w-full h-fit flex flex-row justify-start items-start py-[8px]">
                      <h2 className="text-white w-fit h-fit text-[14px] ">Home Page</h2>
                  </Link>
                  <Link href={'/hakkimizda'} className="relative w-full h-fit flex flex-row justify-start items-start py-[8px]">
                      <h2 className="text-white w-fit h-fit text-[14px] ">Hakkımızda</h2>
                  </Link>
               
              </div>
              </div>

              <div className=" relative w-full h-fit flex flex-col justify-start items-start gap-[16px]">
              <div className=" relative w-full h-fit flex flex-col justify-start items-start ">
              <Link href={'/iletisimClient'} className="relative w-full h-fit flex flex-row justify-start items-start py-[8px]">
                      <h2 className="text-white w-fit h-fit text-[14px] ">İletişim Bilgileri</h2>
                  </Link>
                  <Link href={`${firstİlanForCTA?.id}`} className="relative w-full h-fit flex flex-row justify-start items-start py-[8px]">
                      <h2 className="text-white w-fit h-fit text-[14px] ">İlan Türleri</h2>
                  </Link>
                  <Link href={'/danismanListesi'} className="relative w-full h-fit flex flex-row justify-start items-start py-[8px]">
                      <h2 className="text-white w-fit h-fit text-[14px] ">Danışman Listesi</h2>
                  </Link>
                  <Link href={'/photogalery'} className="relative w-full h-fit flex flex-row justify-start items-start ">
                      <h2 className=" text-white w-fit h-fit text-[14px] ">Ofis Fotoğraf Galerimiz</h2>
                  </Link>
               
                
              </div>
              </div>
     


            </div>
          </div>
     </div>
  
    </>
  );
};

export default HomePageFooter;
