import { useState } from "react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Copy, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { getNoticia, noticias } from "@/data/noticias";
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
    <div className="mt-12 border-t border-[rgb(18_38_64_/_0.09)] pt-6">
      <p className="font-display text-sm font-semibold text-inst-deep">Compartilhe esta notícia</p>
      <ul className="mt-3 flex flex-wrap items-center gap-2">
        {redes.map(({ label, href, Icone }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="inline-flex size-[38px] items-center justify-center rounded-[12px] border border-[rgb(49_85_217_/_0.14)] bg-[rgb(255_255_255_/_0.62)] text-inst shadow-[0_3px_12px_rgba(18,38,64,0.035)] backdrop-blur-[8px] transition-all duration-200 hover:-translate-y-px hover:bg-[rgb(49_85_217_/_0.07)]"
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
            className="inline-flex h-[38px] items-center gap-2 rounded-[12px] border border-[rgb(49_85_217_/_0.14)] bg-[rgb(255_255_255_/_0.62)] px-4 text-[0.84rem] font-medium text-inst shadow-[0_3px_12px_rgba(18,38,64,0.035)] backdrop-blur-[8px] transition-all duration-200 hover:-translate-y-px hover:bg-[rgb(49_85_217_/_0.07)]"
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
        {/* HERO FOTOGRÁFICO — mesma geometria da página Equipe */}
        <header className="relative isolate overflow-hidden bg-inst-deep">
          <img
            src={noticia.imagem}
            alt={noticia.titulo}
            width={1920}
            height={900}
            style={{ objectPosition: noticia.heroPosition ?? "center center" }}
            className="h-[430px] w-full object-cover sm:h-[460px] lg:h-[520px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(8,18,35,0.78)_0%,rgba(8,18,35,0.48)_52%,rgba(8,18,35,0.18)_100%)]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 top-14 hidden h-28 w-12 -rotate-12 rounded-full bg-inst/45 sm:block"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 bottom-16 hidden size-32 rounded-full border-[10px] border-coral/35 lg:block"
          />

          <div className="absolute inset-x-0 bottom-[58px] sm:bottom-[70px] lg:bottom-[86px]">
            <div className="container-site">
              <div className="max-w-[800px] text-left text-primary-foreground">
                <Link
                  to="/noticias"
                  className="inline-flex items-center gap-2 text-[0.9rem] text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Voltar para Notícias
                </Link>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="inline-flex h-[36px] items-center rounded-[11px] border border-[rgb(255_255_255_/_0.18)] bg-[rgb(230_75_69_/_0.8)] px-3.5 font-display text-[0.8rem] font-semibold text-primary-foreground backdrop-blur-[8px]">
                    {noticia.tag}
                  </span>
                  <time
                    dateTime={noticia.dataISO}
                    className="inline-flex h-[36px] items-center rounded-[11px] border border-[rgb(255_255_255_/_0.22)] bg-[rgb(255_255_255_/_0.12)] px-3.5 text-[0.82rem] text-primary-foreground backdrop-blur-[8px]"
                  >
                    {noticia.data}
                  </time>
                </div>

                <h1 className="mt-5 max-w-[780px] font-display font-semibold leading-[1.12] text-primary-foreground text-[clamp(1.85rem,4.4vw,3.1rem)]">
                  {noticia.titulo}
                </h1>
                <p className="mt-4 max-w-[650px] text-[0.98rem] leading-relaxed text-primary-foreground/80 sm:text-[1.1rem]">
                  {noticia.subtitulo}
                </p>
              </div>
            </div>
          </div>

          <svg
            aria-hidden="true"
            viewBox="0 0 1440 90"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 h-[42px] w-full sm:h-[58px]"
          >
            <path
              d="M0,70 C260,26 460,84 760,58 C1030,34 1210,78 1440,46 L1440,90 L0,90 Z"
              fill="var(--background)"
            />
          </svg>
        </header>

        <div className="container-site pb-10 pt-12 lg:pb-14 lg:pt-16">
          <div className="mx-auto max-w-[790px]">

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
