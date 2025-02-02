"use server"
import { İlanFormValues } from "@/app/(routes)/admin/ilanDashboard/[id]/components/ProductAddForm";
import { getJustSession } from "@/helpers/get-user-session";
import prismadb from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export async function createİlan(data:İlanFormValues) {
    try {    
       let lastCard  = await prismadb.ilan.findFirst({
      orderBy:{order:"desc"},
      select:{order:true}
    })
    const userId = await getJustSession()
    const newOrder = lastCard ? lastCard.order + 1 :1
          await prismadb.ilan.create({
            data:{
              name:data.name,
              price:data.price,
              IlanTipiId: data.IlanTipiId,
              IlanTuruId: data.IlanTuruId,
             anaVitrin: data.anaVitrin,
             FirsatVitrini: data.FirsatVitrini,
             json:data.json,
             AcilVitrini: data.AcilVitrini,
             satildi: data.satildi,
             Kiralandi: data.Kiralandi,
             userId:userId?.id!,
              order:newOrder,
          
              images:{
                createMany:{
                  data:[
                    ...data.images.map((image:{url:string}) => image)
                  ]
                }
              },
          
            }   
            ,
            include:{
              user:true,
              images:true,
              IlanTipi:{
                include:{
                  IlanTuru:true
                }
              }
            }
        }) 
      
    } catch (error : string | any ) {
        return { message: error.message };
    }
finally{

  revalidatePath('/admin/ilanDashboard/add');
  redirect('/admin/ilanDashboard/add') 
}
    

}
