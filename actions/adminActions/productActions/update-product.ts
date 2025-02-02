"use server"
import prismadb from "@/lib/db"
import { İlanFormValues } from "@/app/(routes)/admin/ilanDashboard/[id]/components/ProductAddForm";

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";



export async function updateSingleProduct(data : İlanFormValues , productId: any) {

    try {
    await prismadb.ilan.delete({
      where: {
        id:productId
      }
    })
    await prismadb.ilan.update({
            where: {
                id: productId
            },
            data: {
                name: data.name,
                IlanTipiId:data.IlanTipiId,
                IlanTuruId: data.IlanTuruId,
                price: data.price,
                images:{
                  createMany:{
                    data:[
                      ...data.images.map((image:{url:string}) => image)
                    ]
                  }
                },
                json:  data.json,
                anaVitrin: data.anaVitrin,
                FirsatVitrini: data.FirsatVitrini,
                AcilVitrini: data.AcilVitrini,
                satildi: data.satildi,
                Kiralandi: data.Kiralandi,
            },
            include:{
              images:true,
              IlanTipi:{
                include:{
                  IlanTuru:true
                }
              }
            }
        });
    
        revalidatePath(`/ilanDashboard`);
/*         redirect(`/ilanDashboard`);
 */    } catch (error: string | any) {
        return { message: error.message };
    }
}
