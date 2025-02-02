"use client"
import { z } from "zod"
import validator from "validator";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import ImageUpload from "@/components/ui/ImageUpload"

import * as React from "react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import updateUser from "@/actions/adminActions/updateUserİnfos";
import { Ilan } from "@prisma/client";




  const FirstFormSchema = z.object({
    name:z.string().min(1,{
        message:"İsim En az 1 karakter olmalıdır"
    }),
    images : z.object({url:z.string()}).array() ,

    definition:z.string().min(3,{
        message:"Tanıtım yazısı en az 3 karakter olmalıdır"
    }),
    email:z.string().min(1,{
        message:"Email en az 1 karakter olmalıdır"
    }),

})

interface AccountSettings {
  formattedDetail: {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
    password: string | null;
    Ilanlar  : Ilan[]
    role: "ADMIN" | "DANISMAN";
    createdAt: Date;
    updatedAt: Date;
} | null

}
const AccountSettings:React.FC<AccountSettings>= ({formattedDetail}) => {
    const Firstform = useForm<z.infer<typeof FirstFormSchema>>({
        resolver: zodResolver(FirstFormSchema),
        defaultValues: {
            name: "",
            email: "",
            definition:"",
        images : [],
        },
      })
    const [loading,setLoading] = React.useState(false)

      const session = useSession()
      const  onSubmit  = async (values: z.infer<typeof FirstFormSchema>)  => {
        updateUser(session.data?.user?.id,values)
      toast.success('User Bilgileriniz Güncellendi')
    
    }
    return (
        <>
<h2 className="relative w-fit h-fit text-[28px] leading-[36px]">
    Hesap Ayarları
</h2>

<Form {...Firstform}>
      <form onSubmit={Firstform.handleSubmit(onSubmit)}  className=" relative w-full h-fit gap-[10px]">
        <div  className=" relative w-full h-fit grid grid-cols-2 grid-rows-4 gap-[10px]" >
        <FormField
                 control={Firstform.control}
                 name = "images"
                 render = {({field}) => (
                    <FormItem>
                        <FormLabel> Images</FormLabel>
                        <FormControl>
                            <ImageUpload
                            /* burda imageleri dönüp imagelerin urllerini value yapıyoz 
                            imagelerde array of stringsle çalışınca onalrı dönüp tek tek stringleri dönmemiz lazım   */
                             value={field.value.map((image) => image.url)}
                              disabled = {loading}
                              onChange={(url) => field.onChange([...field.value,{url}])}//* burda existing valueya urli ekliyoz */
                             onRemove = {(url) =>field.onChange([...field.value.filter((current) => current.url !== url)])}
                            /* on removeda direk işte silme mevzusunu yapıyoz removladığımız dışındaki listeyi dönüyor  */
                            />
                            
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                    
)}
/>
        <FormField
          control={Firstform.control}
          name="name"
          render={({ field }) => (
            <FormItem className=" w-full h-full">
              <FormLabel>İsminiz</FormLabel>
              <FormControl>
                <Input placeholder={formattedDetail?.name!} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={Firstform.control}
          name="email"
          render={({ field }) => (
            <FormItem className=" w-full h-full">
              <FormLabel>Emailiniz</FormLabel>
              <FormControl>
                <Input placeholder={formattedDetail?.email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={Firstform.control}
          name="definition"
          render={({ field }) => (
            <FormItem className=" w-full h-full">
              <FormLabel>Tanıtım Yazınız</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
   
        <FormField
          control={Firstform.control}
          name="email"
          render={({ field }) => (
            <FormItem className=" w-full h-full">
              <FormLabel>Emailiniz</FormLabel>
              <FormControl>
                <Input placeholder={formattedDetail?.email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
   
   
       
        </div>
        <Button type="submit">Ekle</Button>
      </form>
    </Form>
    </>
  )
}

export default AccountSettings