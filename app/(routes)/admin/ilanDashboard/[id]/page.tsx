import ProductForm from "./components/ProductAddForm";
import prismadb from "@/lib/db";
import { DataTable } from "@/components/ui/DataTable";
import { formatter } from "@/lib/utils";
import { format } from "date-fns";
import { columns } from "./components/columns";
import { getJustSession } from "@/helpers/get-user-session";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const ilanTipi = await prismadb.ilanTipi.findMany();
  const session = await getJustSession()
  
  const ilanTürü = await prismadb.ilanTuru.findMany();
  const data = await prismadb.ilan.findMany({
    include: {
        IlanTuru:{
          include:{
            IlanTipi:true
          }
      }
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedProducts= data.map((item) => ({
    id: item.id,
    name: item.name,
    price: formatter.format(item.price.toNumber()),
    kiralandi:item.Kiralandi,
    satildi:item.satildi,
    anasayfavitrin:item.anaVitrin,
    fırsatvitrin:item.FirsatVitrini,
    acilVitrin:item.AcilVitrini,
    ilantipi: item.IlanTuru.IlanTipi.ilantipiismi,
    IlanTuru: item.IlanTuru.IlanTuruIsmi,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  const product = await prismadb.ilan.findUnique({
    where: {
      id: params.id,
    },
    include: {
      images: true,
      IlanTipi: {
        include: {
          IlanTuru:true
        },
      },
    },
  });
 
 

  const formatted= ({
    ilan:{
      id:product?.id!,
      IlanTipiId:product?.IlanTipiId!,
      userId:product?.userId!,
      order:product?.order!,
      json:product?.json!,
      name:product?.name!,
      IlanTuruId:product?.IlanTuruId!,
      price: formatter.format(product?.price.toNumber()!)!,
      anaVitrin:product?.anaVitrin!,
      AcilVitrini:product?.AcilVitrini!,
      FirsatVitrini:product?.FirsatVitrini!,
      satildi:product?.satildi!,
      Kiralandi:product?.Kiralandi!,
      images:product?.images!,
      createdAt: format(product?.createdAt!, "MMMM do, yyyy"),
      updatedAt: format(product?.updatedAt!, "MMMM do, yyyy"),
    }
    ,
    IlanTipi:product?.IlanTipi,

  });

  const userdata = await prismadb.user.findUnique({
    where : {id: session?.id},
    include:{
        Ilanlar:{
            include: {
                IlanTuru:{
                    include:{
                        IlanTipi:true
                    }
                }
            }
        }
    }
  });
  const formattedProductss= userdata?.Ilanlar.map((item) => ({
    id: item.id,
    name: item.name,
    price: formatter.format(item.price.toNumber()),
    kiralandi:item.Kiralandi,
    satildi:item.satildi,
    anasayfavitrin:item.anaVitrin,
    fırsatvitrin:item.FirsatVitrini,
    acilVitrin:item.AcilVitrini,
    ilantipi: item.IlanTuru.IlanTipi.ilantipiismi,
    IlanTuru: item.IlanTuru.IlanTuruIsmi,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-between  items-center p-[20px]  gap-[20px]">
          <div className="w-full h-fit">
          <DataTable searchKey="name" columns={columns} data={session?.role == "ADMIN" ? formattedProducts :  formattedProductss!} />
          </div>
    
        <div className="w-full">
          <ProductForm
            initialData={formatted}
            ilanTipi={ilanTipi}
            ilanTürü={ilanTürü}
          />
        </div>


      </div>
    </>
  );
};

export default ProductPage;
