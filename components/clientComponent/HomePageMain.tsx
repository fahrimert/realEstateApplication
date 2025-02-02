"use client";

import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import React from "react";
import { Ilan, Image as Imagee } from "@prisma/client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import Link from "next/link";
import { ChevronRightCircle } from "lucide-react";
import { motion } from "framer-motion"
import 'chart.js/auto';
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

interface MainPageProps {
  sloganİnfo: {
    id: string;
    sloganName: string;
    createdAt: Date;
    updatedAt: Date;
} | null


  anaSayfaVitrinİlanları: {
    id: string;
    IlanTipiId: string;
    IlanTuruId: string;
    order: number;
    json: any;
    name: string;
    price: string;
    anaVitrin: boolean;
    fırsatVitrini: boolean;
    acilVitrini: boolean;
    satildi: boolean;
    Kiralandi: boolean;
    images: Imagee[];
    createdAt: Date;
    updatedAt: Date;
}[]
fırsatVitrinİlanları: {
  id: string;
  IlanTipiId: string;
  IlanTuruId: string;
  order: number;
  json: any;
  name: string;
  price: string;
  anaVitrin: boolean;
  fırsatVitrini: boolean;
  acilVitrini: boolean;
  satildi: boolean;
  Kiralandi: boolean;
  images: Imagee[];
  createdAt: Date;
  updatedAt: Date;
}[]

  acilVitriniİlanları:{
    id: string;
    IlanTipiId: string;
    IlanTuruId: string;
    order: number;
    json: any;
    name: string;
    price: string;
    anaVitrin: boolean;
    fırsatVitrini: boolean;
    acilVitrini: boolean;
    satildi: boolean;
    Kiralandi: boolean;
    images: Imagee[];
    createdAt: Date;
    updatedAt: Date;
  }[]
  danısman: {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
    password: string | null;
    role: "ADMIN" | "DANISMAN";
    createdAt: Date;
    updatedAt: Date;
  }[];
  firstİlanForCTA: {
    id: string;
    IlanTuruIsmi: string;
    IlanTipiId: string;
    createdAt: Date;
    updatedAt: Date;
} | null
ilanlar:  ({
  images: Imagee[]
} & Ilan)[]}
const HomePageMain: React.FC<MainPageProps> = ({
  sloganİnfo,
  firstİlanForCTA,
  anaSayfaVitrinİlanları,
  fırsatVitrinİlanları,
  acilVitriniİlanları,
  danısman,
  ilanlar
}) => {
  const [isClient, setIsClient] = useState(false);
  
 
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="  relative w-full h-fit flex flex-col  justify-center items-center pr-[20px] pl-[20px] ">
        <div className="relative  bg-[url('../public/Secondİmage.png')]  bg-center    w-full h-[700px] flex flex-col justify-center items-center gap-[80px] overflow-hidden rounded-lg bg-cover bg-no-repeat text-center  ">
          <div className=" relative w-fit h-[326px] flex flex-col justify-center items-center gap-[32px]">
            <div className="relative w-full h-fit flex flex-col items-center justify-center gap-[24px] ">
              <h2
                className={`w-fit h-fit  text-[#05050a] text-[50px] leading-[50px]  hover:scale-110  hover:text-black hover:transition-all cursor-pointer  hover:duration-500  `}
              >
                {sloganİnfo?.sloganName}
              </h2>
              <div className="w-full bg-white bg-opacity-50 h-fit flex justify-center items-center rounded-[30px] hover:bg-transparent hover:transition-all hover:text-white  cursor-pointer hover:duration-500 ">
              <h2
                className={`w-full h-full hover:text-white text-black font-[18px] leading-[24px]  items-start justify-start `}
              >
                Ahmet Gayrimenkul olarak ihtiyaçlarınıza uygun en iyi ilanları
                sizlerle buluşturuyoruz. Profösyonel danışmanlarımız size
                hayalizindeki evi almanın her adımında rehberlik etmek için
                buradalar.
              </h2>
              </div>
        
            </div>
            <div className=" relative w-fit h-fit flex flex-row justify-start items-start gap-[16px] p-0">
              <div className=" relative w-fit h-fit flex flex-row justify-center items-center gap-[8px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] bg-white hover:scale-110 hover:transition-all cursor-pointer">
                <h2 className="relative w-fit h-fit  text-[16px] leading-[16px]">
                  <Link href={`${firstİlanForCTA?.id}`}>İlanları Keşfedin</Link>
                </h2>
              </div>
              <div className=" relative w-fit h-fit flex flex-row justify-center items-center gap-[8px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] bg-white  hover:scale-110 hover:transition-all  cursor-pointer ">
                <h2 className="relative w-fit h-fit  text-[16px] leading-[16px] text-black ">
                  <Link href={"/iletisimClient"}>İletişime Geçin</Link>
                </h2>
              </div>
            </div>
          </div>
          <div className=" relative w-[1024px] h-fit flex flex-row items-start justify-center gap-[16px]">
            <div className="relative w-full h-fit flex flex-col items-center justify-center flex-nowrap px-[32px] py-[16px] border-b border-white hover:scale-110 hover:transition-all  hover:border-black  hover:duration-500  ">
              <Link href="#anavitrin">
                <h2 className=" relative w-[180px] h-fit text-white text-[16px] leading-[24px] items-center">
                  Ana Vitrin İlanlar
                </h2>
              </Link>
            </div>
            <div className="relative w-full h-fit flex flex-col items-center justify-center flex-nowrap px-[32px] py-[16px]  border-b border-white hover:scale-110 hover:transition-all  hover:border-black  hover:duration-500 ">
              <Link href="#acilvitrin">
                <h2 className=" relative w-[180px] h-fit text-white text-[16px] leading-[24px] items-center">
                  Acil İlanlar
                </h2>
              </Link>
            </div>
            <Link href="#fırsatvitrin">
              <div className="relative w-full h-fit flex flex-col items-center justify-center flex-nowrap px-[32px] py-[16px]  border-b border-white hover:scale-110 hover:transition-all  hover:border-black  hover:duration-500 ">
                <h2 className=" relative w-[180px] h-fit text-white text-[16px] leading-[24px] items-center">
                  Fırsat İlanlar
                </h2>
              </div>
            </Link>
            <Link href="#danışmanlarımız">
              <div className="relative w-full h-fit flex flex-col items-center justify-center flex-nowrap px-[32px] py-[16px]  border-b border-white hover:scale-110 hover:transition-all  hover:border-black   hover:duration-500">
                <h2 className=" relative w-[180px] h-fit text-white text-[16px] leading-[24px] items-center">
                  Danışmanlar İlanlar
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Separator />
      <div className="relative w-full h-[1145px] flex flex-col items-center justify-center gap-[80px] py-[112px] px-[64px]">
        <div className="relative w-[768px] h-fit flex flex-col  gap-[16px] p-0">
          <div className="relative w-full  h-fit flex flex-row items-center">
            <h2 className=" w-full h-fit text-[18px] leading-[24px] flex items-center justify-center">
              KEŞFEDİN
            </h2>
          </div>
          <div className="relative w-full h-fit flex flex-col items-end justify-end gap-[10px] ">
            <h2 className=" w-[768px] h-fit text-[48px] leading-[64px] flex items-center justify-center ">
              Olağanüstü Gayrimenkul{" "}
            </h2>
            <h2 className=" w-[768px] h-fit text-[48px] leading-[64px] flex items-center justify-center ">
              Tekliflerimizi Keşfedin{" "}
            </h2>

            <h2 className=" w-[768px] h-fit text-[18px] leading-[24px] flex items-center justify-center flex-grow">
              Ahmet Gayrimenkul olarak ihtiyaçlarınızı karşılayacak geniş bir
              ilan yelpazesi sunuyoruz. Platformumuz, gayrimenkul yolculuğunuzun
              her adımında size rehberlik edecek uzman danışmanlarla sizi
              buluşturur.
            </h2>
          </div>
        </div>

        <div className=" relative w-fit h-fit flex flex-col items-start justify-start gap-[64px] p-0">
          <div className=" w-[1312px] flex  flex-row items-center justify-start gap-[48px] ">
            <div className=" relative w-full h-full flex flex-col justify-start items-start flex-nowrap gap-[32px]">
            <div
 
    
      className=" w-full h-full grid grid-cols-3 grid-rows-2 gap-[10px]  "
    
    >
      {ilanlar.map((g) => (
<>
        {g.images.map((d) => (
           <motion.div
           key={d.id}
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           whileHover={{ scale: 1.1 }}
           transition={{ duration: 0.5 }}
      >
   <Image
                className=" w-full  h-full rounded-[30px]"
                alt="232"
                key={d.id}
                width={50}
                height={20}
                src={d.url!}
              />
      </motion.div>
        ))}
     
</>


      ))}



    </div>
                

             
             
              <div className=" relative w-full h-full flex flex-col justify-center  items-start  gap-[24px]">
                <h2 className=" relative w-[405px] h-fit text-[36px] leading-[43.2px] items-center">
                  Bolca Emlak İlan Seçeneği İle Karşınızdayız
                </h2>
                <h2 className=" relative w-[405px] h-fit text-[16px] leading-[24px] items-center justify-center">
                  İlan Seçeneklerimiz Arasından Hayalizdeki Evi Bulun
                </h2>
              </div>
            </div>
            <div className=" relative w-full h-full flex flex-col justify-start items-start flex-nowrap gap-[32px]">

            <div
 
    
 className=" w-full h-full flex flex-row  gap-[10px]  "

 >
<Carousel className=" w-full h-full flex flex-row  gap-[10px]  ">
  <CarouselContent>
 {danısman.map((g) => (
          <CarouselItem key={g.id} >
<Image
            className=" w-full  h-full rounded-[30px]"
            alt="232"
            width={200}
            height={20}
            src={g.image !== null ? g.image : "d"}
          />
</CarouselItem>
 ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


</div>
              <div className=" relative w-full h-full flex flex-col justify-center  items-start  gap-[24px]">
                <h2 className=" relative w-full h-fit text-[36px] leading-[43.2px] items-center">
                  Deneyimli Danışmanlarımızdan Profösyonel Yardım Alın
                </h2>
                <h2 className=" relative w-[405px] h-fit text-[16px] leading-[24px] items-center justify-center">
                  Danışmanlarımız size hayalizdeki ev için profösyonel yardımlar
                  sunmakta
                </h2>
              </div>
            </div>
            
          </div>
        </div>

        <div className=" relative w-fit h-fit flex flex-row items-start justify-center gap-[24px] p-0">
          <div className=" relative w-fit h-fit flex flex-row items-center justify-center gap-[8px] p-0">
            <Link href={"/iletisimClient"}>İletişim için </Link>
            <ChevronRightCircle size={24} />
          </div>
        </div>
      </div>

      <Separator />

      <div
        id="anavitrin"
        className=" relative w-full h-fit flex flex-col justify-start items-center  gap-[80px] px-[64px] py-[112px]"
      >
        <div className=" relative w-full h-fit flex flex-row justify-between items-end ">
          <div className="relative w-[768px] h-fit flex flex-col items-start justify-start gap-[16px]">
            <div className="relative w-fit h-fit flex flex-row items-start justify-center">
              <h2 className="relative w-fit h-fit text-[16px] leading-[24px]">
                Öne Çıkan İlanlarımız
              </h2>
            </div>
            <div className="relative w-fit h-fit flex flex-col items-start justify-center gap-[16px]">
              <h2 className="relative w-[768px] h-fit text-[48px] leading-[64px]">
                Ana Vitrin İlanlar
              </h2>
              <h2 className="relative w-[768px] h-fit text-[18px] leading-[24px]">
                Ana vitrin ilanlarımızdaki inanılmaz fırsatları keşfedin.
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-full h-fit flex flex-col items-start justify-start gap-[64px]]">
          <div className="relative w-full h-fit  grid grid-cols-3  items-start justify-start gap-[48px]  max-md:flex-col  max-xl:grid max-xl:grid-cols-2 max-md:grid max-md:grid-cols-1 ">
            {anaSayfaVitrinİlanları.map((d) => (
 <HoverCard key={d.id}  >
 <HoverCardTrigger>

 <Image
    className={cn(` w-full h-[485px]  rounded-[30px]  hover:scale-110 hover:transition-all cursor-pointer   `)}

    alt="232"
    width={300}
    height={300}
    unoptimized
    priority
    objectFit="cover"
    src={d.images[0].url}
  />

 </HoverCardTrigger>
 <HoverCardContent  key={d.id} className=" relative w-[405px] h-fit flex flex-col justify-start items-start gap-[8px] z-10">
    <div className=" relative w-full h-fit flex flex-col justify-start items-start ">
      <h2 className=" w-[405px] h-fit text-[18px] leading-[27px] text-black">
        {d.name}
      </h2>
      <h2 className=" w-[405px] h-fit text-[14px] leading-[21px] text-black">
         {`${d.json !== null ? d.json.filter((entry: any) => entry.key.trim() === "İl" || entry.key.trim() === "Şehir").map((entry: any) => entry.value): "İl Bilgisi yok"}-${d.json !== null ? d.json.filter((entry:any) => entry.key.trim() === "İlçe").map((entry:any) => entry.value): "İlçe Bilgisi yok"}`}
      </h2>
    </div>
    <h2 className=" w-[405px] h-fit text-[20px] leading-[25px] text-black">
      Price:{d.price} TL
    </h2>
 </HoverCardContent>
</HoverCard>
 

            ))}
          
          
          </div>
        </div>
      </div>
      <Separator />

      <div
        id="acilvitrin"
        className=" relative w-full h-fit flex flex-col justify-start items-center  gap-[80px] px-[64px] py-[112px]"
      >
        <div className=" relative w-full h-fit flex flex-row justify-between items-end ">
          <div className="relative w-[768px] h-fit flex flex-col items-start justify-start gap-[16px]">
            <div className="relative w-fit h-fit flex flex-row items-start justify-center">
              <h2 className="relative w-fit h-fit text-[16px] leading-[24px]">
                Sınırlı Süre
              </h2>
            </div>
            <div className="relative w-fit h-fit flex flex-col items-start justify-center gap-[16px]">
              <h2 className="relative w-[768px] h-fit text-[48px] leading-[64px]">
                Acil İlanlar
              </h2>
              <h2 className="relative w-[768px] h-fit text-[18px] leading-[24px]">
                İlanlarımız Arasından Acil Olanları Görün.
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-full h-fit flex flex-col items-start justify-start gap-[64px]">
          <div className="relative w-full h-fit  grid grid-cols-3  items-start justify-start gap-[48px]  max-md:flex-col  max-xl:grid max-xl:grid-cols-2 max-md:grid max-md:grid-cols-1">
            {/* Card */}
            {acilVitriniİlanları.map((d) => (
               <HoverCard key={d.id} >
               <HoverCardTrigger>
              
               <Image
                  className={cn(` w-full h-[485px]  rounded-[30px]  hover:scale-110 hover:transition-all cursor-pointer   `)}
              
                  alt="232"
                  width={300}
                  height={300}
                  unoptimized
                  priority
                  objectFit="cover"
                  src={d.images[0].url}
                />
              
               </HoverCardTrigger>
               <HoverCardContent  key={d.id} className=" relative w-[405px] h-fit flex flex-col justify-start items-start gap-[8px] z-10">
                  <div className=" relative w-full h-fit flex flex-col justify-start items-start ">
                    <h2 className=" w-[405px] h-fit text-[18px] leading-[27px] text-black">
                      {d.name}
                    </h2>
                    <h2 className=" w-[405px] h-fit text-[14px] leading-[21px] text-black">
                    {`${d.json !== null ? d.json.filter((entry:any) => entry.key.trim() === "İl" || entry.key.trim() === "Şehir").map((entry:any) => entry.value): "İl Bilgisi yok"}-${d.json !== null ? d.json.filter((entry:any) => entry.key.trim() === "İlçe").map((entry:any) => entry.value): "İlçe Bilgisi yok"}`}
                    </h2>
                  </div>
                  <h2 className=" w-[405px] h-fit text-[20px] leading-[25px] text-black">
                    Price:{d.price} TL
                  </h2>
               </HoverCardContent>
              </HoverCard>
 

            ))}
         
       
          </div>
        </div>
      </div>
      <div
        id="fırsatvitrin"
        className=" relative w-full h-fit flex flex-col justify-start items-center  gap-[80px] px-[64px] py-[112px]"
      >
        <div className=" relative w-full h-fit flex flex-row justify-between items-end ">
          <div className="relative w-[768px] h-fit flex flex-col items-start justify-start gap-[16px]">
            <div className="relative w-fit h-fit flex flex-row items-start justify-center">
              <h2 className="relative w-fit h-fit text-[16px] leading-[24px]">
                Bu Fiyatlar Birdaha Gelmez
              </h2>
            </div>
            <div className="relative w-fit h-fit flex flex-col items-start justify-center gap-[16px]">
              <h2 className="relative w-[768px] h-fit text-[48px] leading-[64px]">
                Fırsat İlanlar
              </h2>
              <h2 className="relative w-[768px] h-fit text-[18px] leading-[24px]">
                İlanlarımız Arasından Kısa Süreliğine Uygun Olanları Görün.
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-full h-fit flex flex-col items-start justify-start gap-[64px]">
          <div className="relative w-full h-fit  grid grid-cols-3  items-start justify-start gap-[48px]  max-md:flex-col  max-xl:grid max-xl:grid-cols-2 max-md:grid max-md:grid-cols-1">
            {/* Card */}

            {fırsatVitrinİlanları.map((d) => (
  <HoverCard key={d.id} >
  <HoverCardTrigger>
 
  <Image
     className={cn(` w-full h-[485px]  rounded-[30px]  hover:scale-110 hover:transition-all cursor-pointer   `)}
 
     alt="232"
     width={300}
     height={300}
     unoptimized
     priority
     objectFit="cover"
     src={d.images[0].url}
   />
 
  </HoverCardTrigger>
  <HoverCardContent  key={d.id} className=" relative w-[405px] h-fit flex flex-col justify-start items-start gap-[8px] z-10">
     <div className=" relative w-full h-fit flex flex-col justify-start items-start ">
       <h2 className=" w-[405px] h-fit text-[18px] leading-[27px] text-black">
         {d.name}
       </h2>
       <h2 className=" w-[405px] h-fit text-[14px] leading-[21px] text-black">
       {`${d.json !== null ? d.json.filter((entry:any) => entry.key.trim() === "İl" || entry.key.trim() === "Şehir").map((entry:any) => entry.value): "İl Bilgisi yok"}-${d.json !== null ? d.json.filter((entry:any) => entry.key.trim() === "İlçe").map((entry:any) => entry.value): "İlçe Bilgisi yok"}`}
       </h2>
     </div>
     <h2 className=" w-[405px] h-fit text-[20px] leading-[25px] text-black">
       Price:{d.price} TL
     </h2>
  </HoverCardContent>
 </HoverCard>

            ))}
        
         
          </div>
        </div>
      </div>

      <Separator />

      <div
        id="danışmanlarımız"
        className="relative w-full h-fit flex flex-col justify-center items-center gap-[80px] px-[64px] py-[112px]"
      >
        <div className="relative w-[768px] h-fit flex flex-col justify-center items-center  gap-[16px] p-0">
          <div className="relative w-full  h-fit flex flex-row items-center">
            <h2 className=" w-full h-fit text-[18px] leading-[24px] flex items-center justify-center">
              İletişime Geçin
            </h2>
          </div>
          <div className="relative w-full h-fit flex flex-col items-end justify-end gap-[10px] ">
            <h2 className=" w-[768px] h-fit text-[48px] leading-[64px] flex items-center justify-center ">
              Danışmanlarımız{" "}
            </h2>

            <h2 className=" w-[768px] h-fit text-[18px] leading-[24px] flex items-center justify-center flex-grow">
              Sizi Hayalinizdeki Evinize Ulaştıracak Danışmanlarınıza Bakın.
            </h2>
          </div>
        </div>

        <div className=" relative w-full h-fit flex flex-col justify-start items-start flex-nowrap gap-[64px] p-0">
          <div className=" relative w-full h-fit flex flex-row justify-start items-start gap-[32px] p-0">

            {danısman.map((d) => 
                  <div key={d.id} className="relative w-full h-fit flex flex-col justify-start items-center gap-[24px] p-0">
                  <Image
                    alt="2132"
                    width={300}
                    height={300}
                    className=" relative"
                    src={d.image!}
                  />
                  <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[12px]">
                    <div className=" relative w-full h-fit flex flex-col justify-start items-center">
                      <h2 className=" w-full h-fit text-[20px] leading-[30px] flex justify-center">
                        {d.name}
                      </h2>
                      <h2 className=" w-full h-fit text-[18px] leading-[27px] flex justify-center">
                        {d.role}
{/*                         Ana Danışman
 */}                      </h2>
                    </div>
                    <h2 className=" w-fit h-fit text-[16px] leading-[24px]">
                      Expert in residential properties and market
                    </h2>
                    <h2 className=" w-fit h-fit text-[16px] leading-[24px]">
                      trends.{" "}
                    </h2>
                  </div>
    
               
                </div>
            
            )}
      
        
          </div>
        </div>
      </div>

    </>
  );
};

export default HomePageMain;
