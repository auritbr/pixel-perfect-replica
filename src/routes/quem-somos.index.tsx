import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Compass, Flag, Leaf, Network, Route as RouteIcon } from "lucide-react";
import quemSomosImg from "@/assets/quem-somos.jpg";
import { FeatureHero } from "@/components/site/FeatureHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Grupo Escoteiro Bugi Vermelho" },
      {
        name: "description",
        content:
          "Uma história construída com educação, escotismo, cultura, participação e compromisso com a comunidade.",
      },
      { property: "og:title", content: "Quem Somos — Grupo Escoteiro Bugi Vermelho" },
      {
        property: "og:description",
        content: "Uma história construída com educação, escotismo, cultura, participação e compromisso com a comunidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuemSomos,
});

const marcos = [
  {
    ano: "12 DE JUNHO DE 2011",
    titulo: "Fundação do Grupo Escoteiro Bugi Vermelho 83",
    texto: "Nasce em Florânia/RN uma organização dedicada à educação não formal e à formação cidadã de crianças e jovens por meio do Método Escoteiro.",
  },
  {
    ano: "AO LONGO DA TRAJETÓRIA",
    titulo: "Presença nas comunidades de Florânia",
    texto: "O grupo fortalece sua atuação junto a territórios periféricos do município, desenvolvendo atividades nos bairros Rainha do Prado e Paz e Amor e ampliando sua relação com crianças, jovens e famílias.",
  },
  {
    ano: "FORTALECIMENTO DA ATUAÇÃO",
    titulo: "Escotismo, cidadania e inclusão social",
    texto: "As experiências desenvolvidas pelo grupo passam a integrar de forma cada vez mais direta educação, vida ao ar livre, civismo, cultura de paz, participação comunitária e valorização do território.",
  },
  {
    ano: "ATUAÇÃO NA ZONA RURAL",
    titulo: "Assentamento João da Cruz",
    texto: "O Distrito Assentamento João da Cruz passa a ocupar lugar central na atuação do grupo, aproximando o Método Escoteiro da realidade rural e fortalecendo atividades relacionadas à Caatinga, à memória comunitária, à sustentabilidade e à convivência com o semiárido.",
  },
  {
    ano: "PONTO DE CULTURA",
    titulo: "Cultura viva no sertão",
    texto: "O reconhecimento como Ponto de Cultura fortalece uma trajetória que já conectava escotismo, educação, memória, cultura, território e participação comunitária, ampliando as possibilidades de preservação e compartilhamento desses saberes.",
  },
  {
    ano: "HOJE",
    titulo: "Uma caminhada que continua",
    texto: "Sob a direção do Chefe Jucélio de Araújo Rufino, o Bugi Vermelho mantém viva uma atuação sustentada pelo voluntariado e pelo compromisso com a formação de crianças e jovens, fortalecendo sua presença na zona rural e em territórios periféricos de Florânia.",
  },
];

const fundamentos = [
  { nome: "EDUCAÇÃO", texto: "Aprender pela experiência e pelo Método Escoteiro.", icon: BookOpen, forma: "rounded-full border-inst/20 bg-inst-soft text-inst" },
  { nome: "COMUNIDADE", texto: "Construir vínculos, participar e servir ao próximo.", icon: Network, forma: "rounded-[42%_58%_48%_52%] border-inst/15 bg-background text-inst-deep" },
  { nome: "CAATINGA", texto: "Conhecer, valorizar e preservar o território onde vivemos.", icon: Leaf, forma: "rounded-[65%_35%_65%_35%] border-mata/20 bg-mata-soft text-mata" },
  { nome: "CIDADANIA", texto: "Desenvolver autonomia, responsabilidade e participação social.", icon: RouteIcon, forma: "rounded-[48%_52%_38%_62%] border-coral/20 bg-coral-soft text-coral" },
];

function QuemSomos() {
  return (
    <>
      <FeatureHero
        image={quemSomosImg}
        imageAlt="Grupo escoteiro reunido em atividade coletiva ao ar livre"
        eyebrow="QUEM SOMOS"
        title="Quem Somos"
        description="Uma história construída com educação, escotismo, cultura, participação e compromisso com a comunidade."
        crumbs={[{ label: "Quem Somos" }]}
        primaryAction={{ label: "Conheça nossa história", href: "#nossa-historia", icon: "down" }}
        secondaryAction={{ label: "Fale conosco", to: "/contato", icon: "arrow" }}
      />

      <section className="relative isolate overflow-hidden bg-background">
        <span aria-hidden="true" className="absolute -left-20 top-20 size-44 rounded-full bg-coral/6" />
        <span aria-hidden="true" className="absolute -right-12 bottom-12 size-32 rounded-tl-full border-l-8 border-t-8 border-inst/8" />
        <div className="container-site py-16 lg:py-20">
          <Reveal className="mx-auto max-w-[820px] text-center">
            <p className="eyebrow">SOBRE NÓS</p>
            <h2 className="mt-3 text-[1.8rem] leading-tight text-inst-deep sm:text-[2.35rem]">Uma trajetória construída no território</h2>
            <div className="mt-5 space-y-4 text-[1rem] leading-relaxed text-neutro sm:text-[1.05rem]">
              <p>Fundado em 12 de junho de 2011, o Grupo Escoteiro Bugi Vermelho 83 é uma organização civil de caráter educacional e cultural, sem fins lucrativos, filiada à União dos Escoteiros do Brasil (UEB).</p>
              <p>Com atuação em Florânia/RN, o grupo desenvolve ações de educação não formal, cultura, cidadania, vida ao ar livre e participação comunitária, especialmente junto a crianças e jovens de territórios rurais e periféricos do município.</p>
              <p>Ao longo de sua trajetória, o Bugi Vermelho esteve presente em comunidades como os bairros Rainha do Prado e Paz e Amor e, atualmente, concentra parte importante de suas atividades no Distrito Assentamento João da Cruz, na zona rural de Florânia.</p>
              <p>Por meio do Método Escoteiro, construímos experiências que estimulam autonomia, responsabilidade, solidariedade, liderança, preservação ambiental e pertencimento, sempre em diálogo com a realidade das comunidades onde atuamos.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-inst-soft/45">
        <div className="container-site py-18 lg:py-24">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">O QUE NOS ORIENTA</p>
            <h2 className="mt-3 text-[1.8rem] leading-tight text-inst-deep sm:text-[2.35rem]">Missão, visão e valores</h2>
            <p className="mt-4 text-neutro">Princípios que orientam nossa atuação, nossas escolhas e a forma como construímos cada experiência junto às crianças, aos jovens, às famílias e à comunidade.</p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-[1100px] items-center justify-items-center gap-9 md:grid-cols-2 lg:grid-cols-3">
            <Reveal className="group w-full max-w-[305px] transition-transform duration-300 hover:-translate-y-0.5">
              <div className="mission-badge flex min-h-[520px] flex-col items-center bg-inst-soft px-8 pb-24 pt-12 text-center shadow-soft transition-shadow group-hover:shadow-lift">
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-full border border-inst/20 bg-background/70 text-inst"><Flag className="size-5" aria-hidden="true" /></span>
                <h3 className="text-[1.45rem] text-inst-deep">Missão</h3>
                <p className="mt-4 max-w-[225px] text-[0.86rem] leading-[1.55] text-neutro">Promover a educação não formal de crianças e jovens da zona rural e periférica de Florânia através do Método Escoteiro, com o firme propósito de formar cidadãos autônomos, solidários e líderes comunitários capazes de superar as barreiras da vulnerabilidade social e atuar diretamente na transformação da realidade do sertão.</p>
              </div>
            </Reveal>

            <Reveal delay={70} className="group relative flex min-h-[520px] w-full max-w-[305px] items-center justify-center rounded-full border border-mata/20 bg-mata-soft px-9 py-20 text-center shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
              <span aria-hidden="true" className="absolute inset-3 rounded-full border border-dashed border-mata/30" />
              <span aria-hidden="true" className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-inst/40" />
              <div className="relative">
                <span className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-full border border-mata/20 bg-background/70 text-mata"><Compass className="size-5" aria-hidden="true" /></span>
                <h3 className="text-[1.45rem] text-inst-deep">Visão</h3>
                <p className="mt-4 text-[0.86rem] leading-[1.55] text-neutro">Ser reconhecido no Rio Grande do Norte como a principal referência em Escotismo Social e Rural da região do Seridó, consolidando-se como um Ponto de Cultura que integra a preservação do bioma Caatinga, o resgate da memória histórica dos assentamentos e a formação continuada de juventudes protagonistas na região do Seridó.</p>
              </div>
            </Reveal>

            <Reveal delay={140} className="group w-full max-w-[305px] transition-transform duration-300 hover:-translate-y-0.5 md:col-span-2 lg:col-span-1">
              <div className="values-patch flex min-h-[520px] flex-col items-center bg-coral-soft px-9 pb-24 pt-11 text-center shadow-soft transition-shadow group-hover:shadow-lift">
                <span className="mb-4 inline-flex size-11 items-center justify-center rounded-full border border-coral/20 bg-background/70 text-coral"><Flag className="size-5" aria-hidden="true" /></span>
                <h3 className="text-[1.45rem] text-inst-deep">Valores</h3>
                <p className="mt-4 max-w-[235px] text-[0.86rem] leading-[1.55] text-neutro">Nossa atuação é pautada pelo civismo e pela cidadania ativa, promovendo a inclusão radical sem distinção de raça ou classe e defendendo a sustentabilidade sertaneja com respeito ao bioma local, sempre alicerçados na disciplina consciente e no espírito de voluntariado para servir ao próximo sem esperar recompensas.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="nossa-historia" className="scroll-mt-20 bg-background">
        <div className="container-site py-18 lg:py-24">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">NOSSA HISTÓRIA</p>
            <h2 className="mt-3 text-[1.8rem] leading-tight text-inst-deep sm:text-[2.35rem]">Uma caminhada construída junto à comunidade</h2>
            <p className="mt-4 text-neutro">A trajetória do Grupo Escoteiro Bugi Vermelho acompanha também os territórios, as famílias e as diferentes gerações que fizeram parte de sua história.</p>
          </Reveal>

          <ol className="relative mx-auto mt-12 max-w-[900px] pl-8 md:pl-0">
            <span aria-hidden="true" className="absolute bottom-3 left-[7px] top-3 w-0.5 bg-inst/15 md:left-1/2 md:-translate-x-1/2" />
            {marcos.map((marco, i) => (
              <Reveal as="li" key={marco.ano} delay={(i % 2) * 60} className={`relative mb-7 md:flex md:w-1/2 ${i % 2 === 0 ? "md:justify-end md:pr-10" : "md:ml-auto md:justify-start md:pl-10"}`}>
                <span aria-hidden="true" className={`absolute left-[-31px] top-7 size-4 rounded-full border-4 border-background bg-inst shadow-[0_0_0_1px_rgb(47_85_200_/_0.16)] md:left-auto ${i % 2 === 0 ? "md:-right-2" : "md:-left-2"}`} />
                <div className="w-full max-w-[370px] rounded-[19px] border border-inst-deep/7 bg-background/70 p-5 shadow-[0_8px_24px_rgb(15_30_50_/_0.05)] backdrop-blur-sm">
                  <p className="font-display text-[1.2rem] font-bold text-inst">{marco.ano}</p>
                  <h3 className="mt-1.5 text-[1.05rem] text-inst-deep">{marco.titulo}</h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-neutro">{marco.texto}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-inst-soft/40">
        <span aria-hidden="true" className="absolute -left-20 top-12 size-52 rounded-full border-[14px] border-coral/7" />
        <span aria-hidden="true" className="absolute -right-20 bottom-0 size-64 rounded-full bg-mata/6" />
        <div className="container-site py-18 lg:py-24">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="eyebrow">NOSSO JEITO DE CAMINHAR</p>
            <h2 className="mt-3 text-[1.8rem] leading-tight text-inst-deep sm:text-[2.35rem]">Escotismo que nasce do território e volta para a comunidade</h2>
            <p className="mt-4 text-neutro">Mais do que realizar atividades, o Bugi Vermelho constrói experiências que aproximam educação, natureza, cultura e participação. Cada encontro é uma oportunidade de aprender fazendo, conviver com respeito, assumir responsabilidades e compreender o próprio papel na comunidade.</p>
          </Reveal>
          <ul className="mx-auto mt-11 grid max-w-[900px] grid-cols-2 gap-7 md:grid-cols-4">
            {fundamentos.map(({ nome, texto, icon: Icon, forma }, i) => (
              <Reveal as="li" key={nome} delay={i * 55} className="text-center">
                <span className={`mx-auto flex size-24 items-center justify-center border ${forma}`}><Icon className="size-8" aria-hidden="true" /></span>
                <p className="mt-4 font-display text-[0.95rem] font-semibold text-inst-deep">{nome}</p>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-neutro">{texto}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="container-site">
          <div className="relative isolate mx-auto flex min-h-[200px] max-w-[1100px] items-center justify-center overflow-hidden rounded-[26px] bg-inst-deep px-6 py-10 text-center text-primary-foreground sm:px-10">
            <span aria-hidden="true" className="absolute -left-10 -top-10 size-32 rounded-full bg-coral/20" />
            <span aria-hidden="true" className="absolute -bottom-16 -right-10 size-44 rounded-full border-[10px] border-inst/45" />
            <span aria-hidden="true" className="absolute bottom-8 left-12 size-2.5 rounded-full bg-mata/80" />
            <svg aria-hidden="true" viewBox="0 0 300 60" className="absolute right-1/4 top-5 hidden h-8 w-44 text-primary-foreground/25 sm:block"><path d="M2,48 C70,6 150,58 298,14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round" /></svg>
            <div className="relative mx-auto max-w-[730px]">
              <h2 className="text-[1.55rem] leading-tight sm:text-[1.9rem]">Faça parte dessa história</h2>
              <p className="mx-auto mt-3 max-w-[680px] text-[0.95rem] leading-relaxed text-primary-foreground/80">A trajetória do Grupo Escoteiro Bugi Vermelho é construída com a participação de crianças, jovens, famílias, voluntários, instituições e parceiros.</p>
              <p className="mx-auto mt-3 max-w-[680px] text-[0.95rem] leading-relaxed text-primary-foreground/80">Acompanhe nossas ações, conheça nossos projetos e ajude a fortalecer o trabalho desenvolvido em Florânia e nas comunidades onde o grupo está presente.</p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/projetos" className="btn-base glass-btn-light w-full sm:w-auto">Conheça nossos projetos<ArrowRight className="size-4" aria-hidden="true" /></Link>
                <Link to="/contato" className="btn-base glass-btn-ghost w-full sm:w-auto">Fale conosco</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
