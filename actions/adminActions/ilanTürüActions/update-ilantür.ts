"use server"
import { CategoryFormValuesas } from "@/app/(routes)/admin/adminilantur/[idilanTur]/components/CategoryForm"
import { CategoryFormValues } from "@/app/(routes)/admin/kategoriler/[id]/components/CategoryForm"
import prismadb from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"


export async function updateSingleCategory(data:CategoryFormValuesas ,categoryId:any
) {
    try {
      
   const ilantipa =  await prismadb.ilanTuru.update({
      where: {
          id: categoryId
      },
      data: {
        IlanTuruIsmi: data.IlanTuruIsmi,
             },
       
            
  });
   

       
        revalidatePath(`/admin/adminilantur/${categoryId}`);
    } catch (error : string | any ) {
        return { message: error.message };
    }
    finally{
      redirect('/admin/adminilantur/')
    }
}
