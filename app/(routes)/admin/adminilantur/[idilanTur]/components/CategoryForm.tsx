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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast, { Toaster } from "react-hot-toast";
import { updateSingleCategory } from "@/actions/adminActions/categoryActions/update-category";
import { createCategory } from "@/actions/adminActions/categoryActions/create-category";
import { createIlanTuru } from "@/actions/adminActions/ilanTürüActions/create-ilan-turu";
import { updateİlanTürü } from "@/actions/adminActions/update-ilan-türü";

interface CategoryFormProps {
  initialData: {
    id: string;
    IlanTuruIsmi: string;
    IlanTipiId: string;
    createdAt: Date;
    updatedAt: Date;
  }|  null

  ilanCategories: {
    id: string;
    ilantipiismi: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
  }[];
}

const formSchema = z.object({
  IlanTipiId: z.string().min(2,{
    message: "İlan tipi seçmek zorunludur ",
  }),
  IlanTuruIsmi: z.string().min(3, {
    message: "İlan türünün ismi en az 3 karakter olmalıdır ",
  }),
});

export type CategoryFormValuesas = z.infer<typeof formSchema>;

const CategoryForm: React.FC<CategoryFormProps> = ({
  initialData,
  ilanCategories,
}) => {
  const params = useParams();
  const router = useRouter();
  const action = initialData ? "Değişiklikleri Kaydet" : "Yarat ";
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<CategoryFormValuesas>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          ...initialData,
        }
      : {
          IlanTipiId: "",
          IlanTuruIsmi: "",
        },
  });
  const {
    setError,
    formState: { errors },
  } = useForm<CategoryFormValuesas>();

  const onSubmit = async (data: CategoryFormValuesas) => {
    try {
     if (initialData) {
        updateİlanTürü(data, params.idilanTur);
      } 
    else {
      createIlanTuru(data);

    } }catch (error) {
      console.log(errors);
    }
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-fit"
        >
          <FormField
            /* bunu category componentından aldık  */
            control={form.control}
            name="IlanTipiId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">İlan Tipi</FormLabel>
                <Select
                  disabled={loading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        className="w-fit"
                        placeholder=" İlan Tipi Seçiniz"
                      ></SelectValue>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {ilanCategories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.ilantipiismi}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" w-full ">
            <FormField
              control={form.control}
              name="IlanTuruIsmi"
              render={({ field }) => (
                <FormItem>
                  <FormLabel  className="text-white"> İlan Türünün İsmi</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
    

          <Button
            variant={"secondary"}
            disabled={loading}
            className=" border-[2px] rounded-xl border-[#8be8cb] text-black h-[35px]"
            type="submit"
          >
            {action}
          </Button>
        </form>
        <Toaster />
      </Form>
    </>
  );
};

export default CategoryForm;
