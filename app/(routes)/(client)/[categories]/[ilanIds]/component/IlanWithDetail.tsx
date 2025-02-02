import React from 'react'
import LeftStack from './LeftStack'
import RightStack from './RightStack'
import {  Ilan, Image } from '@prisma/client';
import { formatter } from '@/lib/utils';

interface İlanWithDetail {
  ilans: ({
    user: {
      id: string;
      name: string | null;
      email: string;
      image: string | null;
      password: string | null;
      telefon: string;
      role: "ADMIN" | "DANISMAN";
      createdAt: Date;
      updatedAt: Date;
  };
    images: Image[];
} & Ilan) | null
}

const IlanWithDetail:React.FC<İlanWithDetail> = ({ilans}) => {
  const formattedProducts = {
    
      name:ilans?.name,
      price: formatter.format(ilans?.price.toNumber()!),
      anaVitrin: ilans?.anaVitrin,
      fırsatVitrini: ilans?.FirsatVitrini,
      json : ilans?.json,
      acilVitrini: ilans?.AcilVitrini,
      satildi: ilans?.satildi,
      telefon:ilans?.user.telefon,
      Kiralandi: ilans?.Kiralandi,
      images: ilans?.images,
      createdAt: ilans?.createdAt,
  };
  
  return (
    <div className='w-full h-fit flex flex-col justify-start items-center gap-[10px] bg-[#EEF0F3]'>
        <div className='relative  w-full h-fit flex flex-row justify-center items-start gap-[20px] p-[30px] '>
            <LeftStack ilans = {formattedProducts}/>
            <RightStack ilans = {ilans}/>
        </div>

    </div>
    

  )
}

export default IlanWithDetail