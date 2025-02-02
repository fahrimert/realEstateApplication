import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import * as React from "react";

import { headers } from "next/headers";
import { Metadata } from "next";
import AccountSettings from "./components/AccountSettings";
import prismadb from "@/lib/db";
import AddressSettings from "./components/AddressSettings";
import { getJustSession } from "@/helpers/get-user-session";

export const metadata: Metadata = {
  title: "Kullanıcı Bilgileri | ",
};
const page = async () => {
  const headerList = headers();
  const path = headerList.get("x-current-path");
  const session = await getJustSession();
  const userDetail = await prismadb.user.findUnique({
    where: { id: session?.id },
    include:{
      Ilanlar:true
    }
  });

  return (
    <>
      <div className="relative w-[50%] h-fit flex flex-row justify-center items-start gap-[10px]">
        <div className=" relative w-full h-fit flex flex-col justify-center items-center gap-[10px]  bg-white">
          <div className="relative w-full h-fit flex flex-col justify-center items-start p-[45px]">
            <Tabs
              className="relative w-full h-fit flex flex-col justify-around items-start  pt-[10px] bg-white"
              defaultValue="account"
            >
              <TabsList className="relative w-full h-fit flex flex-row justify-between items-center  pt-[10px] bg-white">
                <TabsTrigger value="account">Üyelik Bilgileri</TabsTrigger>
                <TabsTrigger value="adress">İlanlarınız</TabsTrigger>
              </TabsList>

              <TabsContent
                value="account"
                className=" relative w-full h-fit flex flex-col items-start justify-center gap-[10px] bg-white"
              >
                <AccountSettings formattedDetail={userDetail} />
              </TabsContent>

              <TabsContent
                value="adress"
                className=" relative w-full h-fit flex flex-col items-start justify-center gap-[10px] bg-white"
              >
                <AddressSettings />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
