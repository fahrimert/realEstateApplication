import { Button } from "@/components/ui/button"
import { IstokRegular } from "@/public/fonts/font"
import Link from "next/link"
import { Ilan, Image as Imagee } from '@prisma/client';
import Image from "next/image";

interface İlanWithDetail {
  ilans: ({
    user: {
      id: string;
      name: string | null;
      email: string;
      image: string | null;
      password: string | null;
      telefon: string
      role: "ADMIN" | "DANISMAN";
      createdAt: Date;
      updatedAt: Date;
  };
    images: Imagee[];
} & Ilan) | null
}
const RightStack : React.FC<İlanWithDetail> = ({ilans}) => {
  return (
    <div className=" w-[300px] h-fit flex flex-col justify-start items-start gap-[20px] p-[20px] bg-white rounded-[30px]">
        <h2 className={`w-full h-[40px] font-${IstokRegular} text-black text-[24px] leading-[24px]`}>{ilans?.user.name}</h2>
        <div className=" w-full h-fit flex flex-row justify-center items-center gap-[10px] p-0 bg-white">
        <Image className=" w-full h-[120px] rounded-[20] bg-[#3388FF]" src={ilans?.user.image!} alt={ilans?.userId!} width={150} height={120} ></Image>
                <div className="w-full h-fit flex flex-col justify-center items-center gap-[10px] ">

                </div>
        </div>
        <div className=" relative  w-full h-fit flex flex-col justify-start items-center gap-[10px]  p-[10px]  bg-white">
                    <h2 className={`w-fit h-[32px] font-${IstokRegular} text-black text-[16px] leading-[19.2px] flex items-center justify-center`}>İş Telefonu : {ilans?.user.telefon}
</h2>

                        </div>

    <Link href={'/danismanProfıl'}>
    
      <div className=" relative  w-full h-fit flex flex-row justify-start items-center gap-[10px]  p-[10px]  bg-white">
          <Button className=" rounded-[30px]">
          <h2 className={`w-fit h-fit font-${IstokRegular} text-black text-[16px] leading-[19.2px] flex items-center justify-center `}>

            
            Danışman İlanlarını Gör
          </h2>
            
            
          </Button>
      </div>
      </Link>
  
  
    </div>
  )
}

export default RightStack