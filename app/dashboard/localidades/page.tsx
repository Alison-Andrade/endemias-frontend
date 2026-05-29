import NovaLocalidadeButton from "@/app/ui/localidades/nova-localidade-button";
import LocalidadesTable from "@/app/ui/localidades/table";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: 'Localidades'
}

export default async function Page() {
  
  return (
    <div className="p-1 md:p-6">
      <div className="flex flex-col justify-between md:flex-row">
        <h1 className="text-2xl font-bold mb-4">Localidades</h1>
        <NovaLocalidadeButton />
      </div>
      <LocalidadesTable />
    </div>
  );
}
