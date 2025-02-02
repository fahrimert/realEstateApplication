"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export const useSingleSelectilce = (initialValue: string[]) => {
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
     
      const [selectedForilce, setSelectedForilce] = useState<string[]>(initialValue);

      useEffect(() => {
        if (searchParams.has("ilce")) {
        const valueFromSearchparams = searchParams.get("ilce")
        setSelectedForilce([valueFromSearchparams!]);
    }

},[])
  
  const onChangeForilce = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedForilce.includes(value)  ) {
      setSelectedForilce([]);
      const nextSearchParams = new URLSearchParams(searchParams.toString())
      nextSearchParams.delete('ilce')
      nextSearchParams.delete('mahalle')
      router.replace(`${pathname}?${nextSearchParams}`)    }
       else {
       
      setSelectedForilce([value]);
      router.push(pathname + '?' + createQueryString('ilce', value))
    }
 
};
  const isSelectedForilce = (value: string) => {
    return selectedForilce.includes(value);
  };
  return { selectedForilce, isSelectedForilce, onChangeForilce };
};