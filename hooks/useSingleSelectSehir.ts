"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export const useSingleSelectsehir = (initialValue: string[]) => {
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
     
      const [selectedForsehir, setSelectedForsehir] = useState<string[]>(initialValue);

      useEffect(() => {
        if (searchParams.has("sehir")) {
        const valueFromSearchparams = searchParams.get("sehir")
        setSelectedForsehir([valueFromSearchparams!]);
    }

},[])
  
  const onChangeForsehir = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedForsehir.includes(value)  ) {
      setSelectedForsehir([]);
      const nextSearchParams = new URLSearchParams(searchParams.toString())
      nextSearchParams.delete('sehir')
      nextSearchParams.delete('ilce')
      router.replace(`${pathname}?${nextSearchParams}`)    }
       else {
       
      setSelectedForsehir([value]);
      router.push(pathname + '?' + createQueryString('sehir', value))
    }
 
};
  const isSelectedForsehir = (value: string) => {
    return selectedForsehir.includes(value);
  };
  return { selectedForsehir, isSelectedForsehir, onChangeForsehir };
};