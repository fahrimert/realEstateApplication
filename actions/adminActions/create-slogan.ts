"use server"
import { SloganormValues } from "@/app/(routes)/admin/slogan/[id]/components/SloganForm";
import prismadb from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";



export async function createSlogan(data:SloganormValues) {
      try {
        await prismadb.slogan.create({
          data:{
            sloganName:data.sloganName
          }
      });
  } catch (error : string | any ) {
      return { message: error.message };
  }
finally{
  
  revalidatePath('/admin/slogan/new');
  redirect('/admin/slogan/new');
}
    

}