"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export const useSingleSelectForKategory = (initialValue: string[]) => {
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
     
      const [selectedForKategory, setSelectedForKategory] = useState<string[]>(initialValue);

  
  const onChangeForKategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedForKategory.includes(value)  ) {
      setSelectedForKategory([]);
      const nextSearchParams = new URLSearchParams(searchParams.toString())
      nextSearchParams.delete('ilanKategory')
      router.replace(`${pathname}?${nextSearchParams}`)    }
       else {
       
      setSelectedForKategory([value]);
      router.push(pathname + '?' + createQueryString('ilanKategory', value))
    }
 
};
  const isSelectedForKategory = (value: string) => {
    return selectedForKategory.includes(value);
  };
  return { selectedForKategory, isSelectedForKategory, onChangeForKategory };
};