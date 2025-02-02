"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRef } from "react";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { MdAddShoppingCart } from "react-icons/md";
import { Button } from "../ui/button";
import SearchComponen from "./SearchComponen";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import { Ilan, Image } from "@prisma/client";

interface NavbarProps {
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
    images: Image[];
} &  Ilan)[]

  result: ({
    IlanTuru: (  {
      id: string;
      IlanTuruIsmi: string;
      IlanTipiId: string;
      createdAt: Date;
      updatedAt: Date;
    })[];
  } & {
    id: string;
    ilantipiismi: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
  })[];
  
}

const Navbar: React.FC<NavbarProps> = ({ result, resulta }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const path = usePathname();
  return (
    <div className=" md: relative w-full h-fit flex flex-col  justify-center items-center  p-[10px]   bg-[#05050a]  gap-[10px]  ">
      <div className="lg: relative w-full h-fit  flex  justify-end items-center  p-0">
        <ul className=" w-full ">
          <li>
            <button
              ref={btnRef}
              onClick={onOpen}
              className="   md:hidden sm: flex"
            >
              <MenuIcon />
            </button>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              size={"full"}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <ul>
                    {result.map((item, index) => (
                      <li key={index} className=" w-full h-[50px]  mt-[5px]  ">
                        <Link
                          href={`${item.ilantipiismi}--${item.id}`}
                          key={item.id}
                          className={cn(
                            "transition-colors hover:text-primary font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px] uppercase",
                            path === `${item.ilantipiismi}--${item.id}`
                              ? " text-black dark:text-white"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.ilantipiismi}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className=" relative w-full h-[72px] flex justify-center items-center bg-white">
                    <h2 className="w-fit h-fit font-sans font-extrabold text-black text-[48px]  tracking-[-1.6]  leading-[30px] items-center ">
                      Çok Satanlar
                    </h2>
                  </div>
                  <div className=" w-full h-fit flex flex-col justify-center items-center gap-[40px]">
                    <div className=" relative w-full h-[470px] flex flex-row justify-center items-center gap-[10px] bg-white">
                      <div className=" relative w-full h-full flex flex-col items-center justify-center gap-[18px]">
                        <div className=" relative w-full h-full flex flex-col justify-center items-center gap-[10px]">
                          <div
                            className="w-fit h-fit"
                            style={{
                              /* backgroundImage: `url(${profilePic.src})`, */
                              backgroundSize: "cover",
                              width: "100%",
                              height: "100%",
                            }}
                          >
                            <div className=" w-full h-full  flex flex-col justify-end items-end  bg-[##4F4F4F]">
                              <button className="text-white">
                                <MdAddShoppingCart size={"40px"} />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[5px]">
                          <div className="relative w-full h-fit flex flex-col justify-center items-start">
                            <h2 className="w-full h-fit font-inter  text-black text-[16px]  tracking-[-0.48]  leading-[30px]  ">
                              Mor Çanta
                            </h2>
                            <h2 className="w-full h-fit font-inter  text-black text-[16px]  tracking-[-0.48]  leading-[30px]  ">
                              1000TL{" "}
                            </h2>
                          </div>
                          <h2 className="w-full h-fit font-inter  text-black text-[16px]  tracking-[-0.48]  leading-[30px]  ">
                            Renkler{" "}
                          </h2>
                        </div>
                      </div>
                      <div className=" relative w-full h-full flex flex-col items-center justify-center gap-[18px]">
                        <div className=" relative w-full h-full flex flex-col justify-center items-center gap-[10px]">
                          {/*     <Image src={profilePic} fill alt='232'/>
                           */}{" "}
                        </div>
                        <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[5px]">
                          <div className="relative w-full h-fit flex flex-col justify-center items-start">
                            <h2 className="w-full h-fit font-inter  text-black text-[16px]  tracking-[-0.48]  leading-[30px]  ">
                              Mor Çanta
                            </h2>
                            <h2 className="w-full h-fit font-inter  text-black text-[16px]  tracking-[-0.48]  leading-[30px]  ">
                              1000TL{" "}
                            </h2>
                          </div>
                          <h2 className="w-full h-fit font-inter  text-black text-[16px]  tracking-[-0.48]  leading-[30px]  ">
                            Renkler{" "}
                          </h2>
                        </div>
                      </div>
                      <div className=" relative w-full h-full flex flex-col items-center justify-center gap-[18px]">
                        <div className=" relative w-full h-full flex flex-col justify-center items-center gap-[10px]">
                          {/*     <Image src={profilePic} fill alt='232'/>
                           */}{" "}
                        </div>
                        <div className="relative w-full h-fit flex flex-col justify-start items-start gap-[5px]">
                          <div className="relative w-full h-fit flex flex-col justify-center items-start">
                            <h2 className="w-full h-fit font-inter  text-black text-[16px]  tracking-[-0.48]  leading-[30px]  ">
                              Mor Çanta
                            </h2>
                            <h2 className="w-full h-fit font-inter  text-black text-[16px]  tracking-[-0.48]  leading-[30px]  ">
                              1000TL{" "}
                            </h2>
                          </div>
                          <h2 className="w-full h-fit font-inter  text-black text-[16px]  tracking-[-0.48]  leading-[30px]  ">
                            Renkler{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className=" w-[250px] h-[60px] flex flex-row justify-center items-center gap-[10px]">
                      <Button className={`w-fit h-fit text-white text-[36px] `}>
                        {" "}
                        Tümünü Göster
                      </Button>
                    </div>
                  </div>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </li>
        </ul>
      </div>
       <div className="w-full h-fit flex flex-row justify-between items-center  gap-[10px]  py-[10px] border-b-[1px]  border-slate-400  ">
        <div className=" md:w-fit flex sm:w-fit h-fit   items-center justify-center ml-[20px] ">
          <div className=" w-full flex justify-start items-center ">
            <Link
              href={"/"}
              key={"/"}
              className={cn(
                "transition-colors hover:text-[#86c5dd] font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
                path === "/anasayfa"
                  ? " text-white dark:text-white"
                  : "text-muted-foreground text-white"
              )}
            >
              <h2
                className={` font-black text-[32px]   items-start justify-start tracking-[-0.32px]`}
              >
                Logo
              </h2>
            </Link>
          </div>
        </div>
        <div className=" max-lg:hidden w-full h-[40px] flex flex-row items-center justify-center  gap-[30px] ">

        <NavigationMenu className=" max-lg:hidden w-full h-full flex flex-row items-center justify-start  gap-[30px]  ">
              <NavigationMenuList className=" max-lg:hidden w-full h-full flex flex-row items-center justify-center  gap-[20px]  ">
          
        <NavigationMenuItem>
                  <div>
                    <Link
                      href={`/hakkimizda`}
                      key={`/hakkimizda`}
                      className={cn(
                        "transition-colors hover:text-[#86c5dd] font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
                        path === "/anasayfa"
                          ? " text-white dark:text-white"
                          : "text-muted-foreground text-white"
                      )}
                    >
                      <div
                        className={` md:w-fit h-full text-[16px]   flex items-center tracking-[-0.32px]   font-medium  `}
                      >
                        Hakkımızda
                      </div>
                    </Link>
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem>

                  <div>
                    <Link
                      href={`/danismanListesi`}
                      key={`/danismanListesi`}
                      className={cn(
                        "transition-colors hover:text-[#86c5dd] font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
                        path === "/anasayfa"
                          ? " text-white dark:text-white"
                          : "text-muted-foreground text-white"
                      )}
                    >
                      <div
                        className={` md:w-fit h-full text-[16px]   flex items-center tracking-[-0.32px]   font-medium `}
                      >
                        Danışman Listesi
                      </div>
                    </Link>
                  </div>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <div>
                    <Link
                      href={`/photogalery`}
                      key={`/photogalery`}
                      className={cn(
                        "transition-colors hover:text-[#86c5dd] font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
                        path === "/anasayfa"
                          ? " text-white dark:text-white"
                          : "text-muted-foreground text-white"
                      )}
                    >
                      <div
                        className={` md:w-fit w-[80px] h-fit  text-[16px]   flex items-center tracking-[-0.32px]   font-medium `}
                      >
                        Fotoğraf Galerimiz
                      </div>
                    </Link>
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <div>
                    <Link
                      href={`/iletisimClient`}
                      key={`/iletisimClient`}
                      className={cn(
                        "transition-colors hover:text-[#86c5dd] font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
                        path === "/anasayfa"
                          ? " text-white dark:text-white"
                          : "text-muted-foreground text-white"
                      )}
                    >
                      <div
                        className={` md:w-fit h-full text-[16px]   flex items-center tracking-[-0.32px]   font-medium `}
                      >
                        İletişim
                      </div>
                    </Link>
                  </div>
                </NavigationMenuItem>
                </NavigationMenuList>
                </NavigationMenu>
        </div>

        <div className=" w-fit h-full flex flex-row items-end justify-end gap-[20px] px-[10px]  ">
          <SearchComponen resulta={resulta} />
        </div>
      </div>
          <div className=" max-lg:hidden w-full h-full flex flex-row items-center justify-center  gap-[20px]  ">
            <NavigationMenu className=" max-lg:hidden w-full h-full flex flex-row items-center justify-center  gap-[20px]  ">
              <NavigationMenuList className=" max-lg:hidden w-full h-full flex flex-row items-center justify-center  gap-[20px]  ">
          
                {result.map((item, index) => (
                  <Select key={item.id} >
                    <SelectTrigger className={cn(
                      /* istediğimiz şey eğer ona tıkladığımızda götürdüğü ilan türü idsi pathle eşleşiyorsa  */
                      " w-[180px] transition-colors font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
               
                    )}>
                      <SelectValue />
                      <h2 className="text-black">

                      {item.ilantipiismi}
                      </h2>
                    </SelectTrigger>

                    <SelectContent>
                      <div>
                        {/* kategoriye sahip ürünlerin malzeme özellikleri  */}
                        <div className=" w-fit h-[400px] flex flex-row  ">
                          <div className="relative  w-[200px] h-[200px] flex flex-row justify-center items-center gap-{40px]">
                            <div className=" relative w-full h-full flex flex-col items-start justify-between gap-[10px] border-r">
                              <h2 className=" h-fit">İlan Türü</h2>
                              <Separator />
                              <div className=" h-full flex flex-col gap-[10px]">
                                {item.IlanTuru.map((a) => (
                                  <>
                                    <Link  href={`/${a.id}`}>
                                      <h2 className={cn(a.id == path.replace('/','') == true ?  " bg-black hover:text-white hover:duration-200 "  :" hover:bg-[#86c5dd] hover:text-white hover:duration-200 " )  } >
                                        {" "}
                                        {a.IlanTuruIsmi}{" "}
                                      </h2>
                                    </Link>

                               
                                  </>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SelectContent>
                  </Select>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
    </div>
  );
};

export default Navbar;
