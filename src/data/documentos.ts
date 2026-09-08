export type Documento = {
  nome: string;
  ano: string;
  categoria: "Institucional" | "Financeiro" | "Atividades" | "Certificações";
  secao: string;
  tamanho: string;
};

// Lista demonstrativa de documentos. Os arquivos reais devem ser anexados posteriormente.
export const documentos: Documento[] = [
  { nome: "Estatuto social consolidado", ano: "2024", categoria: "Institucional", secao: "Documentos Institucionais", tamanho: "PDF · 480 KB" },
  { nome: "Ata de eleição da diretoria", ano: "2025", categoria: "Institucional", secao: "Documentos Institucionais", tamanho: "PDF · 210 KB" },
  { nome: "Regimento interno das atividades", ano: "2024", categoria: "Institucional", secao: "Documentos Institucionais", tamanho: "PDF · 320 KB" },
  { nome: "Relatório anual de atividades", ano: "2025", categoria: "Atividades", secao: "Relatórios de Atividades", tamanho: "PDF · 1,8 MB" },
  { nome: "Relatório anual de atividades", ano: "2024", categoria: "Atividades", secao: "Relatórios de Atividades", tamanho: "PDF · 1,6 MB" },
  { nome: "Relatório do ciclo de oficinas", ano: "2025", categoria: "Atividades", secao: "Relatórios de Atividades", tamanho: "PDF · 950 KB" },
  { nome: "Demonstrativo financeiro", ano: "2025", categoria: "Financeiro", secao: "Relatórios Financeiros", tamanho: "PDF · 620 KB" },
  { nome: "Demonstrativo financeiro", ano: "2024", categoria: "Financeiro", secao: "Relatórios Financeiros", tamanho: "PDF · 610 KB" },
  { nome: "Balanço patrimonial", ano: "2023", categoria: "Financeiro", secao: "Relatórios Financeiros", tamanho: "PDF · 540 KB" },
  { nome: "Certidão de regularidade fiscal", ano: "2025", categoria: "Certificações", secao: "Certificações", tamanho: "PDF · 180 KB" },
  { nome: "Reconhecimento como Ponto de Cultura", ano: "2022", categoria: "Certificações", secao: "Certificações", tamanho: "PDF · 240 KB" },
  { nome: "Termo de parceria — Secretaria de Cultura", ano: "2025", categoria: "Institucional", secao: "Parcerias", tamanho: "PDF · 400 KB" },
  { nome: "Termo de cooperação — Escola Municipal Vila Progresso", ano: "2024", categoria: "Institucional", secao: "Parcerias", tamanho: "PDF · 280 KB" },
  { nome: "Prestação de contas do edital cultural", ano: "2025", categoria: "Financeiro", secao: "Prestação de Contas", tamanho: "PDF · 1,1 MB" },
  { nome: "Prestação de contas do edital cultural", ano: "2023", categoria: "Financeiro", secao: "Prestação de Contas", tamanho: "PDF · 1,0 MB" },
  { nome: "Relatório de aplicação de recursos", ano: "2022", categoria: "Financeiro", secao: "Prestação de Contas", tamanho: "PDF · 870 KB" },
];

export const categoriasDocumentos = ["Todos", "Institucional", "Financeiro", "Atividades", "Certificações"] as const;
export const anosDocumentos = ["Todos", "2025", "2024", "2023", "2022"] as const;
export const secoesDocumentos = [
  "Documentos Institucionais",
  "Relatórios de Atividades",
  "Relatórios Financeiros",
  "Certificações",
  "Parcerias",
  "Prestação de Contas",
];
