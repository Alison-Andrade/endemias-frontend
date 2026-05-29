"use server";

import { revalidatePath } from "next/cache";
import { api } from "./api";
import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().trim().min(1, "Matrícula, CPF ou E-mail obrigatório."),
  password: z.string().min(8, "Senha obrigatória."),
});
export interface ActionState {
  success: boolean;
  error?: string;
}

export async function handleLoginAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const data = Object.fromEntries(formData.entries());

  const validatedFields = loginSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      error:
        validatedFields.error.flatten().fieldErrors.username?.[0] ||
        validatedFields.error.flatten().fieldErrors.password?.[0] ||
        "Campos inválidos",
    };
  }

  const { username, password } = validatedFields.data;

  try {
    const response = await api.post("/auth/login", {
      username,
      password,
    });

    const cookieStore = await cookies();
    cookieStore.set("auth_token", response.data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Erro ao fazer login: ", error);
    return {
      success: false,
      error: "Credenciais inválidas ou erro no servidor",
    };
  }

  redirect("/dashboard");
}

export async function signOutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_token");

  revalidatePath("/");
  redirect("/");
}

export async function cadastrarLocalidadeAction(
  prevStete: ActionState,
  formData: FormData,
): Promise<ActionState> {
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

    return { success: true, error: "Nova localidade cadastrada." };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const apiMessage =
        error.response.data?.message || "Erro na validação dos dados.";
      return { success: false, error: apiMessage };
    }

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Erro ao conectar com o servidor.",
    };
  }
}
