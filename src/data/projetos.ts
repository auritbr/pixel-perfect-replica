import imgMaos from "@/assets/projeto-maos-que-criam.jpg";
import imgTrilhas from "@/assets/projeto-trilhas.jpg";
import imgComunidade from "@/assets/projeto-comunidade.jpg";
import imgArtesanato from "@/assets/artesanato-maos.jpg";
import imgOficina from "@/assets/oficina-cultural.jpg";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";

export type Artesanato = { titulo: string; itens: string[] };

export type Projeto = {
  slug: string;
  nome: string;
  categoria: string;
  resumo: string;
  imagem: string;
  cor: "primary" | "verde" | "terracota";
  sobre: string[];
  publico: string;
  periodicidade: string;
  objetivos: { titulo: string; texto: string }[];
  artesanato: Artesanato[];
  etapas: { numero: string; titulo: string; texto: string }[];
  resultados: { valor: string; rotulo: string }[];
  galeria: { src: string; legenda: string }[];
  imagemSecundaria: string;
};

// Conteúdo demonstrativo. Nomes e textos podem ser substituídos sem alterar a estrutura.
export const projetos: Projeto[] = [
  {
    slug: "maos-que-criam",
    nome: "Oficina Mãos que Criam",
    categoria: "Artesanato e sustentabilidade",
    resumo:
      "Encontros semanais de artesanato em que técnicas manuais, reaproveitamento de materiais e criação coletiva se transformam em aprendizado.",
    imagem: imgMaos,
    imagemSecundaria: imgArtesanato,
    cor: "terracota",
    sobre: [
      "A Oficina Mãos que Criam reúne crianças, adolescentes e adultos em torno de práticas manuais que exigem tempo, atenção e cooperação. Cada ciclo começa com uma conversa sobre os materiais disponíveis na comunidade e termina com uma pequena mostra aberta às famílias.",
      "As atividades acontecem em grupos pequenos, sempre acompanhadas por educadores e voluntários com formação em artes manuais e em educação não formal. O trabalho é conduzido no ritmo de quem participa: quem chega pela primeira vez aprende com quem já frequenta há mais tempo.",
    ],
    publico: "Crianças a partir de 8 anos, adolescentes, jovens e adultos da comunidade.",
    periodicidade: "Terças e quintas, das 14h às 17h, em ciclos de oito encontros.",
    objetivos: [
      {
        titulo: "Criatividade",
        texto: "Experimentar materiais e soluções próprias, sem modelo único a ser copiado.",
      },
      {
        titulo: "Concentração",
        texto: "Trabalhos manuais que pedem tempo e atenção continuada.",
      },
      {
        titulo: "Sustentabilidade",
        texto: "Reaproveitamento de madeira, tecido e fibras encontrados na própria comunidade.",
      },
      {
        titulo: "Autonomia",
        texto: "Cada participante conduz sua peça do início ao fim, com apoio quando pede.",
      },
      {
        titulo: "Colaboração",
        texto: "Ferramentas e conhecimentos são compartilhados em mesas coletivas.",
      },
    ],
    artesanato: [
      {
        titulo: "Nós e amarrações",
        itens: [
          "Técnicas inspiradas em conhecimentos escoteiros",
          "Confecção de suportes e objetos com cordas",
          "Desenvolvimento da coordenação e da paciência",
        ],
      },
      {
        titulo: "Madeira",
        itens: [
          "Pequenos objetos artesanais",
          "Reaproveitamento de sobras e caixotes",
          "Lixamento, encaixe e acabamento básico",
        ],
      },
      {
        titulo: "Tecelagem e fibras",
        itens: ["Fios, tramas e fibras naturais", "Teares simples de mesa", "Trabalhos manuais em dupla"],
      },
      {
        titulo: "Pintura",
        itens: ["Peças decorativas", "Pintura sobre madeira e tecido", "Expressão gráfica e cor"],
      },
      {
        titulo: "Reciclagem criativa",
        itens: [
          "Transformação de materiais descartados",
          "Conversas sobre consumo e resíduos",
          "Criação de objetos de uso cotidiano",
        ],
      },
      {
        titulo: "Elementos naturais",
        itens: [
          "Sementes, galhos e fibras",
          "Coleta responsável e orientada",
          "Composições e pequenos ornamentos",
        ],
      },
    ],
    etapas: [
      { numero: "01", titulo: "Descobrir", texto: "Conhecer materiais, ferramentas e técnicas possíveis." },
      { numero: "02", titulo: "Experimentar", texto: "Testar sem pressa, errar e refazer." },
      { numero: "03", titulo: "Criar", texto: "Desenvolver a peça própria do começo ao fim." },
      { numero: "04", titulo: "Compartilhar", texto: "Mostrar o processo às famílias e à comunidade." },
    ],
    resultados: [
      { valor: "+120", rotulo: "participantes por ciclo" },
      { valor: "+20", rotulo: "oficinas realizadas" },
      { valor: "6", rotulo: "linguagens artesanais" },
      { valor: "3", rotulo: "mostras abertas ao público" },
    ],
    galeria: [
      { src: imgArtesanato, legenda: "Amarrações em fibra natural sobre a bancada" },
      { src: g6, legenda: "Acabamento de peça em madeira reaproveitada" },
      { src: g3, legenda: "Mostra de peças produzidas no ciclo" },
      { src: imgMaos, legenda: "Mesa coletiva de pintura" },
      { src: imgOficina, legenda: "Encontro semanal na sede" },
      { src: g4, legenda: "Painel coletivo pintado com a vizinhança" },
    ],
  },
  {
    slug: "trilhas-de-saberes",
    nome: "Trilhas de Saberes",
    categoria: "Educação não formal e natureza",
    resumo:
      "Percursos de campo, leitura de mapas e observação da natureza como método para aprender ciência, cultura e convivência fora da sala de aula.",
    imagem: imgTrilhas,
    imagemSecundaria: g5,
    cor: "verde",
    sobre: [
      "Trilhas de Saberes usa a caminhada como forma de estudo. Cada saída de campo é preparada em grupo: definição do percurso, divisão de tarefas, cuidados de segurança e registro do que será observado.",
      "Ao voltar, o grupo organiza o que viu em cadernos de campo, desenhos e pequenas apresentações. O conhecimento técnico do escotismo — orientação, nós, montagem de acampamento — aparece como ferramenta, não como fim.",
    ],
    publico: "Adolescentes e jovens de 11 a 21 anos, com adultos voluntários acompanhando.",
    periodicidade: "Encontros quinzenais de preparação e uma saída de campo por mês.",
    objetivos: [
      { titulo: "Autonomia", texto: "Planejar e conduzir o próprio percurso com responsabilidade." },
      { titulo: "Convivência", texto: "Dividir tarefas, espaço e decisões durante vários dias." },
      { titulo: "Leitura de território", texto: "Compreender o lugar onde se vive: rios, matas e ruas." },
      { titulo: "Cuidado ambiental", texto: "Práticas de mínimo impacto em toda atividade externa." },
      { titulo: "Registro e memória", texto: "Cadernos de campo, fotografia e relatos coletivos." },
    ],
    artesanato: [
      {
        titulo: "Nós e amarrações",
        itens: ["Construções de campo com bambu e corda", "Estruturas simples de apoio", "Segurança e técnica"],
      },
      {
        titulo: "Elementos naturais",
        itens: ["Herbários e coleções de sementes", "Coleta responsável", "Fichas de identificação"],
      },
      {
        titulo: "Registro gráfico",
        itens: ["Desenho de observação", "Mapas ilustrados", "Cadernos costurados à mão"],
      },
    ],
    etapas: [
      { numero: "01", titulo: "Planejar", texto: "Escolher o percurso e distribuir responsabilidades." },
      { numero: "02", titulo: "Percorrer", texto: "Caminhar, observar e registrar em campo." },
      { numero: "03", titulo: "Organizar", texto: "Reunir anotações, mapas e fotografias." },
      { numero: "04", titulo: "Compartilhar", texto: "Apresentar os achados a outros grupos." },
    ],
    resultados: [
      { valor: "+90", rotulo: "jovens participantes" },
      { valor: "18", rotulo: "saídas de campo" },
      { valor: "4", rotulo: "territórios estudados" },
      { valor: "+200", rotulo: "registros no caderno de campo" },
    ],
    galeria: [
      { src: imgTrilhas, legenda: "Leitura de bússola no início da trilha" },
      { src: g2, legenda: "Construção de campo com amarrações" },
      { src: g5, legenda: "Chegada ao ponto de encontro ao fim do dia" },
      { src: g1, legenda: "Lenço e distintivos: memória do grupo" },
      { src: imgOficina, legenda: "Preparação do material antes da saída" },
      { src: g6, legenda: "Confecção do caderno de campo" },
    ],
  },
  {
    slug: "construindo-comunidade",
    nome: "Construindo Comunidade",
    categoria: "Cidadania e ação comunitária",
    resumo:
      "Ações planejadas com moradores do bairro: praças, hortas, mutirões e encontros que colocam a participação juvenil no centro das decisões.",
    imagem: imgComunidade,
    imagemSecundaria: g4,
    cor: "primary",
    sobre: [
      "Construindo Comunidade parte de uma escuta simples: o que o bairro precisa e o que o bairro já sabe fazer. A partir dessa conversa, jovens e adultos definem juntos uma ação possível e assumem papéis claros na sua execução.",
      "As ações são pequenas por escolha. Preferimos concluir um canteiro, uma reforma de banco ou uma campanha de coleta do que anunciar grandes projetos que não se sustentam no tempo.",
    ],
    publico: "Jovens de 15 a 24 anos, famílias e coletivos do bairro.",
    periodicidade: "Reuniões mensais de planejamento e mutirões trimestrais.",
    objetivos: [
      { titulo: "Participação", texto: "Decisões tomadas em assembleia aberta, com voz para os mais jovens." },
      { titulo: "Cidadania", texto: "Compreender direitos, serviços públicos e canais de diálogo." },
      { titulo: "Cooperação", texto: "Trabalho conjunto entre gerações e coletivos vizinhos." },
      { titulo: "Cuidado do lugar", texto: "Intervenções que melhoram espaços de uso coletivo." },
      { titulo: "Continuidade", texto: "Cada ação deixa um grupo responsável pela manutenção." },
    ],
    artesanato: [
      {
        titulo: "Pintura e sinalização",
        itens: ["Painéis e murais coletivos", "Placas e sinalização de praças", "Estêncil e tipografia manual"],
      },
      {
        titulo: "Madeira",
        itens: ["Reforma de bancos e canteiros", "Reaproveitamento de paletes", "Ferramentas compartilhadas"],
      },
      {
        titulo: "Reciclagem criativa",
        itens: ["Coletores decorados", "Mobiliário simples", "Campanhas de separação de resíduos"],
      },
    ],
    etapas: [
      { numero: "01", titulo: "Escutar", texto: "Conversas e reuniões abertas com moradores." },
      { numero: "02", titulo: "Decidir", texto: "Escolher coletivamente a ação prioritária." },
      { numero: "03", titulo: "Realizar", texto: "Mutirão com tarefas e responsáveis definidos." },
      { numero: "04", titulo: "Cuidar", texto: "Acompanhar e manter o que foi construído." },
    ],
    resultados: [
      { valor: "+10", rotulo: "ações comunitárias" },
      { valor: "5", rotulo: "espaços recuperados" },
      { valor: "+60", rotulo: "famílias envolvidas" },
      { valor: "3", rotulo: "coletivos parceiros" },
    ],
    galeria: [
      { src: imgComunidade, legenda: "Mutirão de plantio na praça do bairro" },
      { src: g4, legenda: "Mural coletivo com crianças da vizinhança" },
      { src: g3, legenda: "Exposição das peças produzidas nas oficinas" },
      { src: imgOficina, legenda: "Reunião de planejamento na sede" },
      { src: g2, legenda: "Construção de estrutura de apoio ao evento" },
      { src: g5, legenda: "Encerramento da ação ao fim da tarde" },
    ],
  },
];

export const getProjeto = (slug: string) => projetos.find((p) => p.slug === slug);
