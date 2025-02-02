"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {  Edit, MoreHorizontal} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CategoryColumn } from "./columns";

interface CellActionProps {
  data: CategoryColumn;
}
export const CellAction: React.FC<CellActionProps> =  ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
 
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
          <DropdownMenuLabel>İlan Türünü Güncelle </DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`/admin/adminilantur/${data.id}`)}
          >  <Button>
            <Edit className="mr-2 h-4 w-4 " />
      İlan Türünün İsmini Değiştir</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
