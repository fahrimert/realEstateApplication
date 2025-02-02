"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./CellAction";

export type CategoryColumn = {
    id: string;
    ilantipiismi:string
    ilanTürüName: string;
    createdAt: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: "ilantipiismi",
     header: "İlan Tipi İsmi",
  },
  {
    accessorKey: "ilanTürüName",
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
