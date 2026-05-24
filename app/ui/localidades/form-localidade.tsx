"use client";

import { useState, useTransition } from "react";
import { Button } from "../button";
import { Input, Select } from "../form-input";
import { cadastrarLocalidadeAction } from "@/app/lib/actions";

export default function FormLocalidade() {
  const [isPending, startTransition] = useTransition();
  const [status, setSatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await cadastrarLocalidadeAction(formData);
      setSatus(result);
    })
  }

  return (
    <form action={handleSubmit}>
      <div className="flex w-full flex-col md:flex-row md:gap-10">
        <Input
          label="Codigo"
          id="codigo"
          name="codigo"
          placeholder="Digite o codigo da localidade"
          type="text"
          required
        />
        <Input
          label="Nome"
          id="nome"
          name="nome"
          placeholder="Digite o nome da localidade"
          required
        />
      </div>
      <div className="flex w-full flex-col md:flex-row md:gap-10">
        <Select id="categoria" label="Categoria" name="categoria">
          <option value="" disabled>
            Escolha uma categoria
          </option>
          <option value="BR">BAIRRO</option>
          <option value="PV">POVOADO</option>
          <option value="ST">SITIO</option>
          <option value="FZ">FAZENDA</option>
        </Select>
        <Select id="tipo" label="Tipo" name="tipo">
          <option value="" disabled>
            Escolha um tipo
          </option>
          <option value="SEDE">SEDE</option>
          <option value="OUTRO">OUTRO</option>
        </Select>
      </div>

      {status && (
        <p
          style={{ marginTop: "15px", color: status.success ? "green" : "red" }}
        >
          {status.message}
        </p>
      )}

      <Button className="mt-5 w-full justify-center md:mt-10 md:hover:cursor-pointer">
        Salvar
      </Button>
    </form>
  );
}
