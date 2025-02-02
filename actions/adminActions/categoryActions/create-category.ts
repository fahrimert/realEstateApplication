"use server"
import prismadb from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { z } from "zod"
import { cookies } from "next/headers";

import { CategoryFormValues } from "@/app/(routes)/admin/kategoriler/[id]/components/CategoryForm";


export async function createCategory(data:CategoryFormValues) {
    try {    
      const findİlanTipiUnique = await prismadb.ilanTipi.findUnique({
        where:{
          ilantipiismi:data.ilantipiismi
        }
      })
      const lastList = await prismadb.ilanTipi.findFirst({
        orderBy:{order:"desc"},
        select:{order:true}
      })
      const newOrder = lastList ? lastList.order + 1 : 1
          const bra = await prismadb.ilanTipi.create({
            data:{
              ilantipiismi:data.ilantipiismi, 
              order: newOrder,
            
            }  ,
        })
        toast.success('İlan Tipi,İlan Türünün İsmi ve İlan Kategorisinin İsmi kısımları Eklendi')
     
    } catch (error : string | any ) {
      // At the end of your server action function:
      console.log(error)
  
    }
    finally{
      revalidatePath('/admin/kategoriler/add')
      redirect('/admin/kategoriler/add')
    }
 

    

}
