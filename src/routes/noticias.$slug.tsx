import { useState } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Check, Copy, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { getNoticia, noticias } from "@/data/noticias";
import { Breadcrumbs } from "@/components/site/PageHero";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { NewsCard } from "@/components/site/Cards";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const noticia = getNoticia(params.slug);
    if (!noticia) throw notFound();
    return { noticia };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Notícia não encontrada — Trilha Viva" }, { name: "robots", content: "noindex" }],
      };
    }
    const { noticia } = loaderData;
    return {
      meta: [
        { title: `${noticia.titulo} — Trilha Viva` },
        { name: "description", content: noticia.resumo },
        { property: "og:title", content: noticia.titulo },
        { property: "og:description", content: noticia.resumo },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: NoticiaDetalhe,
});

function Compartilhar({ titulo }: { titulo: string }) {
  const [copiado, setCopiado] = useState(false);
  const url = typeof window === "undefined" ? "" : window.location.href;

  const redes = [
    {
      label: "Compartilhar no WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${titulo} ${url}`)}`,
      Icone: MessageCircle,
    },
    {
      label: "Compartilhar no Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      Icone: Facebook,
    },
    {
      label: "Compartilhar no LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      Icone: Linkedin,
    },
    {
      label: "Abrir nosso Instagram",
      href: "https://instagram.com",
      Icone: Instagram,
    },
  ];

  return (
    <div className="mt-12 border-t border-border pt-6">
      <p className="font-display text-sm font-bold text-primary-deep">Compartilhe esta notícia</p>
      <ul className="mt-3 flex flex-wrap items-center gap-2">
        {redes.map(({ label, href, Icone }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-secondary"
            >
              <Icone className="size-4" aria-hidden="true" />
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={() => {
              void navigator.clipboard?.writeText(url).then(() => {
                setCopiado(true);
                window.setTimeout(() => setCopiado(false), 2200);
              });
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 font-display text-xs font-semibold text-primary transition-colors hover:bg-secondary"
          >
            {copiado ? (
              <Check className="size-4" aria-hidden="true" />
            ) : (
              <Copy className="size-4" aria-hidden="true" />
            )}
            {copiado ? "Link copiado" : "Copiar link"}
          </button>
        </li>
      </ul>
      <p aria-live="polite" className="sr-only">
        {copiado ? "Link copiado para a área de transferência." : ""}
      </p>
    </div>
  );
}

function NoticiaDetalhe() {
  const { noticia } = Route.useLoaderData();
  const relacionadas = noticias
    .filter((n) => n.slug !== noticia.slug && n.tag === noticia.tag)
    .slice(0, 3);
  const complemento = noticias.filter((n) => n.slug !== noticia.slug).slice(0, 3);
  const lista = relacionadas.length >= 2 ? relacionadas : complemento;

  return (
    <>
      <article>
        <header className="border-b border-border bg-offwhite">
          <div className="container-site py-12 lg:py-16">
            <div className="mx-auto max-w-[850px]">
              <Breadcrumbs items={[{ label: "Notícias", to: "/noticias" }, { label: noticia.titulo }]} />
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-primary px-3 py-1 font-display text-[0.68rem] font-bold uppercase tracking-wider text-primary-foreground">
                  {noticia.tag}
                </span>
                <time dateTime={noticia.dataISO} className="text-xs text-muted-foreground">
                  {noticia.data}
                </time>
              </div>
              <h1 className="mt-5 text-3xl leading-tight text-primary-deep sm:text-4xl">{noticia.titulo}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{noticia.subtitulo}</p>
            </div>
          </div>
        </header>

        <div className="container-site py-10 lg:py-14">
          <figure className="mx-auto max-w-[1000px]">
            <img
              src={noticia.imagem}
              alt={noticia.titulo}
              className="aspect-16/9 w-full rounded-2xl object-cover shadow-soft"
            />
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">
              Registro da atividade descrita nesta notícia.
            </figcaption>
          </figure>

          <div className="mx-auto mt-12 max-w-[760px]">
            {noticia.corpo.map((bloco, i) => {
              if (bloco.tipo === "h2")
                return (
                  <h2 key={i} className="mt-10 text-2xl text-primary-deep">
                    {bloco.texto}
                  </h2>
                );
              if (bloco.tipo === "h3")
                return (
                  <h3 key={i} className="mt-8 text-lg text-primary-deep">
                    {bloco.texto}
                  </h3>
                );
              if (bloco.tipo === "citacao")
                return (
                  <blockquote key={i} className="my-8 border-l-2 border-gold pl-5">
                    <p className="font-display text-lg italic text-primary-deep">“{bloco.texto}”</p>
                    <footer className="mt-2 text-xs text-muted-foreground">— {bloco.autor}</footer>
                  </blockquote>
                );
              if (bloco.tipo === "lista")
                return (
                  <ul key={i} className="my-6 space-y-2">
                    {bloco.itens.map((item) => (
                      <li key={item} className="flex gap-3 text-base text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-verde" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              return (
                <p key={i} className="mt-5 text-base leading-relaxed text-muted-foreground">
                  {bloco.texto}
                </p>
              );
            })}

            <Compartilhar titulo={noticia.titulo} />
          </div>
        </div>
      </article>

      <section className="bg-offwhite">
        <div className="container-site py-14 lg:py-20">
          <h2 className="text-2xl text-primary-deep">Galeria desta notícia</h2>
          <div className="mt-8">
            <GalleryGrid fotos={noticia.galeria} colunas={4} />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container-site py-14 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl text-primary-deep">Notícias relacionadas</h2>
            <Link to="/noticias" className="text-sm font-semibold text-primary hover:underline">
              Ver todas as notícias
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lista.map((n, i) => (
              <Reveal key={n.slug} delay={i * 60}>
                <NewsCard noticia={n} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
