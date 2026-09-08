import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Compass, Flag, Leaf, Network, Route as RouteIcon } from "lucide-react";
import quemSomosImg from "@/assets/quem-somos.jpg";
import { FeatureHero } from "@/components/site/FeatureHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "História, propósito e forma de atuar de um Ponto de Cultura escoteiro dedicado à educação não formal, ao artesanato e à vida comunitária.",
      },
      { property: "og:title", content: "Quem Somos — Ponto de Cultura Trilha Viva" },
      {
        property: "og:description",
        content: "Educação, escotismo, cultura e participação em uma história construída coletivamente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuemSomos,
});

const marcos = [
  {
    ano: "2018",
    titulo: "Início de uma nova etapa",
    texto: "Organização de atividades educativas e fortalecimento das ações do grupo.",
  },
  {
    ano: "2020",
    titulo: "Novos formatos de participação",
    texto: "Adaptação das atividades e fortalecimento dos vínculos com participantes e famílias.",
  },
  {
    ano: "2022",
    titulo: "Ampliação das experiências",
    texto: "Novas atividades culturais, comunitárias e educativas passaram a integrar a programação.",
  },
  {
    ano: "2025",
    titulo: "Ponto de Cultura",
    texto: "Reconhecimento e fortalecimento da atuação cultural e comunitária.",
  },
  {
    ano: "2026",
    titulo: "Novos caminhos",
    texto: "Ampliação de projetos, registros e ações voltadas à participação, memória e formação.",
  },
];

const valores = ["Respeito", "Cooperação", "Responsabilidade", "Solidariedade", "Autonomia", "Participação"];

const fundamentos = [
  { nome: "Educação", icon: BookOpen, forma: "rounded-full border-inst/20 bg-inst-soft text-inst" },
  { nome: "Comunidade", icon: Network, forma: "rounded-[42%_58%_48%_52%] border-inst/15 bg-background text-inst-deep" },
  { nome: "Natureza", icon: Leaf, forma: "rounded-[65%_35%_65%_35%] border-mata/20 bg-mata-soft text-mata" },
  { nome: "Participação", icon: RouteIcon, forma: "rounded-[48%_52%_38%_62%] border-coral/20 bg-coral-soft text-coral" },
];

function QuemSomos() {
  return (
    <>
      <FeatureHero
        image={quemSomosImg}
        imageAlt="Grupo escoteiro reunido em atividade coletiva ao ar livre"
        eyebrow="Quem Somos"
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
            <p className="eyebrow">Sobre nós</p>
            <h2 className="mt-3 text-[1.8rem] leading-tight text-inst-deep sm:text-[2.35rem]">Uma trajetória construída em conjunto</h2>
            <div className="mt-5 space-y-4 text-[1rem] leading-relaxed text-neutro sm:text-[1.05rem]">
              <p>O Grupo Escoteiro Bugi Vermelho reúne pessoas, experiências e saberes em uma atuação marcada pela educação não formal, pela participação comunitária e pelo compromisso com o desenvolvimento de crianças, adolescentes, jovens e adultos.</p>
              <p>Por meio do escotismo, da cultura, das atividades educativas e da convivência, construímos experiências que fortalecem autonomia, responsabilidade, cooperação, cidadania e pertencimento.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-inst-soft/45">
        <div className="container-site py-18 lg:py-24">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">O que nos orienta</p>
            <h2 className="mt-3 text-[1.8rem] leading-tight text-inst-deep sm:text-[2.35rem]">Missão, visão e valores</h2>
            <p className="mt-4 text-neutro">Princípios que ajudam a orientar nossas escolhas, relações e formas de atuação.</p>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-[1100px] items-center justify-items-center gap-9 md:grid-cols-2 lg:grid-cols-3">
            <Reveal className="group w-full max-w-[305px] transition-transform duration-300 hover:-translate-y-0.5">
              <div className="mission-badge flex h-[320px] flex-col items-center justify-center bg-inst-soft px-10 text-center shadow-soft transition-shadow group-hover:shadow-lift">
                <span className="mb-5 inline-flex size-12 items-center justify-center rounded-full border border-inst/20 bg-background/70 text-inst"><Flag className="size-5" aria-hidden="true" /></span>
                <h3 className="text-[1.45rem] text-inst-deep">Missão</h3>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-neutro">Promover experiências educativas, culturais e comunitárias que estimulem autonomia, responsabilidade, cooperação e participação.</p>
              </div>
            </Reveal>

            <Reveal delay={70} className="group relative flex h-[320px] w-full max-w-[305px] items-center justify-center rounded-full border border-mata/20 bg-mata-soft p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
              <span aria-hidden="true" className="absolute inset-3 rounded-full border border-dashed border-mata/30" />
              <span aria-hidden="true" className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-inst/40" />
              <div className="relative">
                <span className="mx-auto mb-4 inline-flex size-12 items-center justify-center rounded-full border border-mata/20 bg-background/70 text-mata"><Compass className="size-5" aria-hidden="true" /></span>
                <h3 className="text-[1.45rem] text-inst-deep">Visão</h3>
                <p className="mt-4 text-[0.92rem] leading-relaxed text-neutro">Ser reconhecido como um espaço de formação, convivência e participação que contribui para o desenvolvimento das pessoas e da comunidade.</p>
              </div>
            </Reveal>

            <Reveal delay={140} className="group w-full max-w-[305px] transition-transform duration-300 hover:-translate-y-0.5 md:col-span-2 lg:col-span-1">
              <div className="values-patch flex h-[320px] flex-col items-center bg-coral-soft px-9 pt-11 text-center shadow-soft transition-shadow group-hover:shadow-lift">
                <span className="mb-4 inline-flex size-11 items-center justify-center rounded-full border border-coral/20 bg-background/70 text-coral"><Flag className="size-5" aria-hidden="true" /></span>
                <h3 className="text-[1.45rem] text-inst-deep">Valores</h3>
                <ul className="mt-5 flex max-w-[235px] flex-wrap justify-center gap-2">
                  {valores.map((valor) => <li key={valor} className="rounded-full border border-coral/15 bg-background/65 px-2.5 py-1 text-[0.78rem] font-medium text-inst-deep">{valor}</li>)}
                </ul>
              </div>
            </Reveal>
          </ul>
        </div>
      </section>

      <section id="nossa-historia" className="scroll-mt-20 bg-background">
        <div className="container-site py-18 lg:py-24">
          <Reveal className="mx-auto max-w-[760px] text-center">
            <p className="eyebrow">Nossa história</p>
            <h2 className="mt-3 text-[1.8rem] leading-tight text-inst-deep sm:text-[2.35rem]">Uma história construída passo a passo</h2>
            <p className="mt-4 text-neutro">Conheça alguns momentos que ajudam a contar a trajetória do Grupo Escoteiro Bugi Vermelho.</p>
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
          <p className="mt-2 text-center text-xs text-muted-foreground">Anos e marcos demonstrativos.</p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-inst-soft/40">
        <span aria-hidden="true" className="absolute -left-20 top-12 size-52 rounded-full border-[14px] border-coral/7" />
        <span aria-hidden="true" className="absolute -right-20 bottom-0 size-64 rounded-full bg-mata/6" />
        <div className="container-site py-18 lg:py-24">
          <Reveal className="mx-auto max-w-[800px] text-center">
            <p className="eyebrow">Nosso jeito de caminhar</p>
            <h2 className="mt-3 text-[1.8rem] leading-tight text-inst-deep sm:text-[2.35rem]">Uma organização feita de pessoas, experiências e compromisso</h2>
            <p className="mt-4 text-neutro">Mais do que realizar atividades, buscamos criar espaços de convivência, aprendizado, participação e cuidado que acompanhem cada pessoa ao longo da sua caminhada.</p>
          </Reveal>
          <ul className="mx-auto mt-11 grid max-w-[900px] grid-cols-2 gap-7 md:grid-cols-4">
            {fundamentos.map(({ nome, icon: Icon, forma }, i) => (
              <Reveal as="li" key={nome} delay={i * 55} className="text-center">
                <span className={`mx-auto flex size-24 items-center justify-center border ${forma}`}><Icon className="size-8" aria-hidden="true" /></span>
                <p className="mt-4 font-display text-[0.95rem] font-semibold text-inst-deep">{nome}</p>
              </Reveal>
            ))}
          </div>
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
              <h2 className="text-[1.55rem] leading-tight sm:text-[1.9rem]">Conheça quem constrói essa história.</h2>
              <p className="mx-auto mt-3 max-w-[680px] text-[0.95rem] leading-relaxed text-primary-foreground/80">Encontre as pessoas que ajudam a transformar ideias, experiências e atividades em uma caminhada construída coletivamente.</p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/quem-somos/equipe" className="btn-base glass-btn-light w-full sm:w-auto">Conheça nossa equipe<ArrowRight className="size-4" aria-hidden="true" /></Link>
                <Link to="/contato" className="btn-base glass-btn-ghost w-full sm:w-auto">Fale conosco</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
