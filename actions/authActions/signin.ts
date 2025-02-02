"use server";
import { cookies } from "next/headers";
import bcrypt from "bcrypt";
import { decrypt, encrypt } from "@/lib/lib";
import { redirect } from "next/navigation";
import prismadb from "@/lib/db";
import { FormState, LoginSchema } from "@/schema";

export async function signin(state: FormState, formData: FormData) {
  const validatedFields = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  try {
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    const user = await prismadb.user.findUnique({
      where: {
        email: validatedFields.data?.email,
      },
    }) as  {
      email: string;
      password: string | null;
      image: string | null;
      id: string;
      name: string | null;
      role: "ADMIN" | "DANISMAN";
      telefon: string;
      definition: string;
      createdAt: Date;
      updatedAt: Date;
  } 

    const pswdvalid = await bcrypt.compare(
      validatedFields.data?.password,
      user!.password!
    );
    if (pswdvalid == false) {
      return {
        serverError: "Şifreniz Veya Emailiniz Eksik Gİrilmiştir",
      };
    }
    if (pswdvalid) {
      const expires = new Date(Date.now() + 500 * 1000);
      const session = await encrypt({ user});
      cookies().set("session", session, { expires, httpOnly: true });
    }

  } catch (error) {
    console.log((error as Error).message)
    return {
      serverError: "Bir Sorun Oluştu   ",
    };
  }
  redirect("/admin/adminDashboard");
}
  