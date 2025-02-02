"use client"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { GrLocation } from "react-icons/gr"
import { MdEmail, MdPhone } from "react-icons/md"


interface İletisimProps{
  iletisimBilgileri: {
    id: string;
    sirketAd: string;
    sirketAdres: string;
    sirkettelefon: number;
    kisiselTelefon: number;
    destekemail: string;
    facebookLink: string | null;
    instaLink: string | null;
    twitterLink: string | null;
    createdAt: Date;
    updatedAt: Date;
} | null
}
const IletisimPage:React.FC<İletisimProps> = ({iletisimBilgileri}) => {
  return (

    <div className=" w-full h-fit flex flex-col justify-start items-start ">


    <div className="relative w-full h-[370px] flex flex-col justify-start items-start gap-[80px] py-[112px] px-[64px]">
    <div className=" relative w-[768px] h-fit flex flex-col justify-start items-start gap-[32px]">
      <div className=" relative w-full h-fit flex flex-col justify-start items-start gap-[16px]">
        <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[24px]">
          <h2 className="relative w-[768px] h-fit text-[56px] leading-[68px] ">
            Bizimle İletişime Geçin
          </h2>
          <h2 className="relative w-[768px] h-fit text-[18px] leading-[27px] ">
          Size Rehber olmak için buradayız herhangi bir sorunuz veya ihtiyacınız olursa ulaşın
          </h2>
        </div>
      </div>
 
    </div>
  </div>

  


  <div
        className="relative w-full h-fit flex flex-col justify-center items-center gap-[80px] px-[64px] py-[112px]"
      >
        <div className="relative w-[768px] h-fit flex flex-col justify-center items-center  gap-[16px] p-0">
          <div className="relative w-full  h-fit flex flex-row items-center">
            <h2 className=" w-full h-fit text-[18px] leading-[24px] flex items-center justify-center">
                Bağlantı

            </h2>
          </div>
          <div className="relative w-full h-fit flex flex-col items-end justify-end gap-[10px] ">
            <h2 className=" w-[768px] h-fit text-[48px] leading-[64px] flex items-center justify-center ">
              Bizimle Bağlantı Kurun
            </h2>

            <h2 className=" w-[768px] h-fit text-[18px] leading-[24px] flex items-center justify-center flex-grow">
                Hayalinizdeki Evi Size Anlatmak İçin Burdayız.
            </h2>
          </div>
        </div>

        <div className=" relative w-full h-fit flex flex-col justify-start items-start flex-nowrap gap-[64px] p-0">
          <div className=" relative w-full h-fit flex flex-row justify-start items-start gap-[32px] p-0">
            <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[24px] p-0">
           <GrLocation size={40}/>
              <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[12px]">
                <div className=" relative w-full h-fit flex flex-col justify-start items-center">
                  <h2 className=" w-full h-fit text-[20px] leading-[30px] flex justify-center">
                        Ofisimiz
                  </h2>
                  <h2 className=" w-full h-fit text-[18px] leading-[27px] flex justify-center">
                    Ofisimizi iş saatlerinde istediğiniz zaman ziyaret edebilirsiniz
                      </h2>
                </div>
                <h2 className=" w-fit h-fit text-[32px] leading-[48px]">
                {iletisimBilgileri?.sirketAdres}          </h2>
              
              </div>

          
            </div>
            <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[24px] p-0">
           <MdPhone size={40}/>
              <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[12px]">
                <div className=" relative w-full h-fit flex flex-col justify-center items-start">
                  <h2 className=" w-full h-fit text-[24px] leading-[36px] flex justify-center">
                    Şirket Telefonu : {iletisimBilgileri?.sirkettelefon}
                  </h2>
                  <h2 className=" w-full h-fit text-[18px] leading-[27px] flex justify-center">
                   Alttaki Telefon Numarası Sayesinde Bizden İlanlar Hakkında Detaylı Bilgi Alabilirsiniz
                  </h2>
                </div>
                <h2 className=" w-fit h-fit text-[32px] leading-[48px]  flex  flex-grow flex-shrink">
                Kişisel Telefon:{iletisimBilgileri?.kisiselTelefon}             </h2>
              </div>

            
            </div>
            <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[24px] p-0">
           <MdEmail size={40}/>
              <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[12px]">
                <div className=" relative w-full h-fit flex flex-col justify-center items-start">
                  <h2 className=" w-full h-fit text-[20px] leading-[30px] flex justify-center">
                    Email
                  </h2>
                  <h2 className=" w-full h-fit text-[18px] leading-[27px] flex justify-center">
                   Alttaki Email Sayesinde Bize Her Zaman Ulaşabilirsin
                  </h2>
                </div>
                <h2 className=" w-fit h-fit text-[32px] leading-[48px]  flex  flex-grow flex-shrink">
               {iletisimBilgileri?.destekemail}         </h2>
              </div>

            
            </div>
          </div>
        </div>
      </div>




      <div className=" relative w-full h-fit flex flex-col justify-start items-center gap-[80px] px-[64px] py-[112px]">
        <div className="relative w-[768px] h-fit flex flex-col justify-center items-center  gap-[16px] p-0">
          <div className="relative w-full  h-fit flex flex-row items-center">
            <h2 className=" w-full h-fit text-[18px] leading-[24px] flex items-center justify-center">
              Konum
            </h2>
          </div>
          <div className="relative w-full h-fit flex flex-col items-end justify-end gap-[10px] ">
            <h2 className=" w-[768px] h-fit text-[48px] leading-[64px] flex items-center justify-center ">
              Keşfedin
            </h2>

            <h2 className=" w-[768px] h-fit text-[18px] leading-[24px] flex items-center justify-center flex-grow">
        Ofis Adresimiz Buradadadır   
               </h2>
          </div>
        </div>
        <div className=" relative w-full h-fit flex flex-col justify-start items-start  gap-[64px]">
          <div className=" relative w-full h-fit flex flex-row justify-start items-start  gap-[64px]">
            <div className=" relative w-full h-fit flex flex-col justify-start items-center  gap-[32px]">
              <div className=" w-[625px] h-[385px] bg-black">a</div>
              <div className=" relative w-full h-fit flex flex-col justify-start items-center gap-[24px]">
                <div className=" relative w-fit h-fit flex flex-col justify-start items-center gap-[16px]">
                  <h2 className="relative w-fit h-fit text-[32px] leading-[42px] ">

          {iletisimBilgileri?.sirketAdres}
                  </h2>
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

  )
}

export default IletisimPage