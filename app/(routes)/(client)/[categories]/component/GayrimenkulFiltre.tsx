"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Ilan } from "@prisma/client";
import { useSingleSelectilce } from "@/hooks/useSingleSelectilce";
import { useSingleSelectFormahalle } from "@/hooks/useSingleSelectForKategory copy";
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  getDistrictsByCityCode,
  getNeighbourhoodsByCityCodeAndDistrict,
} from 'turkey-neighbourhoods'

const GayrimenkulFiltre = () => {
  const searchParams = useSearchParams();


  const { selectedForilce, isSelectedForilce, onChangeForilce } =
    useSingleSelectilce([]);
  const { selectedFormahalle, isSelectedFormahalle, onChangeFormahalle } =
    useSingleSelectFormahalle([]);
   
     const  preventHover
     = (event: any) => {
    event.preventDefault()
    }
    const sehir = searchParams.get('sehir')?.split("--")[0]
    const ilce = searchParams.get('ilce')
  return (
    <div className=" w-full h-fit flex flex-col items-center justify-center bg-white  gap-[10px]">

      <div className="w-full h-fit flex flex-col items-start  justify-start  bg-white gap-[10px] p-[10px]">
        <div className="w-fit h-full flex flex-row items-start justify-start  bg-black p-[10px]  gap-[20px] ">
          <div className=" relative w-full h-full flex  flex-col items-start justify-between   opacity-80  ">
           

            <div className=" relative w-full h-fit flex flex-row justify-center items-center ">
              <div className=" relative w-full h-full flex flex-row justify-start items-center">
                <NavigationMenu >
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <div>
                        <NavigationMenuTrigger   onPointerLeave={preventHover}
                        >
                          <h2
                            className={` font-black text-[16px]  items-start justify-start tracking-[-0.32px] leading-[38px]`}
                          >
                            İlçe Filtresi
                          </h2>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent  onPointerLeave={preventHover}>
                          <NavigationMenuLink asChild>
                          <ScrollArea className=" w-[300px] h-[300px] flex flex-col  p-[10px]  m-[10px]  ">
                            <div className=" w-[300px] h-[300px] flex flex-col  p-[10px]  m-[10px]  ">
                              {getDistrictsByCityCode('06').map(
                                (item, index) => (
                                  <div
                                    key={index}
                                    className="w-full h-fit flex flex-row items-center justify-start gap-[5px]  "
                                  >
                                    <input
                                      id={item}
                                      type="checkbox"
                                      value={item}
                                      checked={isSelectedForilce(item)}
                                      onChange={onChangeForilce}
                                    />
                                    <h2>{item}</h2>
                                  </div>
                                )
                              )}
                           
                         
                            </div>
                          </ScrollArea>

                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </div>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>
          <div className=" relative w-full h-full flex  flex-col items-start justify-between   opacity-80  ">
         

            <div className=" relative w-full h-fit flex flex-row justify-center items-center">
              <div className=" relative w-full h-full flex flex-row justify-start items-center">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <div>
                        <NavigationMenuTrigger  onPointerLeave={preventHover}>
                          <h2
                            className={` font-black text-[16px]  items-start justify-start tracking-[-0.32px] leading-[38px]`}
                          >
                            Mahalle Filtresi
                          </h2>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent  onPointerLeave={preventHover}>
                          <NavigationMenuLink asChild>
                          <ScrollArea className=" w-[300px] h-[200px] flex flex-col  p-[10px]  m-[10px]  ">

                            <div className=" w-[300px] h-fit flex flex-col  p-[10px]  m-[10px]  ">
                             
{ ilce ? 
<>
  {getNeighbourhoodsByCityCodeAndDistrict("06", ilce).map(
    (item, index) => (
      <div
        key={index}
        className="w-full h-fit flex flex-row items-center justify-start gap-[5px]  "
      >
        <input
          id={item}
          type="checkbox"
          value={item}
          checked={isSelectedFormahalle(
            item
          )}
          onChange={onChangeFormahalle}
        />
        <h2>{item}</h2>
      </div>
    )
  )}
</>
  
   : null

}
                            
                            </div>
                          </ScrollArea>

                          </NavigationMenuLink>
                        </NavigationMenuContent>
                      </div>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative w-full h-fit flex  items-start justify-center  opacity-80  ">
        <h2 className=" w-fit h-fit text-[32px] text-black">
          Nasıl Bir Gayrimenkul Arıyorsunuz?
        </h2>
      </div>
    </div>
  );
};

export default GayrimenkulFiltre;
