import { z } from "zod";


export const RegisterFormSchema = z.object({
  email: z.string().email({ message: "Geçerli bir email giriniz." }),
  name: z.string().min(2, { message: "Geçerli Bir İsim giriniz." }),
  password: z
  .string()
  .min(8, { message: "En Az 8 Karakter, " })
  .regex(/[a-zA-Z]/, { message: "en az bi harf ," })
  .regex(/[0-9]/, { message:"en az bir sayı ,"  })
  .regex(/[^a-zA-Z0-9]/, {
    message: "ve en az bir özel karakter giriniz.",
  }),
});





export type RegisterFormState =
  | {
      errors?: {
        email?: string[];
        name?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

