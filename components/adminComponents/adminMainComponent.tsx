
import prismadb from "@/lib/db";
import { getJustSession } from "@/helpers/get-user-session";
import { ChartComponent } from "./ChartComponent";
import BarChart from "./LineChart";
import { cn } from "@/lib/utils";

const Main = async() => {
  const danısmanlar = await prismadb.user.findMany({
    where:{
      role:'DANISMAN'
    }
    ,
    include:{
      Ilanlar:{
        include:{
          IlanTuru:true
        }
      }
    }
  })
  const session = await getJustSession()
  const usera = await prismadb.user.findUnique({
    where:{
      id:session?.id,
    },
    include:{
      Ilanlar:{
        include:{
          IlanTuru:true
        }
      }
    }
  }) 
  
  const ilanlar = await prismadb.ilan.findMany({
  })

  return (
    <>
      {/* Main */}
      <div className={cn(`relative w-full h-full flex ${usera?.role == "ADMIN" ? "flex-col" : "flex-row "} items-start  justify-center  gap-[24px] p-0 `)}  >
   {/* bu kısımda kafamda grafikler var tek tek eklenecek türlere göre onların sayılarıyla circle grafiği koyarız o kadar maksat onlara ne eklenmiş  */}
       
       {usera?.role == "ADMIN" ?  
  
          <div className="relative w-full h-fit flex flex-col justify-between items-center  bg-[#050505] p-[20px] gap-[20px] rounded-[30px] ">
            <h2 className="w-full h-fit flex justify-start items-center text-white text-[24px]  border-b-[1px]">Danışmanlar Ve İlan Türleri Grafiği </h2>
          <div className="w-full h-fit grid grid-cols-2 justify-around">

            {danısmanlar.map((a,c) => (

            <div className="w-full h-fit flex flex-col" key={c}>
            <div className=" w-full h-fit">
              <h2 className="text-white">{a.name} Adlı Danışman Ve ilan Türü Grafiği</h2>

            </div>
            <div className="w-fit h-fit flex p-[20px] items-center justify-start ">
            {a.Ilanlar.length !== 0 ? 
               <div className=" w-[200px] h-[200px] flex flex-row ">

                 <ChartComponent a={a} />
               </div>
               
               : 
               <h2 className="w-full h-full flex justify-center items-center text-white rounded-[30px] bg-[#14213f]"> Henüz Bir İlanı Yok Danışmanın</h2> }
           
            </div>
            </div>
            )
           )}
         
          </div>
            
          
          </div>
          : null}
       
       {usera?.role == "DANISMAN" ?  
  
          <div className="relative w-full h-fit flex flex-col justify-between items-center  bg-[#050505] p-[20px] gap-[20px] rounded-[30px] ">
            <h2 className="w-full flex justify-start items-center text-white text-[24px]  border-b-[1px]">Danışmanlar Ve İlan Türleri Grafiği </h2>
          <div className="w-full h-fit justify-around">


            <div className="w-full h-fit flex flex-col">
            <div className=" w-full h-fit">
              <h2 className="text-white">Koyduğunuz İlanların İlan Türlerine Göre Tablosu</h2>

            </div>
            <div className="w-full h-[300px] flex p-[20px] items-center justify-start ">
            {usera.Ilanlar.length !== 0 ? 
               <div className=" w-full h-[300px] flex flex-row ">

                 <ChartComponent a={usera} />
               </div>
               
               : 
               <h2 className="w-full h-full flex justify-center items-center text-white rounded-[30px] bg-[#14213f]"> Henüz Bir İlanı Yok Danışmanın</h2> }
           
            </div>
            </div>
         
          </div>
            
          
          </div>
          : null}
          {usera?.role == "DANISMAN" ? 
            <div className=" bg-[#050505] w-full h-full flex justify-center items-center rounded-[20px] p-[20px] ">
            <BarChart ilanlar = {usera?.Ilanlar}/>
            </div>
     :   
     <div className=" bg-[#050505] w-full h-full flex justify-center items-center rounded-[20px] p-[20px] ">
     <BarChart ilanlar = {ilanlar}/>
     </div>
        }
        
        </div> 
    </>
  );
};

export default Main;
