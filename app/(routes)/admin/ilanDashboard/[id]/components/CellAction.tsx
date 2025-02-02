"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Copy, Delete, Edit, MoreHorizontal, Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { IlanColumn } from "./columns";

interface CellActionProps {
    data:IlanColumn;
}
export const CellAction:React.FC<CellActionProps> = ({
    data
}) => {
    const router = useRouter()



  return (
    <>

    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 ">
                <span className="sr-only">Menuyu Açın</span>
                <MoreHorizontal className="h-4 w-4 "/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>
                Aksiyonlar
            </DropdownMenuLabel>
            <DropdownMenuItem onClick={() =>router.push(`/admin/ilanDashboard/${data.id}`)}>
                <Edit className="mr-2 h-4 w-4 "/>
                Ürünü Güncelle Ve ÜrünDeki Detayları Değiştir
            </DropdownMenuItem>
         
        </DropdownMenuContent>
    </DropdownMenu>
    </>
)
}
