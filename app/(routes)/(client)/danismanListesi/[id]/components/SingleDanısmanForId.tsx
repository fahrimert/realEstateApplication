import Image from "next/image";
import BirinciImage from "@/public/Secondİmage.png";
import { Star } from "lucide-react";
import { Ilan, Image as Imagee, User } from "@prisma/client";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
interface SingleDanısmanProps{
  userDetail: ({
    ilanlar: ({
 id: string;
  IlanTipiId: string;
  IlanTuruId: string;
  order: number;
  name: string;
  price: string;
  json :any
  anaVitrin: boolean;
  fırsatVitrini: boolean;
  acilVitrini: boolean;
  satildi: boolean;
  Kiralandi: boolean;
  images: {
    id: string;
    productId: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}[]
  createdAt: Date;
  updatedAt: Date} )[]  | undefined ;

}& {
  id: string;
  image: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  password: string;
  role: "ADMIN" | "DANISMAN";
  telefon: string;
  definition: string;
}) | null


}
const SingleDanısmanForId:React.FC<SingleDanısmanProps> = ({userDetail}) => {
  return (
    <div className=" w-full h-fit flex flex-col justify-start items-center gap-[10px] ">
      <div className=" w-full h-fit flex flex-col justify-start items-center  p-[20px] ">
        <div className="relative w-[768px] h-fit flex flex-col justify-start items-center  gap-[32px] p-0">
          <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[16px]">
            <div className="relative w-full  h-fit flex flex-row justify-start items-center">
              <h2 className=" w-full h-fit text-[18px] leading-[24px] flex items-center justify-center">
                Tanışınız
              </h2>
            </div>
            <div className="relative w-full h-fit flex flex-col items-center justify-center gap-[24px] ">
              <h2 className=" w-[768px] h-fit text-[56px] leading-[68px] flex items-center justify-center ">
          {userDetail?.name}
              </h2>

              <h2 className=" w-[768px] h-fit text-[18px] leading-[24px] flex items-center justify-center flex-grow">
                Ben {userDetail?.name}.Sizi Hayalinizdeki Eve Ulaştıracak
                Danışmanınız.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full h-fit flex flex-col justify-start items-start gap-[80px]  px-[64px] ">
        <div className=" relative w-[1400px] h-fit flex flex-row justify-between items-center gap-[80px]">
          <div className="relative w-[700px] h-fit flex flex-col justify-start items-start gap-[32px]">
            <div className="relative w-full h-fit flex flex-col items-start justify-start gap-[24px] ">
              <h2 className=" w-fit h-fit text-[56px] leading-[68px] flex items-start justify-start ">
                {userDetail?.name}
              </h2>

              <h2 className=" w-fit h-fit text-[18px] leading-[24px] flex items-start justify-start flex-grow">
             
  
              {userDetail?.definition}
              </h2>
            </div>

          </div>
          <div className=" relative w-full h-[640px]  flex justify-end">
            <Image
            width={630} height={640}
          className=" object-contain"
          alt="232"
            src={userDetail?.image!}
            />
          </div>
        </div>
      </div>

      <div className=" relative w-full h-fit flex flex-col justify-start items-centerp-[20px]">
        <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[16px]">
          <div className="relative w-full  h-fit flex flex-row justify-start items-center">
            <h2 className=" w-full h-fit text-[18px] leading-[24px] flex items-center justify-center">
              Görün
            </h2>
          </div>
          <div className="relative w-full h-fit flex flex-col items-center justify-center gap-[24px] ">
            <h2 className=" w-[768px] h-fit text-[56px] leading-[68px] flex items-center justify-center ">
              Benim İlanlarımı Görün
            </h2>

            <h2 className=" w-[768px] h-fit text-[18px] leading-[24px] flex items-center justify-center flex-grow">
              Bunlar benim rehberliğim sayesinde alacağınız ilanlardan biri.
            </h2>
          </div>
        </div>

        <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[64px]">
          <div className="relative w-full h-fit flex flex-row justify-center items-start gap-[48px]">


{userDetail?.ilanlar!.map((c) => c.images).length  == 0 &&
            
            <div className={cn(`relative ${userDetail?.ilanlar!.map((c) => c.images).length == 0 ? "w-full" : "w-fit"}  h-fit flex flex-col justify-start items-center  gap-[80px]  `)}
            
            >
              <div className={cn(`relative ${userDetail?.ilanlar!.map((c) => c.images).length == 0 ? "w-full" : "w-fit"}  h-fit flex flex-col justify-start items-center  gap-[80px] ${userDetail?.ilanlar.map((c) => c.images).length  == 0 ? "px-[0]" : "px-[64px]"} py-[112px]`)} >
                <div className=" w-full h-fit flex flex-col items-center justify-center gap-[64px]">

    <div className="bg-[#050505] w-full h-[400px] flex flex-col items-center justify-center">
    <h2 className="text-[24px] text-white">
      Danışmanın  İlanı Yok 
    </h2>
</div> 
                

          
                </div>
              </div>
            </div>
                          }   
            
            {userDetail?.ilanlar!.length !== 0 && 
            
            <div className=" relative w-full h-fit  flex-row justify-start items-center gap-[64px]">
              <div className=" relative w-full h-fit flex flex-row justify-start items-center  gap-[80px] px-[64px] py-[112px]">
                <div className=" w-full h-fit grid grid-cols-3 grid-rows-2 items-start justify-start gap-[64px]">
              
                {userDetail?.ilanlar!.map((g) =>
                      <HoverCard key={g.id}  >
                      <HoverCardTrigger>
                     
                      <Image
                         className={cn(` w-full h-[485px]  rounded-[30px]  hover:scale-110 hover:transition-all cursor-pointer   `)}
                     
                         alt="232"
                         width={300}
                         height={300}
                         unoptimized
                         priority
                         objectFit="cover"
                         src={g.images![0].url}
                       />
                     
                      </HoverCardTrigger>
                      <HoverCardContent  key={g.id} className=" relative w-[405px] h-fit flex flex-col justify-start items-start gap-[8px] z-10">
                         <div className=" relative w-full h-fit flex flex-col justify-start items-start ">
                           <h2 className=" w-[405px] h-fit text-[18px] leading-[27px] text-black">
                             {g.name}
                           </h2>
                           <h2 className=" w-[405px] h-fit text-[14px] leading-[21px] text-black">
                              {`${g.json !== null ? g.json.filter((entry: any) => entry.key.trim() === "İl" || entry.key.trim() === "Şehir").map((entry: any) => entry.value): "İl Bilgisi yok"}-${g.json !== null ? g.json.filter((entry:any) => entry.key.trim() === "İlçe").map((entry:any) => entry.value): "İlçe Bilgisi yok"}`}
                           </h2>
                         </div>
                         <h2 className=" w-[405px] h-fit text-[20px] leading-[25px] text-black">
                           Price:{g.price} TL
                         </h2>
                      </HoverCardContent>
                     </HoverCard>
                  
                  )}
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </div>

     

      <div className=" relative w-[1440px] h-fit flex flex-col justify-start items-center gap-[80px] py-[112px] px-[64px]">
        <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[20px] ">
          <h2 className="relative w-fit h-fit text-[56px] leading-[68px] flex flex-col justify-start items-start ">
            Müşterilerimin Yorumları
          </h2>
          <h2 className="relative w-fit h-fit text-[18px] leading-[27px] flex flex-col justify-start items-start ">
            Bazı Müşterilerimin Memnuniyet Yorumları
          </h2>
        </div>

        <div className=" relative w-full h-fit flex flex-col justify-start items-start gap-[64px]">
          <div className="relative w-full h-fit flex flex-row justify-start items-start gap-[32px]">
            <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[32px] ">
              <div className="relative w-[116px] h-[20px] text-black flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <div className="relative w-full h-fit  flex flex-col gap-[32px] ">
                <h2 className="text-[20px] leading-[28px] ">
                  Their dedication to finding the perfect home is unmatched.
                </h2>

                <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[32px]">
                  <div className=" relative w-full h-fit flex flex-col justify-start items-start  ">
                    <h2 className=" w-full h-fit text-[20px] leading-[30px] flex justify-start items-start">
                  Kullanıcı İsmi
                    </h2>
                
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[32px] ">
              <div className="relative w-[116px] h-[20px] text-black flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <div className="relative w-full h-fit  flex flex-col gap-[32px] ">
                <h2 className="text-[20px] leading-[28px] ">
                  Their dedication to finding the perfect home is unmatched.
                </h2>

                <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[32px]">
                  <div className=" relative w-full h-fit flex flex-col justify-start items-start  ">
                    <h2 className=" w-full h-fit text-[20px] leading-[30px] flex justify-start items-start">
                      Fahri Mert
                    </h2>
                    <h2 className=" w-full h-fit text-[18px] leading-[27px] flex items-start justify-start">
                      Kullanıcı iSMİ
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[32px] ">
              <div className="relative w-[116px] h-[20px] text-black flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <div className="relative w-full h-fit  flex flex-col gap-[32px] ">
                <h2 className="text-[20px] leading-[28px] ">
                  Their dedication to finding the perfect home is unmatched.
                </h2>

                <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[32px]">
                  <div className=" relative w-full h-fit flex flex-col justify-start items-start  ">
                    <h2 className=" w-full h-fit text-[20px] leading-[30px] flex justify-start items-start">
                      Fahri Mert
                    </h2>
                    <h2 className=" w-full h-fit text-[18px] leading-[27px] flex items-start justify-start">
                      Kullanıcı iSMİ
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDanısmanForId;
