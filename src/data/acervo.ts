// Acervo de transparência — conteúdo demonstrativo, fácil de substituir.
export type CategoriaAcervo =
  | "Documentos Institucionais"
  | "Certificados"
  | "Reconhecimentos"
  | "Portfólios"
  | "Apresentações"
  | "Oficinas"
  | "Materiais Gráficos"
  | "Imprensa"
  | "Registros";

export type ItemAcervo = {
  nome: string;
  categoria: CategoriaAcervo;
  ano: string;
  descricao?: string;
  formato: string;
  download?: boolean;
};

export const categoriasAcervo = [
  "Todos",
  "Documentos Institucionais",
  "Certificados",
  "Reconhecimentos",
  "Portfólios",
  "Apresentações",
  "Oficinas",
  "Materiais Gráficos",
  "Imprensa",
  "Registros",
] as const;

export const anosAcervo = ["Todos os anos", "2026", "2025", "2024", "2023", "2022"] as const;

export const acervo: ItemAcervo[] = [
  {
    nome: "Estatuto Social",
    categoria: "Documentos Institucionais",
    ano: "2026",
    descricao: "Versão consolidada com as finalidades, estrutura e regras de funcionamento da organização.",
    formato: "PDF · 480 KB",
    download: true,
  },
  {
    nome: "Ata de Eleição da Diretoria",
    categoria: "Documentos Institucionais",
    ano: "2026",
    descricao: "Registro da assembleia que elegeu a diretoria para o mandato atual.",
    formato: "PDF · 210 KB",
    download: true,
  },
  {
    nome: "Regimento Interno das Atividades",
    categoria: "Documentos Institucionais",
    ano: "2024",
    descricao: "Orientações de convivência, segurança e organização das oficinas e saídas de campo.",
    formato: "PDF · 320 KB",
    download: true,
  },
  {
    nome: "Certificado de Ponto de Cultura",
    categoria: "Certificados",
    ano: "2025",
    descricao: "Certificação que reconhece a organização como Ponto de Cultura.",
    formato: "PDF · 180 KB",
    download: true,
  },
  {
    nome: "Certificado de Reconhecimento Institucional",
    categoria: "Certificados",
    ano: "2025",
    formato: "PDF · 165 KB",
    download: true,
  },
  {
    nome: "Reconhecimento da Câmara Municipal",
    categoria: "Reconhecimentos",
    ano: "2024",
    descricao: "Moção de aplauso pelas ações de educação não formal na comunidade.",
    formato: "PDF · 190 KB",
  },
  {
    nome: "Portfólio Institucional",
    categoria: "Portfólios",
    ano: "2026",
    descricao: "Apresentação da trajetória, dos projetos e dos resultados alcançados.",
    formato: "PDF · 4,2 MB",
    download: true,
  },
  {
    nome: "Portfólio de Artesanato e Oficinas",
    categoria: "Portfólios",
    ano: "2025",
    formato: "PDF · 3,1 MB",
    download: true,
  },
  {
    nome: "Registro de Oficinas Culturais",
    categoria: "Oficinas",
    ano: "2026",
    descricao: "Relação das oficinas realizadas, com temas, público atendido e carga horária.",
    formato: "PDF · 950 KB",
  },
  {
    nome: "Registro de Atividades Escoteiras e Comunitárias",
    categoria: "Registros",
    ano: "2026",
    descricao: "Acompanhamento das atividades de campo, mutirões e ações de cidadania.",
    formato: "PDF · 1,4 MB",
  },
  {
    nome: "Relatório Anual de Atividades",
    categoria: "Registros",
    ano: "2025",
    descricao: "Panorama do ano, com participantes, parcerias e aplicação de recursos.",
    formato: "PDF · 1,8 MB",
    download: true,
  },
  {
    nome: "Material Gráfico — Campanha Institucional",
    categoria: "Materiais Gráficos",
    ano: "2025",
    descricao: "Peças de divulgação usadas na campanha de mobilização comunitária.",
    formato: "PDF · 2,6 MB",
    download: true,
  },
  {
    nome: "Clipping de Imprensa",
    categoria: "Imprensa",
    ano: "2025",
    descricao: "Reunião de matérias publicadas sobre os projetos da organização.",
    formato: "PDF · 1,2 MB",
  },
  {
    nome: "Matéria — Jornal da Vila Progresso",
    categoria: "Imprensa",
    ano: "2023",
    formato: "PDF · 640 KB",
  },
  {
    nome: "Registro Fotográfico de Apresentações",
    categoria: "Apresentações",
    ano: "2024",
    descricao: "Seleção de imagens das apresentações culturais abertas à comunidade.",
    formato: "Galeria · 38 fotos",
  },
  {
    nome: "Apresentação para Parceiros e Apoiadores",
    categoria: "Apresentações",
    ano: "2022",
    formato: "PDF · 2,0 MB",
    download: true,
  },
  {
    nome: "Demonstrativo de Aplicação de Recursos",
    categoria: "Documentos Institucionais",
    ano: "2023",
    descricao: "Detalhamento da destinação dos recursos recebidos no período.",
    formato: "PDF · 620 KB",
    download: true,
  },
  {
    nome: "Registro de Mutirões de Cuidado com a Área Verde",
    categoria: "Registros",
    ano: "2022",
    formato: "PDF · 780 KB",
  },
];
