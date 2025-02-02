import prismadb from "@/lib/db";
import CategoryForm from "./components/CategoryForm";
import React from "react";
import { format } from "date-fns";
import { DataTable } from "@/components/ui/DataTable";
import { columns } from "./components/columns";
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
import { getJustSession } from "@/helpers/get-user-session";
const CategoryPage = async ({ params }: { params: { idilanTur: string } }) => {

  const category = await prismadb.ilanTuru.findUnique({
    where: {
      id: params.idilanTur,
    }
  });
  const ilanCategories = await prismadb.ilanTipi.findMany({
  });
  const data = await prismadb.ilanTuru.findMany({
    include: {
      Ilan: true,
      IlanTipi:true
    },
  });
  const formattedProducts = data.map((item) => ({
    id: item.id,
    ilantipiismi: item.IlanTipi.ilantipiismi,
    ilanTürüName: item.IlanTuruIsmi,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  
  const session = await getJustSession()




  
  return (
    <>
        <div className="relative w-full h-fit flex flex-col justify-between  items-start p-[20px]">


        <div className="flex flex-row w-full h-fit items-center justify-between">

<div>
  <h2 className="text-[32px] text-white">İlan Türlerim</h2>
</div>
  <Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">{category ? "Seçtiğin İlan Türünü Güncelle ": "İlan Türü  Ekle"}</Button>
  </DialogTrigger>
  <DialogContent className="w-fit " color="#050505">
    <div className="w-fit h-fit bg-[#050505] p-[20px]">

  <CategoryForm ilanCategories={ilanCategories} initialData={category} />
    </div>

  </DialogContent>
</Dialog>
</div>
      <div className="w-full h-fit">

      <DataTable
        searchKey="categoryName"
        columns={columns}
        data={ formattedProducts}
      />
      </div>

    </div>

    </>
  );
};

export default CategoryPage;
