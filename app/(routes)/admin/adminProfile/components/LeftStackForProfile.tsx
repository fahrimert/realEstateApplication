import { IstokRegular, ıstok_bold } from "@/public/fonts/font"
import {  Ilan, Image as ImageOfUniqueIlan } from '@prisma/client';
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
interface İlanWithDetail {
    ilans: ({
      images: ImageOfUniqueIlan[];
  } & Ilan) | null
  }
const LeftStackForProfile:React.FC<İlanWithDetail> = ({ilans}) => {
  return (
    <div className='relative  w-full h-fit flex flex-col justify-center items-start gap-[10px] '>
        {/* İmage Section */}
        <div className=" relative  w-full h-[400px] flex flex-row justify-center items-center gap-[10px] p-[20px] bg-white rounded-[30px]">
            {  
                <div className="relative  w-full h-full  bg-blue-200 rounded-[20px]">
<Image 
layout="fill"
src={ilans?.images[0].url!}
alt="212"

/>
                </div>}
              
               
        </div>
        
        {/* price ve ilan detail part */}
        <div  className='relative  w-full h-[255px] flex flex-col justify-center items-center gap-[10px] '>
            <div className='relative  w-full h-full flex flex-col justify-start items-start gap-[10px] p-[20px] rounded-[30px] bg-white'>
            <div className='relative  w-full h-fit flex flex-row justify-start items-center gap-[10px]   bg-white'>
{/*                     <h2 className={`w-fit h-fit font-${ıstok_bold} text-black text-[32px] leading-[32px]`}>{ilans.price} TL</h2>
/*  */}                   {/*  <h2 className={`w-fit h-[32px] font-${IstokRegular} text-black text-[16px] leading-[19.2px] flex items-center justify-center`}>{ilans?.detailOfTheProduct[0].sehir ? ilans?.detailOfTheProduct[0].sehir : 'Sehir Bİlgisi Yoktur'}/{ilans?.detailOfTheProduct[0].ilce ? ilans?.detailOfTheProduct[0].ilce : 'iLCE Bİlgisi Yoktur'}/ {ilans?.detailOfTheProduct[0].mahalle ? ilans?.detailOfTheProduct[0].mahalle : 'mahalle Bİlgisi Yoktur'}</h2> */}
 */                    </div>
            <div className='relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px]   bg-white'>
                        <div className=" relative  w-fit h-[40px] flex flex-row justify-center items-center gap-[10px]  p-[10px]  bg-white">
                                <div className=" w-[50px] h-[50px] bg-[#4A4A4A]"></div>
{/*                     <h2 className={`w-fit h-[32px] font-${IstokRegular} text-black text-[16px] leading-[19.2px] flex items-center justify-center`}>{ilans?.detailOfTheProduct[0].OdaSayisi ? ilans?.detailOfTheProduct[0].OdaSayisi  :'Oda Sayısı Bilgisi YOk'}</h2>
 */}
                        </div>
                        <div className=" relative  w-fit h-[40px] flex flex-row justify-center items-center gap-[10px]  p-[10px]  bg-white">
                                <div className=" w-[50px] h-[50px] bg-[#4A4A4A]"></div>
{/*                     <h2 className={`w-fit h-[32px] font-${IstokRegular} text-black text-[16px] leading-[19.2px] flex items-center justify-center`}>{ilans?.detailOfTheProduct[0].MetreKare ? ilans?.detailOfTheProduct[0].MetreKare  :'Oda Sayısı Bilgisi YOk'} metrekare</h2>
 */}
                        </div>
                        <div className=" relative  w-fit h-[40px] flex flex-row justify-center items-center gap-[10px]  p-[10px]  bg-white">
                                <div className=" w-[50px] h-[50px] bg-[#4A4A4A]"></div>
{/*                     <h2 className={`w-fit h-[32px] font-${IstokRegular} text-black text-[16px] leading-[19.2px] flex items-center justify-center`}>{ilans?.detailOfTheProduct[0].BanyoSayisi ? ilans?.detailOfTheProduct[0].BanyoSayisi  :'Banyo Sayısı Bilgisi YOk'} Banyo</h2>
 */}
                        </div>
                    </div>
            </div>
            <div className='relative  w-full h-full flex flex-col justify-start items-start gap-[10px] p-[20px] rounded-[30px] bg-white'>
            <div className='relative  w-full h-fit flex flex-row justify-start items-center gap-[10px]   bg-white'>
                    <h2 className={`w-fit h-fit font-${ıstok_bold} text-black text-[32px] leading-[32px]`}>İlan Detayları:</h2>
             {/*        <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[19.2px] flex items-center justify-center`}>
                        
                {ilans?.detailOfTheProduct[0].descriptionOFDetail}</h2> */}
                    </div>
            </div>
        </div>
    




        <div  className='relative  w-full h-fit flex flex-col justify-start items-start gap-[24px] p-[20px] rounded-[30px] bg-white '>
        <h2 className={`w-fit h-fit font-${ıstok_bold} text-black text-[32px] leading-[32px]`}>İlan Künyesi:</h2>


        <div className='relative  w-full h-fit flex flex-col justify-center items-center gap-[10px] p-0  bg-white'>
        <div className='relative  w-full h-fit flex flex-col justify-center items-center gap-[10px] p-0  bg-white'>
        <div className='relative  w-full h-fit flex flex-row justify-start items-start gap-[10px] p-[20px ]   bg-[##FAF9F7]'>
        <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[24px] leading-[24px]`}>Genel Özellikler:</h2>
                   
                    </div>
        <div className='relative  w-full h-fit flex flex-col justify-between items-start  p-[20px ]   bg-[##FAF9F7]'>
       {/*  <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>İlan No: {ilans?.detailOfTheProduct[0].ilanNo}  </h2>
        <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Fiyat Bilgisi:{ilans?.price}</h2>
        <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Kredi Durumu:{ilans?.detailOfTheProduct[0].KrediyeUygun}</h2>
        <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>{ilans?.detailOfTheProduct[0].KullanimDurumu}</h2>
                    */}
                    </div>
       </div>
            </div>
          
        </div>
        <div  className='relative  w-full h-fit flex flex-col justify-start items-start gap-[24px] p-[20px] rounded-[30px] bg-white '>


        <div className='relative  w-full h-fit flex flex-col justify-center items-center gap-[10px] p-0  bg-white'>
        <div className='relative  w-full h-fit flex flex-col justify-center items-center gap-[10px] p-0  bg-white'>
        <div className='relative  w-full h-full flex flex-row justify-start items-start gap-[10px] p-[20px ]   bg-[##FAF9F7]'>

        <h2 className={`w-full h-full font-${IstokRegular} text-black text-[24px]  bg-[##FAF9F7] flex`}>Kategoriye Ait Özellikler:</h2>
                   
                    </div>
{/*         <div className='relative  w-full h-full flex flex-col justify-between items-start  p-[20px ]   bg-[##FAF9F7]'>
   <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>MinMetreKare:{ilans?.detailOfTheProduct[0].MinMetreKare ?  ilans?.detailOfTheProduct[0].MinMetreKare  : null}</h2>
   <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Max MetreKare : {ilans?.detailOfTheProduct[0].MaxMetreKare ?  ilans?.detailOfTheProduct[0].MaxMetreKare  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Kullanim Durumu : {ilans?.detailOfTheProduct[0].KullanimDurumu ?  ilans?.detailOfTheProduct[0].KullanimDurumu  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Isitma : {ilans?.detailOfTheProduct[0].Isitma ?  ilans?.detailOfTheProduct[0].Isitma  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Kat Sayisi : {ilans?.detailOfTheProduct[0].KatSayisi ?  ilans?.detailOfTheProduct[0].KatSayisi  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Otopark: {ilans?.detailOfTheProduct[0].Otopark ?  ilans?.detailOfTheProduct[0].Otopark  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Esyali: {ilans?.detailOfTheProduct[0].Esyali ?  ilans?.detailOfTheProduct[0].Esyali  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>OdaSayisi: {ilans?.detailOfTheProduct[0].OdaSayisi ?  ilans?.detailOfTheProduct[0].OdaSayisi  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Siteicerisinde: {ilans?.detailOfTheProduct[0].Siteicerisinde ?  ilans?.detailOfTheProduct[0].Siteicerisinde  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>BinaYasi: {ilans?.detailOfTheProduct[0].BinaYasi ?  ilans?.detailOfTheProduct[0].BinaYasi  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>BulunduguKat: {ilans?.detailOfTheProduct[0].BulunduguKat ?  ilans?.detailOfTheProduct[0].BulunduguKat  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Takas: {ilans?.detailOfTheProduct[0].Takas ?  ilans?.detailOfTheProduct[0].Takas  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Takas: {ilans?.detailOfTheProduct[0].Toplaminsaatalani ?  ilans?.detailOfTheProduct[0].Toplaminsaatalani  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Toplam Daire sayisi: {ilans?.detailOfTheProduct[0].ToplamDairesayisi ?  ilans?.detailOfTheProduct[0].ToplamDairesayisi  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>FirmaAdi: {ilans?.detailOfTheProduct[0].FirmaAdi ?  ilans?.detailOfTheProduct[0].FirmaAdi  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>ToplamArsaAlani: {ilans?.detailOfTheProduct[0].ToplamArsaAlani ?  ilans?.detailOfTheProduct[0].ToplamArsaAlani  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Gabari: {ilans?.detailOfTheProduct[0].Gabari ?  ilans?.detailOfTheProduct[0].Gabari  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Imar Durumu: {ilans?.detailOfTheProduct[0].ImarDurumu ?  ilans?.detailOfTheProduct[0].ImarDurumu  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Kaks: {ilans?.detailOfTheProduct[0].Kaks ?  ilans?.detailOfTheProduct[0].Kaks  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>Tapu Durumu: {ilans?.detailOfTheProduct[0].TapuDurumu ?  ilans?.detailOfTheProduct[0].TapuDurumu  : null}</h2>
    <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[16px]`}>BolumVeyaOdaSayisi: {ilans?.detailOfTheProduct[0].BolumVeyaOdaSayisi ?  ilans?.detailOfTheProduct[0].BolumVeyaOdaSayisi  : null}</h2>
  
     
                   
                    </div> */}
       </div>
            </div>
          
        </div>

    </div>

  )
}

export default LeftStackForProfile