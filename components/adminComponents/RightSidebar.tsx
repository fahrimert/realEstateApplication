"use client"
"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { createİlan } from "@/actions/adminActions/productActions/create-product";
import { updateSingleProduct } from "@/actions/adminActions/productActions/update-product";

import Image from "next/image"
import imageD from '../public/ProfıleImage.jpg'
import { GrUser } from "react-icons/gr"
import { MdArrowCircleRight, MdOutlineArrowCircleRight, MdOutlineWebStories } from "react-icons/md"
import prismadb from "@/lib/db"
import Link from "next/link"
import { Ilan, IlanTipi, User } from "@prisma/client"
import { Session } from "next-auth"
import { LogOut } from "lucide-react"
import ImageUpload from "@/components/ui/ImageUpload";

import { getJustSession } from "@/helpers/get-user-session"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { logout } from "@/actions/authActions/signOut"
import { z } from "zod"
import ImageUploadProfil from "./ImageUploadProfil";
import { createProfilImage } from "@/actions/adminActions/createProfilImage";
interface RightSidebarProps {
  session : User
  user: {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
    password: string | null;
    role:"ADMIN" | "DANISMAN";
    createdAt: Date;
    updatedAt: Date;
} | null
  dANISMnuser:User[]
  ilann : Ilan[]
  ilanTipi:IlanTipi[]
}
const formSchema = z.object({
  images: z.object({ url: z.string() }).array(),
});

export type ProfileİmageValues= z.infer<typeof formSchema>;

const RightSidebar : React.FC<RightSidebarProps> = ({session,user,dANISMnuser,ilann,ilanTipi}) => {
  const route = [
    
    {
    name:'Domain',
    value:'siteAdınız.com'
  },
    {
    name:'Lisans Kodu',
    value:'Lisans Kodu'
  },
    {
    name:'Lisans Başlangıç Tarihi',
    value:'05.12.2000'
  },
    {
    name:'Lisans Bitiş Tarihi',
    value:'05.12.2023'
  },
    {
    name:'Lisans Bitişine kalan Süre',
    value:'300 gün'
  },
    {
    name:'Maksimum İlan Limiti',
    value:'Sınırsız'
  },
    {
    name:'Toplam İlan Sayısı',
    value:ilann.length
  },


]
  const form = useForm<ProfileİmageValues>({
    resolver: zodResolver(formSchema),
   defaultValues: user?.image
   
      ? {
          images:[]
        }
      : {
          images: [],
        }, 
  });
  const onSubmit = async (data: ProfileİmageValues) => {
    try {
        createProfilImage(data);
        form.resetField("images")
      } 
   catch (error) {
      console.log(error);
    }
  };
  return (
    /* profile git siteye git falan vardı ekstra logout da vardı o profil butonunda kafanda kalsın  */
    <div   className="relative w-full h-fit flex flex-row  gap-[20px] items-center py-[5px] justify-end overflow-hidden  bg-[#050505] rounded-[15px]   ">
  
<div className="w-fit h-fit gap-[10px] flex flex-col px-[5px] ">
<DropdownMenu>
  <DropdownMenuTrigger>
  {user?.role == "ADMIN" ? 

<div className="relative w-full h-full flex flex-row justify-center items-center gap-[10px] bg-[#151516] p-[5px] rounded-[15px] ">
     <div className=" relative w-full h-full flex flex-col items-start justify-center gap-[20px] overflow-hidden ">
       <h2 className=" flex h-[42px] w-fit items-center justify-center text-white ">Kullanım Ve Lİsans Bİlgileri</h2>
  
       
 

     </div>

   
   </div>
: null }

  </DropdownMenuTrigger>
  <DropdownMenuContent>
  {route.map((b) => (
          <div key={b.value} className="relative w-[100%] h-fit flex flex-row justify-center items-center ">
          <div className=" relative w-[100%] h-fit flex flex-row items-start justify-center gap-[10px] p-[10px]">
           <div className="relative w-full h-full flex items-center justify-start">
             <h2  className=" text-[12px] md:text-[16px]" >
             {b.name}
             </h2>
           </div>
           <div className="relative w-full h-full flex items-center justify-end">
             <h2  className=" text-[12px] md:text-[16px]" >
             {b.value}

             </h2>
           </div>
         </div>
       
       </div>
       ))}
  </DropdownMenuContent>
</DropdownMenu>
              
          

              </div>
 
<div className="w-fit h-fit gap-[10px] flex flex-col px-[5px] ">
  
<DropdownMenu>
  <DropdownMenuTrigger>
  <div className="relative h-fit w-fit flex flex-row justify-start items-center  border-l-[2px] text-wrap flex-wrap  px-[5px] gap-[5px] bg-[#151516]">
  <Avatar>
  <AvatarImage src={session.image ? session.image : undefined} />
  <AvatarFallback>{session?.name![0]}
  </AvatarFallback>
</Avatar>
          
                <h2 className=" w-fit relative  text-white text-[16px] flex justify-start items-start text-wrap flex-wrap">
              {session?.name}
                </h2>
                
              </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Button onClick={() => {logout()}}>

      Çıkış Yap
      </Button>
      </DropdownMenuItem>
    <DropdownMenuItem>

            
    
      </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
              
          

              </div>
  
  

    </div>
  )
}

export default RightSidebar