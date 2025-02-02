"use server"
import { CategoryFormValues } from "@/app/(routes)/admin/kategoriler/[id]/components/CategoryForm"
import prismadb from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

export type CategoryFormValuesS = {
  categoryName: string;
}

export async function updateSingleCategory(data:CategoryFormValues ,categoryId:any
) {
    try {
      
   const ilantipa =  await prismadb.ilanTipi.update({
      where: {
          id: categoryId
      },
      data: {
        ilantipiismi:data.ilantipiismi,
        },
            
  });

       
        revalidatePath(`/admin/kategoriler/add`);
    } catch (error : string | any ) {
        return { message: error.message };
    }
    finally{
      redirect(`/admin/kategoriler/add`)
    }
}
