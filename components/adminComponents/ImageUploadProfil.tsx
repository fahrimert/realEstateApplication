"use client"

import {ImagePlus } from "lucide-react";
import Image from "next/image";
import {CldUploadWidget } from 'next-cloudinary'
import { Button } from "@/components/ui/button";
import boş from '../../public/bilinmeyen.png'

interface ImageUploadProps {
    disabled? : boolean;
    onChange : (value:string) => void
     value : string
 } 
 
const ImageUploadProfil:React.FC<ImageUploadProps> = (
    { disabled,
      onChange,
      value
    }
) => {  
    const onUpload = (result:any) => {
        onChange(result.info.secure_url)
    }
  
    return (
    <div>
        <div className="mb-4 flex items-center gap-4">
                <div key={value} className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
                    
                    <Image fill className="object-cover" alt="Image" src={value ? value : boş}/>
                </div>

        </div>
        <CldUploadWidget onUpload = {onUpload} uploadPreset="xvxjlayy">
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
                       Profil Fotoğrafı Ekle
                    </Button>
                )
            }}
        </CldUploadWidget>
    </div>
  )
}

export default ImageUploadProfil