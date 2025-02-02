"use client";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { IoEyeOff,IoEye  } from "react-icons/io5";

import { cn } from "@/lib/utils";
import { register } from "@/actions/authActions/register";
const RegisterComponent = () => {
    const [stateRegister, actionRegister] = useFormState(register, undefined);
  
      const [visibleForRegister,setVisibleForRegister] = useState(true)
  useEffect(() => {
   
    if (stateRegister?.serverErrorForRegister) {
      toast.error(stateRegister?.serverErrorForRegister);
    }
    if ( stateRegister?.serverSuccessw) {
      toast.success(stateRegister?.serverSuccessw);
    }
  }, [stateRegister]);
  return (
    <div className=" h-[500px] flex flex-row  items-center  bg-[#191919]  rounded-[30px] w-[450px] justify-center ">
  

    <div className=" w-fit h-fit  flex flex-col justify-center items-center  bg-[#191919]   ">
     
 

        <div className=" relative w-fit h-full flex flex-col justify-center  gap-[30px] py-[30px] items-center bg-[#191919]  rounded-[30px]  ">
        <h2 className=" w-fit h-fit text-[32px] leading-[38px] text-white ">
            Danışman Ekleyin 
          </h2>
          <form
            action={actionRegister}
            className=" relative w-fit h-fit flex flex-col justify-center   bg-[#191919] items-center max-xl:p-0 "
          >
            <div className=" relative w-full h-fit flex flex-col justify-center items-start gap-[15px]  ">

              <input
              className={cn( " relative w-full h-[40px] rounded-[10px] p-[12px] bg-[#1c1c1c]  border-gray-400  text-white",    stateRegister?.errors?.password && "border-red-400 border-[1px]  ring-1 ring-red-400")   }

                type="email"
                name="email"
                id="email"
                placeholder="Danışman email"
                />

     

              {stateRegister?.errors?.email && (
                <h2 className=" w-full  ring-[#cd3e2f] rounded-[10px] animate-fade-down animate-ease-in-out animate-normal animate-duration-[400ms] text-red-400  ">
                  {stateRegister.errors.email}
                </h2>
              )}

              <input
              
              className={cn( " relative w-full h-[40px] rounded-[10px] p-[12px] bg-[#1c1c1c]  border-gray-400  text-white ",    stateRegister?.errors?.password && "border-red-400 border-[1px]  ring-1 ring-red-400")   }
          
          
                name="name"
                id="name"
                placeholder="Danışman İsim"
              />
              {stateRegister?.errors?.name && (
                <h2  className=" w-full  ring-[#cd3e2f] rounded-[10px] animate-fade-down animate-ease-in-out animate-normal animate-duration-[400ms] text-red-400  ">
                  {stateRegister.errors.name}
                </h2>
              )}
    
            
       
               <div className="w-full h-full  flex items-center justify-center ">
               <input
              className={cn( " relative w-full h-[40px] rounded-[10px] p-[12px] bg-[#1c1c1c]  border-gray-400 text-white",    stateRegister?.errors?.password && "border-red-400 border-[1px]  ring-1 ring-red-400")   }

                
               
                type= {visibleForRegister ? "password" : "text"} 
                name="password"
                id="password"
                placeholder="Danışman Şifre"
              />
                    {visibleForRegister ? 
                    
                    <IoEyeOff className="transition-all cursor-pointer"  color= "white" size={30} onClick={() => setVisibleForRegister(!visibleForRegister)}/>
                  : 
                  <IoEye className="transition-all cursor-pointer" color= "white"  size={30} onClick={() => setVisibleForRegister(!visibleForRegister)}/>

                  }
                  </div>
    
              <div className="w-full h-full flex flex-row">

              {stateRegister?.errors?.password &&
                stateRegister?.errors?.password.map((b,index) => (
                  <h2 key={index} className=" w-fit h-fit  text-[12px] text-red-400 ring-[#cd3e2f] rounded-[10px] animate-fade-down animate-ease-in-out animate-normal animate-duration-[400ms]  ">
                    {b}
                  </h2>
                ))}
              </div>

              <div className="relative w-full h-fit flex flex-col justify-center items-center gap-[10px]">
                <button
                  type="submit"
                  className="relative w-full h-[40px] text-[14px] leading-[14px] bg-[#191919] border-[#3a3a3a] border-[1px] rounded-[20px] hover:bg-opacity-90 hover:bg-red-400 transition-all hover:text-white max-xl:w-full "

                >
                    <h2 className=" flex items-center justify-center text-[#757375] hover:text-white transition-all w-full h-full ">Danışman Ekle</h2>
                    </button>
              </div>
            </div>

        
          </form>
        </div>


    </div>
  </div>
  )
}

export default RegisterComponent