"use server"
import prismadb from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";
import { z } from "zod"



export async function deleteDanısman(danısmanId:any) {
    try {
          await prismadb.user.delete({
            where:{
                id:danısmanId
            },
        })
    } catch (error : string | any ) {
        return { message: error.message };
    }
    redirect(`/admin/danismanlarim/add`);

}
