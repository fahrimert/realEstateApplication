"use server"
import { PhotoGaleryFormValues } from "@/app/(routes)/admin/photoGaleryAdmin/[id]/components/DescriptionForm"
import prismadb from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"



export async function createPhotoGalery(data:PhotoGaleryFormValues) {
    try {    
          await prismadb.photoGaleryAdmin.create({
            data:{
              photoGaleryAdminImage:{
                createMany:{
                  data:[
                    ...data.photoGaleryAdminImage.map((image:{url:string}) => image)
                  ]
                }
              },
            }   
            ,
            include:{
                photoGaleryAdminImage:true
            }
        })
      
    } catch (error : string | any ) {
        return { message: error.message };
    }
finally{
  revalidatePath('/admin/photoGaleryAdmin/new');
  redirect('/admin/photoGaleryAdmin/new')
}
    

}
