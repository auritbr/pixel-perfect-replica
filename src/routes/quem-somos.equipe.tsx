import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import equipeImg from "@/assets/equipe.jpg";
import { equipe, gruposEquipe } from "@/data/equipe";
import { PageHero } from "@/components/site/PageHero";
import { TeamCard } from "@/components/site/Cards";
import { TagFilter } from "@/components/site/Filtros";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Conheça a diretoria, a coordenação, os educadores e os voluntários que conduzem as atividades do Ponto de Cultura Trilha Viva.",
      },
      { property: "og:title", content: "Equipe — Ponto de Cultura Trilha Viva" },
      { property: "og:description", content: "Pessoas que transformam propósito em ação." },
    ],
  }),
  component: Equipe;
});

function Equipe() {
  const [grupo, setGrupo] = useState<string>("Todos");
  const lista = useMemo(
    () => (grupo === "Todos" ? equipe : equipe.filter((p) => p.grupo === grupo)),
    [grupo],
  );

  return (
    <>
      <PageHero
        variante="plain"
        titulo="Equipe"
        subtitulo="Pessoas que transformam propósito em ação."
        descricao="Uma equipe pequena e estável, formada dentro da própria organização, com apoio permanente de voluntários do bairro."
        crumbs={[{ label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]}
      >
        <img
          src={equipeImg}
          alt="Equipe de educadores e voluntários reunida em frente à sede"
          loading="lazy"
          className="mt-10 aspect-16/7 w-full rounded-2xl object-cover shadow-soft"
        />
      </PageHero>

      <section className="bg-background">
        <div className="container-site py-14 lg:py-20">
          <TagFilter opcoes={gruposEquipe} ativa={grupo} onChange={setGrupo} rotulo="Filtrar por função" />
          <p className="mt-4 text-xs text-muted-foreground">
            {lista.length} {lista.length === 1 ? "integrante" : "integrantes"}
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lista.map((pessoa, i) => (
              <Reveal key={pessoa.nome} delay={i * 50}>
                <TeamCard pessoa={pessoa} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variante="artesanal"
        titulo="Quer fazer parte da equipe de voluntários?"
        texto="A formação de voluntários acontece a cada semestre e é pré-requisito para atuar nas atividades com crianças e adolescentes."
        imagem={equipeImg}
        alt="Voluntários reunidos na sede da organização"
        acoes={[
          { label: "Fale conosco", to: "/contato" },
          { label: "Ver transparência", to: "/quem-somos/transparencia" },
        ]}
      />
    </>
  );
}
