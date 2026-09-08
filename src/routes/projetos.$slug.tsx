import { createFileRoute, notFound } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Users } from "lucide-react";
import { getProjeto, projetos } from "@/data/projetos";
import { Breadcrumbs } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { CTASection } from "@/components/site/CTASection";
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

function ProjetoDetalhe() {
  const { projeto } = Route.useLoaderData();
  const outros = projetos.filter((p) => p.slug !== projeto.slug);
  // Pequena variação de composição entre os projetos, mantendo a mesma estrutura.
  const inverte = projeto.slug === "trilhas-de-saberes";

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

      {/* ARTESANATO */}
      <section className="bg-bege">
        <div className="container-site py-16 lg:py-24">
          <SectionHeader
            eyebrow="Artesanato no projeto"
            titulo="Linguagens manuais desenvolvidas nas atividades"
            texto="Todo o trabalho é tratado como atividade cultural e educativa: as peças produzidas ficam com quem as fez ou são doadas a instituições do bairro."
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

      <CTASection
        variante="artesanal"
        titulo="Cada peça começa com uma ideia. Cada experiência deixa uma história."
        texto="Conheça os outros projetos da organização ou converse com a equipe para participar do próximo ciclo."
        imagem={projeto.imagemSecundaria}
        alt="Mãos trabalhando materiais naturais"
        acoes={[
          { label: "Conheça outros projetos", to: "/projetos" },
          { label: "Fale conosco", to: "/contato" },
        ]}
      />

      <section className="bg-offwhite">
        <div className="container-site py-14">
          <h2 className="font-display text-lg font-bold text-primary-deep">Outros projetos</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {outros.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/projetos/$slug"
                  params={{ slug: p.slug }}
                  className="group flex items-center gap-4 rounded-xl border border-border/70 bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <img
                    src={p.imagem}
                    alt=""
                    loading="lazy"
                    className="size-20 shrink-0 rounded-lg object-cover"
                  />
                  <span>
                    <span className="block font-display text-base font-bold text-primary-deep">{p.nome}</span>
                    <span className="mt-1 block text-xs text-muted-foreground">{p.categoria}</span>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Conhecer projeto
                      <ArrowRight
                        className="size-3 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
