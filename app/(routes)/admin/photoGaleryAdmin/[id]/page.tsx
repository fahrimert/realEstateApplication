import prismadb from "@/lib/db"
import PhotoGaleryForm from "./components/DescriptionForm"

const CategoryPage = async () => {

  const desc = await prismadb.photoGaleryAdmin.findFirst({
   include:{
    photoGaleryAdminImage:true
   }
  })  

 
      return (
    <>
        <div className=" w-full h-full flex justify-center items-center">

          <PhotoGaleryForm
          initialData = { desc} 
          
      />
        </div>
    </>
  )
}

export default CategoryPage