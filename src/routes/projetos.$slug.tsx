import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Badge,
  Crosshair,
  Dumbbell,
  Flag,
  Medal,
  Route as RouteIcon,
  Scale,
  ShieldCheck,
  Target,
  Timer,
  Compass,
  Eye,
  HandHeart,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Map,
  Recycle,
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
        meta: [{ title: "Projeto não encontrado — Grupo Escoteiro Bugi Vermelho" }, { name: "robots", content: "noindex" }],
      };
    }
    const { projeto } = loaderData;
    return {
      meta: [
        { title: `${projeto.nomeCompleto} — Grupo Escoteiro Bugi Vermelho` },
        { name: "description", content: projeto.resumo },
        { property: "og:title", content: `${projeto.nomeCompleto} — Grupo Escoteiro Bugi Vermelho` },
        { property: "og:description", content: projeto.resumo },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjetoDetalhe,
});

type Icone = typeof Recycle;
type Visual = {
  Icone: Icone;
  acento: string;
  fundoIcone: string;
  fundoSuave: string;
  barra: string;
  formaImagem: string;
  publico: Icone[];
  principios: Icone[];
  objetivos: Icone[];
  saberes: Icone[];
};

const visuais: Record<"terracota" | "primary" | "verde", Visual> = {
  terracota: {
    Icone: Recycle,
    acento: "text-coral",
    fundoIcone: "bg-coral-soft",
    fundoSuave: "bg-inst-soft/40",
    barra: "bg-coral",
    formaImagem: "border-coral/25",
    publico: [UserRound, Compass, HeartHandshake],
    principios: [Sparkles, Eye, Share2, Lightbulb],
    objetivos: [Compass, Lightbulb, Users, Leaf, HandHeart],
    saberes: [Sparkles, Map, Recycle, TentTree, Share2, Leaf],
  },
  primary: {
    Icone: Target,
    acento: "text-inst",
    fundoIcone: "bg-inst-soft",
    fundoSuave: "bg-inst-soft/40",
    barra: "bg-inst",
    formaImagem: "border-inst/20",
    publico: [UserRound, Compass, HeartHandshake],
    principios: [Timer, Lightbulb, Dumbbell, Users],
    objetivos: [Flag, Dumbbell, Scale, HandHeart, Medal, Users],
    saberes: [Flag, HeartHandshake, Scale, ShieldCheck, Users, RouteIcon],
  },
  verde: {
    Icone: Leaf,
    acento: "text-mata",
    fundoIcone: "bg-mata-soft",
    fundoSuave: "bg-mata-soft/40",
    barra: "bg-mata",
    formaImagem: "border-mata/25",
    publico: [UserRound, Compass, HeartHandshake],
    principios: [Sparkles, Eye, Share2, Lightbulb],
    objetivos: [Compass, Lightbulb, Users, Leaf, HandHeart],
    saberes: [Sparkles, Map, Leaf, TentTree, Share2, Compass],
  },
};

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
  const pagina = projeto.pagina;
  const visual = visuais[projeto.cor];
  const IconeProjeto = visual.Icone;
  const principios = projeto.atividades;
  const ehBox = projeto.cor === "primary";

  return (
    <>
      <FeatureHero
        image={projeto.imagem}
        imageAlt={pagina.altHero}
        eyebrow="PROJETO"
        title={projeto.nome}
        description={projeto.resumo}
        crumbs={[{ label: "Projetos", to: "/projetos" }, { label: projeto.nome }]}
        primaryAction={{ label: "Conheça o projeto", href: "#sobre-projeto", icon: "down" }}
        secondaryAction={{ label: "Fale conosco", to: "/contato", icon: "arrow" }}
      />

      {/* SOBRE */}
      <section id="sobre-projeto" className="relative scroll-mt-20 overflow-hidden bg-background">
        <span aria-hidden="true" className="pointer-events-none absolute -left-16 top-28 size-40 rounded-full bg-inst-soft/55" />
        <div className="container-site py-20 lg:py-24">
          <Reveal>
            <CabecalhoSecao microLabel="Sobre o projeto" titulo={pagina.sobreTitulo} texto={pagina.sobreIntro} />
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-[1000px] items-center gap-10 lg:grid-cols-[1fr_420px] lg:gap-14">
            <Reveal>
              <div className="max-w-[500px] text-[0.98rem] leading-relaxed text-neutro">
                {pagina.sobreParagrafos.map((texto, i) => <p key={texto} className={i > 0 ? "mt-4" : undefined}>{texto}</p>)}
                <dl className="mt-7 grid gap-4 border-t border-inst-deep/10 pt-6 sm:grid-cols-2 lg:grid-cols-1">
                  {pagina.infos.map((info) => (
                    <div key={info.titulo}>
                      <dt className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-inst">{info.titulo}</dt>
                      <dd className="mt-1.5 text-sm text-inst-deep">{info.texto}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="relative mx-auto w-full max-w-[420px] pb-5 pl-5">
                <span aria-hidden="true" className={cn("pointer-events-none absolute -bottom-2 -left-1 size-40 rounded-full border-[12px]", visual.formaImagem)} />
                <span aria-hidden="true" className="pointer-events-none absolute -right-5 top-7 h-28 w-12 rotate-12 rounded-full bg-mata-soft" />
                <span aria-hidden="true" className={cn("pointer-events-none absolute -right-2 bottom-0 size-3 rounded-full", visual.barra)} />
                <img
                  src={projeto.imagemSecundaria}
                  alt={pagina.altSecundaria}
                   width={420}
                   height={300}
                  loading="lazy"
                   className="relative h-[280px] w-full rounded-[22px] object-cover shadow-soft sm:h-[300px]"
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
            <CabecalhoSecao microLabel="Público" titulo={pagina.publicoTitulo} texto={pagina.publicoTexto} />
          </Reveal>
          <ul className="mx-auto mt-12 grid max-w-[1080px] gap-5 md:grid-cols-3">
            {projeto.publicos.map((item, i) => {
              const Icone = visual.publico[i] ?? Users;
              return (
                <Reveal as="li" key={item.titulo} delay={i * 60}>
                  <article className="relative h-full overflow-hidden rounded-[23px] border border-inst-deep/8 bg-card/75 p-6 shadow-soft">
                    {ehBox ? (
                      <>
                        {i === 0 ? <Crosshair aria-hidden="true" className="pointer-events-none absolute right-5 top-5 size-8 text-inst/12" strokeWidth={1.2} /> : null}
                        {i === 1 ? <svg aria-hidden="true" viewBox="0 0 80 24" className="pointer-events-none absolute right-5 top-6 h-5 w-16 text-inst/25"><path d="M2 12 C14 2 26 22 40 12 S66 2 78 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" strokeLinecap="round" /></svg> : null}
                        {i === 2 ? <span aria-hidden="true" className="pointer-events-none absolute -right-4 -top-4 size-16 rounded-full border-[7px] border-mata/12" /> : null}
                      </>
                    ) : (
                      <>
                        {i === 0 ? <Badge aria-hidden="true" className="pointer-events-none absolute right-5 top-5 size-8 text-coral/12" strokeWidth={1.2} /> : null}
                        {i === 1 ? <span aria-hidden="true" className="pointer-events-none absolute right-5 top-7 w-16 border-t border-dashed border-inst/25" /> : null}
                        {i === 2 ? <Users aria-hidden="true" className="pointer-events-none absolute right-5 top-5 size-8 text-mata/14" strokeWidth={1.1} /> : null}
                      </>
                    )}
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
            <CabecalhoSecao microLabel="Atividades" titulo={pagina.atividadesTitulo} texto={pagina.atividadesTexto} />
          </Reveal>
          <ol className="relative mx-auto mt-14 max-w-[1080px] space-y-7 pl-1 md:grid md:grid-cols-4 md:gap-5 md:space-y-0 md:pt-8">
            <svg aria-hidden="true" viewBox="0 0 1000 120" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-[8%] top-0 hidden h-24 w-[84%] text-inst/25 md:block">
              <path d="M8 62 C120 8 220 104 340 56 S570 16 680 62 S865 102 992 46" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 9" strokeLinecap="round" />
            </svg>
            {principios.map((item, i) => {
              const Icone = visual.principios[i] ?? IconeProjeto;
              return (
                <Reveal as="li" key={item.titulo} delay={i * 55} className="relative">
                   <div className="relative flex gap-4 md:block md:text-center">
                     <div className={cn("relative z-10 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-inst/15 bg-background shadow-soft", visual.acento)}>
                       <Icone className="size-[18px]" aria-hidden="true" />
                    </div>
                    <div>
                       <p className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-inst/65 md:mt-4">0{i + 1}</p>
                      <h3 className="mt-1 text-[1rem] font-semibold text-inst-deep">{item.titulo}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutro">{item.texto}</p>
                    </div>
                     {i < principios.length - 1 ? <span aria-hidden="true" className="pointer-events-none absolute bottom-[-1.75rem] left-[21px] h-7 border-l border-dashed border-inst/25 md:hidden" /> : null}
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
              const Icone = visual.objetivos[i] ?? Compass;
              return (
                <Reveal as="li" key={objetivo.titulo} delay={i * 45}>
                   <article className="relative flex h-full gap-4 overflow-hidden rounded-[18px] border border-inst-deep/7 bg-card p-5 shadow-[0_5px_16px_rgb(18_38_64_/_0.025)]">
                     <span aria-hidden="true" className={cn("absolute right-4 top-4 size-2 rounded-full opacity-50", visual.barra)} />
                     <span className={cn("inline-flex size-9 shrink-0 items-center justify-center rounded-[12px]", visual.fundoIcone)}>
                       <Icone className={cn("size-[17px]", visual.acento)} aria-hidden="true" />
                     </span>
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
            <CabecalhoSecao microLabel={pagina.praticasMicroLabel} titulo={pagina.praticasTitulo} texto={pagina.praticasTexto} />
          </Reveal>
           <ul className="mx-auto mt-12 grid max-w-[1080px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projeto.praticas.map((saber, i) => {
              const Icone = visual.saberes[i] ?? Sparkles;
              return (
                <Reveal as="li" key={saber.titulo} delay={(i % 3) * 55}>
                   <article className="group relative min-h-[180px] overflow-hidden rounded-[21px] border border-inst-deep/7 bg-card/80 p-5 shadow-[0_6px_20px_rgb(18_38_64_/_0.03)]">
                     <span aria-hidden="true" className={cn("pointer-events-none absolute -bottom-5 -right-5 opacity-60", i % 3 === 0 ? "size-16 rounded-full border-[7px] border-inst-soft" : i % 3 === 1 ? "h-16 w-8 rounded-full bg-mata-soft" : "size-12 rounded-t-full border-[6px] border-coral-soft")} />
                     <span className={cn("relative inline-flex size-11 items-center justify-center rounded-[14px]", i % 3 === 0 ? "bg-inst-soft text-inst" : i % 3 === 1 ? "bg-mata-soft text-mata" : "bg-coral-soft text-coral")}>
                       <Icone className="size-5" aria-hidden="true" />
                    </span>
                     <h3 className="relative mt-4 text-[1.02rem] font-semibold text-inst-deep">{saber.titulo}</h3>
                     <p className="relative mt-2 text-[0.84rem] leading-relaxed text-neutro">{saber.texto}</p>
                   </article>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ETAPAS */}
      <section className="bg-muted/55">
        <div className="container-site py-20 lg:py-24">
          <Reveal><CabecalhoSecao microLabel="Como acontece" titulo={pagina.etapasTitulo} /></Reveal>
          <div className="mx-auto mt-14 max-w-[1140px] px-0 sm:px-6">
            <div className="mx-[calc(12.5%-24px)] hidden grid-cols-[auto_1fr_auto_1fr_auto_1fr_auto] items-center md:grid">
              {projeto.etapas.map((etapa, i) => (
                <div key={etapa.numero} className="contents">
                  <span className="inline-flex size-12 items-center justify-center rounded-full border border-inst/20 bg-inst-soft font-display text-[0.82rem] font-bold text-inst">{etapa.numero}</span>
                  {i < projeto.etapas.length - 1 ? <span aria-hidden="true" className="relative mx-3 h-px bg-inst/20"><ArrowRight className="absolute -right-0.5 -top-[6px] size-3.5 bg-muted text-inst/55" /></span> : null}
                </div>
              ))}
            </div>
            <ol className="mt-6 hidden grid-cols-4 md:grid">
              {projeto.etapas.map((etapa) => (
                <li key={etapa.numero} className="px-4 text-center">
                  <h3 className="text-[0.98rem] font-semibold text-inst-deep">{etapa.titulo}</h3>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-neutro">{etapa.texto}</p>
                </li>
              ))}
            </ol>
            <ol className="space-y-0 md:hidden">
              {projeto.etapas.map((etapa, i) => (
                <li key={etapa.numero} className="relative grid grid-cols-[48px_1fr] gap-5 pb-8 last:pb-0">
                  <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-inst/20 bg-inst-soft font-display text-[0.82rem] font-bold text-inst">{etapa.numero}</span>
                  {i < projeto.etapas.length - 1 ? <span aria-hidden="true" className="absolute bottom-0 left-6 top-12 border-l border-dashed border-inst/25" /> : null}
                  <div className="pt-1"><h3 className="text-[0.98rem] font-semibold text-inst-deep">{etapa.titulo}</h3><p className="mt-1.5 text-[0.84rem] leading-relaxed text-neutro">{etapa.texto}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {pagina.seguranca ? (
        <section className="relative overflow-hidden bg-offwhite">
          <span aria-hidden="true" className="pointer-events-none absolute -left-14 bottom-10 size-36 rounded-full border-[10px] border-inst-soft/80" />
          <span aria-hidden="true" className="pointer-events-none absolute right-[8%] top-16 h-20 w-10 rotate-12 rounded-full bg-mata-soft/60" />
          <div className="container-site relative py-20 lg:py-24">
            <Reveal>
              <span className="mx-auto mb-5 flex size-12 items-center justify-center rounded-full border border-inst/15 bg-background text-inst shadow-soft">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <CabecalhoSecao microLabel={pagina.seguranca.microLabel} titulo={pagina.seguranca.titulo} />
            </Reveal>
            <Reveal className="mx-auto mt-8 max-w-[760px] space-y-4 text-center text-[0.98rem] leading-relaxed text-neutro">
              {pagina.seguranca.paragrafos.map((texto) => <p key={texto}>{texto}</p>)}
            </Reveal>
          </div>
        </section>
      ) : null}

      {pagina.secaoTextual ? (
        <section className="bg-background">
          <div className="container-site py-20 lg:py-24">
            <Reveal><CabecalhoSecao microLabel={pagina.secaoTextual.microLabel} titulo={pagina.secaoTextual.titulo} /></Reveal>
            <Reveal className="mx-auto mt-8 max-w-[800px] space-y-4 text-center text-[0.98rem] leading-relaxed text-neutro">
              {pagina.secaoTextual.paragrafos.map((texto) => <p key={texto}>{texto}</p>)}
            </Reveal>
          </div>
        </section>
      ) : null}

      {/* GALERIA */}
      <section className="relative overflow-hidden bg-background">
        <span aria-hidden="true" className="pointer-events-none absolute -left-16 top-36 h-40 w-20 rounded-full bg-mata-soft/70" />
        <div className="container-site py-20 lg:py-24">
          <Reveal><CabecalhoSecao microLabel="Galeria do projeto" titulo={pagina.galeriaTitulo} /></Reveal>
          <div className="mx-auto mt-12 max-w-[1120px]">
            <GalleryGrid fotos={projeto.galeria} colunas={3} variavel singleColumnMobile />
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
            <h2 className="text-[1.55rem] font-semibold leading-tight sm:text-[1.9rem]">{pagina.cta.titulo}</h2>
            {pagina.cta.paragrafos.map((texto) => (
              <p key={texto} className="mx-auto mt-3 max-w-[620px] text-[0.94rem] leading-relaxed text-primary-foreground/80">{texto}</p>
            ))}
            {pagina.cta.destaque ? <p className="mx-auto mt-4 max-w-[560px] text-[0.86rem] italic leading-relaxed text-primary-foreground/65">{pagina.cta.destaque}</p> : null}
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contato" className="btn-base glass-btn-light w-full sm:w-auto">Fale conosco</Link>
              <Link to="/projetos" className="btn-base glass-btn-ghost w-full sm:w-auto">Conheça nossos projetos</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}