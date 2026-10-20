import imagem from "@/assets/pneus-transformam-provisorio.jpg";
import g1 from "@/assets/pneus-galeria-1.jpg";
import g2 from "@/assets/pneus-galeria-2.jpg";
import g3 from "@/assets/pneus-galeria-3.jpg";
import g4 from "@/assets/pneus-galeria-4.jpg";
import g5 from "@/assets/pneus-galeria-5.jpg";
import g6 from "@/assets/pneus-galeria-6.jpg";
import bbHero from "@/assets/bugibox-hero.jpg";
import bbSobre from "@/assets/bugibox-sobre.jpg";
import bb1 from "@/assets/bugibox-galeria-1.jpg";
import bb2 from "@/assets/bugibox-galeria-2.jpg";
import bb3 from "@/assets/bugibox-galeria-3.jpg";
import bb4 from "@/assets/bugibox-galeria-4.jpg";
import bb5 from "@/assets/bugibox-galeria-5.jpg";
import bb6 from "@/assets/bugibox-galeria-6.jpg";

type TextoProjeto = { titulo: string; texto: string };
type SecaoTexto = { microLabel: string; titulo: string; paragrafos: string[] };
/** Section copy for the shared detail template; optional sections render only when present. */
export type PaginaProjeto = {
  altHero: string;
  altSecundaria: string;
  sobreTitulo: string;
  sobreIntro: string;
  sobreParagrafos: string[];
  infos: TextoProjeto[];
  publicoTitulo: string;
  publicoTexto: string;
  atividadesTitulo: string;
  atividadesTexto: string;
  praticasMicroLabel: string;
  praticasTitulo: string;
  praticasTexto: string;
  etapasTitulo: string;
  seguranca?: SecaoTexto;
  secaoTextual?: SecaoTexto;
  galeriaTitulo: string;
  cta: { titulo: string; paragrafos: string[]; destaque?: string };
};
export type Projeto = {
  slug: string;
  nome: string;
  nomeCompleto: string;
  categoria: string;
  resumo: string;
  imagem: string;
  imagemSecundaria: string;
  cor: "primary" | "verde" | "terracota";
  sobre: string[];
  publico: string;
  ondeAcontece: string;
  publicos: TextoProjeto[];
  atividades: TextoProjeto[];
  objetivos: TextoProjeto[];
  praticas: TextoProjeto[];
  etapas: (TextoProjeto & { numero: string })[];
  continuidade: string[];
  galeria: { src: string; legenda: string }[];
  pagina: PaginaProjeto;
};

// Only confirmed project content. Images are replaceable illustrations, not activity records.
export const projetos: Projeto[] = [{
  slug: "pneus-que-transformam",
  nome: "Pneus que Transformam",
  nomeCompleto: "Pneus que Transformam – Arte, Sustentabilidade e Cidadania",
  categoria: "EDUCAÇÃO AMBIENTAL, ARTE E CIDADANIA",
  resumo: "Arte, sustentabilidade e cidadania em uma iniciativa que transforma pneus descartados em novas possibilidades para a comunidade.",
  imagem,
  imagemSecundaria: g3,
  cor: "terracota",
  sobre: [
    "O Pneus que Transformam – Arte, Sustentabilidade e Cidadania é uma iniciativa do Grupo Escoteiro Bugi Vermelho que une educação ambiental, criatividade e participação comunitária para dar novos usos a pneus que seriam descartados.",
    "Por meio de oficinas, atividades educativas e ações coletivas, pneus inservíveis são transformados em brinquedos, floreiras, bancos, jardins, mobiliários e peças artísticas, mostrando na prática como materiais descartados podem ganhar novas funções e contribuir para espaços mais sustentáveis e acolhedores.",
    "O projeto também aproxima crianças, adolescentes, jovens, famílias, educadores, voluntários e moradores de Florânia em experiências que estimulam consciência ambiental, cooperação, protagonismo juvenil e cuidado com os espaços compartilhados.",
  ],
  publico: "Crianças, adolescentes, jovens, famílias, educadores, voluntários, artistas locais e moradores de Florânia/RN.",
  ondeAcontece: "As ações envolvem o Grupo Escoteiro Bugi Vermelho, a comunidade escolar e diferentes espaços públicos e comunitários do município de Florânia.",
  publicos: [
    { titulo: "Crianças e adolescentes", texto: "Participam de atividades educativas e práticas que apresentam, de maneira acessível, temas como reciclagem, reaproveitamento, meio ambiente e responsabilidade coletiva." },
    { titulo: "Jovens e voluntários", texto: "Atuam nas oficinas, mutirões e processos de criação, desenvolvendo protagonismo, trabalho em equipe e participação comunitária." },
    { titulo: "Famílias e comunidade", texto: "São convidadas a participar das ações, acompanhar as transformações dos espaços e fortalecer uma cultura de cuidado, reaproveitamento e preservação ambiental." },
  ],
  atividades: [
    { titulo: "Sensibilizar", texto: "Conversas e atividades sobre descarte adequado, resíduos sólidos, reciclagem, economia circular e preservação ambiental." },
    { titulo: "Imaginar", texto: "Planejamento coletivo de novas possibilidades para os pneus, considerando os espaços onde serão utilizados e as necessidades da comunidade." },
    { titulo: "Criar", texto: "Oficinas de pintura, preparação e transformação dos materiais em brinquedos, floreiras, bancos, jardins e outras peças." },
    { titulo: "Compartilhar", texto: "Mutirões e ações coletivas para instalar as criações, revitalizar espaços e dividir com a comunidade os aprendizados construídos durante o processo." },
  ],
  objetivos: [
    { titulo: "Educação ambiental", texto: "Ampliar a compreensão sobre resíduos, reciclagem, descarte responsável e preservação do meio ambiente." },
    { titulo: "Criatividade", texto: "Estimular novas formas de olhar para materiais descartados e transformá-los por meio da arte e da experimentação." },
    { titulo: "Protagonismo juvenil", texto: "Criar oportunidades para que crianças, adolescentes e jovens participem das decisões, das oficinas e das ações realizadas no território." },
    { titulo: "Trabalho em equipe", texto: "Fortalecer cooperação, responsabilidade e organização por meio de atividades desenvolvidas coletivamente." },
    { titulo: "Cuidado com os espaços públicos", texto: "Incentivar uma relação de pertencimento e responsabilidade com escolas, praças e outros ambientes compartilhados pela comunidade." },
    { titulo: "Sustentabilidade", texto: "Apresentar, na prática, possibilidades de reaproveitamento e economia circular que possam fazer parte do cotidiano." },
  ],
  praticas: [
    { titulo: "Brinquedos e estruturas lúdicas", texto: "Pneus reaproveitados podem ganhar novas formas em espaços destinados à brincadeira, ao movimento e à convivência." },
    { titulo: "Floreiras e jardins", texto: "O material descartado se transforma em suporte para plantas, paisagismo e intervenções que aproximam sustentabilidade e cuidado com os espaços." },
    { titulo: "Bancos e mobiliário", texto: "A criatividade permite transformar pneus em elementos funcionais para escolas, praças e ambientes comunitários." },
    { titulo: "Pintura e expressão artística", texto: "Cores, formas e composições transformam o material e permitem explorar expressão artística e identidade visual." },
    { titulo: "Revitalização de espaços", texto: "As peças produzidas podem integrar mutirões e intervenções voltadas à melhoria de ambientes escolares, públicos e comunitários." },
    { titulo: "Reutilização criativa", texto: "O projeto mostra como materiais que perderam sua função original podem retornar ao ciclo de uso de maneira responsável, funcional e criativa." },
  ],
  etapas: [
    { numero: "01", titulo: "Compreender", texto: "Conhecer o problema do descarte inadequado e conversar sobre seus impactos ambientais e sociais." },
    { numero: "02", titulo: "Planejar", texto: "Escolher coletivamente o que será produzido e pensar onde cada criação poderá ser utilizada." },
    { numero: "03", titulo: "Transformar", texto: "Preparar, pintar e adaptar os pneus em oficinas orientadas e atividades práticas." },
    { numero: "04", titulo: "Ocupar", texto: "Levar as peças para escolas, praças e espaços comunitários, transformando o aprendizado em melhorias visíveis no território." },
  ],
  continuidade: [
    "O projeto foi pensado para ir além de uma ação pontual.",
    "Campanhas de arrecadação de pneus, novas oficinas, participação voluntária e integração das atividades ao calendário do Grupo Escoteiro Bugi Vermelho permitem que novas peças sejam produzidas e que outros espaços possam receber intervenções ao longo do tempo.",
    "As estruturas instaladas em escolas, praças e ambientes comunitários permanecem como parte do território e ajudam a manter viva a mensagem de que reutilizar, cuidar e preservar são responsabilidades compartilhadas.",
  ],
  galeria: [
    { src: g1, legenda: "Imagem ilustrativa: participantes preparando pneus para reutilização" },
    { src: g2, legenda: "Imagem ilustrativa: oficina de pintura e transformação de pneus" },
    { src: g3, legenda: "Imagem ilustrativa: produção coletiva de floreiras sustentáveis" },
    { src: g4, legenda: "Imagem ilustrativa: pneus reaproveitados na criação de brinquedos" },
    { src: g5, legenda: "Imagem ilustrativa: mutirão de revitalização de espaço comunitário" },
    { src: g6, legenda: "Imagem ilustrativa: instalação das peças produzidas durante o projeto" },
  ],
  pagina: {
    altHero: "Imagem ilustrativa de reutilização criativa de pneus",
    altSecundaria: "Imagem ilustrativa de floreiras feitas com pneus reaproveitados",
    sobreTitulo: "Transformar resíduos também é transformar espaços",
    sobreIntro: "O Pneus que Transformam – Arte, Sustentabilidade e Cidadania é uma iniciativa do Grupo Escoteiro Bugi Vermelho que une educação ambiental, criatividade e participação comunitária para dar novos usos a pneus que seriam descartados.",
    sobreParagrafos: [
      "Por meio de oficinas, atividades educativas e ações coletivas, pneus inservíveis são transformados em brinquedos, floreiras, bancos, jardins, mobiliários e peças artísticas, mostrando na prática como materiais descartados podem ganhar novas funções e contribuir para espaços mais sustentáveis e acolhedores.",
      "O projeto também aproxima crianças, adolescentes, jovens, famílias, educadores, voluntários e moradores de Florânia em experiências que estimulam consciência ambiental, cooperação, protagonismo juvenil e cuidado com os espaços compartilhados.",
    ],
    infos: [
      { titulo: "Público", texto: "Crianças, adolescentes, jovens, famílias, educadores, voluntários, artistas locais e moradores de Florânia/RN." },
      { titulo: "Onde acontece", texto: "As ações envolvem o Grupo Escoteiro Bugi Vermelho, a comunidade escolar e diferentes espaços públicos e comunitários do município de Florânia." },
    ],
    publicoTitulo: "Quem participa dessa transformação",
    publicoTexto: "O projeto reúne diferentes pessoas em torno de uma mesma proposta: aprender, criar e cuidar do lugar onde vivem.",
    atividadesTitulo: "Da ideia à transformação",
    atividadesTexto: "Cada atividade combina educação ambiental, criatividade e trabalho coletivo para mostrar que um material descartado pode ganhar novos significados e novas utilidades.",
    praticasMicroLabel: "Práticas do projeto",
    praticasTitulo: "O que pode nascer de um pneu",
    praticasTexto: "A reutilização criativa permite transformar um material descartado em novas possibilidades de uso, convivência, aprendizagem e expressão.",
    etapasTitulo: "Um processo construído coletivamente",
    secaoTextual: {
      microLabel: "Continuidade",
      titulo: "Uma transformação que continua",
      paragrafos: [
        "O projeto foi pensado para ir além de uma ação pontual.",
        "Campanhas de arrecadação de pneus, novas oficinas, participação voluntária e integração das atividades ao calendário do Grupo Escoteiro Bugi Vermelho permitem que novas peças sejam produzidas e que outros espaços possam receber intervenções ao longo do tempo.",
        "As estruturas instaladas em escolas, praças e ambientes comunitários permanecem como parte do território e ajudam a manter viva a mensagem de que reutilizar, cuidar e preservar são responsabilidades compartilhadas.",
      ],
    },
    galeriaTitulo: "Registros das atividades",
    cta: {
      titulo: "Transformar o ambiente começa com novas escolhas",
      paragrafos: [
        "O Pneus que Transformam mostra que educação ambiental, criatividade e participação podem dar novos significados ao que seria descartado.",
        "Conheça outras iniciativas do Bugi Vermelho ou fale conosco para saber mais sobre o projeto e suas ações.",
      ],
    },
  },
}, {
  slug: "bugibox",
  nome: "BugiBox",
  nomeCompleto: "BugiBox – Disciplina, Cidadania e Esporte",
  categoria: "ESPORTE, CIDADANIA E FORMAÇÃO",
  resumo: "Disciplina, cidadania e esporte em uma experiência que utiliza o boxe educativo para fortalecer o desenvolvimento físico, emocional e social de crianças e jovens.",
  imagem: bbHero,
  imagemSecundaria: bbSobre,
  cor: "primary",
  sobre: [
    "O BugiBox – Disciplina, Cidadania e Esporte é uma iniciativa do Grupo Escoteiro Bugi Vermelho 83 desenvolvida no Assentamento João da Cruz, zona rural de Florânia/RN, que utiliza o boxe como instrumento de educação, convivência e formação cidadã.",
    "Mais do que ensinar técnicas esportivas, o projeto trabalha valores como respeito, disciplina, responsabilidade, autocontrole, solidariedade e perseverança, contribuindo para o desenvolvimento físico, emocional e social dos participantes.",
    "Os treinamentos são conduzidos de acordo com a faixa etária, o condicionamento físico e a experiência de cada participante, combinando atividades esportivas, orientações sobre saúde e segurança, momentos de convivência e reflexões sobre cidadania e prevenção da violência.",
  ],
  publico: "Crianças, adolescentes e jovens participantes do Grupo Escoteiro Bugi Vermelho 83.",
  ondeAcontece: "Assentamento João da Cruz, zona rural de Florânia/RN.",
  publicos: [
    { titulo: "Crianças e adolescentes", texto: "Participam de atividades adaptadas à faixa etária, com atenção ao desenvolvimento motor, à disciplina, à convivência e ao aprendizado seguro da modalidade." },
    { titulo: "Jovens", texto: "Encontram no esporte oportunidades para desenvolver condicionamento físico, concentração, confiança, perseverança e responsabilidade." },
    { titulo: "Famílias e comunidade", texto: "A participação das famílias e a relação com a comunidade ajudam a fortalecer os vínculos construídos durante o projeto e a acompanhar o desenvolvimento dos participantes." },
  ],
  atividades: [
    { titulo: "Preparar", texto: "Aquecimento, alongamento e exercícios de coordenação e condicionamento preparam o corpo para as atividades de maneira progressiva e segura." },
    { titulo: "Aprender", texto: "Os participantes conhecem fundamentos do boxe, como movimentação, guarda e técnicas básicas, utilizando equipamentos apropriados." },
    { titulo: "Praticar", texto: "Exercícios de sombra, manoplas, saco de pancadas, desafios esportivos e atividades cooperativas ajudam a desenvolver técnica, concentração e resistência." },
    { titulo: "Refletir", texto: "Rodas de conversa e orientações aproximam o esporte de temas como respeito, autocontrole, cidadania, prevenção da violência e valores escoteiros." },
  ],
  objetivos: [
    { titulo: "Disciplina", texto: "Estimular compromisso, concentração, perseverança e respeito às regras durante os treinamentos e na convivência cotidiana." },
    { titulo: "Condicionamento físico", texto: "Desenvolver coordenação motora, equilíbrio, resistência e hábitos relacionados à prática regular de atividades físicas." },
    { titulo: "Autocontrole", texto: "Aprender a lidar com emoções, limites e desafios, compreendendo o boxe como prática esportiva e educativa." },
    { titulo: "Respeito", texto: "Fortalecer relações baseadas no cuidado com os colegas, com os instrutores, com as regras e com as diferenças." },
    { titulo: "Autoconfiança", texto: "Criar oportunidades para que cada participante reconheça sua evolução, desenvolva autoestima e enfrente novos desafios." },
    { titulo: "Cidadania", texto: "Integrar esporte, educação e princípios do Movimento Escoteiro em experiências que estimulem responsabilidade e participação social." },
  ],
  praticas: [
    { titulo: "Disciplina", texto: "Cumprir compromissos, respeitar regras e compreender a importância da constância." },
    { titulo: "Respeito", texto: "Reconhecer os próprios limites e os dos colegas, valorizando diferenças e relações baseadas no cuidado." },
    { titulo: "Autocontrole", texto: "Entender que força também significa saber controlar emoções, atitudes e reações." },
    { titulo: "Responsabilidade", texto: "Cuidar dos materiais, do espaço, de si mesmo e das pessoas que participam das atividades." },
    { titulo: "Solidariedade", texto: "Apoiar os colegas e compreender que o crescimento também pode ser construído em conjunto." },
    { titulo: "Perseverança", texto: "Aprender com as dificuldades, continuar tentando e reconhecer a importância do esforço ao longo do processo." },
  ],
  etapas: [
    { numero: "01", titulo: "Preparar", texto: "Desenvolver o corpo gradualmente por meio de aquecimento, mobilidade, coordenação e condicionamento." },
    { numero: "02", titulo: "Aprender", texto: "Conhecer fundamentos técnicos, regras, postura esportiva e princípios de segurança." },
    { numero: "03", titulo: "Praticar", texto: "Aplicar o aprendizado em exercícios orientados, respeitando idade, experiência e condições individuais." },
    { numero: "04", titulo: "Evoluir", texto: "Reconhecer avanços físicos e pessoais, fortalecer valores e continuar desenvolvendo autonomia, confiança e responsabilidade." },
  ],
  continuidade: [],
  galeria: [
    { src: bb1, legenda: "Imagem ilustrativa: aquecimento antes do treinamento" },
    { src: bb2, legenda: "Imagem ilustrativa: exercícios com manoplas" },
    { src: bb3, legenda: "Imagem ilustrativa: prática de boxe em saco de pancadas" },
    { src: bb4, legenda: "Imagem ilustrativa: exercícios de coordenação e condicionamento" },
    { src: bb5, legenda: "Imagem ilustrativa: orientação em grupo" },
    { src: bb6, legenda: "Imagem ilustrativa: momento coletivo dos participantes do BugiBox" },
  ],
  pagina: {
    altHero: "Imagem ilustrativa de jovens em treino de boxe educativo com orientação",
    altSecundaria: "Imagem ilustrativa de exercício com manoplas em treino de boxe educativo",
    sobreTitulo: "Esporte como caminho para aprender e crescer",
    sobreIntro: "O BugiBox – Disciplina, Cidadania e Esporte é uma iniciativa do Grupo Escoteiro Bugi Vermelho 83 desenvolvida no Assentamento João da Cruz, zona rural de Florânia/RN, que utiliza o boxe como instrumento de educação, convivência e formação cidadã.",
    sobreParagrafos: [
      "Mais do que ensinar técnicas esportivas, o projeto trabalha valores como respeito, disciplina, responsabilidade, autocontrole, solidariedade e perseverança, contribuindo para o desenvolvimento físico, emocional e social dos participantes.",
      "Os treinamentos são conduzidos de acordo com a faixa etária, o condicionamento físico e a experiência de cada participante, combinando atividades esportivas, orientações sobre saúde e segurança, momentos de convivência e reflexões sobre cidadania e prevenção da violência.",
    ],
    infos: [
      { titulo: "Modalidade", texto: "Boxe educativo e formação cidadã." },
      { titulo: "Local", texto: "Assentamento João da Cruz, zona rural de Florânia/RN." },
    ],
    publicoTitulo: "Quem participa dessa experiência",
    publicoTexto: "O BugiBox é voltado a crianças, adolescentes e jovens participantes do Grupo Escoteiro Bugi Vermelho 83, com atividades adequadas à idade, às condições individuais e ao nível de experiência de cada participante.",
    atividadesTitulo: "Treinar também é aprender",
    atividadesTexto: "Cada encontro combina prática esportiva, desenvolvimento físico, orientação e formação cidadã.",
    praticasMicroLabel: "Valores",
    praticasTitulo: "Muito além do ringue",
    praticasTexto: "O aprendizado construído no BugiBox não termina com o treinamento. Os valores trabalhados durante as atividades ajudam os participantes a lidar com desafios, relações e responsabilidades em diferentes momentos da vida.",
    etapasTitulo: "Um processo construído com orientação e cuidado",
    seguranca: {
      microLabel: "Segurança e cuidado",
      titulo: "Esporte com responsabilidade",
      paragrafos: [
        "A segurança dos participantes faz parte de todas as etapas do BugiBox. Os treinamentos devem respeitar a faixa etária, o condicionamento físico, a experiência e as necessidades individuais de cada pessoa.",
        "O uso de equipamentos adequados, a orientação qualificada, a hidratação e os cuidados de prevenção fazem parte da rotina das atividades.",
        "Exercícios em dupla, práticas com contato e eventual participação em competições somente devem acontecer quando forem adequados à idade e à experiência dos participantes, com supervisão e medidas de proteção apropriadas.",
        "O boxe é desenvolvido com finalidade educativa, esportiva e social. Os conhecimentos adquiridos não devem ser utilizados para ameaçar, intimidar ou agredir outras pessoas.",
      ],
    },
    secaoTextual: {
      microLabel: "Esporte e cidadania",
      titulo: "Oportunidades que vão além do treinamento",
      paragrafos: [
        "Para crianças, adolescentes e jovens com menor acesso contínuo a atividades esportivas e educativas, o BugiBox amplia possibilidades de participação, convivência e desenvolvimento.",
        "O esporte se torna um espaço para aprender a superar desafios, fortalecer vínculos, cuidar da saúde e compreender que evolução não depende apenas de força física, mas também de disciplina, respeito e capacidade de fazer escolhas responsáveis.",
        "Ao integrar o boxe aos princípios do Movimento Escoteiro, o projeto reforça o compromisso do Bugi Vermelho com a formação integral e com a criação de oportunidades para a juventude de Florânia.",
      ],
    },
    galeriaTitulo: "Registros dos treinamentos",
    cta: {
      titulo: "Disciplina para evoluir, respeito para construir",
      paragrafos: [
        "O BugiBox transforma o esporte em uma oportunidade de aprendizagem, convivência e desenvolvimento para crianças, adolescentes e jovens.",
        "Conheça nossos projetos ou fale conosco para saber mais sobre as atividades do Bugi Vermelho.",
      ],
      destaque: "“Disciplina para evoluir, coragem para superar e respeito para construir um futuro melhor.”",
    },
  },
}];
export const getProjeto = (slug: string) => projetos.find((p) => p.slug === slug);
