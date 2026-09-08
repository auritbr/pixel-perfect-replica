import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Expand } from "lucide-react";
import { anosGaleria, conjuntosPorAno, type AnoGaleria, type Foto } from "@/data/galeria";
import { Breadcrumbs } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { PhotoLightbox } from "@/components/site/PhotoLightbox";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/galeria-hero.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de fotos — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Registros das atividades do Ponto de Cultura Trilha Viva por ano: oficinas, acampamentos, trilhas, mutirões e encontros na sede.",
      },
      { property: "og:title", content: "Galeria de fotos — Trilha Viva" },
      {
        property: "og:description",
        content: "Memórias das atividades, ano a ano, do Ponto de Cultura Trilha Viva.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Galeria,
});

function ConjuntoFotos({ fotos }: { fotos: Foto[] }) {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <>
      <ul className="mt-7 grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
        {fotos.map((foto, i) => (
          <li key={`${foto.src}-${i}`}>
            <button
              type="button"
              onClick={() => setAberta(i)}
              aria-label={`Ampliar fotografia: ${foto.legenda}`}
              className="group relative block w-full cursor-pointer overflow-hidden rounded-[20px] bg-muted focus-visible:outline-offset-4"
            >
              <img
                src={foto.src}
                alt={foto.legenda}
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-4/3 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-inst-deep/0 transition-colors duration-300 group-hover:bg-inst-deep/15"
              />
              <span
                aria-hidden="true"
                className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full border border-[rgb(255_255_255_/_0.5)] bg-[rgb(255_255_255_/_0.66)] opacity-0 backdrop-blur-[8px] transition-opacity duration-300 group-hover:opacity-100"
              >
                <Expand className="size-4 text-inst-deep" />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <PhotoLightbox fotos={fotos} index={aberta} onClose={() => setAberta(null)} onChange={setAberta} />
    </>
  );
}

function Galeria() {
  const [ano, setAno] = useState<AnoGaleria>(anosGaleria[0]);
  const conjuntos = conjuntosPorAno[ano];

  return (
    <>
      {/* 1. HERO FOTOGRÁFICO — mesma linguagem da página Equipe */}
      <section className="relative isolate overflow-hidden bg-inst-deep">
        <img
          src={heroImg}
          alt="Grupo de escoteiros reunido ao ar livre durante um encontro cultural, em fim de tarde"
          width={1920}
          height={900}
          className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-inst-deep/45 via-transparent to-transparent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-14 top-12 hidden size-36 rounded-full border-[10px] border-coral/45 sm:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-16 hidden h-28 w-12 -rotate-12 rounded-full bg-inst/50 sm:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 top-52 hidden h-20 w-9 rounded-full bg-inst-soft/60 lg:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-16 top-10 hidden size-3 rounded-full bg-mata/80 lg:block"
        />

        <div className="container-site absolute left-0 right-0 top-6">
          <div className="text-primary-foreground [&_a]:text-primary-foreground/85">
            <Breadcrumbs items={[{ label: "Galeria" }]} tone="dark" />
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
      </section>

      {/* 2. APRESENTAÇÃO */}
      <section className="relative isolate overflow-hidden bg-background">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-4 h-64 w-24 rounded-full bg-inst/8"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-32 size-56 rounded-full bg-coral/6"
        />

        <div className="container-site pt-14 lg:pt-20">
          <Reveal>
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-inst">Galeria</p>
              <h1 className="mx-auto mt-4 max-w-[760px] text-[2rem] font-semibold leading-[1.15] text-inst-deep sm:text-[2.5rem] lg:text-[2.9rem]">
                Memórias que contam nossa caminhada
              </h1>
              <p className="mt-6 text-[1.03rem] leading-relaxed text-neutro">
                Reunimos aqui registros de encontros, atividades, projetos e experiências que fazem parte da
                história da organização.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. ANOS + CONJUNTOS DE FOTOS */}
      <section className="relative isolate overflow-hidden bg-background">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-24 h-64 w-24 rounded-full bg-inst/7"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 hidden size-48 rounded-full bg-coral/6 lg:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-14 bottom-32 hidden size-40 rounded-full bg-mata/7 lg:block"
        />

        <div className="container-site pb-16 pt-12 lg:pb-24 lg:pt-16">
          <div className="mx-auto max-w-[1320px]">
            {/* seletor de anos */}
            <div
              role="group"
              aria-label="Selecionar ano da galeria"
              className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
              style={{ scrollSnapType: "x proximity" }}
            >
              {anosGaleria.map((a) => {
                const ativo = a === ano;
                return (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAno(a)}
                    aria-pressed={ativo}
                    style={{ scrollSnapAlign: "start" }}
                    className={cn(
                      "h-[48px] shrink-0 rounded-[15px] px-6 font-display text-[0.95rem] font-semibold tabular-nums backdrop-blur-[8px] transition-all duration-200",
                      ativo
                        ? "border border-[rgb(255_255_255_/_0.22)] bg-[rgb(49_85_217_/_0.88)] text-primary-foreground shadow-[0_7px_18px_rgba(49,85,217,0.15)]"
                        : "border border-[rgb(49_85_217_/_0.11)] bg-[rgb(255_255_255_/_0.62)] text-inst-deep shadow-[0_4px_14px_rgba(18,38,64,0.035)] hover:bg-[rgb(49_85_217_/_0.07)]",
                    )}
                  >
                    {a}
                  </button>
                );
              })}
            </div>

            {/* conjuntos do ano selecionado */}
            <div className="mt-14 space-y-[80px] lg:mt-20 lg:space-y-[104px]">
              {conjuntos.map((conjunto) => (
                <Reveal key={`${ano}-${conjunto.titulo}`}>
                  <div>
                    <h2 className="text-left text-[1.5rem] font-semibold leading-tight text-inst-deep sm:text-[1.9rem] lg:text-[2.2rem]">
                      {conjunto.titulo}
                    </h2>
                    <span aria-hidden="true" className="mt-4 block h-[3px] w-[84px] rounded-full bg-inst" />
                    <ConjuntoFotos fotos={conjunto.fotos} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL — compacto, sem imagem */}
      <section className="bg-background pb-20">
        <div className="container-site">
          <div className="relative isolate mx-auto max-w-[1150px] overflow-hidden rounded-[26px] bg-inst-deep px-6 py-11 text-center text-primary-foreground sm:px-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 -top-10 size-32 rounded-full bg-coral/20"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-10 size-44 rounded-full border-[10px] border-inst/45"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-8 left-12 size-2.5 rounded-full bg-mata/80"
            />

            <div className="relative mx-auto max-w-[680px]">
              <h2 className="text-[1.55rem] font-semibold leading-tight sm:text-[1.9rem]">
                Cada registro guarda uma história.
              </h2>
              <p className="mx-auto mt-3 max-w-[640px] text-[0.97rem] leading-relaxed text-primary-foreground/80">
                Conheça também os projetos e iniciativas que dão origem a muitos desses encontros.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/projetos"
                  className="glass-btn-light inline-flex h-12 w-full items-center justify-center gap-2 rounded-[13px] px-6 text-sm font-semibold text-inst-deep transition-transform hover:-translate-y-px sm:w-auto"
                >
                  Conheça nossos projetos
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/contato"
                  className="glass-btn-ghost inline-flex h-12 w-full items-center justify-center rounded-[13px] px-6 text-sm font-medium text-primary-foreground transition-colors sm:w-auto"
                >
                  Fale conosco
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
