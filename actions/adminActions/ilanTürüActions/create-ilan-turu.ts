"use server"
import prismadb from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { z } from "zod"
import { cookies } from "next/headers";

import { CategoryFormValues } from "@/app/(routes)/admin/kategoriler/[id]/components/CategoryForm";
import { CategoryFormValuesas } from "@/app/(routes)/admin/adminilantur/[idilanTur]/components/CategoryForm";


export async function createIlanTuru(data:CategoryFormValuesas) {
    try {    
   
          const bra = await prismadb.ilanTuru.create({
            data:{
              IlanTipiId:data.IlanTipiId, 
              IlanTuruIsmi:data.IlanTuruIsmi, 
            }  
        })
     
    } catch (error : string | any ) {
      // At the end of your server action function:
      console.log(error)
  
    }
    finally{
      revalidatePath('/admin/adminilantur/add')
      redirect('/admin/adminilantur/add')
    }
 

    

}
