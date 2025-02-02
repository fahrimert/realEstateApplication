import prismadb from "@/lib/db"
import DescriptionForm from "./components/SloganForm"
import SloganForm from "./components/SloganForm"

const CategoryPage = async () => {

  const slogan = await prismadb.slogan.findFirst({
  })  

 
      return (
    <>
        <div className=" w-full h-full flex-col flex justify-center items-start">

          <SloganForm
          initialData = { slogan} 
          
      />
        </div>
    </>
  )
}

export default CategoryPage