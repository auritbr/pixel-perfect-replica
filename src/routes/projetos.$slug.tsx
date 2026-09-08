import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Eye,
  HandHeart,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Map,
  Recycle,
  Route as RouteIcon,
  Share2,
  Sparkles,
  TentTree,
  UserRound,
  Users,
} from "lucide-react";

import { FeatureHero } from "@/components/site/FeatureHero";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Reveal } from "@/components/site/Reveal";
import { getProjeto } from "@/data/projetos";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const projeto = getProjeto(params.slug);
    if (!projeto) throw notFound();
    return { projeto };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Projeto não encontrado — Trilha Viva" }, { name: "robots", content: "noindex" }],
      };
    }
    const { projeto } = loaderData;
    return {
      meta: [
        { title: `${projeto.nome} — Ponto de Cultura Trilha Viva` },
        { name: "description", content: projeto.resumo },
        { property: "og:title", content: `${projeto.nome} — Trilha Viva` },
        { property: "og:description", content: projeto.resumo },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjetoDetalhe,
});

const visualPorProjeto = {
  "maos-que-criam": {
    hero: "Criação, artesanato e aprendizagem em experiências que valorizam o fazer manual, a sustentabilidade e a troca de saberes.",
    sobreTitulo: "Criar, experimentar e aprender juntos",
    Icone: Sparkles,
    acento: "text-coral",
    fundoIcone: "bg-coral-soft",
    fundoSuave: "bg-inst-soft/40",
    barra: "bg-coral",
    formaImagem: "border-coral/25",
    chamada: "Criar com as mãos também é construir autonomia.",
    apoio: "Conheça os ciclos da oficina e converse com a equipe sobre participação e colaboração.",
    principioFinal: {
      titulo: "Refletir",
      texto: "Reconhecer escolhas, aprendizados e novas possibilidades depois de cada criação.",
    },
  },
  "trilhas-de-saberes": {
    hero: "Educação não formal, natureza e experiências que transformam o caminho em oportunidade de aprender.",
    sobreTitulo: "Aprender com o caminho, o território e a experiência",
    Icone: Compass,
    acento: "text-mata",
    fundoIcone: "bg-mata-soft",
    fundoSuave: "bg-mata-soft/45",
    barra: "bg-mata",
    formaImagem: "border-mata/25",
    chamada: "Cada percurso abre uma nova forma de aprender.",
    apoio: "Saiba como participar das próximas atividades de campo e encontros de preparação.",
    principioFinal: {
      titulo: "Interpretar",
      texto: "Relacionar os registros de campo às histórias, paisagens e aprendizados do território.",
    },
  },
  "construindo-comunidade": {
    hero: "Participação, cidadania e convivência em ações construídas junto ao território e à comunidade.",
    sobreTitulo: "Participação que fortalece vínculos",
    Icone: HandHeart,
    acento: "text-inst",
    fundoIcone: "bg-inst-soft",
    fundoSuave: "bg-coral-soft/35",
    barra: "bg-inst",
    formaImagem: "border-coral/20",
    chamada: "O território se fortalece quando o cuidado é compartilhado.",
    apoio: "Converse com a equipe e conheça as próximas ações construídas com a comunidade.",
    principioFinal: {
      titulo: "Cuidar",
      texto: "Acompanhar o que foi construído e manter responsabilidades compartilhadas no tempo.",
    },
  },
} as const;

const iconesPublico = [UserRound, Compass, HeartHandshake] as const;
const iconesPrincipios = [Sparkles, Eye, Share2, Lightbulb] as const;
const iconesObjetivos = [Compass, Lightbulb, Users, Leaf, HandHeart] as const;
const iconesSaberes = [Sparkles, Map, Recycle, TentTree, Share2, Leaf] as const;

function CabecalhoSecao({
  microLabel,
  titulo,
  texto,
}: {
  microLabel: string;
  titulo: string;
  texto?: string;
}) {
  return (
    <div className="mx-auto max-w-[800px] text-center">
      <p className="font-display text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-inst">{microLabel}</p>
      <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight text-inst-deep sm:text-[2.15rem]">{titulo}</h2>
      {texto ? <p className="mx-auto mt-4 max-w-[780px] text-[0.98rem] leading-relaxed text-neutro">{texto}</p> : null}
    </div>
  );
}

function ProjetoDetalhe() {
  const { projeto } = Route.useLoaderData();
  const visual = visualPorProjeto[projeto.slug as keyof typeof visualPorProjeto] ?? visualPorProjeto["construindo-comunidade"];
  const IconeProjeto = visual.Icone;
  const principios = [...projeto.atividades, visual.principioFinal];
  const mostraResultados = projeto.slug !== "trilhas-de-saberes";

  return (
    <>
      <FeatureHero
        image={projeto.imagem}
        imageAlt={`Participantes durante uma atividade do projeto ${projeto.nome}`}
        eyebrow="Projeto"
        title={projeto.nome}
        description={visual.hero}
        crumbs={[{ label: "Projetos", to: "/projetos" }, { label: projeto.nome }]}
        primaryAction={{ label: "Conheça o projeto", href: "#sobre-projeto", icon: "down" }}
        secondaryAction={{ label: "Fale conosco", to: "/contato", icon: "arrow" }}
      />

      {/* SOBRE */}
      <section id="sobre-projeto" className="relative scroll-mt-20 overflow-hidden bg-background">
        <span aria-hidden="true" className="pointer-events-none absolute -left-16 top-28 size-40 rounded-full bg-inst-soft/55" />
        <div className="container-site py-20 lg:py-24">
          <Reveal>
            <CabecalhoSecao microLabel="Sobre o projeto" titulo={visual.sobreTitulo} texto={projeto.sobre[0]} />
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-[1040px] items-center gap-10 lg:grid-cols-[1fr_460px] lg:gap-16">
            <Reveal>
              <div className="max-w-[500px] text-[0.98rem] leading-relaxed text-neutro">
                <p>{projeto.sobre[1]}</p>
                <dl className="mt-7 grid gap-4 border-t border-inst-deep/10 pt-6 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <dt className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-inst">Público</dt>
                    <dd className="mt-1.5 text-sm text-inst-deep">{projeto.publico}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-inst">Periodicidade</dt>
                    <dd className="mt-1.5 text-sm text-inst-deep">{projeto.periodicidade}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="relative mx-auto w-full max-w-[460px] pb-5 pl-5">
                <span aria-hidden="true" className={cn("pointer-events-none absolute -bottom-2 -left-1 size-40 rounded-full border-[12px]", visual.formaImagem)} />
                <span aria-hidden="true" className="pointer-events-none absolute -right-5 top-7 h-28 w-12 rotate-12 rounded-full bg-mata-soft" />
                <span aria-hidden="true" className="pointer-events-none absolute -right-2 bottom-0 size-3 rounded-full bg-coral" />
                <img
                  src={projeto.imagemSecundaria}
                  alt={`Detalhe das atividades do projeto ${projeto.nome}`}
                  width={460}
                  height={320}
                  loading="lazy"
                  className="relative h-[290px] w-full rounded-[24px] object-cover shadow-soft sm:h-[320px]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PÚBLICO */}
      <section className="relative overflow-hidden bg-muted/55">
        <div className="container-site py-20 lg:py-24">
          <Reveal>
            <CabecalhoSecao microLabel="Público" titulo="Quem participa desta experiência" texto={projeto.publico} />
          </Reveal>
          <ul className="mx-auto mt-12 grid max-w-[1080px] gap-5 md:grid-cols-3">
            {projeto.publicos.map((item, i) => {
              const Icone = iconesPublico[i] ?? Users;
              return (
                <Reveal as="li" key={item.titulo} delay={i * 60}>
                  <article className="relative h-full overflow-hidden rounded-[23px] border border-inst-deep/8 bg-card/75 p-6 shadow-soft">
                    {i === 0 ? <span aria-hidden="true" className="pointer-events-none absolute -right-7 -top-8 size-24 rounded-full border-[9px] border-coral/12" /> : null}
                    {i === 1 ? <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-inst-soft/80" /> : null}
                    {i === 2 ? <span aria-hidden="true" className="pointer-events-none absolute right-5 top-5 h-px w-20 border-t border-dashed border-mata/45" /> : null}
                    <div className="relative flex items-center justify-between">
                      <span className={cn("inline-flex size-12 items-center justify-center rounded-[15px]", visual.fundoIcone)}>
                        <Icone className={cn("size-5", visual.acento)} aria-hidden="true" />
                      </span>
                      <span className="font-display text-[0.72rem] font-semibold text-inst/55">0{i + 1}</span>
                    </div>
                    <h3 className="relative mt-5 text-[1.06rem] font-semibold text-inst-deep">{item.titulo}</h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-neutro">{item.texto}</p>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* PRINCÍPIOS EM PERCURSO */}
      <section className="relative overflow-hidden bg-background">
        <div className="container-site py-20 lg:py-24">
          <Reveal>
            <CabecalhoSecao microLabel="Atividades" titulo="Aprender fazendo, observar e compartilhar" texto="Cada experiência combina ação, atenção ao processo, troca entre participantes e reflexão sobre o que foi aprendido." />
          </Reveal>
          <ol className="relative mx-auto mt-14 grid max-w-[1120px] gap-8 md:grid-cols-4 md:gap-5">
            <span aria-hidden="true" className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden border-t border-dashed border-inst/25 md:block" />
            {principios.map((item, i) => {
              const Icone = iconesPrincipios[i] ?? IconeProjeto;
              return (
                <Reveal as="li" key={item.titulo} delay={i * 55} className="relative">
                  <div className="relative flex gap-4 md:block md:text-center">
                    <div className={cn("relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-full border border-inst/15 bg-background shadow-soft", visual.acento)}>
                      <Icone className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-inst/65 md:mt-5">0{i + 1}</p>
                      <h3 className="mt-1 text-[1rem] font-semibold text-inst-deep">{item.titulo}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutro">{item.texto}</p>
                    </div>
                    {i < principios.length - 1 ? <span aria-hidden="true" className="pointer-events-none absolute bottom-[-2rem] left-7 h-8 border-l border-dashed border-inst/25 md:hidden" /> : null}
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className={cn("relative overflow-hidden", visual.fundoSuave)}>
        <div className="container-site py-20 lg:py-24">
          <Reveal><CabecalhoSecao microLabel="Objetivos" titulo="O que o projeto busca desenvolver" /></Reveal>
          <ul className="mx-auto mt-12 grid max-w-[1040px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projeto.objetivos.map((objetivo, i) => {
              const Icone = iconesObjetivos[i] ?? Compass;
              return (
                <Reveal as="li" key={objetivo.titulo} delay={i * 45}>
                  <article className="relative flex h-full gap-4 overflow-hidden rounded-[19px] border border-inst-deep/7 bg-card p-5 shadow-soft">
                    <span aria-hidden="true" className={cn("absolute bottom-0 left-0 top-0 w-1", visual.barra)} />
                    <Icone className={cn("mt-0.5 size-[18px] shrink-0", visual.acento)} aria-hidden="true" />
                    <div>
                      <h3 className="text-[0.98rem] font-semibold text-inst-deep">{objetivo.titulo}</h3>
                      <p className="mt-1.5 text-[0.84rem] leading-relaxed text-neutro">{objetivo.texto}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* SABERES */}
      <section className="relative overflow-hidden bg-background">
        <span aria-hidden="true" className="pointer-events-none absolute -right-20 top-24 size-52 rounded-full border-[14px] border-inst-soft/80" />
        <div className="container-site py-20 lg:py-24">
          <Reveal>
            <CabecalhoSecao microLabel="Práticas do projeto" titulo="Saberes desenvolvidos nas atividades" texto="Cada prática é conduzida como experiência cultural e educativa, respeitando o ritmo do grupo e valorizando o conhecimento compartilhado." />
          </Reveal>
          <ul className="mx-auto mt-14 grid max-w-[1080px] gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projeto.artesanato.map((saber, i) => {
              const Icone = iconesSaberes[i] ?? Sparkles;
              return (
                <Reveal as="li" key={saber.titulo} delay={(i % 3) * 55}>
                  <div className="group relative min-h-[190px] px-4 pt-4 text-center">
                    <span aria-hidden="true" className={cn("pointer-events-none absolute left-1/2 top-0 size-24 -translate-x-1/2 opacity-80", i % 3 === 0 ? "rounded-full bg-inst-soft" : i % 3 === 1 ? "h-20 rounded-full border-[9px] border-mata-soft" : "h-24 w-12 rounded-full bg-coral-soft")} />
                    <span className={cn("relative mx-auto inline-flex size-12 items-center justify-center rounded-full border border-inst-deep/8 bg-card shadow-soft", visual.acento)}>
                      <Icone className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="relative mt-5 text-[1.02rem] font-semibold text-inst-deep">{saber.titulo}</h3>
                    <p className="relative mx-auto mt-2 max-w-[280px] text-sm leading-relaxed text-neutro">{saber.itens.join(" • ")}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="bg-muted/55">
        <div className="container-site py-20 lg:py-24">
          <Reveal><CabecalhoSecao microLabel="Como acontece" titulo="As etapas de cada ciclo" /></Reveal>
          <ol className="mx-auto mt-14 max-w-[1120px] md:flex md:items-start">
            {projeto.etapas.map((etapa, i) => (
              <Reveal as="li" key={etapa.numero} delay={i * 55} className="relative flex pb-9 last:pb-0 md:flex-1 md:pb-0">
                <div className="relative mr-5 flex shrink-0 flex-col items-center md:mr-0 md:w-full md:flex-row md:items-start">
                  <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-inst/20 bg-inst-soft font-display text-[0.82rem] font-bold text-inst">{etapa.numero}</span>
                  {i < projeto.etapas.length - 1 ? (
                    <span aria-hidden="true" className="absolute bottom-[-2.25rem] left-6 top-12 border-l border-dashed border-inst/30 md:bottom-auto md:left-12 md:right-0 md:top-6 md:border-l-0 md:border-t" />
                  ) : null}
                  {i < projeto.etapas.length - 1 ? <ArrowRight aria-hidden="true" className="absolute right-3 top-[18px] z-10 hidden size-3.5 bg-muted text-inst/55 md:block" /> : null}
                </div>
                <div className="pt-1 md:absolute md:left-0 md:right-5 md:top-[68px] md:text-center">
                  <h3 className="text-[0.98rem] font-semibold text-inst-deep">{etapa.titulo}</h3>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-neutro">{etapa.texto}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <div className="hidden h-[104px] md:block" aria-hidden="true" />
        </div>
      </section>

      {/* CONTEÚDO ESPECÍFICO EXISTENTE — sem os indicadores de Trilhas */}
      {mostraResultados ? (
        <section className="bg-inst-soft/35">
          <div className="container-site py-14 lg:py-16">
            <dl className="mx-auto grid max-w-[960px] grid-cols-2 gap-7 lg:grid-cols-4">
              {projeto.resultados.map((resultado) => (
                <div key={resultado.rotulo} className="border-l border-inst/18 pl-4">
                  <dt className="font-display text-[1.7rem] font-semibold text-inst-deep">{resultado.valor}</dt>
                  <dd className="mt-1 text-[0.82rem] text-neutro">{resultado.rotulo}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      {/* GALERIA */}
      <section className="relative overflow-hidden bg-background">
        <span aria-hidden="true" className="pointer-events-none absolute -left-16 top-36 h-40 w-20 rounded-full bg-mata-soft/70" />
        <div className="container-site py-20 lg:py-24">
          <Reveal><CabecalhoSecao microLabel="Galeria do projeto" titulo="Registros das atividades" /></Reveal>
          <div className="mx-auto mt-12 max-w-[1120px]">
            <GalleryGrid fotos={projeto.galeria} colunas={3} variavel />
          </div>
        </div>
      </section>

      {/* CTA NO MESMO SISTEMA VISUAL DA EQUIPE */}
      <section className="bg-background px-5 pb-20 lg:pb-24">
        <div className="relative isolate mx-auto flex min-h-[200px] max-w-[1100px] items-center justify-center overflow-hidden rounded-[26px] bg-inst-deep px-6 py-10 text-center text-primary-foreground sm:px-10">
          <span aria-hidden="true" className="pointer-events-none absolute -left-10 -top-10 size-32 rounded-full bg-coral/20" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-10 size-44 rounded-full border-[10px] border-inst/45" />
          <span aria-hidden="true" className="pointer-events-none absolute bottom-8 left-12 size-2.5 rounded-full bg-mata/80" />
          <svg aria-hidden="true" viewBox="0 0 300 60" className="pointer-events-none absolute right-1/4 top-5 hidden h-8 w-44 text-primary-foreground/25 sm:block">
            <path d="M2,48 C70,6 150,58 298,14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round" />
          </svg>
          <div className="relative mx-auto max-w-[680px]">
            <IconeProjeto className="mx-auto mb-4 size-5 text-primary-foreground/65" aria-hidden="true" />
            <h2 className="text-[1.55rem] font-semibold leading-tight sm:text-[1.9rem]">{visual.chamada}</h2>
            <p className="mx-auto mt-3 max-w-[620px] text-[0.94rem] leading-relaxed text-primary-foreground/80">{visual.apoio}</p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contato" className="btn-base glass-btn-light w-full sm:w-auto">Fale conosco</Link>
              <Link to="/projetos" className="btn-base glass-btn-ghost w-full sm:w-auto">Conheça outros projetos</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}