"use server"
import { ProfileFormValues } from "@/app/(routes)/admin/profile/components/ProfileForm";
import { getJustSession } from "@/helpers/get-user-session";
import prismadb from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export async function updateProfile(data: ProfileFormValues,id:string) {

    try {
        console.log(id);
        await prismadb.user.updateMany({
            where: {
                id: id
            },
            data:{
                name:data.name,
                telefon: data.telefon,
                image: data.images,
                definition:data.definition
            }  
        })
        toast.success('Profil Güncellendi')

    } catch (error: string | any) {
        return { message: error.message };
    }
    finally{
  
        revalidatePath('/admin/profile');
      }


}
