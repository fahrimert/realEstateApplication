"use client";
import { Slider as Sluder } from "@/components/ui/slider";
import Image from "next/image";
import Link from "next/link";
import BirinciImage from "@/public/Secondİmage.png";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight, Linkedin } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EmblaCarousel from 'embla-carousel';

import Autoplay from 'embla-carousel-autoplay'
import type { EmblaCarouselType } from 'embla-carousel';
import type { OptionsHandlerType } from 'embla-carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import React, { useRef, useState } from "react";
import { Iletisim,  User,  } from "@prisma/client";
import { Button } from "@/components/ui/button";

interface HakkimizdaProps {
  firstİlanForCTA: {
    id: string;
    IlanTuruIsmi: string;
    IlanTipiId: string;
    createdAt: Date;
    updatedAt: Date;
} | null
iletisimBilgileri :Iletisim | null

danısman: {
  image: string | null;
  id: string;
  name: string | null;
  email: string;
  password: string | null;
  role: "DANISMAN" | "ADMIN";
  telefon: string;
  definition: string;
  createdAt: Date;
  updatedAt: Date;
}[]
}
const HakkimizdaPage :React.FC<HakkimizdaProps>= ({firstİlanForCTA,danısman}) => {

  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  });
  let ref =useRef(0)
  return (
    <div className=" w-full h-fit flex flex-col justify-start items-start ">
      <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[80px] py-[112px] px-[64px] max-md:p-[20px] max-md:w-fit">
        <div className=" relative w-[768px] h-fit flex flex-col justify-start items-start gap-[32px] max-md:w-fit ">
          <div className=" relative w-full h-fit flex flex-col justify-start items-start gap-[16px] max-md:w-fit">
            <div className=" relative w-fit h-fit flex flex-row justify-start items-center ">
              <h2 className="relative w-fit h-fit text-[16px] leading-[24px] ">
                Hoşgeldiniz
              </h2>
            </div>
            <div className="relative w-fit h-fit flex flex-col justify-start items-start gap-[24px]">
              <h2 className="relative w-[768px] h-fit text-[56px] leading-[68px] max-md:w-fit max-md:text-[24px] max-md:leading-[24px] ">
                Mert Emlakçılık Sizin Güvenilir Emlak Yardımcınız
              </h2>
              <h2 className="relative w-[768px] h-fit text-[18px] leading-[27px] max-md:w-fit ">
                Hayalinizdeki Evi Ahmet Emlakçılık İle Bulun,Burada sizin
                isteğiniz ve ihtiyaçlarınız önce gelir.
              </h2>
            </div>
          </div>
          <div className=" relative w-fit h-fit flex flex-row justify-start items-start gap-[16px] p-0">
            <div className=" relative w-fit h-fit flex flex-row justify-center items-center gap-[8px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] bg-[#D8E1F2]">
              <h2 className="relative w-fit h-fit  text-[16px] leading-[16px] ">
                <Link href={`${firstİlanForCTA?.id}`}>İlanları Keşfedin</Link>
              </h2>
            </div>
            <div className=" relative w-fit h-fit flex flex-row justify-center items-center gap-[8px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] bg-[#D8E1F2]  ">
              <h2 className="relative w-fit h-fit  text-[16px] leading-[16px] text-black">
                <Link href={"/iletisimClient"}>İletişime Geçin</Link>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative w-full h-fit flex flex-row justify-start items-start gap-[80px] py-[112px] px-[64px] max-xl:p-[20px] max-xl:flex-col">
        <div className=" relative w-full h-fit flex flex-col justify-start items-start gap-[16px]">
          <div className=" relative w-full h-fit flex flex-col justify-start items-start gap-[16px]">
            <div className=" relative w-fit h-fit flex flex-row justify-start items-center ">
              <h2 className="relative w-fit h-fit text-[16px] leading-[24px]  max-xl:leading-[16px]">
                Gelişimimiz
              </h2>
            </div>
            <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[24px]">
              <h2 className="relative w-[768px] h-fit text-[56px] leading-[68px] max-xl:w-fit max-xl:text-[24px]  max-xl:leading-[24px]">
              Yıllara Bağlı Hikayemiz: Önemli Başarılarımız
                            </h2>
              <h2 className="relative w-[768px] h-fit text-[18px] leading-[27px] max-xl:w-fit max-xl:leading-[18px] ">
              Mert Gayrimenkul, gayrimenkul pazarında zamanla  kendini kanıtlamıştır. Mükemmelliğe olan bağlılığımız, başarımıza ve müşteri memnuniyetine yönlendirir.
              </h2>
            </div>
          </div>
          <div className=" relative w-fit h-fit flex flex-row justify-start items-start gap-[16px] p-0">
            <div className=" relative w-fit h-fit flex flex-row justify-center items-center gap-[8px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] bg-[#D8E1F2]">
              <h2 className="relative w-fit h-fit  text-[16px] leading-[16px]">
              <Link href={`${firstİlanForCTA?.id}`}>İlanları Keşfedin</Link>
              </h2>
            </div>
            <div className=" relative w-fit h-fit flex flex-row justify-center items-center gap-[8px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] bg-[#D8E1F2]  ">
              <h2 className="relative w-fit h-fit  text-[16px] leading-[16px] text-black">
                <Link href={"/iletisimClient"}>İletişime Geçin</Link>
              </h2>
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-row justify-start items-start gap-[50px]">
          <div className=" relative w-fit h-full ">
            <Sluder    defaultValue={[0]} max={100} step={25} />
          </div>

          <div className="relative w-full h-[1500px] flex flex-col justify-between items-center ">
            <div id="1"  className=" relative w-full h-full flex flex-row justify-start items-start gap-[16px]">
              <div className=" relative w-full h-fit flex flex-col justify-start items-start gap-[16px]">
                <div className=" relative w-fit h-fit flex flex-row justify-start items-center ">
                  <h2 className="relative w-fit h-fit text-[40px] leading-[48px] ">
                    2019
                  </h2>
                </div>
                <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[24px]">
                  <h2 className="relative w-full h-fit text-[32px] leading-[42px] ">
                    Şirket Kuruldu
                  </h2>
                  <h2 className="relative w-full h-fit text-[18px] leading-[27px] ">
                  Ahmet Real Estate, gayrimenkul piyasasında devrim yaratma vizyonuyla 2019 yılında kuruldu. 
                  Benzersiz hizmet ve yenilikçi çözümler sunmayı hedefliyoruz.
                  </h2>
                </div>
              </div>
            </div>
            <div   id="2"className=" relative w-full h-full flex flex-row justify-start items-start gap-[16px]">
              <div className=" relative w-full h-fit flex flex-col justify-start items-start gap-[16px]">
                <div className=" relative w-fit h-fit flex flex-row justify-start items-center ">
                  <h2 className="relative w-fit h-fit text-[40px] leading-[48px] ">
                    2020
                  </h2>
                </div>
                <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[24px]">
                  <h2 className="relative w-full h-fit text-[32px] leading-[42px] ">
                  İlk İlan Gösterimi
                  </h2>
                  <h2 className="relative w-full h-fit text-[18px] leading-[27px] ">
                  2024te, kaliteye olan bağlılığımızı sergileyen ilk büyük emlak ilan listelememizi başlattık. Bu, büyüme yolculuğumuzda önemli bir adımdı.
                  </h2>
                </div>
              </div>
            </div>
            <div   id="3" className=" relative w-full h-full flex flex-row justify-start items-start gap-[16px]">
              <div className=" relative w-full h-fit flex flex-col justify-start items-start gap-[16px]">
                <div className=" relative w-fit h-fit flex flex-row justify-start items-center ">
                  <h2 className="relative w-fit h-fit text-[40px] leading-[48px] ">
                    2022  
                  </h2>
                </div>
                <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[24px]">
                  <h2 className="relative w-full h-fit text-[32px] leading-[42px] ">
Servisleri Genişlettik

                  </h2>
                  <h2 className="relative w-full h-fit text-[18px] leading-[27px] ">
                  2022 yılına kadar hizmetlerimizi mülk yönetimi ve danışmanlığı da kapsayacak şekilde genişlettik.
                   Bu, müşterilerimizin çeşitli ihtiyaçlarına daha iyi hizmet vermemizi sağladı.
                  </h2>
                </div>
              </div>
            </div>
            <div   id="4" className=" relative w-full h-full flex flex-row justify-start items-start gap-[16px]">
              <div className=" relative w-full h-fit flex flex-col justify-start items-start gap-[16px]">
                <div className=" relative w-fit h-fit flex flex-row justify-start items-center ">
                  <h2 className="relative w-fit h-fit text-[40px] leading-[48px] ">
                    2025
                  </h2>
                </div>
                <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[24px]">
                  <h2 className="relative w-full h-fit text-[32px] leading-[42px] ">
                Topluluk  Etkileşimi                  
                </h2>
                  <h2 className="relative w-full h-fit text-[18px] leading-[27px] ">
                  2025da yerel emlakçılara destek vermek için toplum katılım programları başlatıyoruz. Amacımız güçlü ilişkiler geliştirmek ve yerel girişimleri desteklemektir.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" relative w-full h-fit flex flex-col items-start justify-start gap-[80px ] py-[112px] px-[64px] max-xl:p-[20px]">
        <div className="  relative w-full h-fit flex flex-row items-start justify-start gap-[80px ] max-xl:flex-col max-xl:gap-[24px]">
          <div className="w-full h-fit flex flex-col justify-start items-start gap-[16px]">
            <h2 className="relative w-[616px] h-fit text-[40px] leading-[48px] max-xl:w-fit max-xl:text-[24px] max-xl:leading-[32px] ">
              Ahmet Emlakçılığa Hoşgeldiniz: Hayalinizdeki Evi Bulmada
              Yardımcınız
            </h2>
          </div>
          <div className="w-full h-fit flex flex-col justify-start items-start gap-[24px]">
            <h2 className="relative w-fit h-fit text-[32px] leading-[27px]">
           Ahmet Real Estatete Olarak
           </h2>
            <h2 className="relative w-fit h-fit text-[18px] leading-[27px]">
           Misyonumuz: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, facilis! .
           </h2>
            <h2 className="relative w-fit h-fit text-[18px] leading-[27px]">
            Vizyonumuz: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid dolorem reprehenderit fugiat cum sint odio accusamus voluptas iure excepturi id? Dürüstlük, yenilikçilik ve müşteri memnuniyeti temel değerlerimiz, bizi olağanüstü listeler ve benzersiz destek sunmaya yönlendiriyor.           </h2>
          </div>
        </div>
      </div>

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
               
                    </div>
                    <h2 className=" w-fit h-fit text-[16px] leading-[24px]">
                    {d.definition !== "Tanıtım Yazınız" ? d.definition : `Ben Size Emlaklarınızda yardım edecek danışmanınız ${d.name}`}

                    </h2>
                  
                  </div>
    
               
                </div>
            
            )}
          </div>
        </div>
      </div>

 {/*    
 */}
      <div className=" relative w-full h-fit flex flex-col justify-start items-center gap-[80px] px-[112px] py-[64px] max-md:p-[20px] ">
             <Carousel
                autoplay={true}
                autoplayInterval={2000}
                opts={{
                  loop: true,
                }}
           
             >
                    <CarouselContent>
          {
              [0,1,2,3].map((a,c) =>
                                        <CarouselItem className="w-fit" key={c}> 
                                       <div className=" relative w-fit h-fit flex flex-col justify-start items-center gap-[32px]">
          <div className=" relative w-fit h-[48px]">
            <h2>Müşteir İsmi</h2>{" "}
          </div>

          <h2 className=" relative w-fit h-fit text-[24px] leading-[28.8px] flex justify-center items-center  max-md:text-[16px] ">
        Ahmet Real Estate ev satın alma deneyimimi kusursuz ve keyifli hale getirdi. Detaylara gösterdikleri dikkat ve müşteri memnuniyetine olan bağlılıkları onları gerçekten farklı kılıyor!
          </h2>

          <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[24px] p-0">
            <Image
              alt="2132"
              width={64}
              height={64}
              className=" relative rounded-[30px]"
              src={BirinciImage}
            />
            <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[12px]">
              <div className=" relative w-full h-fit flex flex-col justify-start items-center">
                <h2 className=" w-full h-fit text-[20px] leading-[30px] flex justify-center">
                  Fahri Mert
                </h2>
                <h2 className=" w-full h-fit text-[18px] leading-[27px] flex justify-center">
Müşteri
                </h2>
              </div>
            </div>
          </div>
        </div>                                   
        
          <CarouselPrevious />
          <CarouselNext  />
          
        </CarouselItem>
                                )
                              }
                              </CarouselContent>
        </Carousel>
   
      </div>

      <div className=" relative w-full h-fit flex flex-col justify-start items-center gap-[80px] px-[64px] py-[112px] max-md:p-[20px]">
        <div className="relative w-[768px] h-fit flex flex-col justify-center items-center  gap-[16px] p-0 max-md:w-fit">
          <div className="relative w-full  h-fit flex flex-row items-center">
            <h2 className=" w-full h-fit text-[18px] leading-[24px] flex items-center justify-center">
              Konum
            </h2>
          </div>
          <div className="relative w-full h-fit flex flex-col items-end justify-end gap-[10px] ">
            <h2 className=" w-[768px] h-fit text-[48px] leading-[64px] flex items-center justify-center max-md:w-fit ">
              Keşfedin
            </h2>

            <h2 className=" w-[768px] h-fit text-[18px] leading-[24px] flex items-center justify-center flex-grow max-md:w-fit">
        Ofis Adresimiz Buradadadır   
               </h2>
          </div>
        </div>
        <div className=" relative w-full h-fit flex flex-col justify-start items-start  gap-[64px]">
          <div className=" relative w-full h-fit flex flex-row justify-start items-start  gap-[64px]">
            <div className=" relative w-full h-fit flex flex-col justify-start items-center  gap-[32px]">
              <div className=" w-[625px] h-[385px] bg-black max-md:w-[200px]">a</div>
              <div className=" relative w-full h-fit flex flex-col justify-start items-center gap-[24px]">
                <div className=" relative w-fit h-fit flex flex-col justify-start items-center gap-[16px]">
                  <h2 className="relative w-fit h-fit text-[32px] leading-[42px] ">
{/*                     {iletisimBilgileri.sirketAdres}
 */}                  </h2>
                </div>
                {/* bura linklenecek herhalde */}
                  <Button className="relative w-[135px] h-fit flex flex-row justify-center items-center gap-[8px]">

                  <h2 className="relative w-fit h-fit text-[16px] leading-[24px] ">
                    Get Directions
                  </h2>
                  <div className=" relative w-[24px] h-[24px]">
                    <ChevronRight />
                  </div>
                  </Button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HakkimizdaPage;
