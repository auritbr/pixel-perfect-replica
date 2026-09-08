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
      <FeatureHero
        image={heroImg}
        imageAlt="Escoteiros, famílias e voluntários participando de uma atividade comunitária ao ar livre"
        eyebrow="Notícias"
        title="Histórias que acompanham nossa caminhada"
        description="Acompanhe atividades, encontros, projetos e acontecimentos que fazem parte da vida da organização."
        crumbs={[{ label: "Notícias" }]}
        primaryAction={{ label: "Ver últimas notícias", href: "#ultimas-noticias", icon: "down" }}
        secondaryAction={{ label: "Conheça nossos projetos", to: "/projetos", icon: "arrow" }}
      />

      <section id="ultimas-noticias" className="bg-background scroll-mt-24">
        <div className="container-site py-16 lg:py-20">
          <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-5">
            <SearchBar
              valor={busca}
              onChange={(v) => {
                setBusca(v);
                setPagina(1);
              }}
              rotulo="Buscar notícia"
              placeholder="Buscar notícia..."
              className="sm:w-[360px]"
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

          <p className="mx-auto mt-7 max-w-[1120px] text-xs text-muted-foreground">
            {filtradas.length} {filtradas.length === 1 ? "notícia" : "notícias"} · página {paginaAtual} de{" "}
            {totalPaginas}
          </p>

          {visiveis.length > 0 ? (
            <div className="mx-auto mt-12 grid max-w-[1180px] gap-6 md:grid-cols-2 lg:grid-cols-3">
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
