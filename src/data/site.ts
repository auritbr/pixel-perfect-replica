// Dados institucionais demonstrativos — substitua pelos dados reais.
export const site = {
  nome: "Ponto de Cultura Trilha Viva",
  nomeCurto: "Trilha Viva",
  descricaoCurta:
    "Ponto de Cultura ligado ao movimento escoteiro, dedicado à educação não formal, ao artesanato e à vida comunitária.",
  telefone: "(11) 4002-8922",
  whatsapp: "5511940028922",
  whatsappTexto: "Olá! Gostaria de saber mais sobre as atividades do Ponto de Cultura.",
  email: "contato@trilhaviva.org.br",
  endereco: "Rua das Araucárias, 128 — Vila Progresso, São Paulo — SP, 03010-000",
  horario: "Terça a sexta, das 9h às 18h. Sábados, das 9h às 13h.",
  redes: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
  // Indicadores demonstrativos — atualize com os números reais da organização.
  indicadores: [
    { valor: "+300", rotulo: "participantes por ano" },
    { valor: "+40", rotulo: "atividades realizadas" },
    { valor: "+20", rotulo: "oficinas de artesanato" },
    { valor: "+10", rotulo: "ações comunitárias" },
  ],
};

export type NavItem = {
  label: string;
  to: string;
  children?: { label: string; to: string; descricao?: string }[];
};

export const navegacao: NavItem[] = [
  { label: "Início", to: "/" },
  {
    label: "Quem Somos",
    to: "/quem-somos",
    children: [
      { label: "Quem Somos", to: "/quem-somos", descricao: "História, propósito e atuação" },
      { label: "Equipe", to: "/quem-somos/equipe", descricao: "Quem conduz as atividades" },
      {
        label: "Transparência",
        to: "/quem-somos/transparencia",
        descricao: "Documentos e prestação de contas",
      },
    ],
  },
  {
    label: "Projetos",
    to: "/projetos",
    children: [
      { label: "Visão geral", to: "/projetos", descricao: "Todas as iniciativas" },
      {
        label: "Oficina Mãos que Criam",
        to: "/projetos/maos-que-criam",
        descricao: "Artesanato e sustentabilidade",
      },
      {
        label: "Trilhas de Saberes",
        to: "/projetos/trilhas-de-saberes",
        descricao: "Natureza e educação não formal",
      },
      {
        label: "Construindo Comunidade",
        to: "/projetos/construindo-comunidade",
        descricao: "Cidadania e participação juvenil",
      },
    ],
  },
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
  { label: "Contato", to: "/contato" },
];
