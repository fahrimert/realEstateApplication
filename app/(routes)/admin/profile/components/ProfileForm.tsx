"use client"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { z } from "zod";



import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import {useForm } from "react-hook-form";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import ImageUploadProfil from "@/components/adminComponents/ImageUploadProfil";
import { updateProfile } from "@/actions/adminActions/update-profile";
interface ProfileFormProps {
    initialData:  {
      name: string  
      telefon: string
      id: string
      email: string;
      image: string 
      password: string 
      role: "DANISMAN" | "ADMIN"
      definition: string;
      createdAt: Date;
      updatedAt: Date;
  }
}
const formSchema = z.object({
    name: z.string().min(1, {
      message: "İlan İsmi en az 1 karakter olmalıdır",
    }),
    images: z.string(),
    telefon: z.string(),
    definition: z.string()
   
  });
  export type ProfileFormValues = z.infer<typeof formSchema>;

const ProfileForm=  ({initialData} : {initialData : {
    name: string  
    telefon: string
    id: string
    email: string;
    image: string 
    password: string 
    role: { ADMIN: "ADMIN"; DANISMAN: "DANISMAN"; }
    definition: string;
    createdAt: Date;
    updatedAt: Date;
} }) => {

      const { setError, formState: { errors } } = useForm<ProfileFormValues>();
      const aform = useForm<ProfileFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
      });
      const onSubmit = async (data: ProfileFormValues) => {
         try {
          updateProfile(data,initialData.id);
          aform.reset()
            
      } catch (error) {
        console.log(errors)
      }  
          } 
      
  
  return (
  
          <div  className='relative  w-full h-fit flex flex-col justify-start items-start gap-[24px] p-[20px] rounded-[30px] bg-white '>
          <h2 className={`w-fit h-fit  text-black text-[32px] leading-[32px]`}>Profil</h2>
  
  
          <div className='relative  w-full h-fit flex flex-col justify-center items-center gap-[10px] p-0  bg-white'>
          <div className='relative  w-full h-fit flex flex-col justify-center items-center gap-[10px] p-0  bg-white'>
          <div className='relative  w-full h-fit flex flex-row justify-start items-start gap-[10px] p-[20px ]   bg-[##FAF9F7]'>
     
  <Form {...aform} >
          <form
            onSubmit={aform.handleSubmit(onSubmit)}
            className={cn(`space-y-8 w-full   flex flex-col ` )} 
          >
       
<div className="w-full h-fit flex flex-row">

            <div className={cn(` w-full h-fit flex flex-col gap-8 bg-white rounded-[30px] p-[20px] justify-center transition-all duration-300 `)}  >

            <FormField
              control={aform.control}
              name="images"
            
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black" > Profiline Profil Fotoğrafı Ekle</FormLabel>
                  <FormControl>
                    {/* en son burda kaldım  */}
                    <ImageUploadProfil
                      /* burda imageleri dönüp imagelerin urllerini value yapıyoz 
                            imagelerde array of stringsle çalışınca onalrı dönüp tek tek stringleri dönmemiz lazım   */
                      value={field.value }
                      onChange={(url) =>
                        field.onChange(url)
                      } //* burda existing valueya urli ekliyoz */
                 
                      /* on removeda direk işte silme mevzusunu yapıyoz removladığımız dışındaki listeyi dönüyor  */
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
     
   
<FormField
              control={aform.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black w-full">İsimini Değiştir</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Profil İsminiz"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
<FormField
              control={aform.control}
              name="telefon"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black w-full">Telefon Değiştir</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Telefon Numaranız"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
<FormField
              control={aform.control}
              name="definition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black w-full">Kendinize Ait birkaç cümle Ekleyin</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Kendinize Ait Birşeyler Yazınız"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
     
     <Button className=" w-fit h-full ml-auto text-white bg-[#151516]" type="submit">
             Profil Değiştir 
              </Button>

            </div>
           
</div>

         
          </form>
        </Form>
             </div>
       
         </div>
              </div>
            
          </div>
          
  )
}

export default ProfileForm