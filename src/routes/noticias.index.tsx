import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { noticias, noticiasPorPagina, tagsNoticias } from "@/data/noticias";
import { FeatureHero } from "@/components/site/FeatureHero";
import { NewsCard } from "@/components/site/Cards";
import { Pagination, SearchBar, TagFilter } from "@/components/site/Filtros";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/noticias-hero.jpg";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Notícias — Grupo Escoteiro Bugi Vermelho" },
      {
        name: "description",
        content:
          "Acompanhe as ações, projetos, atividades e acontecimentos que movimentam o Bugi Vermelho e fortalecem sua presença junto à comunidade.",
      },
      { property: "og:title", content: "Notícias — Grupo Escoteiro Bugi Vermelho" },
      {
        property: "og:description",
        content: "Acompanhe as ações, projetos, atividades e acontecimentos que movimentam o Bugi Vermelho e fortalecem sua presença junto à comunidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  const [tag, setTag] = useState<string>("Todas");
  const [busca, setBusca] = useState("");
  const [pagina, setPagina] = useState(1);

  const filtradas = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return noticias.filter(
      (n) =>
        (tag === "Todas" || n.tag === tag) &&
        (termo === "" ||
          n.titulo.toLowerCase().includes(termo) ||
          n.resumo.toLowerCase().includes(termo)),
    );
  }, [tag, busca]);

  const totalPaginas = Math.max(1, Math.ceil(filtradas.length / noticiasPorPagina));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const visiveis = filtradas.slice(
    (paginaAtual - 1) * noticiasPorPagina,
    paginaAtual * noticiasPorPagina,
  );

  return (
    <>
      <FeatureHero
        image={heroImg}
        imageAlt="Escoteiros, famílias e voluntários participando de uma atividade comunitária ao ar livre"
        eyebrow="NOTÍCIAS"
        title="Notícias"
        description="Acompanhe as ações, projetos, atividades e acontecimentos que movimentam o Bugi Vermelho e fortalecem sua presença junto à comunidade."
        crumbs={[{ label: "Notícias" }]}
        primaryAction={{ label: "Ver últimas notícias", href: "#ultimas-noticias", icon: "down" }}
        secondaryAction={{ label: "Conheça nossos projetos", to: "/projetos", icon: "arrow" }}
      />

      <section id="ultimas-noticias" className="bg-background scroll-mt-24">
        <div className="container-site pb-16 pt-[70px] lg:pb-20">
          <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-2">
            <SearchBar
              valor={busca}
              onChange={(v) => {
                setBusca(v);
                setPagina(1);
              }}
              rotulo="Buscar notícia"
              placeholder="Buscar notícia..."
              className="md:shrink-0"
            />
            <TagFilter
              opcoes={tagsNoticias}
              ativa={tag}
              onChange={(v) => {
                setTag(v);
                setPagina(1);
              }}
              rotulo="Filtrar notícias por tema"
            />
          </div>

          {visiveis.length > 0 ? (
            <div className="mx-auto mt-[50px] grid max-w-[1180px] gap-6 md:grid-cols-2 lg:grid-cols-3">

              {visiveis.map((n, i) => (
                <Reveal key={n.slug} delay={i * 60}>
                  <NewsCard noticia={n} roundedAction />
                </Reveal>
              ))}
            </div>
          ) : (
            <p className="mt-10 rounded-lg border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
              Nenhuma notícia corresponde à sua busca.
            </p>
          )}

          <div className="mt-12">
            <Pagination
              atual={paginaAtual}
              total={totalPaginas}
              onChange={(p) => {
                setPagina(p);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
