import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Expand } from "lucide-react";

import { anosGaleria, conjuntosPorAno, type AnoGaleria, type Foto } from "@/data/galeria";
import { FeatureHero } from "@/components/site/FeatureHero";
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
      {/* 1. HERO FOTOGRÁFICO — mesma linguagem das demais páginas */}
      <FeatureHero
        image={heroImg}
        imageAlt="Grupo de escoteiros reunido ao ar livre durante um encontro cultural, em fim de tarde"
        eyebrow="Galeria"
        title="Galeria"
        description="Registros de encontros, atividades e experiências que fazem parte da nossa caminhada."
        crumbs={[{ label: "Galeria" }]}
      />


      {/* 2. ANOS + CONJUNTOS DE FOTOS */}


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

        <div className="container-site pb-[88px] pt-14 lg:pb-[100px] lg:pt-20">
          <div className="mx-auto max-w-[1320px]">
            {/* seletor de anos */}
            <div
              role="group"
              aria-label="Selecionar ano da galeria"
              className="-mx-5 flex items-center gap-2 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-3 sm:px-0"
              style={{ scrollSnapType: "x proximity" }}
            >
              {anosGaleria.map((a) => {
                const ativo = a === ano;
                return (
                  <Button
                    key={a}
                    type="button"
                    onClick={() => setAno(a)}
                    aria-pressed={ativo}
                    style={{ scrollSnapAlign: "start" }}
                    className={cn(
                      "h-10 shrink-0 rounded-[18px] px-[17px] font-sans text-sm font-semibold tabular-nums backdrop-blur-[8px] transition-all duration-200 hover:-translate-y-px",
                      ativo
                        ? "border border-primary-foreground/20 bg-inst/82 text-primary-foreground shadow-[0_5px_16px_rgb(49_85_217_/_0.14)] hover:bg-inst/90"
                        : "border border-inst-deep/10 bg-background/68 text-inst-deep shadow-[0_4px_14px_rgb(18_38_64_/_0.035)] hover:bg-inst/7",
                    )}
                  >
                    {a}
                  </Button>
                );
              })}
            </div>


            {/* conjuntos do ano selecionado */}
            <div className="mt-14 space-y-[80px] lg:mt-20 lg:space-y-[104px]">
              {conjuntos.map((conjunto, index) => (
                <Reveal key={`${ano}-${conjunto.titulo}`}>
                  <div>
                    <div className="relative isolate w-fit max-w-full pl-3 sm:pl-4">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "pointer-events-none absolute -left-1 -top-5 -z-10 h-[70px] w-[34px] rotate-6 rounded-full sm:h-[88px] sm:w-[40px]",
                          index % 3 === 0 ? "bg-inst/12" : index % 3 === 1 ? "bg-coral/10" : "bg-mata/10",
                        )}
                      />
                      <h2 className="text-left text-[1.55rem] font-semibold leading-tight text-inst-deep sm:text-[1.9rem] lg:text-[2.2rem]">
                        {conjunto.titulo}
                      </h2>
                      <div aria-hidden="true" className="mt-4 flex items-center gap-2">
                        <span className="block h-0.5 w-[76px] rounded-full bg-inst/65" />
                        <span className="size-1.5 rounded-full bg-coral/75" />
                      </div>
                    </div>
                    <ConjuntoFotos fotos={conjunto.fotos} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>

  );
}
