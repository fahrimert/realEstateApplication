"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area"

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { boolean, z } from "zod";
import ImageUpload from "@/components/ui/ImageUpload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {  Ilan, IlanTipi, IlanTuru, Image } from "@prisma/client";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { createİlan } from "@/actions/adminActions/productActions/create-product";
import { updateSingleProduct } from "@/actions/adminActions/productActions/update-product";

interface ProductFormProps {
  initialData: {
    ilan:  {
      id: string;
      order: number;
      createdAt: string;
      updatedAt: string;
      name: string;
      IlanTipiId: string;
      IlanTuruId: string;
      price:string
      userId: string;
      json:any;
      FirsatVitrini : boolean
      AcilVitrini  :  boolean
      satildi  : boolean
      Kiralandi  : boolean
      images : Image[]
  }
  IlanTipi: ({
    IlanTuru: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        IlanTipiId: string;
        IlanTuruIsmi: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    order: number;
    ilantipiismi: string;
}) | undefined
  }| null 

  ilanTipi: IlanTipi[];
  ilanTürü: IlanTuru[];
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "İlan İsmi en az 1 karakter olmalıdır",
  }),
  price: z.coerce.number().min(1,{
    message: "İlan fiyatı en az 1 sayıdan oluşmalıdır",
  }),
  images: z.object({ url: z.string() }).array(),
  IlanTipiId: z.string().min(1 , {
    message: "İlan tipi ismi seçiniz",
  }),
  IlanTuruId: z.string().min(1,  {
    message: "İlan Türü ismi seçiniz",
  }),
  json:z.array(z.object({
    key: z.string().min(1),
    value: z.string().min(1),
  })).optional(),
  anaVitrin: z.boolean().default(false).optional(),
  FirsatVitrini: z.boolean().default(false).optional(),
  AcilVitrini: z.boolean().default(false).optional(),
  satildi: z.boolean().default(false).optional(),
  Kiralandi: z.boolean().default(false).optional(),
 
});

export type İlanFormValues = z.infer<typeof formSchema>;

const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  ilanTipi,
  ilanTürü,
}) => {
  const params = useParams();
  const router = useRouter();
  const action = initialData ? "Değişiklikleri kaydet" : "İlan   Ekle ";

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showGenel,setshowGenel] = useState(false)
  const [add,setAdd] = useState([0])
  const [extraFeatures, setExtraFeatures] = useState<{ key: string; value: string }[]>([]);
  
  const form = useForm<İlanFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData 
   
      ? {
          ...initialData,
          price: parseFloat(String(initialData?.ilan.price)),
          json:initialData.ilan.json
        }
      : {
          name: "",
          json: [],
          images: [],
          price: 0,
          IlanTipiId: "",
          IlanTuruId: "",
          anaVitrin: false,
          FirsatVitrini: false,
          AcilVitrini: false,
          satildi: false,
          Kiralandi: false,
        },
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "json", // formSchema'daki key
  });
  const [ilanId, setIlanId] = useState({
    ilanTipiId: "",
    ilanTürüId: "",
  });
  const onSubmit = async (data: İlanFormValues) => {
    try {
      const payload = {
        ...data,
        json: data.json,
      };
     if (initialData) {
        updateSingleProduct(payload, params.id);
        form.reset()

      } else {
        createİlan(data);
        form.reset()
      } 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>

      <div className=" w-full h-fit bg-[#050505] flex flex-col p-[30px] rounded-[30px]">
   <div className=" w-full h-[100px] flex flex-row ">

      <div  className={cn(` w-full h-full  transition-all duration-150 flex justify-center items-center ` )} >
      <Button onClick={() => {setshowGenel(!showGenel)}} className="p-[15px] w-[200px] h-[50px] rounded-[30px] bg-white " variant={null}>

<h2 className="text-black">
 {showGenel ?  "Genel Özellikler" : "Ek Özellikler" }
</h2>
  </Button>


      </div>
   
   </div>
   <div className="w-full h-fit flex flex-row">

  <Form {...form} >
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            onChange={() => {
              setIlanId({
                ilanTipiId: form.getValues("IlanTipiId"),
                ilanTürüId: form.getValues("IlanTuruId"),
              });
            }}
            className={cn(`space-y-8 w-full   flex flex-col ` )} 
          >
       
<div className="w-full h-fit flex flex-row gap-[5px]">
            <div className={cn(` w-full h-fit flex flex-col gap-8 bg-white rounded-[30px] p-[20px] justify-center transition-all duration-300 `)}  >
            <ScrollArea className=" w-full h-[500px]">

            <FormField
              control={form.control}
              name="images"
            
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black" > İlan Fotoğrafı Ekleyin</FormLabel>
                  <FormControl>
                    <ImageUpload
                      /* burda imageleri dönüp imagelerin urllerini value yapıyoz 
                            imagelerde array of stringsle çalışınca onalrı dönüp tek tek stringleri dönmemiz lazım   */
                      value={field.value.map((image) => image.url)}
                      disabled={loading}
                      onChange={(url) =>
                        field.onChange([...field.value, { url }])
                      } //* burda existing valueya urli ekliyoz */
                      onRemove={(url) =>
                        field.onChange([
                          ...field.value.filter(
                            (current) => current.url !== url
                          ),
                        ])
                      }
                      /* on removeda direk işte silme mevzusunu yapıyoz removladığımız dışındaki listeyi dönüyor  */
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        className="w-full"
                        placeholder="Product name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={loading}
                        placeholder="9.99"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                /* bunu category componentından aldık  */
                control={form.control}
                name="IlanTipiId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">İlan Tipi</FormLabel>
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
                            placeholder="İlan Tipi Seçiniz"
                          ></SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ilanTipi.map((a) => (
                          <SelectItem key={a.id} value={a.id}>
                            {a.ilantipiismi}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="IlanTuruId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">İlan Türü</FormLabel>
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
                            placeholder="İlan Türü Seçiniz"
                          ></SelectValue>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ilanTürü
                          .filter((a) => a.IlanTipiId == ilanId.ilanTipiId)
                          .map((b) => (
                            <SelectItem key={b.id} value={b.id}>
                              {b.IlanTuruIsmi}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
        
         
              <FormField
                control={form.control}
                name="anaVitrin"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        /* alttakini yazınca burda hata vardı onu */
                        //@ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-black">Ana Sayfa için Vitrin Etiketi</FormLabel>
                      <FormDescription>
                        İlan Ana Sayfadaki Vitrinde Sergilenecek
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
             
              <FormField
                control={form.control}
                name="satildi"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        /* alttakini yazınca burda hata vardı onu */
                        //@ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-black">İlan için Satıldı Etiketi</FormLabel>
                      <FormDescription>
                       İlana Satıldı Etiketi Vurulacak
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Kiralandi"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        /* alttakini yazınca burda hata vardı onu */
                        //@ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-black">İlan için Kiralandı Etiketi</FormLabel>
                      <FormDescription>
                       İlana Kiralandı Etiketi Vurulacak
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
             
              <FormField
                control={form.control}
                name="FirsatVitrini"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        /* alttakini yazınca burda hata vardı onu */
                        //@ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-black">Fırsat Sayfa için Vitrin Etiketi</FormLabel>
                      <FormDescription>
                        İlan Ana Sayfadaki Fırsat  Vitrinde Sergilenecek
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="AcilVitrini"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        /* alttakini yazınca burda hata vardı onu */
                        //@ts-ignore
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-black">Ana  Sayfadaki Acil  Vitrini için Etiket</FormLabel>
                      <FormDescription>
                      Ana  Sayfadaki Acil Vitrinde Sergilenecek
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
             

    


            </ScrollArea>


            </div>
<ScrollArea className=" w-full h-[550px]">
            <div className={cn(` w-full h-full flex flex-col gap-8 bg-white rounded-[30px] p-[20px] justify-start ${!showGenel == true ? "invisible opacity-0" : "visible opacity-100"} transition-all duration-300 `)}>
          
            <div className=" w-full h-fit space-y-4  max-xl:flex max-xl flex-col">
          <h3 className=" w-full h-fit text-[24px] font-semibold">Ek Özellikler</h3>
          <h2 className="w-full h-fit text-[14px]" > Eklemek İstediğiniz Ek Özellikleri Ekleyin. Sadece Oda Sayısı, Açıklama ,İlçe ,Banyo Sayısı Özelliklerini Girerken Tam olarak böyle yazmaya Dikkat edin Yanlış yazarsanız özelliğiniz siteye eklenmez </h2>
          <h2 className="w-full h-fit text-[14px]" > Bu gireceğiniz inputlara  Oda sayısını Aynen Oda Sayısı Şeklinde Yazınız eğer oda sayisi odasayisi olursa işlem girilmez diğer verdiğimiz özellik kelimeleri için de geçerlidir bu kural aynen o isimde yazınız özellikleri.</h2>
          <div className="flex flex-row">

          <FormItem>
                    <FormLabel className="w-full h-full">Özellik Adı</FormLabel>
                      <Input placeholder="Ek Özellik Adı" className="w-full" value={"Açıklama"} />
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormLabel>Özellik İçeriği</FormLabel>
                      <Textarea placeholder="Ek Özellik İçeriği" />
                  </FormItem>
          </div>

          <div className="w-full h-fit space-y-4  flex flex-col max-xl:flex max-xl ">


          {fields.map((field, index) => (
            <div key={field.id} className=" w-full  h-fit flex flex-row gap-4 items-center max-xl:flex max-xl:flex-col">
              <FormField
                control={form.control}
                name={`json.${index}.key`}
                
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="w-full h-full">Özellik Adı</FormLabel>
                    <FormControl>
                      <Input placeholder="Ek Özellik Adı" className="w-full" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`json.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Özellik İçeriği</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Ek Özellik İçeriği" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                variant="destructive"
                type="button"
                onClick={() => remove(index)} // Özelliği silmek için
              >
                Sil
              </Button>
            </div>
          ))}

          </div>

          <Button
            type="button"
            onClick={() =>
              append({ key: "", value: "" }) // Yeni bir özellik eklemek için
            }
            >
            Ek Özellik Ekle
          </Button>
        </div>
            </div>
            </ScrollArea>
</div>

              
              <Button disabled={loading} className="ml-auto" type="submit">
                {action}
              </Button>
          </form>
        </Form>
   
 </div>

        
      
      </div>
    </>
  );
};

export default ProductForm;
