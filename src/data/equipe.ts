export type Integrante = {
  nome: string;
  cargo: string;
  grupo: "Diretoria" | "Coordenação" | "Educadores" | "Voluntários";
  descricao: string;
  email?: string;
  linkedin?: string;
  iniciais: string;
};

// Nenhum perfil completo foi confirmado; não publicar integrantes demonstrativos.
export const equipe: Integrante[] = [];

export const gruposEquipe = ["Todos", "Diretoria", "Coordenação", "Educadores", "Voluntários"] as const;
