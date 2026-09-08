export type Integrante = {
  nome: string;
  cargo: string;
  grupo: "Diretoria" | "Coordenação" | "Educadores" | "Voluntários";
  descricao: string;
  email?: string;
  linkedin?: string;
  iniciais: string;
};

// Equipe demonstrativa — substitua nomes, funções e contatos pelos dados reais.
export const equipe: Integrante[] = [
  {
    nome: "Helena Vasconcelos",
    cargo: "Presidente do conselho",
    grupo: "Diretoria",
    descricao: "Acompanha o movimento escoteiro há 25 anos e responde pela representação institucional.",
    email: "helena@trilhaviva.org.br",
    linkedin: "https://linkedin.com",
    iniciais: "HV",
  },
  {
    nome: "Ricardo Menezes",
    cargo: "Diretor administrativo",
    grupo: "Diretoria",
    descricao: "Responsável por contratos, prestação de contas e relação com parceiros.",
    email: "ricardo@trilhaviva.org.br",
    iniciais: "RM",
  },
  {
    nome: "Fernanda Salles",
    cargo: "Diretora de programas",
    grupo: "Diretoria",
    descricao: "Coordena o desenho pedagógico dos três projetos e a formação de educadores.",
    email: "fernanda@trilhaviva.org.br",
    linkedin: "https://linkedin.com",
    iniciais: "FS",
  },
  {
    nome: "Paulo Antunes",
    cargo: "Coordenador de atividades",
    grupo: "Coordenação",
    descricao: "Organiza o calendário de encontros, saídas de campo e uso dos espaços.",
    email: "paulo@trilhaviva.org.br",
    iniciais: "PA",
  },
  {
    nome: "Juliana Prado",
    cargo: "Coordenadora de comunicação",
    grupo: "Coordenação",
    descricao: "Cuida do registro fotográfico, das notícias e da relação com a imprensa local.",
    email: "juliana@trilhaviva.org.br",
    iniciais: "JP",
  },
  {
    nome: "Marcos Tavares",
    cargo: "Educador de artesanato",
    grupo: "Educadores",
    descricao: "Conduz as oficinas de madeira, nós e amarrações na Oficina Mãos que Criam.",
    iniciais: "MT",
  },
  {
    nome: "Aline Ferreira",
    cargo: "Educadora de tecelagem",
    grupo: "Educadores",
    descricao: "Trabalha com fibras, teares de mesa e pintura sobre tecido.",
    iniciais: "AF",
  },
  {
    nome: "Diego Camargo",
    cargo: "Educador de campo",
    grupo: "Educadores",
    descricao: "Responsável pela segurança e pela técnica nas atividades de trilha e acampamento.",
    iniciais: "DC",
  },
  {
    nome: "Sônia Barbosa",
    cargo: "Educadora social",
    grupo: "Educadores",
    descricao: "Acompanha famílias e faz a ponte entre a organização e as escolas do bairro.",
    email: "sonia@trilhaviva.org.br",
    iniciais: "SB",
  },
  {
    nome: "Bruno Lima",
    cargo: "Voluntário — registro fotográfico",
    grupo: "Voluntários",
    descricao: "Documenta atividades e organiza o acervo de imagens da galeria.",
    iniciais: "BL",
  },
  {
    nome: "Carla Nogueira",
    cargo: "Voluntária — apoio pedagógico",
    grupo: "Voluntários",
    descricao: "Auxilia nas oficinas com crianças e na preparação de materiais.",
    iniciais: "CN",
  },
  {
    nome: "Otávio Reis",
    cargo: "Voluntário — logística",
    grupo: "Voluntários",
    descricao: "Cuida de transporte, equipamentos e montagem das atividades externas.",
    iniciais: "OR",
  },
];

export const gruposEquipe = ["Todos", "Diretoria", "Coordenação", "Educadores", "Voluntários"] as const;
