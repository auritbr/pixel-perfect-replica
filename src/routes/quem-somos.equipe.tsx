import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { equipe } from "@/data/equipe";
import { Breadcrumbs } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/equipe-hero.jpg";
import ctaImg from "@/assets/equipe-cta.jpg";
import r01 from "@/assets/retrato-01.jpg";
import r02 from "@/assets/retrato-02.jpg";
import r03 from "@/assets/retrato-03.jpg";
import r04 from "@/assets/retrato-04.jpg";
import r05 from "@/assets/retrato-05.jpg";
import r06 from "@/assets/retrato-06.jpg";
import r07 from "@/assets/retrato-07.jpg";
import r08 from "@/assets/retrato-08.jpg";
import r09 from "@/assets/retrato-09.jpg";
import r10 from "@/assets/retrato-10.jpg";
import r11 from "@/assets/retrato-11.jpg";
import r12 from "@/assets/retrato-12.jpg";

export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Conheça as pessoas que constroem o trabalho do Ponto de Cultura Trilha Viva: gestão, coordenação, educadores e voluntários da comunidade.",
      },
      { property: "og:title", content: "Equipe — Ponto de Cultura Trilha Viva" },
      {
        property: "og:description",
        content: "Pessoas que constroem essa caminhada, entre cultura, educação, escotismo e comunidade.",
      },
    ],
  }),
  component: Equipe,
});

const retratos = [r01, r02, r03, r04, r05, r06, r07, r08, r09, r10, r11, r12];

const atuacoes = [
  { label: "Cultura", ponto: "bg-primary" },
  { label: "Educação", ponto: "bg-verde" },
  { label: "Gestão", ponto: "bg-primary-deep" },
  { label: "Arte", ponto: "bg-terracota" },
  { label: "Comunicação", ponto: "bg-gold" },
  { label: "Formação", ponto: "bg-verde" },
  { label: "Comunidade", ponto: "bg-terracota" },
];

/* Vocabulário de formas reutilizável desta página: círculo, cápsula, arco, blob e ponto.
   Cada integrante recebe uma combinação diferente do mesmo sistema visual. */
type Composicao = { atras: string; detalhe: string };

const composicoes: Composicao[] = [
  {
    atras: "-left-6 -top-4 size-[86%] rounded-full bg-bege/70",
    detalhe: "right-4 -top-2 h-1.5 w-12 rounded-full bg-primary/40",
  },
  {
    atras: "-right-7 top-3 h-[80%] w-[62%] -rotate-12 rounded-full bg-primary/12",
    detalhe: "left-1 top-6 size-5 rounded-full bg-gold/70",
  },
  {
    atras: "-left-5 top-6 size-[88%] rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-primary/10",
    detalhe: "right-6 bottom-4 size-3 rounded-full bg-terracota/70",
  },
  {
    atras: "-right-4 -top-3 size-[84%] rounded-[58%_42%_45%_55%/50%_58%_42%_50%] bg-bege/80",
    detalhe: "left-3 bottom-6 h-10 w-10 rounded-tl-full border-t-2 border-l-2 border-verde/50",
  },
  {
    atras: "-left-8 top-2 h-[82%] w-[58%] rotate-6 rounded-full bg-primary/12",
    detalhe: "right-2 top-4 size-4 rounded-full bg-gold/80",
  },
  {
    atras: "-right-6 top-5 size-[86%] rounded-full bg-primary/8",
    detalhe: "left-5 -top-1 h-1.5 w-10 rounded-full bg-terracota/50",
  },
];

function Retrato({
  src,
  nome,
  cargo,
  comp,
}: {
  src: string;
  nome: string;
  cargo: string;
  comp: Composicao;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[260px] px-2">
      <span aria-hidden="true" className={`pointer-events-none absolute -z-10 ${comp.atras}`} />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -z-10 transition-transform duration-[250ms] group-hover:translate-x-1 group-hover:-translate-y-1 ${comp.detalhe}`}
      />
      <div className="overflow-hidden rounded-[46%_54%_52%_48%/50%_48%_52%_50%]">
        <img
          src={src}
          alt={`Retrato de ${nome}, ${cargo} da organização`}
          loading="lazy"
          width={640}
          height={640}
          className="aspect-square w-full object-cover transition-transform duration-[250ms] group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}

function Equipe() {
  return (
    <>
      {/* HERO FOTOGRÁFICO COM TRANSIÇÃO ORGÂNICA */}
      <section className="relative isolate overflow-hidden bg-primary-deep">
        <img
          src={heroImg}
          alt="Educadores e voluntários escoteiros reunidos em atividade coletiva ao ar livre"
          width={1920}
          height={912}
          className="h-[300px] w-full object-cover sm:h-[360px] lg:h-[520px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary-deep/35 via-transparent to-transparent"
        />
        {/* formas gráficas entrando pelas laterais */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 top-10 hidden size-40 rounded-full border-[10px] border-gold/60 sm:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 top-14 hidden h-28 w-14 rounded-full bg-primary/45 sm:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 top-48 hidden size-10 rounded-full bg-primary/25 lg:block"
        />

        <div className="container-site absolute left-0 right-0 top-6">
          <div className="text-primary-foreground [&_a]:text-primary-foreground/80">
            <Breadcrumbs items={[{ label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]} tone="dark" />
          </div>
        </div>

        {/* curva orgânica suave de transição para o fundo claro */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-[46px] w-full sm:h-[64px]"
        >
          <path
            d="M0,66 C240,18 420,86 720,56 C1010,27 1200,80 1440,40 L1440,90 L0,90 Z"
            fill="var(--background)"
          />
        </svg>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="relative isolate overflow-hidden bg-background">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-6 h-64 w-24 rounded-full bg-primary/8"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-40 size-56 rounded-full bg-bege/60"
        />
        <div className="container-site py-14 lg:py-20">
          <div className="max-w-[1180px]">
            <Reveal>
              <p className="eyebrow">Equipe</p>
              <h1 className="mt-4 max-w-2xl text-3xl leading-tight text-primary-deep sm:text-4xl lg:text-[2.7rem]">
                Quem faz este trabalho acontecer
              </h1>
              <div className="mt-6 max-w-[820px] space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Por trás de cada projeto, oficina, encontro e ação comunitária existe uma equipe comprometida
                  com a construção de experiências que unem cultura, educação, escotismo e participação
                  comunitária.
                </p>
                <p>
                  Nossa atuação reúne diferentes saberes e experiências, conectando gestão cultural, formação
                  educativa, comunicação, atividades artísticas, trabalho voluntário e organização institucional
                  para fortalecer o trabalho desenvolvido junto à comunidade.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="relative mt-10">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-8 -top-6 -z-10 h-24 w-48 rounded-[60%_40%_50%_50%/55%_50%_50%_45%] bg-primary/8"
                />
                <ul className="flex flex-wrap gap-2.5">
                  {atuacoes.map((a) => (
                    <li key={a.label}>
                      <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-offwhite px-3.5 py-1.5 text-[0.84rem] text-primary-deep">
                        <span aria-hidden="true" className={`size-1.5 rounded-full ${a.ponto}`} />
                        {a.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EQUIPE */}
      <section className="relative isolate overflow-hidden bg-background">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-24 size-72 rounded-full bg-primary/6"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 hidden h-72 w-28 rounded-full bg-primary/10 lg:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-[52%] hidden size-56 rounded-full bg-bege/35 lg:block"
        />

        <div className="container-site pb-16 pt-6 lg:pb-24 lg:pt-10">
          <Reveal>
            <p className="eyebrow">Nossa equipe</p>
            <h2 className="mt-3 max-w-xl text-2xl text-primary-deep sm:text-[1.9rem]">
              Pessoas que constroem essa caminhada
            </h2>
            <p className="mt-4 max-w-[640px] text-base text-muted-foreground">
              Conheça quem contribui com diferentes experiências, saberes e responsabilidades para que cada
              atividade aconteça.
            </p>
          </Reveal>

          <ul className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-24">
            {equipe.map((pessoa, i) => (
              <Reveal as="li" key={pessoa.nome} delay={(i % 4) * 60}>
                <div className="group text-center">
                  <Retrato
                    src={retratos[i % retratos.length]!}
                    nome={pessoa.nome}
                    cargo={pessoa.cargo}
                    comp={composicoes[i % composicoes.length]!}
                  />
                  <h3 className="mt-6 font-display text-[1.2rem] font-bold text-primary-deep transition-colors duration-[250ms] group-hover:text-primary">
                    {pessoa.nome}
                  </h3>
                  <p className="mt-1.5 text-[0.95rem] text-muted-foreground">{pessoa.cargo}</p>
                  {pessoa.email ? (
                    <a
                      href={`mailto:${pessoa.email}`}
                      aria-label={`Enviar e-mail para ${pessoa.nome}`}
                      className="mt-3 inline-block max-w-full break-words text-[0.82rem] text-primary/80 underline decoration-primary/25 underline-offset-4 transition-colors hover:text-primary"
                    >
                      {pessoa.email}
                    </a>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA COMPACTO */}
      <section className="bg-background pb-20">
        <div className="container-site">
          <div className="relative isolate mx-auto max-w-[1180px] overflow-hidden rounded-[26px] bg-primary-deep text-primary-foreground">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-14 -left-12 size-44 rounded-full border-[10px] border-gold/40"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/3 top-6 size-8 rounded-full bg-primary-foreground/15"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 300 60"
              className="pointer-events-none absolute bottom-6 left-24 h-10 w-52 text-gold/40"
            >
              <path
                d="M2,48 C70,6 150,58 298,14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="3 8"
                strokeLinecap="round"
              />
            </svg>

            <div className="grid items-stretch gap-0 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative p-8 lg:p-11">
                <h2 className="max-w-sm text-2xl leading-tight sm:text-[1.8rem]">
                  Cada projeto começa com pessoas.
                </h2>
                <p className="mt-3 max-w-md text-sm text-primary-foreground/80">
                  Conheça as iniciativas que transformam diferentes experiências, conhecimentos e encontros em
                  ações construídas com a comunidade.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to="/projetos"
                    className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-display text-sm font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
                  >
                    Conheça nossos projetos
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-3 font-display text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
                  >
                    Fale conosco
                  </Link>
                </div>
              </div>
              <div className="relative min-h-[180px]">
                <img
                  src={ctaImg}
                  alt="Mãos de voluntários reunidas em roda, com lenços escoteiros"
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
