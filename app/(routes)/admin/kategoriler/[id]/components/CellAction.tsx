"use client";
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

interface CellActionProps {
  data: {
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
}
export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  return (
    <>
     
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0 ">
            <span className="sr-only">Menüyü Açın</span>
            <MoreHorizontal className="h-4 w-4 " />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className=" mr-[20px]">
          <DropdownMenuLabel>İlan Tipini Güncelle</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.replace(`${data.id}`)}
          >  <Button>
            <Edit className="mr-2 h-4 w-4 " />
       İlan Tipinin İsmini Değiştir</Button>
          </DropdownMenuItem>
      
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
