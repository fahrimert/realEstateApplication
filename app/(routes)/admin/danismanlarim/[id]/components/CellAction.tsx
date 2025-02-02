"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {  Edit, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DanısmanColumn } from "./columns";
import { deleteDanısman } from "@/actions/adminActions/delete-danısman";

interface CellActionProps {
  data: DanısmanColumn;
}
export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();


  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
     
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 ">
            <span className="sr-only">Open Menu</span>
            <MoreHorizontal className="h-4 w-4 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className=" mr-[20px]">
          <DropdownMenuLabel>Silme İşlemi</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => deleteDanısman(data.id)}>
            <Button>
            <Trash className="mr-2 h-4 w-4 " />
            Danışmanı Sil
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
