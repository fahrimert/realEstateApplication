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
import {  Iletisim, Slogan } from "@prisma/client";
import { createSlogan } from "@/actions/adminActions/create-slogan";
import validator from "validator";
import { updateiletisim } from "@/actions/adminActions/update-iletisim";
import { createİletisim } from "@/actions/adminActions/create-iletisim";
import { cn } from "@/lib/utils";
import { GrLocation } from "react-icons/gr";
import { MdEmail, MdPhone } from "react-icons/md";
const formSchema = z.object({
  sirketAd: z.string().min(10, {
    message: "Şirket adı en az  10 character olmalı",
  }),
  sirketAdres: z.string().min(10, {
    message: "Şirket adresi en az  10 character olmalı",
  }),
  sirkettelefon: z.number(),
  kisiselTelefon: z.number(),
   destekemail:z.string().min(1,{
     message:"Destek Maili En Az 1 Karakter olmalı"
 }),
 facebookLink:z.string().url().optional(),
 instaLink:z.string().url().optional(),
 twitterLink:z.string().url().optional(),
})
interface İletisimFormProps {
  initialData:  {
    id: string| undefined
    sirketAd: string | undefined
    sirketAdres: string | undefined
    sirkettelefon: number
    kisiselTelefon: number 
    destekemail: string| undefined 
     facebookLink: string 
    instaLink:string 
    twitterLink:string 
    createdAt: Date| undefined 
    updatedAt: Date| undefined
}  | null
  
}


export type İletisimFormValues = z.infer<typeof formSchema>;

const İletisimForm: React.FC<İletisimFormProps> = ({ initialData}) => {

  const router = useRouter()
  const action = initialData?.id ? "Güncelle" : "Yarat ";
  const [loading, setLoading] = useState(false);


  const form = useForm<İletisimFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          ...initialData,
        }
      : {
        sirketAd: "",
        sirketAdres: "",
        sirkettelefon: 0,
        kisiselTelefon:0,
        destekemail: "a@gmail.com",
        facebookLink: "a@gmail.com",
        instaLink: "a@gmail.com",
        twitterLink: "a@gmail.com"
        },
  });
  const onSubmit = async (data: İletisimFormValues) => {
    try {
       if (initialData?.id) {
        updateiletisim(data,initialData.id);
        toast.success('Başarıyla iletisim Sayfasındaki bilgileriniz Güncellendi')
        router.refresh()
      }
      else {
        createİletisim(data);
        toast.success('Başarıyla iletisim Sayfasındaki bilgileriniz  Eklendi')
        router.refresh()
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" w-full h-fit bg-white flex flex-col p-[30px] rounded-[30px] ">
   <div className=" w-full h-[100px] flex flex-row ">

      <div  className={cn(` w-full h-full   flex flex-col justify-start items-start ` )} >

<h2 className="text-black text-[32px]">
İletişim Bilgileri 
</h2>
<h2 className="text-black">
İletişim Sayfasındaki Bilgileri Değiştirin
</h2>



      </div>
   
   </div>
   <div className="w-full h-fit flex flex-col">


   
      <Form {...form}  >

        <form
              
                       onSubmit={form.handleSubmit(onSubmit) }
                       className="w-full h-fit flex-col gap-[20px] p-[20px] justify-end items-end  "


        >
         <div className="w-full h-fit grid grid-rows-3 grid-cols-3  gap-[20px]">

            <FormField
            
              control={form.control}
              name="sirketAd"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black ">Şirket Adı Bilgisi</FormLabel>
                  <FormControl>
                    <Input

                    className=" w-full h-fit"
                      disabled={loading}
                       placeholder="Şirket AdıBilgisi"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sirketAdres"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Şirket Adres Bilgisi</FormLabel>
                  <FormControl>
                    <Input
                    className=" w-full h-fit"
                      disabled={loading}
                       placeholder="Şirket Adress Bilgisi"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sirkettelefon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Şirket Telefon Bilgisi</FormLabel>
                  <FormControl>
                    <Input
                    className=" w-full h-fit"
                      disabled={loading}
                       placeholder="Şirket TelefonBilgisi"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="kisiselTelefon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kişisel Telefon Bilgisi</FormLabel>
                  <FormControl>
                    <Input
                    className=" w-full h-fit"
                      disabled={loading}
                       placeholder="kisiselTelefon TelefonBilgisi"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="destekemail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destek Emaili Bilgisi</FormLabel>
                  <FormControl>
                    <Input
                    className=" w-full h-fit"
                      disabled={loading}
                       placeholder="destekemail Bilgisi"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {initialData?.id !== undefined  && 
            <>
                <FormField
                control={form.control}
                name="facebookLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Şirket Facebook Linki Bilgisi</FormLabel>
                    <FormControl>
                      <Input
                      className=" w-full h-fit"
                        disabled={loading}
                         placeholder="facebookLink Bilgisi"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="twitterLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Şirket Twitter  SayfasıLink Bilgisi</FormLabel>
                    <FormControl>
                      <Input
                      className=" w-full h-fit"
                        disabled={loading}
                         placeholder="twitterLink Bilgisi"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="instaLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Şirket İnstagram Sayfası Linki Bilgisi</FormLabel>
                    <FormControl>
                      <Input
                      className=" w-full h-fit"
                        disabled={loading}
                         placeholder="instaLink Bilgisi"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
              
              }
        



        </div>
          <Button  variant={"secondary"}  disabled={loading} className=" border-[2px] rounded-xl border-[#8be8cb] text-black m-[10px] " type="submit">
            {action}
          </Button>

        </form>
        <Toaster />

      </Form>
      <h2 className="text-black text-[32px]">
Sitedeki Görünüm  
</h2>
        <div
              className="relative w-full h-fit flex flex-col justify-center items-center p-[40px] gap-[20px]"
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
      
              <div className=" relative w-full h-fit flex flex-col justify-start items-start flex-nowrap gap-[64px] ">
                <div className=" relative w-full h-fit flex flex-row justify-start items-start gap-[32px] p-0 ">
                  <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[24px] p-[20px] bg-[#050505] rounded-[20px]">
                 <GrLocation size={40} color="white"/>
                    <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[15px]">
                      <div className=" relative w-full h-fit flex flex-col justify-start items-center gap-[5px]">
                        <h2 className=" w-full h-fit text-[30px] leading-[30px] flex justify-center text-white">
                              Ofisimiz
                        </h2>
                        <h2 className=" w-full h-fit text-[14px] leading-[27px] flex justify-center text-white">
                          Ofisimizi iş saatlerinde istediğiniz zaman ziyaret edebilirsiniz
                            </h2>
                      </div>
                      <h2 className=" w-fit h-fit text-[20px] text-white">
                     {initialData?.sirketAdres}      </h2>
                    
                    </div>
      
                
                  </div>
                  <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[24px] p-[20px] bg-[#050505] rounded-[20px]">
                 <GrLocation size={40} color="white"/>
                    <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[15px]">
                      <div className=" relative w-full h-fit flex flex-col justify-start items-center gap-[5px]">
                      <h2 className=" w-full h-fit text-[32px] flex justify-center text-white">
Telefonlar
                            </h2>
                        <h2 className=" w-full h-fit text-[18px] flex justify-center text-white">
                        Alttaki Telefon Numarası Sayesinde Bizden İlanlar Hakkında Detaylı Bilgi Alabilirsiniz

                            </h2>
                      </div>
                      <h2 className=" w-fit h-fit text-[20px] text-white">
                        Şirket Telefonu : {initialData?.sirkettelefon} 
                        </h2>
                      <h2 className=" w-fit h-fit text-[20px] text-white">
                          
                      Kişisel Telefon:{initialData?.kisiselTelefon}  
                      </h2>
                    
                    </div>
      
                
                  </div>
                  <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[24px] p-[20px] bg-[#050505] rounded-[20px]">
                  <MdEmail size={40} color="white"/>
                  <div className="relative w-full h-fit flex flex-col justify-start items-center gap-[15px]">
                      <div className=" relative w-full h-fit flex flex-col justify-start items-center gap-[5px]">
                        <h2 className=" w-full h-fit text-[30px] leading-[30px] flex justify-center text-white">
                        Email
                        </h2>
                        <h2 className=" w-full h-fit text-[14px] leading-[27px] flex justify-center text-white">
                        Alttaki Email Sayesinde Bize Her Zaman Ulaşabilirsin

                            </h2>
                      </div>
                      <h2 className=" w-fit h-fit text-[20px] text-white">
                          
                      {initialData?.destekemail}
                      </h2>
                    
                    </div>
      
                
                  </div>
            
             
                </div>
              </div>
            </div>
      
 </div>

        
      
      </div>
    </>
  );
};

export default İletisimForm;
