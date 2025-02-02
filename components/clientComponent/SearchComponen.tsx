"use client";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/use-address";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Ilan,  Image as Imagee } from "@prisma/client";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from "react";
import { MdSearch } from "react-icons/md";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";
interface SearchComponents {
  resulta: ({
    IlanTipi: {
        IlanTuru: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            IlanTipiId: string;
            IlanTuruIsmi: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        order: number;
        ilantipiismi: string;
    };
    images: Imagee[];
} &  Ilan)[]


  
}

const SearchComponen:React.FC<SearchComponents> = ({resulta}) => {
  const router = useRouter();
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/getData')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
  

  const search = useSearch();

  const getTheSearchValues = async (e: any) => {
    search.setSearchQuery(e);
  };
  const btnRef = useRef(null)

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <>
    <Button ref={btnRef}  onClick={onOpen} variant={null}       className={cn(
                    " w-fit h-full  bg-white font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px] bg-none",
                 
                  )}>
     <MdSearch size={20} color="black"/>
      </Button>

  <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>İlan Ara</DrawerHeader>
          <DrawerBody>
   
       
  <div className="w-full h-fit flex  flex-row items-center justify-end  gap-[10px]  ">
    <Button onClick={() => router.push( `/${ resulta
          ?.filter((a) =>
            a.name
              .toLowerCase()
              .includes(search.searchQuery.toLocaleLowerCase())
          )
          .map((item) => ( item.IlanTuruId ))[0]}/${ resulta
          ?.filter((a) =>
            a.name
              .toLowerCase()
              .includes(search.searchQuery.toLocaleLowerCase())
          )
       
          .map((item) => ( item.id ))[0]}`
       )
     
       }>

        <MdSearch size={30}  />
      

        </Button>
  
        <Input
          placeholder="İlan İsmiyle Arayınız"
          value={search.searchQuery}
          onChange={(e) => getTheSearchValues(e.target.value)}
          className=" h-[30px] w-fit    "
        />
      </div>
      
     <div className=" w-full h-fit flex flex-col items-end justify-end  p-[20px] gap-[30px] transition-all ">
   {/*   {FilterisLoading ?   <div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>: null} */}
      {search.searchQuery &&
        resulta 
          ?.filter((a ) =>
            a.name
              .toLowerCase()
              .includes(search.searchQuery.toLocaleLowerCase())
          )

          .map((  item) => (
          <>
   
        <Link
              key={item.id}
              className=" relative w-fit h-full flex flex-col justify-end items-center gap-[10px]  transition-all fade-out  animate-fade-in animate-ease-in-out animate-normal animate-duration-[400ms] "
              href={`${item.IlanTuruId}/${item.id}`}
            >
                <Image
                  src={item?.images?.map((item) => item.url)[0]}
                  alt="232"
                  className="w-fit h-full  rounded-[30px]"
                  width={75}
                  height={75}
                  objectPosition="center"
                />
              <div className=" relative w-full h-full flex flex-col justify-center items-start gap-[10px]">
                <h2 className=" relative w-fit h-[30px] text-[16px]">
                  {item.name}
                </h2>
              </div>
            </Link>
          </>   
            
          ))} 
     </div>
     </DrawerBody>
        </DrawerContent>
      </Drawer>
</>


    </>
  );
};

export default SearchComponen;
