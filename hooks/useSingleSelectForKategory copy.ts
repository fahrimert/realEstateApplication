"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export const useSingleSelectFormahalle = (initialValue: string[]) => {
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
     
      const [selectedFormahalle, setSelectedFormahalle] = useState<string[]>(initialValue);

  
  const onChangeFormahalle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedFormahalle.includes(value)  ) {
      setSelectedFormahalle([]);
      const nextSearchParams = new URLSearchParams(searchParams.toString())
      nextSearchParams.delete('mahalle')
      router.replace(`${pathname}?${nextSearchParams}`)    }
       else {
       
      setSelectedFormahalle([value]);
      router.push(pathname + '?' + createQueryString('mahalle', value))
    }
 
};
  const isSelectedFormahalle = (value: string) => {
    return selectedFormahalle.includes(value);
  };
  return { selectedFormahalle, isSelectedFormahalle, onChangeFormahalle };
};