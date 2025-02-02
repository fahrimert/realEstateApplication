"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {  useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {  z } from "zod";
import toast, { Toaster } from 'react-hot-toast';
import { updateSingleCategory } from "@/actions/adminActions/categoryActions/update-category";
import { createCategory } from "@/actions/adminActions/categoryActions/create-category";


interface CategoryFormProps {
  initialData: ({
    IlanTuru: ({
        id: string;
        IlanTuruIsmi: string;
        IlanTipiId: string;
        createdAt: Date;
        updatedAt: Date;
    })[];
} & {
    id: string;
    ilantipiismi: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}) | null,




}   
  
    
const formSchema = z.object({
  ilantipiismi: z.string().min(3, {
    message: "İlan Tipi En az 3 karakter olmalıdır ",
  }),


});

export type CategoryFormValues = z.infer<typeof formSchema>;

const CategoryForm: React.FC<CategoryFormProps> = ({ initialData }) => {

  const params = useParams();
  const action = initialData ? "Değişiklikleri Kaydet" : "Yarat ";
  const [loading, setLoading] = useState(false);

  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData?   
       {
          ...initialData,
        }
      : {
        ilantipiismi: "",

        },
  });
  const { setError, formState: { errors } } = useForm<CategoryFormValues>();

  const onSubmit = async (data: CategoryFormValues) => {
      try {
      if (initialData) {
        updateSingleCategory(data, params.id);
      }
      else {
        
     createCategory(data);
     if (errors) {
      setError('ilantipiismi', {
        type: "server",
        message: ' Aynı İsimde Bir Başka İlan Tipi Var Zaten',
      });
      toast.error('Aynı İsimde Bir Başka İlan Tipi Var Zaten, İlan Tipi İsmini Değiştiriniz',{duration:3000});

    }
      }
    } catch (error) {
      console.log(errors)
    } 
  };
  return (
    <>
  
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full p-[20px]"
        >
          <div className=" w-fit ">
            <FormField
              control={form.control}
              name="ilantipiismi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white w-full"> İlan Tipi Ekle</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="İlan Tipinin İsmi"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button  variant={"secondary"}  disabled={loading} className=" border-[2px] rounded-xl border-[#8be8cb] text-black h-[35px]" type="submit">
            {action}
          </Button>
        </form>
        <Toaster />

      </Form>
    </>
  );
};

export default CategoryForm;
