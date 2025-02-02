"use server"
import { İletisimFormValues } from "@/app/(routes)/admin/iletisim/[id]/components/İletisimForm";
import prismadb from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";



export async function updateiletisim(data:İletisimFormValues,iletisimid:any) {
      try {
        await prismadb.iletisim.update({
            where:{
                id:iletisimid
            },
          data:{
            sirketAd:data.sirketAd ,
            sirketAdres:data.sirketAdres ,
            sirkettelefon: data.sirkettelefon,
            kisiselTelefon:data.kisiselTelefon,
            destekemail: data.destekemail,
            facebookLink: data.facebookLink,
            instaLink: data.instaLink,
            twitterLink: data.twitterLink
          }
      });
  } catch (error : string | any ) {
      return { message: error.message };
  }
finally{
  
  revalidatePath('/admin/iletisim/new');
  redirect('/admin/iletisim/new');
}
    

}