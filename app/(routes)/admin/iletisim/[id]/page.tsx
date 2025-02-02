import prismadb from "@/lib/db"
import İletisimForm from "./components/İletisimForm"

const CategoryPage = async () => {

  const iletisim = await prismadb.iletisim.findFirst({
 

  })  
  const formattedİletisi = {
      id: iletisim?.id,
      sirketAd:  iletisim?.sirketAd,
      sirketAdres:iletisim?.sirketAdres,
      sirkettelefon: iletisim?.sirkettelefon.toNumber()!,
      kisiselTelefon: iletisim?.kisiselTelefon.toNumber()!,
      destekemail: iletisim?.destekemail,
      facebookLink:iletisim?.facebookLink!,
      instaLink: iletisim?.instaLink!,
      twitterLink: iletisim?.twitterLink!,
      createdAt: iletisim?.createdAt,
      updatedAt: iletisim?.updatedAt,
   
} 
      return (
    <>
        <div className=" w-full h-fit flex justify-center items-center">

          <İletisimForm
          initialData = { formattedİletisi} 
          
      />
        </div>
    </>
  )
}

export default CategoryPage