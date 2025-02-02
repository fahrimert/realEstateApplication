import prismadb from "@/lib/db";
import CategoryForm from "./components/CategoryForm";
import React from "react";
import { format } from "date-fns";
import { DataTable } from "@/components/ui/DataTable";
import { columns } from "./components/columns";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { getJustSession } from "@/helpers/get-user-session";
const CategoryPage = async ({ params }: { params: { id: string } }) => {

  const category = await prismadb.ilanTipi.findUnique({
    where: {
      id: params.id,
    },
    include: {
      IlanTuru: true
    },
  });
  const ilanCategories = await prismadb.ilanTipi.findMany({
    include: {
      IlanTuru: true
    },
  });
  const dataa = await prismadb.ilanTipi.findMany({
    include: {
      IlanTuru:true
      },
      orderBy:{
        order:"asc"
      }
  
  });

  const session = await getJustSession()

  const formattedProducts  = dataa.map((item) => ({
    IlanTuru:item.IlanTuru,
    IlanTuruIsmi: item.IlanTuru.map((c) =>c.IlanTuruIsmi),
    id: item.id,
    categoryName: item.ilantipiismi,
    ilantipiid: item.id,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <>
        <div className="relative w-full h-fit flex flex-col justify-between  items-start p-[20px]">

        <div className="flex flex-row w-full h-fit items-center justify-between">

<div>
  <h2 className="text-[32px] text-white">İlan Tiplerim</h2>
</div>
  <Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">{category ? "Seçtiğiniz İlan Tipini Güncelle": "İlan Tipi Ekle"}</Button>
  </DialogTrigger>
  <DialogContent className="w-fit " color="#050505">
    <div className="w-[300px] h-[300px] bg-[#050505] flex justify-center items-center">

  <CategoryForm  initialData={category} />
    </div>

  </DialogContent>
</Dialog>
</div>
        <div className="w-full h-fit">
        <DataTable
        searchKey="categoryName"
        columns={columns}
        data={formattedProducts}
      />
        </div>
    {/* buraya bak bi burdaki columnlara */}
    </div>

    </>
  );
};

export default CategoryPage;
