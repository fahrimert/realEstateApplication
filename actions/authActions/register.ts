"use server";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import prismadb from "@/lib/db";
import { RegisterFormSchema, RegisterFormState } from "@/lib/definitions";

export async function register(
  stateRegister: RegisterFormState,
  formData: FormData
) {
  const validatedFields = RegisterFormSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    password: formData.get("password"),
  });

  try {
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

      const hashedpwd = await bcrypt.hash(validatedFields.data.password, 10);


      await prismadb.user.create({
        data: {
          email: validatedFields.data.email,
          name: validatedFields.data.name,
          password: hashedpwd,
        },
      });
      if (validatedFields.success) {
        
        return {
          serverSuccessw: "Kullanıcı Başarıyla kayıt edildi",
        };
      }
    } 
   catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return {
          serverErrorForRegister: "Aynı email ile bir başka kullanıcı daha bulunmaktadır.",
        };
      }}
      console.log("Aynı email ile bir başka kullanıcı daha bulunmaktadır.");
    return {
      serverErrorForRegister: "Kullanıcı Kayıt Edilemedi Bir Daha Deneyiniz",
    };
  }

  revalidatePath('/admin/danismanlarim/add')
 
}
