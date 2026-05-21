import { api } from "@/app/lib/api";
import { SpringPage } from "@/app/types/pagination";

interface Localidade {
  id: number;
  codigo: string;
  nome: string;
  categoria: string;
}

async function buscarLocalidades(): Promise<SpringPage<Localidade>> {
  try {
    const response = await api.get("/localidades");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar localidades: ", error);
    return {
      content: [],
      totalElements: 0,
      totalPages: 0,
      size: 20,
      number: 0,
      first: true,
      last: true,
      numberOfElements: 0,
      empty: true,
    };
  }
}

export default async function LocalidadesTable() {
  const pageData = await buscarLocalidades();
  const localidades = pageData.content;
  console.log(localidades);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Codigo
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nome
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tipo
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {localidades?.map((localidade) => (
                <tr
                  key={localidade.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {localidade.codigo}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {localidade.nome}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {localidade.categoria}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
