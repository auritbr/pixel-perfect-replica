// Acervo de transparência — conteúdo demonstrativo, fácil de substituir.
export type TipoIcone = "documento" | "certificado" | "premio" | "portfolio" | "imagens" | "imprensa";

export type ItemAcervo = {
  nome: string;
  /** Metadado curto: "Arquivo PDF • 147,4 KB" ou "Documento • 2026" */
  meta: string;
  icone?: TipoIcone;
  /** Quando verdadeiro, o botão da linha é "Baixar documento". */
  download?: boolean;
};

export type GrupoAcervo = {
  categoria: string;
  icone: TipoIcone;
  itens: ItemAcervo[];
};

export const acervoPorCategoria: GrupoAcervo[] = [
  {
    categoria: "Documentos oficiais e institucionais",
    icone: "documento",
    itens: [
      { nome: "Estatuto Social", meta: "Arquivo PDF • 480,2 KB", download: true },
      { nome: "Ata de Constituição", meta: "Arquivo PDF • 236,8 KB", download: true },
      { nome: "Ata de Eleição da Diretoria", meta: "Arquivo PDF • 210,5 KB", download: true },
      { nome: "Reconhecimento como Ponto de Cultura", meta: "Arquivo PDF • 147,4 KB" },
      { nome: "Regimento Interno", meta: "Arquivo PDF • 320,1 KB", download: true },
    ],
  },
  {
    categoria: "Certificados e reconhecimentos",
    icone: "certificado",
    itens: [
      { nome: "Certificado Cultura Viva", meta: "Arquivo PDF • 182,6 KB", icone: "premio" },
      { nome: "Certificado de Reconhecimento Institucional", meta: "Arquivo PDF • 165,3 KB", icone: "premio" },
      { nome: "Certificação de Participação Comunitária", meta: "Arquivo PDF • 158,9 KB" },
    ],
  },
  {
    categoria: "Portfólios institucionais",
    icone: "portfolio",
    itens: [
      { nome: "Portfólio Institucional 2026", meta: "Arquivo PDF • 4,2 MB", download: true },
      { nome: "Portfólio de Atividades 2025", meta: "Arquivo PDF • 3,1 MB", download: true },
      { nome: "Portfólio Cultural", meta: "Arquivo PDF • 2,7 MB" },
    ],
  },
  {
    categoria: "Registros de atividades",
    icone: "documento",
    itens: [
      { nome: "Registro de Atividades Escoteiras", meta: "Documento • 2026" },
      { nome: "Registro de Ações Comunitárias", meta: "Arquivo PDF • 1,4 MB" },
      { nome: "Registro Fotográfico Institucional", meta: "Documento • 2025", icone: "imagens" },
    ],
  },
  {
    categoria: "Oficinas e formações",
    icone: "documento",
    itens: [
      { nome: "Registro de Oficinas Culturais", meta: "Arquivo PDF • 950,7 KB" },
      { nome: "Relatório de Formação", meta: "Arquivo PDF • 1,1 MB", download: true },
      { nome: "Atividades Educativas", meta: "Documento • 2024" },
    ],
  },
  {
    categoria: "Materiais gráficos",
    icone: "imagens",
    itens: [
      { nome: "Campanha Institucional 2026", meta: "Arquivo PDF • 2,6 MB", download: true },
      { nome: "Material Gráfico de Projeto", meta: "Arquivo PDF • 1,9 MB" },
      { nome: "Cartazes de Atividades", meta: "Arquivo PDF • 2,3 MB", download: true },
    ],
  },
  {
    categoria: "Imprensa e publicações",
    icone: "imprensa",
    itens: [
      { nome: "Clipping de Imprensa 2026", meta: "Arquivo PDF • 1,2 MB" },
      { nome: "Matérias e Publicações", meta: "Documento • 2025" },
      { nome: "Registro de Divulgação", meta: "Arquivo PDF • 640,4 KB" },
    ],
  },
];
