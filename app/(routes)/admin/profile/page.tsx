import { getJustSession } from "@/helpers/get-user-session"
import prismadb from "@/lib/db"
import ProfileForm from "./components/ProfileForm"
import { $Enums } from "@prisma/client"

const page = async () => {

const initialData = await getJustSession()
const formatted =  ({
  name: initialData?.name!,
  telefon: initialData?.telefon!,
  definition:  initialData?.definition!,
  id:  initialData?.id!,
  email: initialData?.email!,
  image: initialData?.image!,
  password: initialData?.password!,
  role:$Enums.UserRole,
  createdAt:initialData?.createdAt!,
  updatedAt: initialData?.updatedAt!
} )  
  return (
   <ProfileForm
   initialData = {formatted}
   /> 
  )
}

export default page