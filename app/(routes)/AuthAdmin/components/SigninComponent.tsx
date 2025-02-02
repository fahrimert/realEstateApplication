"use client";
import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Link from "next/link";
import { IoEyeOff,IoEye  } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { signin } from "@/actions/authActions/signin";
const SigninComponent = () => {
  const [state, action] = useFormState(signin, undefined);
  const [loginState, setLoginState] = useState<boolean>(true);

    
  useEffect(() => {
    if (loginState && state?.serverError) {
      toast.error(state?.serverError);
    }
  }, [state,loginState ]);

    const [visible,setVisible] = useState(true)
  return (
    <div className=" w-full h-fit flex flex-row justify-between items-center  bg-[#191919]>">
 

      <div className=" w-full h-screen flex flex-col justify-center items-center  bg-[#191919]   ">
        {
       
            <div className=" relative w-[550px] h-full flex flex-col justify-center items-center gap-[30px] p-[30px] bg-[#191919]  max-lg:items-center max-lg:bg-[#191919]">
            

              <h2 className={`w-fit h-fit text-[32px]   leading-[38px] text-white `}>
                 Admin Kısmına Giriş Yap
              </h2>
           
              <form
                className=" relative w-[550px] h-fit flex flex-col justify-center items-center   bg-[#191919] max-lg:items-center max-lg:bg-[#191919]"
                action={action}
              >
                <div className=" relative w-full h-fit flex flex-col justify-center items-start gap-[30px]  ">
                  <div className=" relative w-full h-fit flex flex-col justify-center items-start gap-[15px]">
                
                    <input

                    
className={cn( " relative w-full h-[40px] rounded-[10px] p-[12px] bg-[#1c1c1c] text-white  border-gray-400",    state?.errors?.email && "border-red-400 border-[1px]  ring-1 ring-red-400")   }
type="email"
                      name="email"
                      id="email"
                    />

{state?.errors?.email && (
  
                      <h2 
                      
                      
                      className=" w-full text-[#e92021] text-[12px]  ring-[#cd3e2f] rounded-[10px] animate-fade-down animate-ease-in-out animate-normal animate-duration-[400ms]  ">
                        {state.errors.email}
                      </h2>
                    )}

           <div className="w-full h-fit flex flex-row">

                    <input
className={cn( " relative w-full h-[40px] rounded-[10px] p-[12px] text-white bg-[#1c1c1c]  border-gray-400",    state?.errors?.password && "border-red-400 border-[1px]  ring-1 ring-red-400")   }
type= {visible  ? "password" : "text" } 
                      name="password"
                      id="password"
                    />

                    <div className="w-fit h-full  flex items-center justify-center ">
                      {visible ? 
                      
                      <IoEyeOff className="transition-all cursor-pointer"  color= "white" size={30} onClick={() => setVisible(!visible)}/>
                    : 
                    <IoEye className="transition-all cursor-pointer" color= "white"  size={30} onClick={() => setVisible(!visible)}/>

                    }
                    </div>
           </div>

                <div className="w-full h-fit flex flex-row">


                    {state?.errors?.password &&
                      state?.errors?.password.map((b,index) => (

                        <h2 key={index} 
                      className=" w-fit text-[#e92021] text-[12px]  ring-[#cd3e2f] rounded-[10px] animate-fade-down animate-ease-in-out animate-normal animate-duration-[400ms]  ">
                        
                            {b}
                        </h2>

                      ))}
                </div>
                      
                        </div>


                  <div className="relative w-full h-fit flex flex-col justify-center items-center gap-[10px]">
                    <button
                      type="submit"
                      className="relative w-[70%] h-[40px] text-[14px] leading-[14px] bg-[#191919] border-[#3a3a3a] border-[1px] rounded-[20px] hover:bg-opacity-90 hover:bg-red-400 transition-all hover:text-white "
                    >
                      <h2 className=" flex items-center justify-center text-[#757375] hover:text-white transition-all w-full h-full ">Giriş Yapın </h2>
                    </button>
                  </div>
                </div>
              </form>
          
            </div>
         }
      </div>
    </div>
  );
};

export default SigninComponent;
