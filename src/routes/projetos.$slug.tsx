import { createFileRoute, notFound } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { CalendarDays, Compass, HandHeart, Leaf, Route as RouteIcon, Sparkles, Users } from "lucide-react";
import { getProjeto, projetos } from "@/data/projetos";
import { Breadcrumbs } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Reveal } from "@/components/site/Reveal";
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
      ],
    };
  },
  component: ProjetoDetalhe,
});

const acento: Record<string, string> = {
  primary: "text-primary",
  verde: "text-verde",
  terracota: "text-terracota",
};

const fundoAcento: Record<string, string> = {
  primary: "bg-primary",
  verde: "bg-verde",
  terracota: "bg-terracota",
};

const projetoVisual = {
  "maos-que-criam": {
    Icone: Sparkles,
    detalhe: "bg-terracota/10",
    ponto: "bg-terracota",
    chamada: "Criar com as mãos também é construir autonomia.",
    apoio: "Conheça os ciclos da oficina e converse com a equipe sobre participação e colaboração.",
  },
  "trilhas-de-saberes": {
    Icone: Compass,
    detalhe: "bg-mata/10",
    ponto: "bg-mata",
    chamada: "Cada percurso abre uma nova forma de aprender.",
    apoio: "Saiba como participar das próximas atividades de campo e encontros de preparação.",
  },
  "construindo-comunidade": {
    Icone: HandHeart,
    detalhe: "bg-inst/10",
    ponto: "bg-inst",
    chamada: "O território se fortalece quando o cuidado é compartilhado.",
    apoio: "Converse com a equipe e conheça as próximas ações construídas com a comunidade.",
  },
} as const;

function ProjetoDetalhe() {
  const { projeto } = Route.useLoaderData();
  // Pequena variação de composição entre os projetos, mantendo a mesma estrutura.
  const inverte = projeto.slug === "trilhas-de-saberes";
  const visual = projetoVisual[projeto.slug as keyof typeof projetoVisual] ?? projetoVisual["construindo-comunidade"];
  const IconeProjeto = visual.Icone;

  return (
    <>
      {/* HERO DO PROJETO */}
      <section className="relative isolate overflow-hidden bg-primary-deep">
        <img
          src={projeto.imagem}
          alt={`Atividade do projeto ${projeto.nome}`}
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/80 to-primary-deep/40" />
        <div className="container-site relative py-20 text-primary-foreground lg:py-28">
          <Breadcrumbs items={[{ label: "Projetos", to: "/projetos" }, { label: projeto.nome }]} tone="dark" />
          <span
            className={cn(
              "inline-block rounded-full px-3 py-1 font-display text-[0.68rem] font-bold uppercase tracking-wider",
              fundoAcento[projeto.cor],
            )}
          >
            {projeto.categoria}
          </span>
          <h1 className="mt-5 max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-[3rem]">{projeto.nome}</h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 lg:text-lg">{projeto.resumo}</p>
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            <div className="flex items-start gap-2">
              <Users className="mt-0.5 size-4 text-gold" aria-hidden="true" />
              <div>
                <dt className="font-display text-xs font-bold uppercase tracking-wider text-primary-foreground/60">
                  Público
                </dt>
                <dd className="mt-1 max-w-xs text-primary-foreground/85">{projeto.publico}</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CalendarDays className="mt-0.5 size-4 text-gold" aria-hidden="true" />
              <div>
                <dt className="font-display text-xs font-bold uppercase tracking-wider text-primary-foreground/60">
                  Quando acontece
                </dt>
                <dd className="mt-1 max-w-xs text-primary-foreground/85">{projeto.periodicidade}</dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      {/* SOBRE O PROJETO */}
      <section className="bg-background">
        <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal className={inverte ? "lg:order-2" : ""}>
            <SectionHeader eyebrow="Sobre o projeto" titulo="Objetivo, contexto e forma de realização" />
            <div className="mt-5 space-y-4 text-base text-muted-foreground">
              {projeto.sobre.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80} className={inverte ? "lg:order-1" : ""}>
            <img
              src={projeto.imagemSecundaria}
              alt={`Detalhe das atividades do projeto ${projeto.nome}`}
              loading="lazy"
              className={cn(
                "w-full object-cover shadow-soft",
                inverte ? "aspect-4/3 rounded-2xl" : "aspect-4/3 rounded-tl-[3rem] rounded-br-[3rem]",
              )}
            />
          </Reveal>
        </div>
      </section>

      {/* PÚBLICO */}
      <section className="relative overflow-hidden bg-offwhite">
        <span aria-hidden="true" className={cn("pointer-events-none absolute -right-14 top-14 size-36 rounded-full", visual.detalhe)} />
        <div className="container-site py-16 lg:py-20">
          <SectionHeader eyebrow="Público" titulo="Quem participa desta experiência" texto={projeto.publico} />
          <ul className="mt-9 grid gap-4 md:grid-cols-3">
            {projeto.publicos.map((item, i) => (
              <Reveal as="li" key={item.titulo} delay={i * 50}>
                <div className="h-full border-t border-inst-deep/10 pt-5">
                  <span className={cn("inline-flex size-9 items-center justify-center rounded-[12px]", visual.detalhe)}>
                    <Users className={cn("size-4", acento[projeto.cor])} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-primary-deep">{item.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.texto}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ATIVIDADES */}
      <section className="relative overflow-hidden bg-background">
        <span aria-hidden="true" className={cn("pointer-events-none absolute -left-12 bottom-12 h-36 w-16 rotate-6 rounded-full", visual.detalhe)} />
        <div className="container-site py-16 lg:py-20">
          <SectionHeader eyebrow="Atividades" titulo="Aprender fazendo, observar e compartilhar" />
          <ul className="mt-9 grid gap-5 md:grid-cols-3">
            {projeto.atividades.map((atividade, i) => (
              <Reveal as="li" key={atividade.titulo} delay={i * 55}>
                <div className="relative h-full overflow-hidden rounded-[18px] border border-inst-deep/7 bg-card/72 p-6 shadow-[0_8px_24px_rgb(18_38_64_/_0.035)]">
                  <span aria-hidden="true" className={cn("absolute -right-5 -top-6 size-16 rounded-full", visual.detalhe)} />
                  <IconeProjeto className={cn("relative size-5", acento[projeto.cor])} aria-hidden="true" />
                  <h3 className="relative mt-5 text-lg font-semibold text-primary-deep">{atividade.titulo}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{atividade.texto}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="bg-offwhite">
        <div className="container-site py-16 lg:py-24">
          <SectionHeader eyebrow="Objetivos" titulo="O que o projeto busca desenvolver" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projeto.objetivos.map((o, i) => (
              <Reveal as="li" key={o.titulo} delay={i * 50}>
                <div className="h-full rounded-xl border border-border/60 bg-card p-6">
                  <span className={cn("font-display text-sm font-bold", acento[projeto.cor])}>
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-base text-primary-deep">{o.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{o.texto}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PRÁTICAS DO PROJETO */}
      <section className="bg-bege">
        <div className="container-site py-16 lg:py-24">
          <SectionHeader
            eyebrow="Práticas do projeto"
            titulo="Saberes desenvolvidos nas atividades"
            texto="Cada prática é conduzida como experiência cultural e educativa, respeitando o ritmo do grupo e valorizando o conhecimento compartilhado."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projeto.artesanato.map((a, i) => (
              <Reveal as="li" key={a.titulo} delay={i * 60}>
                <div className="paper-texture h-full rounded-xl bg-offwhite p-6 shadow-soft">
                   <span className="stitch mb-4 block w-14" aria-hidden="true" />
                  <h3 className="text-base text-primary-deep">{a.titulo}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {a.itens.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-terracota"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* COMO ACONTECE */}
      <section className="bg-background">
        <div className="container-site py-16 lg:py-24">
          <SectionHeader eyebrow="Como acontece" titulo="As etapas de cada ciclo" />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projeto.etapas.map((e, i) => (
              <Reveal as="li" key={e.numero} delay={i * 60}>
                <div className="border-t-2 border-gold pt-4">
                  <p className="font-display text-sm font-bold text-gold">{e.numero}</p>
                  <h3 className="mt-1 text-base text-primary-deep">{e.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.texto}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* GALERIA */}
      <section className="bg-offwhite">
        <div className="container-site py-16 lg:py-24">
          <SectionHeader eyebrow="Galeria do projeto" titulo="Registros das atividades" />
          <div className="mt-10">
            <GalleryGrid fotos={projeto.galeria} colunas={3} variavel />
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="bg-background">
        <div className="container-site py-14 lg:py-20">
          {/* Indicadores demonstrativos. */}
          <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {projeto.resultados.map((r) => (
              <li key={r.rotulo} className="border-t-2 border-border pt-4">
                <p className="font-display text-3xl font-bold text-primary-deep">{r.valor}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.rotulo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

       <section className="bg-background px-5 pb-20 pt-4 lg:pb-24">
         <div className="relative mx-auto flex min-h-[220px] max-w-[1100px] items-center overflow-hidden rounded-[27px] bg-inst-deep px-7 py-10 text-primary-foreground sm:px-12">
           <span aria-hidden="true" className={cn("pointer-events-none absolute -left-8 -top-10 size-32 rounded-full border-[13px]", projeto.cor === "terracota" ? "border-terracota/24" : projeto.cor === "verde" ? "border-mata/24" : "border-inst/30")} />
           <span aria-hidden="true" className="pointer-events-none absolute -right-5 bottom-5 h-24 w-12 rounded-full border-8 border-ceu/22" />
           <span aria-hidden="true" className={cn("pointer-events-none absolute right-[20%] top-8 size-2.5 rounded-full", visual.ponto)} />
           <div className="relative max-w-[720px]">
             <h2 className="text-[1.7rem] font-semibold leading-tight sm:text-[2rem]">{visual.chamada}</h2>
             <p className="mt-3 max-w-[620px] text-sm leading-relaxed text-primary-foreground/78 sm:text-base">{visual.apoio}</p>
             <div className="mt-6 flex flex-wrap gap-3">
               <Link to="/contato" className="btn-base glass-btn-light">Fale conosco</Link>
               <Link to="/projetos" className="btn-base glass-btn-ghost">Conheça outros projetos</Link>
             </div>
           </div>
         </div>
       </section>
    </>
  );
}
