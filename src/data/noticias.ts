import n1 from "@/assets/noticia-1.jpg";
import n2 from "@/assets/noticia-2.jpg";
import n3 from "@/assets/noticia-3.jpg";
import n4 from "@/assets/noticia-4.jpg";
import imgOficina from "@/assets/oficina-cultural.jpg";
import imgComunidade from "@/assets/projeto-comunidade.jpg";
import imgTrilhas from "@/assets/projeto-trilhas.jpg";
import imgMaos from "@/assets/projeto-maos-que-criam.jpg";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";

export type Bloco =
  | { tipo: "paragrafo"; texto: string }
  | { tipo: "h2"; texto: string }
  | { tipo: "h3"; texto: string }
  | { tipo: "citacao"; texto: string; autor: string }
  | { tipo: "lista"; itens: string[] };

export type Noticia = {
  slug: string;
  titulo: string;
  subtitulo: string;
  tag: string;
  data: string;
  dataISO: string;
  resumo: string;
  imagem: string;
  heroPosition?: string;

  corpo: Bloco[];
  galeria: { src: string; legenda: string }[];
};

export const tagsNoticias = [
  "Todas",
  "Eventos",
  "Ação Social",
  "Projetos",
  "Oficinas",
  "Formação",
  "Comunidade",
] as const;

const galeriaPadrao = [
  { src: g2, legenda: "Trabalho em grupo durante a atividade" },
  { src: g3, legenda: "Peças produzidas pelos participantes" },
  { src: g4, legenda: "Participação das crianças do bairro" },
  { src: g6, legenda: "Detalhe do acabamento manual" },
];

const corpoBase = (assunto: string, contexto: string): Bloco[] => [
  {
    tipo: "paragrafo",
    texto: `${contexto} A atividade integra o calendário regular do Ponto de Cultura e foi conduzida por educadores e voluntários da organização, com participação aberta às famílias da comunidade.`,
  },
  { tipo: "h2", texto: "Como foi organizada" },
  {
    tipo: "paragrafo",
    texto: `O planejamento começou quatro semanas antes, em reuniões abertas nas quais participantes e voluntários definiram materiais, funções e cuidados de segurança. ${assunto}`,
  },
  {
    tipo: "lista",
    itens: [
      "Reunião inicial de planejamento com jovens e adultos",
      "Preparação de materiais e verificação de equipamentos",
      "Realização da atividade em grupos pequenos",
      "Avaliação coletiva e registro fotográfico",
    ],
  },
  { tipo: "h3", texto: "O que ficou do encontro" },
  {
    tipo: "paragrafo",
    texto:
      "Ao final, o grupo reuniu-se para avaliar o que funcionou e o que precisa ser ajustado no próximo ciclo. Essa conversa de encerramento é parte do método de trabalho da organização: cada atividade deixa registros que orientam a seguinte.",
  },
  {
    tipo: "citacao",
    texto:
      "O mais importante não é a peça pronta nem o percurso concluído, mas o que cada pessoa descobre que é capaz de fazer junto com as outras.",
    autor: "Fernanda Salles, diretora de programas",
  },
  {
    tipo: "paragrafo",
    texto:
      "As próximas datas são divulgadas no calendário da organização e nas redes sociais. A participação é gratuita e as inscrições podem ser feitas na sede ou pelo formulário de contato.",
  },
];

const base: Omit<Noticia, "corpo" | "galeria">[] = [
  {
    slug: "festival-cultural-do-bairro-reune-familias-na-praca",
    titulo: "Festival cultural do bairro reúne famílias na praça central",
    subtitulo: "Dois dias de apresentações, oficinas abertas e mostra de artesanato produzido pelos participantes.",
    tag: "Eventos",
    data: "28 de agosto de 2026",
    dataISO: "2026-08-28",
    resumo:
      "A programação reuniu grupos de música, roda de contação de histórias e uma mostra com peças produzidas nas oficinas do último ciclo.",
    imagem: n1,
  },
  {
    slug: "acampamento-de-inverno-encerra-ciclo-das-trilhas",
    titulo: "Acampamento de inverno encerra o ciclo das Trilhas de Saberes",
    subtitulo: "Três dias de atividades de campo, cozinha coletiva e observação noturna do céu.",
    tag: "Projetos",
    data: "12 de julho de 2026",
    dataISO: "2026-07-12",
    resumo:
      "Quarenta jovens participaram do acampamento que fecha o ciclo anual do projeto, com apresentação dos cadernos de campo.",
    imagem: n2,
  },
  {
    slug: "formacao-de-voluntarios-abre-novas-vagas",
    titulo: "Formação de voluntários abre novas vagas para o segundo semestre",
    subtitulo: "Encontros mensais tratam de educação não formal, segurança e proteção de crianças e adolescentes.",
    tag: "Formação",
    data: "3 de junho de 2026",
    dataISO: "2026-06-03",
    resumo:
      "A formação é pré-requisito para atuar nas atividades com crianças e adolescentes e acontece na sede da organização.",
    imagem: n3,
  },
  {
    slug: "oficina-de-tecelagem-estreia-teares-de-mesa",
    titulo: "Oficina de tecelagem estreia teares de mesa construídos na própria sede",
    subtitulo: "Os equipamentos foram montados com madeira reaproveitada pelos participantes da oficina de madeira.",
    tag: "Oficinas",
    data: "19 de maio de 2026",
    dataISO: "2026-05-19",
    resumo:
      "Doze teares simples ampliaram a capacidade da oficina, que agora atende dois grupos por semana.",
    imagem: n4,
  },
  {
    slug: "mutirao-recupera-canteiros-da-praca-vila-progresso",
    titulo: "Mutirão recupera canteiros da praça da Vila Progresso",
    subtitulo: "Ação foi definida em assembleia aberta com moradores e conduzida por jovens do projeto.",
    tag: "Ação Social",
    data: "26 de abril de 2026",
    dataISO: "2026-04-26",
    resumo:
      "Sessenta pessoas participaram do plantio, da reforma dos bancos e da instalação de placas de sinalização.",
    imagem: imgComunidade,
  },
  {
    slug: "roda-de-conversa-discute-memoria-do-bairro",
    titulo: "Roda de conversa reúne moradores para registrar a memória do bairro",
    subtitulo: "Relatos de moradores antigos serão organizados em um pequeno acervo aberto à consulta.",
    tag: "Comunidade",
    data: "15 de março de 2026",
    dataISO: "2026-03-15",
    resumo:
      "O encontro inaugurou um trabalho de escuta que pretende reunir fotografias, documentos e depoimentos.",
    imagem: imgOficina,
  },
  {
    slug: "grupo-participa-de-encontro-regional-escoteiro",
    titulo: "Grupo participa de encontro regional escoteiro",
    subtitulo: "Delegação apresentou o trabalho de artesanato desenvolvido no Ponto de Cultura.",
    tag: "Eventos",
    data: "22 de fevereiro de 2026",
    dataISO: "2026-02-22",
    resumo:
      "A participação incluiu uma oficina aberta de nós e amarrações para grupos de outras cidades.",
    imagem: g5,
  },
  {
    slug: "novo-ciclo-da-oficina-maos-que-criam",
    titulo: "Novo ciclo da Oficina Mãos que Criam começa em fevereiro",
    subtitulo: "Oito encontros com foco em madeira, fibras naturais e pintura sobre tecido.",
    tag: "Oficinas",
    data: "2 de fevereiro de 2026",
    dataISO: "2026-02-02",
    resumo:
      "As inscrições são gratuitas e podem ser feitas na sede. Cada grupo tem no máximo quinze participantes.",
    imagem: imgMaos,
  },
  {
    slug: "parceria-com-escola-municipal-amplia-atendimento",
    titulo: "Parceria com escola municipal amplia o atendimento no contraturno",
    subtitulo: "Atividades passam a acontecer também nas manhãs de quarta-feira.",
    tag: "Comunidade",
    data: "10 de dezembro de 2025",
    dataISO: "2025-12-10",
    resumo:
      "O termo de cooperação prevê uso compartilhado de espaços e formação conjunta de educadores.",
    imagem: n3,
  },
  {
    slug: "mostra-de-artesanato-encerra-o-ano",
    titulo: "Mostra de artesanato encerra o ano de atividades",
    subtitulo: "Peças produzidas nos três projetos foram apresentadas às famílias na sede.",
    tag: "Eventos",
    data: "5 de dezembro de 2025",
    dataISO: "2025-12-05",
    resumo:
      "A mostra reuniu trabalhos em madeira, fibras, pintura e reaproveitamento de materiais.",
    imagem: g3,
  },
  {
    slug: "jovens-conduzem-trilha-de-observacao-de-aves",
    titulo: "Jovens conduzem trilha de observação de aves no parque municipal",
    subtitulo: "Percurso foi planejado e guiado pelos próprios participantes do projeto.",
    tag: "Projetos",
    data: "18 de novembro de 2025",
    dataISO: "2025-11-18",
    resumo:
      "O grupo identificou vinte e três espécies e registrou as observações em fichas de campo.",
    imagem: imgTrilhas,
  },
  {
    slug: "campanha-de-coleta-de-materiais-para-oficinas",
    titulo: "Campanha de coleta reúne materiais para as oficinas do próximo ciclo",
    subtitulo: "Vizinhança doou madeira, tecidos e ferramentas em bom estado.",
    tag: "Ação Social",
    data: "30 de outubro de 2025",
    dataISO: "2025-10-30",
    resumo:
      "A campanha faz parte do compromisso de trabalhar com materiais reaproveitados nas atividades manuais.",
    imagem: g6,
  },
  {
    slug: "mural-coletivo-transforma-muro-da-sede",
    titulo: "Mural coletivo transforma o muro da sede",
    subtitulo: "Crianças, adolescentes e voluntários pintaram juntos ao longo de dois sábados.",
    tag: "Comunidade",
    data: "12 de outubro de 2025",
    dataISO: "2025-10-12",
    resumo:
      "O desenho foi definido em oficina de criação coletiva, a partir de palavras escolhidas pelo grupo.",
    imagem: g4,
  },
  {
    slug: "encontro-de-formacao-trata-de-primeiros-socorros",
    titulo: "Encontro de formação trata de primeiros socorros em atividades de campo",
    subtitulo: "Voluntários e educadores participaram de treinamento prático de oito horas.",
    tag: "Formação",
    data: "20 de setembro de 2025",
    dataISO: "2025-09-20",
    resumo:
      "O conteúdo é obrigatório para quem acompanha saídas de campo e acampamentos.",
    imagem: n3,
  },
  {
    slug: "construcao-de-estruturas-com-amarracoes",
    titulo: "Grupo constrói estruturas de apoio com amarrações para evento do bairro",
    subtitulo: "Técnica escoteira foi usada para montar mesas, painéis e um pequeno palco.",
    tag: "Projetos",
    data: "6 de setembro de 2025",
    dataISO: "2025-09-06",
    resumo:
      "As estruturas foram construídas em um dia e desmontadas ao fim do evento, sem geração de resíduos.",
    imagem: g2,
  },
  {
    slug: "oficina-aberta-de-nos-e-amarracoes",
    titulo: "Oficina aberta de nós e amarrações recebe visitantes na sede",
    subtitulo: "Atividade gratuita apresentou técnicas básicas a quem nunca participou do projeto.",
    tag: "Oficinas",
    data: "16 de agosto de 2025",
    dataISO: "2025-08-16",
    resumo:
      "Trinta pessoas passaram pela oficina ao longo da tarde, entre crianças, jovens e adultos.",
    imagem: g1,
  },
  {
    slug: "horta-comunitaria-comeca-a-produzir",
    titulo: "Horta comunitária começa a produzir seis meses após o mutirão",
    subtitulo: "Grupo responsável pela manutenção reúne moradores de três ruas vizinhas.",
    tag: "Ação Social",
    data: "28 de julho de 2025",
    dataISO: "2025-07-28",
    resumo:
      "A colheita é distribuída entre as famílias que participam dos cuidados semanais.",
    imagem: imgComunidade,
  },
  {
    slug: "acampamento-de-inverno-de-2025",
    titulo: "Acampamento de inverno reúne grupos de três cidades",
    subtitulo: "Programação incluiu construções de campo, cozinha coletiva e fogo de conselho.",
    tag: "Eventos",
    data: "10 de julho de 2025",
    dataISO: "2025-07-10",
    resumo:
      "Foi a maior atividade externa do ano, com noventa participantes e trinta voluntários.",
    imagem: n2,
  },
  {
    slug: "ciclo-de-pintura-sobre-madeira",
    titulo: "Ciclo de pintura sobre madeira apresenta resultados às famílias",
    subtitulo: "Peças decorativas produzidas em oito encontros foram expostas na sede.",
    tag: "Oficinas",
    data: "22 de junho de 2025",
    dataISO: "2025-06-22",
    resumo:
      "O ciclo trabalhou preparação da superfície, cor e acabamento com materiais de base d'água.",
    imagem: imgMaos,
  },
  {
    slug: "organizacao-participa-de-forum-de-cultura",
    titulo: "Organização participa de fórum municipal de cultura",
    subtitulo: "Representantes apresentaram o trabalho desenvolvido como Ponto de Cultura.",
    tag: "Comunidade",
    data: "9 de junho de 2025",
    dataISO: "2025-06-09",
    resumo:
      "O fórum discutiu editais, formação de agentes culturais e uso de espaços públicos.",
    imagem: imgOficina,
  },
  {
    slug: "novos-teares-e-bancadas-para-a-sede",
    titulo: "Novos teares e bancadas ampliam a capacidade da sede",
    subtitulo: "Mobiliário foi construído pelos participantes com madeira doada pela vizinhança.",
    tag: "Projetos",
    data: "24 de maio de 2025",
    dataISO: "2025-05-24",
    resumo:
      "A ampliação permite receber dois grupos simultâneos nas oficinas manuais.",
    imagem: g6,
  },
  {
    slug: "roda-de-leitura-para-criancas",
    titulo: "Roda de leitura para crianças acontece todo sábado pela manhã",
    subtitulo: "Atividade gratuita combina contação de histórias e criação de pequenos objetos.",
    tag: "Comunidade",
    data: "3 de maio de 2025",
    dataISO: "2025-05-03",
    resumo:
      "As histórias escolhidas dialogam com os temas trabalhados nas oficinas da semana.",
    imagem: g4,
  },
  {
    slug: "trilha-urbana-mapeia-arvores-do-bairro",
    titulo: "Trilha urbana mapeia as árvores do bairro",
    subtitulo: "Jovens percorreram doze ruas e registraram espécies, altura e estado de conservação.",
    tag: "Projetos",
    data: "12 de abril de 2025",
    dataISO: "2025-04-12",
    resumo:
      "Os dados foram organizados em um mapa ilustrado exposto na sede da organização.",
    imagem: imgTrilhas,
  },
  {
    slug: "encontro-de-familias-abre-o-ano",
    titulo: "Encontro de famílias abre o ano de atividades",
    subtitulo: "Reunião apresentou o calendário, as equipes e as formas de participação.",
    tag: "Formação",
    data: "22 de março de 2025",
    dataISO: "2025-03-22",
    resumo:
      "Cerca de setenta responsáveis participaram da conversa e das visitas guiadas aos espaços.",
    imagem: n3,
  },
  {
    slug: "mostra-fotografica-registra-dez-anos",
    titulo: "Mostra fotográfica registra dez anos de atividades",
    subtitulo: "Seleção de imagens do acervo foi exposta no centro cultural do município.",
    tag: "Eventos",
    data: "28 de fevereiro de 2025",
    dataISO: "2025-02-28",
    resumo:
      "A curadoria foi feita pelos próprios participantes, a partir do acervo organizado pelos voluntários.",
    imagem: g5,
  },
  {
    slug: "grupo-recupera-brinquedos-de-madeira",
    titulo: "Grupo recupera brinquedos de madeira para creche do bairro",
    subtitulo: "Peças foram lixadas, reparadas e repintadas nas oficinas de artesanato.",
    tag: "Ação Social",
    data: "8 de fevereiro de 2025",
    dataISO: "2025-02-08",
    resumo:
      "Mais de quarenta brinquedos voltaram ao uso depois de duas semanas de trabalho.",
    imagem: g3,
  },
  {
    slug: "planejamento-participativo-define-calendario",
    titulo: "Planejamento participativo define o calendário do ano",
    subtitulo: "Jovens, educadores e famílias escolheram temas e datas das atividades.",
    tag: "Formação",
    data: "18 de janeiro de 2025",
    dataISO: "2025-01-18",
    resumo:
      "A reunião definiu três ciclos de oficinas, oito saídas de campo e duas ações comunitárias.",
    imagem: imgOficina,
  },
  {
    slug: "oficina-de-reciclagem-criativa-no-verao",
    titulo: "Oficina de reciclagem criativa ocupa as férias de janeiro",
    subtitulo: "Atividade diária transformou embalagens e retalhos em objetos de uso cotidiano.",
    tag: "Oficinas",
    data: "8 de janeiro de 2025",
    dataISO: "2025-01-08",
    resumo:
      "Foram duas semanas de encontros abertos, com participação livre de crianças e adolescentes.",
    imagem: n4,
  },
];

export const noticias: Noticia[] = base.map((n, i) => ({
  ...n,
  corpo: corpoBase(
    i % 2 === 0
      ? "Os grupos foram divididos por afinidade de tarefa, de modo que cada participante pudesse acompanhar uma etapa do início ao fim."
      : "A condução ficou a cargo dos jovens mais experientes, com apoio dos educadores em cada mesa de trabalho.",
    n.subtitulo,
  ),
  galeria: [{ src: n.imagem, legenda: n.titulo }, ...galeriaPadrao].slice(0, 5),
}));

export const getNoticia = (slug: string) => noticias.find((n) => n.slug === slug);
export const noticiasPorPagina = 3;
