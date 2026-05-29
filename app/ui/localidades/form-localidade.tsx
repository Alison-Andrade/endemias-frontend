"use client";

import { useActionState, useEffect, useState } from "react";
import { Button } from "../button";
import { Input, Select } from "../form-input";
import { cadastrarLocalidadeAction } from "@/app/lib/actions";
import { CategoriaLocalidade, TipoLocalidade } from "@/app/lib/enums";

interface FormLocalidadeProps {
  onSuccess: () => void;
}

export default function FormLocalidade({ onSuccess }: FormLocalidadeProps) {
  const [state, formAction, isPending] = useActionState(
    cadastrarLocalidadeAction,
    { success: false, error: "" },
  );
  const [codigoValue, setCodigoValue] = useState("");

  useEffect(() => {
    if (state?.success && onSuccess) {
      onSuccess();
    }
  }, [state?.success, onSuccess]);

  const handleCodigoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    setCodigoValue(onlyNums);
  };

  const categoriaLocalidade = Object.entries(CategoriaLocalidade);
  const tipoLocalidade = Object.entries(TipoLocalidade);

  return (
    <form action={formAction}>
      <div className="flex w-full flex-col md:flex-row md:gap-10">
        <Input
          label="Codigo"
          id="codigo"
          name="codigo"
          placeholder="Digite o codigo da localidade"
          type="text"
          required
          inputMode="numeric"
          pattern="[0-9]*"
          onChange={handleCodigoChange}
          value={codigoValue}
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
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
          {categoriaLocalidade.map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </Select>
        <Select id="tipo" label="Tipo" name="tipo">
          <option value="" disabled>
            Escolha um tipo
          </option>
          {tipoLocalidade.map(([key, value]) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
        </Select>
      </div>

      {status && (
        <p
          style={{ marginTop: "15px", color: state?.success ? "green" : "red" }}
        >
          {state?.error}
        </p>
      )}

      <Button
        disabled={isPending}
        className="mt-5 w-full justify-center md:mt-10 md:hover:cursor-pointer"
      >
        {isPending ? "Salvando..." : "Salvar"}
      </Button>
    </form>
  );
}
