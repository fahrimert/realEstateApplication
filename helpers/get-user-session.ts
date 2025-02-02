import prismadb from "@/lib/db";

import { decrypt } from "@/lib/lib";
import { User } from "@prisma/client";
import { cookies } from "next/headers";



export const getAnotherUserSession = async (idOfAnother: string) => {
  const sessionBasedOnCredentialsFromDatabase =
    await prismadb.user.findUnique({
      where: {
        id: idOfAnother,
      },
    });


  if (sessionBasedOnCredentialsFromDatabase) {
    return sessionBasedOnCredentialsFromDatabase;
  } 
};

export const getAnotherUserSessionByEmail = async (email: string | null) => {
  const sessionBasedOnCredentialsFromDatabase =
    await prismadb.user.findUnique({
      where: {
        email: email!,
      },
    });


  if (sessionBasedOnCredentialsFromDatabase) {
    return sessionBasedOnCredentialsFromDatabase;
  } 
};

export const getJustSession = async() => {
  const sessionBasedOnCredentials = await decrypt(
    cookies().get("session")?.value

 ) as User
 
 const session = await prismadb.user.findUnique({
   where: {
     id: sessionBasedOnCredentials.id,
    },
  });

 return session
}