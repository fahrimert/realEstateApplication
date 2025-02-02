import { z } from "zod";


  export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
   }) 

   
export type FormState =
| {
    errors?: {
      email?: string[];
      password?: string[];
    };
    message?: string;
  }
| undefined;
export type LoginFormValuess = z.infer<typeof LoginSchema>
