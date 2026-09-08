import { createFileRoute } from "@tanstack/react-router";
import { projetos } from "@/data/projetos";
import { PageHero } from "@/components/site/PageHero";
import { ProjectCard } from "@/components/site/Cards";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/projeto-maos-que-criam.jpg";
import ctaImg from "@/assets/artesanato-maos.jpg";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Três projetos permanentes que conectam artesanato, natureza, educação não formal e ação comunitária no bairro.",
      },
      { property: "og:title", content: "Projetos — Ponto de Cultura Trilha Viva" },
      {
        property: "og:description",
        content: "Iniciativas que conectam cultura, escotismo, criatividade e território.",
      },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  return (
    <>
      <PageHero
        variante="photo"
        titulo="Projetos"
        subtitulo="Iniciativas que conectam cultura, escotismo, criatividade e território."
        descricao="Cada projeto tem calendário próprio, equipe responsável e forma específica de participação. Todos são gratuitos e abertos à comunidade."
        imagem={heroImg}
        alt="Adolescentes trabalhando com madeira e pintura em oficina"
        crumbs={[{ label: "Projetos" }]}
      />

      <section className="bg-background">
        <div className="container-site py-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">Visão geral</p>
            <p className="mt-4 text-base text-muted-foreground">
              Trabalhamos com poucos projetos por escolha. Preferimos manter continuidade e acompanhar cada
              grupo de perto a multiplicar frentes que não conseguiríamos sustentar. Os três projetos abaixo se
              cruzam: quem participa de um costuma acompanhar os outros ao longo do ano.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {projetos.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <div className={i === 0 ? "lg:max-w-4xl" : i === 1 ? "lg:ml-auto lg:max-w-4xl" : "lg:max-w-4xl"}>
                  <ProjectCard projeto={p} destaque />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variante="artesanal"
        titulo="Quer participar de um dos ciclos?"
        texto="As inscrições são gratuitas e acontecem antes do início de cada ciclo. Entre em contato para saber as próximas datas."
        imagem={ctaImg}
        alt="Mãos trabalhando fibra natural sobre bancada"
        acoes={[
          { label: "Fale conosco", to: "/contato" },
          { label: "Ver notícias", to: "/noticias" },
        ]}
      />
    </>
  );
}
