export type Integrante = {
  nome: string;
  cargo: string;
  grupo?: "Diretoria" | "Coordenação" | "Educadores" | "Voluntários";
  descricao?: string;
  email?: string;
  linkedin?: string;
  iniciais: string;
};

// Somente nomes e funções confirmados; as iniciais são o fallback existente, não fotografias.
export const equipe: Integrante[] = [
  { nome: "Gerliane Toscano de Medeiros Morais", cargo: "Colaborador", iniciais: "GM" },
  { nome: "Joaquim Rodrigues de Araújo", cargo: "Chefia", iniciais: "JA" },
  { nome: "José Wilson de Morais Medeiros", cargo: "Chefia", iniciais: "JM" },
  { nome: "Virgínia Letícia Francisco da Silva", cargo: "Pioneira", iniciais: "VS" },
  { nome: "Felipe Fagner Gomes Evangelista", cargo: "Diretor de comunicação", iniciais: "FE" },
  { nome: "José Messias Felício da Silva", cargo: "Diretor administrativo", iniciais: "JS" },
  { nome: "Jucélio de Araújo Rufino", cargo: "Presidente", iniciais: "JR" },
  { nome: "Weveton Victor Targino dos Santos", cargo: "Vice-presidente e Diretor financeiro", iniciais: "WS" },
];

export const gruposEquipe = ["Todos", "Diretoria", "Coordenação", "Educadores", "Voluntários"] as const;
