"use server";
import { CategoryFormValuesas } from "@/app/(routes)/admin/adminilantur/[idilanTur]/components/CategoryForm";
import prismadb from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type CategoryFormValuesS = {
  categoryName: string;
};

export async function updateİlanTürü(
  data: CategoryFormValuesas,
  categoryId: any
) {
  try {
    const ilantipa = await prismadb.ilanTuru.update({
      where: {
        id: categoryId,
      },
      data: {
        IlanTipiId: data.IlanTipiId,
        IlanTuruIsmi: data.IlanTuruIsmi,
      },
    }

  );
    
    revalidatePath(`/admin/adminilantur/${categoryId}`);
  } catch (error: string | any) {
    return { message: error.message };
  } finally {
    redirect(`/admin/adminilantur/${categoryId}`);
  }
}
