import { IstokRegular, ıstok_bold } from "@/public/fonts/font"
import { Ilan, Image as Imagess, Image as ImageOfUniqueIlan } from '@prisma/client';
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { FaBuilding } from "react-icons/fa";
  import { FaBath } from "react-icons/fa";

  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
interface İlanWithDetail {
  ilans: {
    name: string | undefined;
    price: string;
    anaVitrin: boolean | undefined;
    fırsatVitrini: boolean | undefined;
    json: any;
    acilVitrini: boolean | undefined;
    satildi: boolean | undefined;
    Kiralandi: boolean | undefined;
    images:{
      id: string;
      createdAt: Date;
      updatedAt: Date;
      productId: string;
      url: string;
  }[] | undefined;
    createdAt: Date | undefined;
  }}
const LeftStack:React.FC<İlanWithDetail> = ({ilans}) => {
  return (
    <div className='relative  w-full h-fit flex flex-col justify-center items-start gap-[10px] '>
        <div className=" relative  w-full h-[400px] flex flex-row justify-center items-center gap-[10px] p-[20px] bg-white rounded-[30px]">
            {  
                <div className="relative  w-[60%] h-full  bg-blue-200 rounded-[20px]">
<Image 
layout="fill"
src={ilans?.images?.[0].url! }
alt="212"

/>
                </div>}
              
                <div className=" relative  w-fit h-full flex flex-row  gap-[10px] p-[10px]">
        
                <div className="relative  w-full h-full  rounded-[20px]  j z-0 ">
                    <div className=" w-full h-full flex  justify-center items-center z-10  bg-[##4F4F4F]">
<Dialog>
   <DialogTrigger className="text-white">
   <Button className=" rounded-[30px] p-[20px]">
    
    {ilans?.images! ? ilans.images.length -1 : null} Tane Daha Fotoğraf var
    </Button> 
     </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogDescription>
          <Carousel>
            <CarouselContent>
  {
      ilans?.images?.map((d) =>
                                <CarouselItem key={d.id}>
                            <div className="relative  w-[400px] h-[400px]  bg-blue rounded-[20px] bg-blue-200">
<Image 
layout="fill"
src={d.url}
alt="212"
/>                                     

  <CarouselPrevious />
  <CarouselNext />
  </div>
</CarouselItem>
                        )
                      }
                      </CarouselContent>
</Carousel>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
                    </div>
                </div>
                </div>
        </div>
        
        <div  className='relative  w-full h-[255px] flex flex-col justify-center items-center gap-[10px] '>
            <div className='relative  w-full h-full flex flex-col justify-start items-start gap-[10px] p-[20px] rounded-[30px] bg-white'>
            <div className='relative  w-full h-fit flex flex-row justify-start items-center gap-[10px]   bg-white'>
                    <h2 className={`w-fit h-fit font-${ıstok_bold} text-black text-[32px] leading-[32px]`}>{ilans.price} TL</h2>
        { ilans.json && `${ilans.json !== null ? ilans.json.filter((entry:any) => entry.key.trim() === "İlçe" || entry.key.trim() === "İlçe" ).map((entry:any) => entry.value): null} / ${ilans.json !== null ? ilans.json.filter((entry:any) => entry.key.trim() === "Mahalle" || entry.key.trim() === "Sokak" ).map((entry:any) => entry.value): null}`} 

                     </div>
            <div className='relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px]   bg-white'>
                        <div className=" relative  w-fit h-[40px] flex flex-row justify-center items-center gap-[10px]  p-[10px]  bg-white">
                        <FaBuilding  size={30}/>Oda Sayısı :
                        
{ ilans.json && `${ilans.json !== null ? ilans.json.filter((entry:any) => entry.key.trim() === "Oda Sayısı" || entry.key.trim() === "OdaSayısı" ).map((entry:any) => entry.value): null}`}  
                        </div>
                        <div className=" relative  w-fit h-[40px] flex flex-row justify-center items-center gap-[10px]  p-[10px]  bg-white">
                        Metrekare
                                { ilans.json && `${ilans.json !== null ? ilans.json.filter((entry:any) => entry.key.trim() === "Metre kare" || entry.key.trim() === "Metrekare" ).map((entry:any) => entry.value): null}`} 

                        </div>
                        <div className=" relative  w-fit h-[40px] flex flex-row justify-center items-center gap-[10px]  p-[10px]  bg-white">

                        <FaBath size={30}/>
                      <h2 className={`w-fit h-[32px] font-${IstokRegular} text-black text-[16px] leading-[19.2px] flex items-center justify-center`}>
                      Banyo:
                      {ilans.json && `${ilans.json !== null ? ilans.json.filter((entry:any) => entry.key.trim() === "Banyo Sayısı" || entry.key.trim() === "BanyoSayısı" ).map((entry:any) => entry.value): null}`}
      </h2>

                        </div>
                    </div>
            </div>
            <div className='relative  w-full h-full flex flex-col justify-start items-start gap-[10px] p-[20px] rounded-[30px] bg-white'>
            <div className='relative  w-full h-fit flex flex-col justify-start items-start gap-[10px]   bg-white'>
                    <h2 className={`w-fit h-fit font-${ıstok_bold} text-black text-[32px] leading-[32px]`}>İlan Detayları:</h2>
                   <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[19.2px] flex flex-col items-center justify-center`}>
                        
                   <h2 className={`w-fit h-[32px] font-${IstokRegular} text-black text-[16px] leading-[19.2px] flex items-center justify-center`}>
                      {ilans.json && `${ilans.json !== null ? ilans.json.filter((entry:any) => entry.key.trim() === "Açıklama" || entry.key.trim() === "İlan Açıklaması" ).map((entry:any) => entry.value):null }`}
                       </h2>
                
                
                </h2> 
                    </div>
            </div>
        </div>
    




        <div  className='relative  w-full h-fit flex flex-col justify-start items-start gap-[24px] p-[20px] rounded-[30px] bg-white '>
        <h2 className={`w-fit h-fit font-${ıstok_bold} text-black text-[32px] leading-[32px]`}>İlan Künyesi:</h2>


        <div className='relative  w-full h-fit flex flex-col justify-center items-center gap-[10px] p-0  bg-white'>
        <div className='relative  w-full h-fit flex flex-col justify-center items-center gap-[10px] p-0  bg-white'>
        <div className='relative  w-full h-fit flex flex-row justify-start items-start gap-[10px] p-[20px ]   bg-[##FAF9F7]'>
        <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[24px] leading-[24px]`}>Ek Özellikler:</h2>
                   
                    </div>
        <div className='relative  w-full h-fit flex flex-col justify-between items-start  p-[20px ]   bg-[##FAF9F7]'>
        {ilans.json && ilans.json.map((entry:any,z:any) =>   
            <h2 key={z} className=" w-fit h-fit flex flex-col">

{entry.key} : {entry.value}
          </h2>
  )}

                    </div>
       </div>
            </div>
          
        </div>
        

    </div>

  )
}

export default LeftStack