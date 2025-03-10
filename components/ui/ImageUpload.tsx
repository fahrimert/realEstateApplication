
"use client"

import { useEffect, useState } from "react";
import { Button } from "./button";
import { CloudUploadIcon, ImagePlus, Trash } from "lucide-react";
import Image from "next/image";
import {CldUploadWidget } from 'next-cloudinary'

interface ImageUploadProps {
    disabled? : boolean;
    value : string[] | null
    onChange : (value:string) => void
    onRemove : (value:string) => void
}
 
const İmageUpload:React.FC<ImageUploadProps> = (
    { disabled,
      onChange,
      onRemove,
      value
    }
) => {
    

    
    const onUpload = (result:any) => {
        onChange(result.info.secure_url)
    }

    return (
    <div>
        <div className="mb-4 flex items-center gap-4">
            {value?.map((url) =>(
                <div key={url} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
                    <div className="z-10 absolute op-2 right-2">
                        <Button type="button" onClick={() => onRemove(url)} variant="destructive" size="icon">
                            <Trash className="h-4 w-4"></Trash>
                        </Button>
                    </div>
                    <Image fill className="object-cover" alt="Image" src={url}/>
                </div>
            ))}

        </div>
        <CldUploadWidget  onUpload = {onUpload} uploadPreset="xvxjlayy">
            {({open}) => {
                const onClick = () => {
                    open()
                }
                return(
                     <Button 
                     type="button"
                     disabled = {disabled}
                     variant="secondary"
                     onClick={onClick}>
                        <ImagePlus className="h-4 w-4 mr-2 "/>
                        Upload An Image
                    </Button>
                )
            }}
        </CldUploadWidget>
    </div>
  )
}

export default İmageUpload