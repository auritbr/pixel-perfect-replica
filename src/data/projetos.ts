import imagem from "@/assets/pneus-transformam-provisorio.jpg";
import g1 from "@/assets/pneus-galeria-1.jpg";
import g2 from "@/assets/pneus-galeria-2.jpg";
import g3 from "@/assets/pneus-galeria-3.jpg";
import g4 from "@/assets/pneus-galeria-4.jpg";
import g5 from "@/assets/pneus-galeria-5.jpg";
import g6 from "@/assets/pneus-galeria-6.jpg";

type TextoProjeto = { titulo: string; texto: string };
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
}];
export const getProjeto = (slug: string) => projetos.find((p) => p.slug === slug);
