"use server"
import prismadb from "@/lib/db";
type Brah = {
  name: string;
  images: {
      url: string;
  }[];
  definition:string,
  email: string;
}
export default async function updateUser(sessionId:any,values: Brah){
    await prismadb.user.update({
        where:{
          id: sessionId
        },
        data:{
          email:values.email,
          name:values.name,
          definition:values.definition,
          image:values.images[0].url
        }
      },

    )
}