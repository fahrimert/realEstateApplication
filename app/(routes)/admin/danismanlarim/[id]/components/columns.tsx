"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./CellAction";

export type DanısmanColumn = {
    id: string;
    name: string | null;
    email: string;
    role:"ADMIN" | "DANISMAN";
    createdAt: string;
    updatedAt: string;
};

export const columns: ColumnDef<DanısmanColumn>[] = [
  {
    accessorKey: "name",
    header: "İsim",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Rolü",
  },
  {
    accessorKey: "createdAt",
    header: "Oluşturulma Tarihi",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
