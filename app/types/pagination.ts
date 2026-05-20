export interface SpringPage<T> {
  content: T[]; // Onde estão seus dados reais (os 3 elementos que vieram)
  totalElements: number; // Total de registros no banco (ex: 3)
  totalPages: number; // Total de páginas disponíveis (ex: 1)
  size: number; // Quantidade de registros por página (ex: 20)
  number: number; // Página atual (começa em 0)
  first: boolean; // Se é a primeira página
  last: boolean; // Se é a última página
  numberOfElements: number; // Quantos elementos vieram nesta página específica
  empty: boolean; // Se a página está vazia
}
