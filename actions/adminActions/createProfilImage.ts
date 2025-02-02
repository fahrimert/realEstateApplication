"use server"
import { ProfileİmageValues } from "@/components/adminComponents/RightSidebar"
import { getJustSession } from "@/helpers/get-user-session";
import prismadb from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";



export async function createProfilImage(data:ProfileİmageValues) {
      try {
        const session = await getJustSession()
        await prismadb.user.update({
            where:{
                id:session?.id
            },
          data:{
            
            image:data.images[0].url
          }
      });
  } catch (error : string | any ) {
      return { message: error.message };
  }
finally{
  
  redirect('/admin/adminDashboard');
}
    

}