"use server"
import { İletisimFormValues } from "@/app/(routes)/admin/iletisim/[id]/components/İletisimForm";
import prismadb from "@/lib/db"
import { revalidatePath } from "next/cache"



export async function createİletisim(data:İletisimFormValues) {
      try {
        console.log(data);
      const iletisim =   await prismadb.iletisim.create({
          data:{
            sirketAd:data.sirketAd ,
        sirketAdres:data.sirketAdres ,
        sirkettelefon: data.sirkettelefon,
        kisiselTelefon:data.kisiselTelefon,
        destekemail: data.destekemail,
       
          }
      });
      console.log(iletisim);
  } catch (error : string | any ) {
      return { message: error.message };
  }
finally{
  
  revalidatePath('/admin/iletisim/new');
}
    

}