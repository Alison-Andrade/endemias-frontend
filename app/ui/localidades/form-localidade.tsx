'use client'

export default function FormLocalidade() {
  return (
    <form action={() => {}}>
      <div className="flex w-full">
        <div className="flex w-full flex-col">
          <label
            className="mb-3 mt-5 text-xs font-medium text-gray-900 dark:text-gray-100"
            htmlFor="nome"
          >
            Nome
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-200 py-2.25 pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="nome"
            type="text"
            name="nome"
            placeholder="Nome da Localidade"
            required
          />
        </div>
        <div className="flex flex-col w-full">
          <label
            className="mb-3 mt-5 text-xs font-medium text-gray-900 dark:text-gray-100"
            htmlFor="nome"
          >
            Nome
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-200 py-2.25 pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="nome"
            type="text"
            name="nome"
            placeholder="Nome da Localidade"
            required
          />
        </div>
      </div>
    </form>
  );
}
