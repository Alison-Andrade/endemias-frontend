"use client";

import { Button } from "../button";
import { Input, Select } from "../form-input";

export default function FormLocalidade() {
  return (
    <form action={() => {}}>
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
        <Select id="categoria" label="Categoria">
          <option value="" disabled>
            Escolha uma categoria
          </option>
          <option value="BR">BAIRRO</option>
          <option value="PV">POVOADO</option>
          <option value="ST">SITIO</option>
          <option value="FZ">FAZENDA</option>
        </Select>
        <Select id="tipo" label="Tipo">
          <option value="" disabled>
            Escolha um tipo
          </option>
          <option value="SEDE">SEDE</option>
          <option value="OUTRO">OUTRO</option>
        </Select>
      </div>
      <Button className="mt-5 w-full justify-center md:mt-10 md:hover:cursor-pointer">
        Salvar
      </Button>
    </form>
  );
}
