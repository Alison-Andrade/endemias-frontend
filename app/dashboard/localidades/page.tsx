import LocalidadesTable from "@/app/ui/localidades/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Localidades'
}

export default async function Page() {

  return (
    <div className="p-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Localidades</h1>
        <button className="p-3 rounded-md bg-blue-600 hover:cursor-pointer hover:bg-blue-700">
          Nova Localidade +
        </button>
      </div>
      <LocalidadesTable />
    </div>
  );
}
