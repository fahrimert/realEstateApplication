"use client";
import React from "react";
import {
  MdAddBox,
  MdPersonAdd,
} from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RiDashboardHorizontalFill, RiProfileFill } from "react-icons/ri";

interface UserProps{
  user: {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
    password: string | null;
    role: "ADMIN" | "DANISMAN";
    createdAt: Date;
    updatedAt: Date;
} | null
}
const Sidebar:React.FC<UserProps> = ({user}) => {
  const path = usePathname();
  
  return (  
    <>
          <Sheet  >
                <SheetTrigger className=" w-fit h-fit px-[20px] pb-[20px] pt-[40px] visible  xl:hidden bg-[#050505]  ">
                  <RiDashboardHorizontalFill size={40} color="white" />
                </SheetTrigger>
                <SheetContent side={"left"} className="bg-[#05050a]">
             
    <div className="relative w-full h-full flex flex-col  gap-[20px] items-start  overflow-hidden  bg-[#050505] border-r-[1px] border-slate-400  ">
     
     <Link
            href={"/admin/adminDashboard"}
            className={cn(
              "w-full transition-colors cursor-pointer hover:scale-110 hover:p-[10px] hover:mx-[10px] hover:duration-500 hover:text-[#A9FFF7] bg-[#050505]   hover:transition-all  font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
  
              path === "/admin/adminDashboard"
                ? " text-white  "
                : "text-muted-foreground"
            )}
          >
            
      <h2 className=" w-full h-fit bg-[#050505]  text-[24px] text-white"> Ahmet Emlakçılık</h2>
          </Link>
     
      {user?.role === "ADMIN"  ?  
          <div className="relative  w-full h-fit flex flex-col items-start gap-[15px]  bg-[#050505]  ">
          <div className="relative  w-fit h-fit flex flex-row justify-center items-start gap-[10px] p-0 hover:transition-all hover:duration-400">
    
            <h2   className={cn(
              "w-full transition-colors cursor-pointer  hover:text-[#A9FFF7] bg-[#050505] hover:border-b-[1px]  hover:border-slate-400 hover:transition-all  font-satoshi font-[24px ] text-[18px]  font-medium spacing tracking-[-0.32px]",
  
              path === "/admin/adminDashboard"
                ? " text-white dark:text-white bg-[#050505] "
                : "text-muted-foreground"
            )}>
              İlan Kategori Yönetimi
            </h2>
          </div>
  
          <Link
            href={"/admin/kategoriler"}
            className={cn(
              "w-full transition-colors cursor-pointer hover:scale-110 hover:p-[10px] hover:mx-[10px] hover:duration-500 hover:text-[#A9FFF7] bg-[#050505]   hover:transition-all  font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
  
              path === "/admin/kategoriler"
                ? " text-white  "
                : "text-muted-foreground"
            )}
          >
            
          </Link>
  
          <Link
            href={"/admin/kategoriler/add"}
            className={cn(
              "w-full transition-colors cursor-pointer hover:scale-110 hover:p-[10px]  hover:mx-[10px] hover:duration-500 hover:text-[#A9FFF7] bg-[#050505]   hover:transition-all  font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
  
              path === "/admin/kategoriler/add"
                ? "  dark:text-white  text-white "
                : "text-muted-foreground"
            )}
          >
            <div className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0 ">
              <h2 className="relative w-fit h-fit items-center">
                <MdAddBox width={60} height={60} />
              </h2>
              <h2 className="relative w-full h-full items-center max-md:hidden">
                {" "}
                İlan Tipi Menüsü
              </h2>
            </div>
          </Link>
        
  
          <Link
            href={"/admin/adminilantur/add"}
            className={cn(
              "w-full transition-colors cursor-pointer hover:scale-110 hover:p-[10px] hover:mx-[10px] hover:duration-500  hover:text-[#A9FFF7] bg-[#050505]   hover:transition-all  font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
  
              path === "/admin/ilanTürü/add"
                ? " text-white dark:text-white  "
                : "text-muted-foreground"
            )}
          >
            <div className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0 ">
              <h2 className="relative w-fit h-fit items-center">
                <MdAddBox width={60} height={60} />
              </h2>
              <h2 className="relative w-full h-full items-center max-md:hidden">
                {" "}
                İlan Türü Menüsü
              </h2>
            </div>
          </Link>
  
        </div>
      
      : null}
  
        {user?.role === "ADMIN" ?    <div className="relative  w-full h-fit flex flex-col items-start gap-[15px] p-0 bg-[#050505]  ">
        <div className="relative  w-fit h-fit flex flex-row justify-center items-start gap-[10px] p-0   hover:transition-all hover:duration-400">
         
          <h2 className=              "w-full transition-colors cursor-pointer text-white  hover:text-[#A9FFF7] bg-[#050505] hover:border-b-[1px]  hover:border-slate-400 hover:transition-all  font-satoshi font-[24px ] text-[18px]  font-medium spacing tracking-[-0.32px]"          >
            Danışman Yönetimi
          </h2>
        </div>

        <Link
          className={cn(
            "w-full transition-colors     font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",

            path === "/admin/danismanlarim/add"
              ? " text-white   "
              : "text-muted-foreground"
          )}
          href={"/admin/danismanlarim/add"}
        >
          <div className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0   hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
            <h2 className="relative w-fit h-fit items-center">
              <MdPersonAdd width={60} height={60} />
            </h2>
            <h2 className="w-full  hover:text-[#A9FFF7]     font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">

              {" "}
              Danışman Menüsü
            </h2>
          </div>
        </Link>
      </div> : null}
    
      <div className="relative  w-full h-fit flex flex-col items-start gap-[15px] p-0   ">
     
          <div className="relative  w-fit h-fit flex flex-row justify-center items-start gap-[10px] p-0 ">
          
            <h2 className=              "w-full transition-colors cursor-pointer text-white  hover:text-[#A9FFF7] bg-[#050505] hover:border-b-[1px]  hover:border-slate-400 hover:transition-all  font-satoshi font-[24px ] text-[18px]  font-medium spacing tracking-[-0.32px]"    >
              İlan Yönetimi
            </h2>
          </div>
        <Link
          href={"/admin/ilanDashboard/add"}
          className={cn(
            "w-full transition-colors    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",

            path === "/admin/ilanDashboard/add"
              ? " text-white "
              : "text-muted-foreground"
          )}
        >
          <div className="relative  w-fit h-fit flex flex-row justify-center  items-center gap-[10px] p-0  hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
            <h2 className="relative items-center">
              <IoIosAdd width={60} height={60} />
            </h2>
            <h2 className="w-full  hover:text-[#A9FFF7] bg-[#050505]    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">
              {" "}
              İlan Ekle
            </h2>
          </div>
        </Link>

      </div>
      {user?.role === "ADMIN" ?       <div className="relative  w-full h-fit flex flex-col items-start gap-[15px] p-0 bg-[#050505]  ">
        <h2 className=              "w-full transition-colors cursor-pointer text-white  hover:text-[#A9FFF7] bg-[#050505] hover:border-b-[1px]  hover:border-slate-400 hover:transition-all  font-satoshi font-[24px ] text-[18px]  font-medium spacing tracking-[-0.32px]" >
          Site Ayarları
        </h2>

        <Link
          href={"/admin/slogan/add"}
          className={cn(
            "w-full transition-colors    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",

            path === "/admin/slogan/add"
              ? " text-white  "
              : "text-muted-foreground"
          )}
        >
          <div  className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0   hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
            <h2 className="relative w-fit h-fit items-center">
              <IoIosAddCircle width={60} height={60} />
            </h2>
            <h2 className="w-full  hover:text-[#A9FFF7] bg-[#050505]    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">
              Sloganınızı Ekleyin
            </h2>
          </div>
        </Link>
    
        <Link
          href={"/admin/iletisim/new"}
          className={cn(
            "w-full transition-colors    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",

            path === "/admin/iletisim/new"
              ? " text-white  "
              : "text-muted-foreground"
          )}
        >
          <div  className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0   hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
            <h2 className="relative w-fit h-fit items-center">
              <IoIosAddCircle width={60} height={60} />
            </h2>
            <h2 className="w-full  hover:text-[#A9FFF7] bg-[#050505]    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">
              İletişim Bilginizi Ekleyin
            </h2>
          </div>
        </Link>
        <Link
          href={"/admin/photoGaleryAdmin/new"}
          className={cn(
            "w-full transition-colors    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",

            path === "/admin/photoGaleryAdmin/new"
              ? " text-white  "
              : "text-muted-foreground"
          )}
        >
          <div  className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0   hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
            <h2 className="relative w-fit h-fit items-center">
              <IoIosAddCircle width={60} height={60} />
            </h2>
            <h2 className="w-full  hover:text-[#A9FFF7] bg-[#14213f]    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">
              Fotoğraf Galerisi Ekleyin
            </h2>
          </div>
        </Link>

   
      </div>
 : null } 
 
    
    </div>
                </SheetContent>
              </Sheet>
    
    <div className="relative w-[20%] h-fit flex flex-col  gap-[20px] items-start  overflow-hidden  bg-[#050505] border-r-[1px] border-slate-400 max-xl:hidden  p-[30px]   ">
     
     <Link
            href={"/admin/adminDashboard"}
            className={cn(
              "w-full transition-colors cursor-pointer hover:duration-500 hover:text-[#A9FFF7] bg-[#14213f]   hover:transition-all  font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
  
              path === "/admin/adminDashboard"
                ? " text-white  "
                : "text-muted-foreground"
            )}
          >
            
      <h2 className=" bg-[#050505] w-full h-fit text-[32px] text-white max-[1500px]:text-[12px]"> Ahmet Emlakçılık</h2>
          </Link>
     
   
          <div className="relative  w-full h-fit flex flex-col items-start gap-[15px]  bg-[#050505]  ">
          <div className="relative  w-fit h-fit flex flex-row justify-center items-start gap-[10px] p-0 hover:transition-all hover:duration-400">
    
            <h2   className={cn(
              "w-full transition-colors cursor-pointer  hover:text-[#A9FFF7] bg-[#050505] hover:border-b-[1px]  hover:border-slate-400 hover:transition-all  font-satoshi font-[24px ] text-[18px]  font-medium spacing tracking-[-0.32px]",
  
              path === "/admin/adminDashboard"
                ? " text-white dark:text-white bg-[#050505] "
                : "text-muted-foreground"
            )}>
              İlan Kategori Yönetimi
            </h2>
          </div>
  
          <Link
            href={"/admin/kategoriler"}
            className={cn(
              "w-full transition-colors cursor-pointer hover:scale-110 hover:p-[10px] hover:mx-[10px] hover:duration-500 hover:text-[#A9FFF7] bg-[#050505]   hover:transition-all  font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
  
              path === "/admin/kategoriler"
                ? " text-white  "
                : "text-muted-foreground"
            )}
          >
            
          </Link>
  
          <Link
            href={"/admin/kategoriler/add"}
            className={cn(
              "w-full transition-colors cursor-pointer hover:scale-110 hover:p-[10px]  hover:mx-[10px] hover:duration-500 hover:text-[#A9FFF7] bg-[#050505]   hover:transition-all  font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
  
              path === "/admin/kategoriler/add"
                ? "  dark:text-white  text-white "
                : "text-muted-foreground"
            )}
          >
            <div className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0 ">
              <h2 className="relative w-fit h-fit items-center">
                <MdAddBox width={60} height={60} />
              </h2>
              <h2 className="relative w-full h-full items-center max-md:hidden">
                {" "}
                İlan Tipi Menüsü
              </h2>
            </div>
          </Link>
        
  
          <Link
            href={"/admin/adminilantur/add"}
            className={cn(
              "w-full transition-colors cursor-pointer hover:scale-110 hover:p-[10px] hover:mx-[10px] hover:duration-500  hover:text-[#A9FFF7] bg-[#050505]   hover:transition-all  font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
  
              path === "/admin/ilanTürü/add"
                ? " text-white dark:text-white  "
                : "text-muted-foreground"
            )}
          >
            <div className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0 ">
              <h2 className="relative w-fit h-fit items-center">
                <MdAddBox width={60} height={60} />
              </h2>
              <h2 className="relative w-full h-full items-center max-md:hidden">
                {" "}
                İlan Türü Menüsü
              </h2>
            </div>
          </Link>
  
        </div>
      
    
  
        {user?.role === "ADMIN" ?    <div className="relative  w-full h-fit flex flex-col items-start gap-[15px] p-0 bg-[#050505]  ">
        <div className="relative  w-fit h-fit flex flex-row justify-center items-start gap-[10px] p-0   hover:transition-all hover:duration-400">
         
          <h2 className=              "w-full transition-colors cursor-pointer text-muted-foreground  hover:text-[#A9FFF7] bg-[#050505] hover:border-b-[1px]  hover:border-slate-400 hover:transition-all  font-satoshi font-[24px ] text-[18px]  font-medium spacing tracking-[-0.32px]"          >
            Danışman Yönetimi
          </h2>
        </div>

        <Link
          className={cn(
            "w-full transition-colors     font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",

            path === "/admin/danismanlarim/add"
              ? " text-white   "
              : "text-muted-foreground"
          )}
          href={"/admin/danismanlarim/add"}
        >
          <div className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0   hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
            <h2 className="relative w-fit h-fit items-center">
              <MdPersonAdd width={60} height={60} />
            </h2>
            <h2 className="w-full  hover:text-[#A9FFF7]     font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">

              {" "}
              Danışman Menüsü
            </h2>
          </div>
        </Link>
      </div> : null}
    
      <div className="relative  w-full h-fit flex flex-col items-start gap-[15px] p-0   ">
     
          <div className="relative  w-fit h-fit flex flex-row justify-center items-start gap-[10px] p-0 ">
          
            <h2 className=              "w-full transition-colors cursor-pointer text-muted-foreground  hover:text-[#A9FFF7] bg-[#050505] hover:border-b-[1px]  hover:border-slate-400 hover:transition-all  font-satoshi font-[24px ] text-[18px]  font-medium spacing tracking-[-0.32px]"    >
              İlan Yönetimi
            </h2>
          </div>
        <Link
          href={"/admin/ilanDashboard/add"}
          className={cn(
            "w-full transition-colors    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",

            path === "/admin/ilanDashboard/add"
              ? " text-white "
              : "text-muted-foreground"
          )}
        >
          <div className="relative  w-fit h-fit flex flex-row justify-center  items-center gap-[10px] p-0  hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
            <h2 className="relative items-center">
              <IoIosAdd width={60} height={60} />
            </h2>
            <h2 className="w-full  hover:text-[#A9FFF7] bg-[#050505]    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">
              {" "}
              İlan Ekle
            </h2>
          </div>
        </Link>
        {user?.role == "DANISMAN" &&
              <Link
              href={"/admin/ilanDashboard"}
              className={cn(
                "w-full transition-colors    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",
    
                path === "/admin/ilanDashboard"
                  ? " text-white "
                  : "text-muted-foreground"
              )}
            >
              <div className="relative  w-fit h-fit flex flex-row justify-center  items-center gap-[10px] p-0  hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
                <h2 className="relative items-center">
                  <IoIosAdd width={60} height={60} />
                </h2>
                <h2 className="w-full  hover:text-[#A9FFF7] bg-[#050505]    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">
                  {" "}
                  İlan Menüsü
                </h2>
              </div>
            </Link> }
  

      </div>
      <div className="relative  w-full h-fit flex flex-col items-start gap-[15px] p-0   ">
     
          <div className="relative  w-fit h-fit flex flex-row justify-center items-start gap-[10px] p-0 ">
          
            <h2 className=              "w-full transition-colors cursor-pointer text-muted-foreground  hover:text-[#A9FFF7] bg-[#050505] hover:border-b-[1px]  hover:border-slate-400 hover:transition-all  font-satoshi font-[24px ] text-[18px]  font-medium spacing tracking-[-0.32px]"    >
              Profil Yönetimi
            </h2>
          </div>
        <Link
          href={"/admin/profile"}
          className={cn(
            "w-full transition-colors    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",

            path === "/admin/profile"
              ? " text-white "
              : "text-muted-foreground"
          )}
        >
          <div className="relative  w-fit h-fit flex flex-row justify-center  items-center gap-[10px] p-0  hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
            <h2 className="relative items-center">
              <RiProfileFill width={60} height={60} />
            </h2>
            <h2 className="w-full  hover:text-[#A9FFF7] bg-[#050505]    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">
              {" "}
              Profiliniz
            </h2>
          </div>
        </Link>
   

      </div>
      {user?.role === "ADMIN" ?       <div className="relative  w-full h-fit flex flex-col items-start gap-[15px] p-0 bg-[#050505]  ">
        <h2 className=              "w-full transition-colors cursor-pointer text-muted-foreground  hover:text-[#A9FFF7] bg-[#050505] hover:border-b-[1px]  hover:border-slate-400 hover:transition-all  font-satoshi font-[24px ] text-[18px]  font-medium spacing tracking-[-0.32px]" >
          Site Ayarları
        </h2>

        <Link
          href={"/admin/slogan/add"}
          className={cn(
            "w-full transition-colors    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",

            path === "/admin/slogan/add"
              ? " text-white  "
              : "text-muted-foreground"
          )}
        >
          <div  className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0   hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
            <h2 className="relative w-fit h-fit items-center">
              <IoIosAddCircle width={60} height={60} />
            </h2>
            <h2 className="w-full  hover:text-[#A9FFF7] bg-[#050505]    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">
              Sloganınızı Ekleyin
            </h2>
          </div>
        </Link>
     
        <Link
          href={"/admin/iletisim/new"}
          className={cn(
            "w-full transition-colors    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",

            path === "/admin/iletisim/new"
              ? " text-white  "
              : "text-muted-foreground"
          )}
        >
          <div  className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0   hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
            <h2 className="relative w-fit h-fit items-center">
              <IoIosAddCircle width={60} height={60} />
            </h2>
            <h2 className="w-full  hover:text-[#A9FFF7] bg-[#050505]    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">
              İletişim Bilginizi Ekleyin
            </h2>
          </div>
        </Link>
        <Link
          href={"/admin/photoGaleryAdmin/new"}
          className={cn(
            "w-full transition-colors    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]",

            path === "/admin/photoGaleryAdmin/new"
              ? " text-white  "
              : "text-muted-foreground"
          )}
        >
          <div  className="relative  w-fit h-fit flex flex-row justify-center items-center gap-[10px] p-0   hover:scale-110 hover:p-[10px] hover:mx-[10px]  hover:transition-all  transition-colors cursor-pointer hover:duration-500">
            <h2 className="relative w-fit h-fit items-center">
              <IoIosAddCircle width={60} height={60} />
            </h2>
            <h2 className="w-full  hover:text-[#A9FFF7] bg-[#050505]    font-satoshi font-[16px ]  font-medium spacing tracking-[-0.32px]">
              Fotoğraf Galerisi Ekleyin
            </h2>
          </div>
        </Link>

   
      </div>
 : null } 
 
    
    </div>
    </>
  );
};

export default Sidebar;
