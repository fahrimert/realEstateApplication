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
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { EffectCards } from 'swiper/modules';

import { useForm } from "react-hook-form";
import {z } from "zod";
import toast, { Toaster } from 'react-hot-toast';
import {photoGaleryAdmin, photoGaleryAdminImage} from "@prisma/client";
import { createPhotoGalery } from "@/actions/adminActions/create-photo-galery";
import { updatePhotoGalery } from "@/actions/adminActions/update-photo-galery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import ImageUploadCategory from "./ImageUploadCategory";
interface PhotoGaleryFormProps {
  initialData:  photoGaleryAdmin  & {photoGaleryAdminImage:photoGaleryAdminImage[]} | null
  
}
const formSchema = z.object({
  photoGaleryAdminImage : z.object(
    {url:z.string()}
  ).array() ,
});

export type PhotoGaleryFormValues = z.infer<typeof formSchema>;

const PhotoGaleryForm: React.FC<PhotoGaleryFormProps> = ({ initialData}) => {
  const [loading, setLoading] = useState(false);
  const [image,setImage] = useState<photoGaleryAdminImage[]>(initialData?.photoGaleryAdminImage!)

  const form = useForm<PhotoGaleryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          ...initialData,
        }
      : {
        
        photoGaleryAdminImage : [],
        },
  });
  const onSubmit = async (data: PhotoGaleryFormValues) => {
    try {
  /*     deleteImage(initialData.id) */
       if (initialData) {
        updatePhotoGalery(data,initialData.id);
        toast.success('Başarıyla Fotoğraf Galerinizdeki Fotolar  Güncellendi')
        
      }
      else {
        createPhotoGalery(data);
        toast.success('Başarıyla Hakkında Sayfasındaki Metniniz Eklendi')
       
      } 
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-full h-fit flex flex-col bg-white p-[10px]">

      <Form {...form}   >
        <form
                       onSubmit={form.handleSubmit(onSubmit) }
                       className="space-y-8 w-fit h-fit bg-[#050505] p-[10px] rounded-[15px]"

        >
             <FormField
                 control={form.control}
                 name = "photoGaleryAdminImage"
                 render = {({field}) => (
                    <FormItem>
                        <FormLabel className="">
                          <h2 className="text-white w-full h-[50px] bg-[#151516]  items-center justify-center flex rounded-[20px]">
                          Fotoğraf Galerisi Kısmına Şirketinizin Fotoğrafını Ekleyin
                            </h2> </FormLabel>
                        <FormControl>
                            <ImageUploadCategory
                            /* burda imageleri dönüp imagelerin urllerini value yapıyoz 
                            imagelerde array of stringsle çalışınca onalrı dönüp tek tek stringleri dönmemiz lazım   */
                             value={field.value.map((image) => image.url)}
                              disabled = {loading}
                              onChange={(url) => field.onChange([...field.value,{url}])}/* burda existing valueya urli ekliyoz */
                             onRemove = {(url) =>field.onChange([...field.value.filter((current) => current.url !== url)])}
                            /* on removeda direk işte silme mevzusunu yapıyoz removladığımız dışındaki listeyi dönüyor  */
                            />
                            
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                    
)}
/>


          <Button  variant={"secondary"}  disabled={loading} className=" border-[2px] rounded-xl  text-black h-[35px]" type="submit">
            Galeriye Fotoğraflar ekle
          </Button>
        </form>
        <Toaster />

      </Form>
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
        
    {image?.map((d) => 
        
        <SwiperSlide key={d.id}>
          <div className=" w-[400px] h-[400px]" >
    
          <Image  src={d.url}  objectFit="contain" fill alt="212" />
          </div>
          
        </SwiperSlide>
          )}
    </Swiper>
    
    
    
            </div>
          </div>
        </div>
      </div>
    </div> 
    </div>
  );
};

export default PhotoGaleryForm;
