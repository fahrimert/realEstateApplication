"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CellAction } from "./CellAction"
import { IlanTipi, IlanTuru } from "@prisma/client"

export type IlanColumn = {
    id: string;
    name: string;
    price: string;
    kiralandi: boolean;
    satildi: boolean;
    anasayfavitrin: boolean;
    fırsatvitrin: boolean;
    acilVitrin: boolean;
    ilantipi: string;
    IlanTuru: string;
    createdAt: string;
}

export const columns: ColumnDef<IlanColumn>[] = [
  {
    accessorKey: "name",
    header: "İlan İsmi",
  },
  {
    accessorKey: "ilantipi",
    header: "ilantipi",
  },
  {
    accessorKey: "kiralandi",
    header: "kiralandi",
  },
  {
    accessorKey: "satildi",
    header: "satildi",
  },
  {
    accessorKey: "anasayfavitrin",
    header: "anasayfavitrin",
  },
  {
    accessorKey: "fırsatvitrin",
    header: "fırsatvitrin",
  },
  {
    accessorKey: "acilVitrin",
    header: "acilVitrin",
  },
  {
    accessorKey: "IlanTuru",
    header: "IlanTuru",
  },
  {
    accessorKey: "price",
    header: "İlan Fiyatı",
  },
 

  {
    accessorKey: "createdAt",
    header: "İlan Eklendiği Gün",
  },


 
  {
    id:"actions",
    cell : ({row}) => <CellAction data ={row.original}/>
  }
]
