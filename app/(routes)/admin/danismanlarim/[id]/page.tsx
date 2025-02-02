import prismadb from "@/lib/db";
import RegisterComponent from "./components/RegisterComponent";
import React from "react";
import { format } from "date-fns";
import { DataTable } from "@/components/ui/DataTable";
import { columns, DanısmanColumn } from "./components/columns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
const SigninComponent = async () => {
  const data = await prismadb.user.findMany({
    where: {
      role: "DANISMAN",
    },
  });

  const formattedProducts: DanısmanColumn[] = data.map((item) => ({
    id: item.id,
    name: item?.name,
    email: item.email,
    role: item.role,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
    updatedAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <>
    <div className="flex p-[20px] gap-[20px] flex-col justify-center items-center">
<div className="flex flex-row w-full h-fit items-center justify-between gap-[20px]">

    <div>
      <h2 className="text-[32px] text-white">Danışmanlarım</h2>
    </div>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Danışman Ekle</Button>
      </DialogTrigger>
      <DialogContent className="w-fit " color="#050505">
      <RegisterComponent />
  
      </DialogContent>
    </Dialog>
</div>

      <div className=" w-full ">
        
      <DataTable searchKey="name" columns={columns} data={formattedProducts} />
      </div>
    </div>
    </>
  );
};

export default SigninComponent;
