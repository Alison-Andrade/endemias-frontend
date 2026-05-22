'use client'

import { useRouter } from "next/navigation";

interface Localidade {
  id: number;
  codigo: string;
  nome: string;
  categoria: string;
}

interface TableRowProps {
  localidade: Localidade;
}

export default function TableRow({ localidade }: TableRowProps) {
    const router = useRouter();

    return (
      <tr
        onClick={() => router.push(`/dashboard/localidades/${localidade.codigo}`)}
        className="w-full border-b py-3 text-sm last-of-type:border-none hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
      >
        <td className="whitespace-nowrap px-3 py-3">{localidade.codigo}</td>
        <td className="whitespace-nowrap px-3 py-3">{localidade.nome}</td>
        <td className="whitespace-nowrap px-3 py-3">{localidade.categoria}</td>
      </tr>
    );
}