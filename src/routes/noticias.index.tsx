import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { noticias, noticiasPorPagina, tagsNoticias } from "@/data/noticias";
import { PageHero } from "@/components/site/PageHero";
import { NewsCard } from "@/components/site/Cards";
import { Pagination, SearchBar, TagFilter } from "@/components/site/Filtros";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Notícias — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Histórias, atividades e acontecimentos do Ponto de Cultura Trilha Viva: oficinas, acampamentos, formações e ações comunitárias.",
      },
      { property: "og:title", content: "Notícias — Ponto de Cultura Trilha Viva" },
      {
        property: "og:description",
        content: "Acompanhe as atividades e os acontecimentos que fazem parte da nossa caminhada.",
      },
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
      <PageHero
        variante="plain"
        titulo="Notícias"
        subtitulo="Histórias, atividades e acontecimentos que fazem parte da nossa caminhada."
        crumbs={[{ label: "Notícias" }]}
      />

      <section className="bg-background">
        <div className="container-site py-12 lg:py-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <SearchBar
              valor={busca}
              onChange={(v) => {
                setBusca(v);
                setPagina(1);
              }}
              rotulo="Buscar notícia"
              placeholder="Buscar notícia..."
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

          <p className="mt-6 text-xs text-muted-foreground">
            {filtradas.length} {filtradas.length === 1 ? "notícia" : "notícias"} · página {paginaAtual} de{" "}
            {totalPaginas}
          </p>

          {visiveis.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visiveis.map((n, i) => (
                <Reveal key={n.slug} delay={i * 60}>
                  <NewsCard noticia={n} />
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
