"use client"
import { Slider as Sluder } from "@/components/ui/slider";
import Image from "next/image";
import Link from "next/link";
import BirinciImage from "@/public/Secondİmage.png";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight, Linkedin } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import React, { useRef, useState } from "react";
import Navbar from "@/components/clientComponent/clientNavbar";
import HomePageFooter from "@/components/clientComponent/HomePageFooter";
import prismadb from "@/lib/db";

import { EffectCards } from 'swiper/modules';
interface PhotoGaleryProps {
  photosOfGalery: ({
    photoGaleryAdminImage: {
        id: string;
        photoGaleryAdminId: string;
        url: string;
        createdAt: Date;
        updatedAt: Date;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
}) | null
}

const PhotoGalery :React.FC<PhotoGaleryProps>= ({photosOfGalery}) => {
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
      console.log(photosOfGalery);
  return (
    <div>
        

    <div className="relative w-full h-fit flex flex-col justify-center items-start gap-[80px] py-[112px] px-[64px]">
    <div className=" relative w-full h-fit flex flex-col justify-center items-start gap-[32px]">
      <div className=" relative w-full h-fit flex flex-col justify-center items-start gap-[16px]">
        <div className="relative w-full h-fit flex flex-col justify-center items-start gap-[24px]">
          <h2 className="relative w-full h-fit text-[56px] leading-[68px] flex items-center  justify-center ">
            Ofisimize Ait Bazı Fotoğraflar
          </h2>
          <h2 className="relative w-full h-fit text-[24px] leading-[40px] flex items-center  justify-center ">
            Her Zaman Adana/Çukurovadaki Ofisimize Davetlisiniz
          </h2>

          <Swiper
          className=" w-full flex justify-center h-full"
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
  slidesPerView={1}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>
    
{photosOfGalery?.photoGaleryAdminImage && photosOfGalery?.photoGaleryAdminImage.map((d) => 
    
    <SwiperSlide key={d.id}>
      <div className=" w-full h-[400px]" >

      <Image  src={d.url}  objectFit="contain" fill alt="212" />
      </div>
      
    </SwiperSlide>
      )}
</Swiper>



        </div>
      </div>
    </div>
  </div>
</div>  )
}

export default PhotoGalery