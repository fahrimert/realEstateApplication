"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./CellAction";

export type CategoryColumn = {
  IlanTuru: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      IlanTuruIsmi: string;
      IlanTipiId: string;
  }[];
  IlanTuruIsmi: string[];
  id: string;
  categoryName: string;
  ilantipiid: string;
  createdAt: string;
}

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "categoryName",
     header: "İlan Tipi İsmi",
  },
  {
    accessorKey: "IlanTuruIsmi",
     header: "İlan Türü İsmi",
  },
  {
    accessorKey: "createdAt",
    header: "Tarih",
  },
  {
    id: "actions",
    
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
