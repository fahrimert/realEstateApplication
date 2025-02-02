import React from "react";
import prismadb from "@/lib/db";
import Navbar from "@/components/clientComponent/clientNavbar";
import HomePageFooter from "@/components/clientComponent/HomePageFooter";
import SingleDanısmanForId from "./components/SingleDanısmanForId";
import { notFound, useParams } from "next/navigation";
import { formatter } from "@/lib/utils";

const AddressSettings = async ({params} : {params:{id:string}}) => {
  const resulta = await prismadb.ilan.findMany({
    include: {
      images: true,
      IlanTipi: {
        include: {
          IlanTuru: true
        },
      },
    },
  });
  const firstİlanForCTA = await prismadb.ilanTuru.findFirst({});

  const result = await prismadb.ilanTipi.findMany({
    include: {
      IlanTuru: true
    },
  });
  const userDetail = await prismadb.user.findUnique({
    where: { id: params.id},
    include: {
      Ilanlar: {
        include:{
            images: true,
        }
      },
      
    },
  })  

  const formatted =  {
    id:userDetail?.id!,
    image: userDetail?.image!,
    name: userDetail?.name!,
    createdAt: userDetail?.createdAt!,
    updatedAt: userDetail?.updatedAt!,
    email: userDetail?.email!,
    password: userDetail?.password!,
    role: userDetail?.role!,
    telefon: userDetail?.telefon!,
    definition: userDetail?.definition!,
    ilanlar : userDetail?.Ilanlar!.map((c) => ({
      id: c.id!,
      IlanTipiId: c.IlanTipiId!,
      IlanTuruId: c.IlanTuruId!,
      order: c.order!,
      json : c.json!,
      name:c.name!,
      price: formatter.format(c.price.toNumber())!,
      anaVitrin: c.anaVitrin!,
      fırsatVitrini: c.FirsatVitrini!,
      acilVitrini: c.AcilVitrini!,
      satildi: c.satildi!,
      Kiralandi: c.Kiralandi!,
      images: c.images!,
      createdAt: c.createdAt!,
      updatedAt: c.updatedAt!,
    }))

  }
  const UserIds = await prismadb.user.findMany({
    select:{id:true}
  });

  if (!UserIds.map((item) => item.id).includes(params.id)) {
    throw notFound  ();
  }
  return (
    <div>
      <Navbar result={result} resulta={resulta} />
      <SingleDanısmanForId  userDetail = {formatted}/>
      <HomePageFooter firstİlanForCTA={firstİlanForCTA} />
    </div>
  );
};

export default AddressSettings;
