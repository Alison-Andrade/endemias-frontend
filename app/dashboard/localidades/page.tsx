import LocalidadesTable from "@/app/ui/localidades/table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Localidades'
}

export default async function Page() {

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Localidades</h1>
      <LocalidadesTable />
    </div>
  );
}
