import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { anosGaleria, galeriaPorAno, type AnoGaleria } from "@/data/galeria";
import { PageHero } from "@/components/site/PageHero";
import { YearSelector } from "@/components/site/Filtros";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { CTASection } from "@/components/site/CTASection";
import ctaImg from "@/assets/hero-escoteiros.jpg";

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
    ],
  }),
  component: Galeria,
});

function Galeria() {
  const [ano, setAno] = useState<AnoGaleria>(anosGaleria[0]);
  const conteudo = galeriaPorAno[ano];

  return (
    <>
      <PageHero
        variante="plain"
        titulo="Galeria de fotos"
        subtitulo="Registros das atividades realizadas ao longo dos anos."
        descricao="Selecione um ano para ver as fotografias correspondentes. Clique em qualquer imagem para ampliar."
        crumbs={[{ label: "Galeria" }]}
      />

      <section className="bg-background">
        <div className="container-site py-12 lg:py-16">
          <YearSelector anos={anosGaleria} ativo={ano} onChange={(v) => setAno(v as AnoGaleria)} />

          <div className="mt-10">
            <h2 className="text-2xl text-primary-deep sm:text-3xl">Memórias de {ano}</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{conteudo.texto}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              {conteudo.fotos.length} fotografias registradas em {ano}
            </p>
          </div>

          <div className="mt-8">
            <GalleryGrid key={ano} fotos={conteudo.fotos} colunas={4} variavel />
          </div>
        </div>
      </section>

      <CTASection
        titulo="Cada encontro constrói uma nova história"
        texto="As fotografias registram apenas parte do que acontece. Venha conhecer as atividades de perto."
        imagem={ctaImg}
        alt="Grupo de escoteiros em atividade ao ar livre"
        acoes={[
          { label: "Fale conosco", to: "/contato" },
          { label: "Ver projetos", to: "/projetos" },
        ]}
      />
    </>
  );
}
