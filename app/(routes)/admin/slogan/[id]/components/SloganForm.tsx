"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect, useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { createCategory } from "@/actions/adminActions/categoryActions/create-category";
import toast, { Toaster } from 'react-hot-toast';
import ImageUpload from "@/components/ui/ImageUpload"
import { Slogan } from "@prisma/client";
import { createSlogan } from "@/actions/adminActions/create-slogan";
import { Textarea } from "@/components/ui/textarea";
import { updateSlogan } from "@/actions/adminActions/update-slogan";
interface SloganFormProps {
  initialData:  Slogan  | null
  
}
const formSchema = z.object({
  sloganName: z.string().min(5, {
    message: "Slogan Texti must be at least 20 character",
  }),

});

export type SloganormValues = z.infer<typeof formSchema>;

const SloganForm: React.FC<SloganFormProps> = ({ initialData}) => {
  const [value, setValue] = useState(initialData?.sloganName);
  function handleChange(e: any) {
    setValue(e.target.value);
  }
  const params = useParams();
  const router = useRouter()
  const action = initialData ? "Güncelle" : "Ekle ";
  const [loading, setLoading] = useState(false);


  const form = useForm<SloganormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          ...initialData,
        }
      : {
        sloganName: "",

        },
  });
  const onSubmit = async (data: SloganormValues) => {
    try {
      if (initialData) {
        updateSlogan(data,initialData.id);
        toast.success('Başarıyla Slogan Sayfasındaki Metniniz Güncellendi')
        router.refresh()
      }
      else {
        createSlogan(data);
        toast.success('Başarıyla Slogan Sayfasındaki Metniniz Eklendi')
        router.refresh()

      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
  
  
      <Form {...form}  
     >
      
        <form 
        onChange={(e) => handleChange(e)}
                       onSubmit={form.handleSubmit(onSubmit) }
                       className="space-y-8 w-full p-[20px]"

        >
            <FormField
              control={form.control}
              name="sloganName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Ana Sayfa İçin Slogan Bilgisi</FormLabel>
                  <FormControl>
                    <Input
                    className=" w-fit h-fit"

                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />



          <Button  variant={"secondary"}  disabled={loading} className=" border-[2px] rounded-xl border-[#8be8cb] text-black h-[35px]" type="submit">
            {action}
          </Button>

       
        </form>
        <Toaster />
          <div className=" w-full h-full">

          <div className=" w-full h-fit flex flex-col  gap-[30px]">

          <div className="  relative w-full h-fit flex flex-col  justify-center items-center pr-[20px] pl-[20px] ">
        <div className="relative  bg-[url('../public/Secondİmage.png')]  bg-center    w-full h-[700px] flex flex-col justify-center items-center gap-[80px] overflow-hidden rounded-lg bg-cover bg-no-repeat text-center ">
          <div className=" relative w-full h-[326px] flex flex-col justify-center items-center gap-[32px]">
            <div className="relative w-full h-fit flex flex-col items-start justify-start gap-[24px]">
              <h2
                className={`w-full h-fit  text-black text-[50px] leading-[50px]  `}
              >
              {value}
              </h2>
              <h2
                className={`w-full h-[48px]  text-black font-[18px] leading-[24px]  items-start justify-start`}
              >
                Ahmet Gayrimenkul olarak ihtiyaçlarınıza uygun en iyi ilanları
                sizlerle buluşturuyoruz. Profösyonel danışmanlarımız size
                hayalizindeki evi almanın her adımında rehberlik etmek için
                buradalar.
              </h2>
            </div>
            <div className=" relative w-fit h-fit flex flex-row justify-start items-start gap-[16px] p-0">
              <div className=" relative w-fit h-fit flex flex-row justify-center items-center gap-[8px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] bg-[#D8E1F2]">
                <h2 className="relative w-fit h-fit  text-[16px] leading-[16px]">
               İlanları Keşfedin
                </h2>
              </div>
              <div className=" relative w-fit h-fit flex flex-row justify-center items-center gap-[8px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] bg-[#D8E1F2]  ">
                <h2 className="relative w-fit h-fit  text-[16px] leading-[16px] text-black">
                 İletişime Geçin
                </h2>
              </div>
            </div>
          </div>
          <div className=" relative w-full h-fit flex flex-row items-start justify-center gap-[16px]">
            <div className="relative w-full h-fit flex flex-col items-center justify-center flex-nowrap px-[32px] py-[16px] border-b border-white ">
                <h2 className=" relative w-full h-fit text-white text-[12px] leading-[24px] items-center">
                  Ana Vitrin İlanlar
                </h2>
            </div>
            <div className="relative w-full h-fit flex flex-col items-center justify-center flex-nowrap px-[32px] py-[16px]  border-b border-white ">
                <h2 className=" relative w-full h-fit text-white text-[16px] leading-[24px] items-center">
                  Acil İlanlar
                </h2>
            </div>
              <div className="relative w-full h-fit flex flex-col items-center justify-center flex-nowrap px-[32px] py-[16px]  border-b border-white ">
                <h2 className=" relative w-full h-fit text-white text-[16px] leading-[24px] items-center">
                  Fırsat İlanlar
                </h2>
              </div>
              <div className="relative w-full h-fit flex flex-col items-center justify-center flex-nowrap px-[32px] py-[16px]  border-b border-white ">
                <h2 className=" relative w-full h-fit text-white text-[12px] leading-[24px] items-center">
                  Danışmanlar İlanlar
                </h2>
              </div>
          </div>
        </div>
      </div>
      </div>

      </div>

      </Form>
      
    </>
  );
};

export default SloganForm;
