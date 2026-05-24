'use server'

import { revalidatePath } from "next/cache";
import { api } from "./api";
import axios from "axios";

export async function cadastrarLocalidadeAction(formData: FormData) {
  const codigo = formData.get("codigo");
  const nome = formData.get("nome");
  const categoria = formData.get("categoria");
  const tipo = formData.get("tipo");

  const payload = {
    codigo,
    nome,
    categoria,
    tipo,
  };

  try {
    await api.post("/localidades", payload);

    revalidatePath("/dashboard/localidades");

    return { success: true, message: "Nova localidade cadastrada." };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const apiMessage =
        error.response.data?.message || "Erro na validação dos dados.";
      return { success: false, message: apiMessage };
    }

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Erro ao conectar com o servidor.",
    };
  }
}
