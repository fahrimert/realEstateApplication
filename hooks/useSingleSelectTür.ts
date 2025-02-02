"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export const useSingleSelectTür = (initialValue: string[]) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )
     
      const [selectedForTür, setSelectedForTür] = useState<string[]>(initialValue);

      useEffect(() => {
        if (searchParams.has("ilanTürü")) {
        const valueFromSearchparams = searchParams.get("ilanTürü")
        setSelectedForTür([valueFromSearchparams!]);
    }

},[])
  
  const onChangeForTür = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedForTür.includes(value)  ) {
      setSelectedForTür([]);
      const nextSearchParams = new URLSearchParams(searchParams.toString())
      nextSearchParams.delete('ilanTürü')
      router.replace(`${pathname}?${nextSearchParams}`)    }
       else {
       
      setSelectedForTür([value]);
      router.push(pathname + '?' + createQueryString('ilanTürü', value))
    }
 
};
  const isSelectedForTür = (value: string) => {
    return selectedForTür.includes(value);
  };
  return { selectedForTür, isSelectedForTür, onChangeForTür };
};