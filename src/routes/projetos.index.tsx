import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { projetos } from "@/data/projetos";
import { FeatureHero } from "@/components/site/FeatureHero";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/projeto-maos-que-criam.jpg";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projetos,
});

const apresentacoes = [
  {
    categoria: "Cultura e artesanato",
    descricao:
      "Um espaço de experimentação e criação que aproxima técnicas artesanais, conhecimentos escoteiros e práticas sustentáveis em atividades desenvolvidas coletivamente.",
    destaques: ["Artesanato", "Criatividade", "Sustentabilidade"],
    fundo: "bg-inst-soft/55",
    forma: "bg-inst/8",
  },
  {
    categoria: "Educação e natureza",
    descricao:
      "Vivências que articulam educação não formal, cultura, contato com a natureza e aprendizagem pela experiência.",
    destaques: ["Educação", "Natureza", "Convivência"],
    fundo: "bg-mata-soft/65",
    forma: "bg-mata/8",
  },
  {
    categoria: "Cidadania e participação",
    descricao:
      "Ações coletivas que fortalecem vínculos, participação juvenil, responsabilidade social e presença ativa no território.",
    destaques: ["Comunidade", "Cidadania", "Participação"],
    fundo: "bg-coral-soft/55",
    forma: "bg-coral/8",
  },
] as const;

function Projetos() {
  return (
    <>
      <FeatureHero
        image={heroImg}
        imageAlt="Jovens participando de uma oficina coletiva de madeira e pintura"
        eyebrow="Projetos"
        title="Projetos"
        description="Iniciativas que conectam escotismo, cultura, criatividade, educação e participação comunitária."
        crumbs={[{ label: "Projetos" }]}
        primaryAction={{ label: "Conheça os projetos", href: "#lista-projetos", icon: "down" }}
        secondaryAction={{ label: "Fale conosco", to: "/contato", icon: "arrow" }}
      />

      <section id="lista-projetos" className="relative overflow-hidden bg-background scroll-mt-24">
        <span aria-hidden="true" className="pointer-events-none absolute -left-20 top-40 size-48 rounded-full border-[18px] border-inst/6" />
        <div className="container-site py-20 lg:py-24">
          <Reveal>
            <header className="mx-auto max-w-[810px] text-center">
              <p className="eyebrow">Nossa atuação</p>
              <h2 className="mt-3 text-[1.9rem] font-semibold leading-tight text-inst-deep sm:text-[2.25rem]">
                Experiências que ganham forma em projetos
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Cada projeto nasce de uma proposta educativa e cultural, reunindo pessoas, saberes e experiências em atividades que fortalecem a criatividade, a convivência, a autonomia e a participação na comunidade.
              </p>
            </header>
          </Reveal>

          <div className="mx-auto mt-20 max-w-[1200px] space-y-8 lg:space-y-10">
            {projetos.map((projeto, index) => {
              const apresentacao = apresentacoes[index];
              if (!apresentacao) return null;
              const invertido = index === 1;
              return (
                <Reveal key={projeto.slug} delay={index * 70}>
                  <article className={`group relative isolate overflow-hidden rounded-[28px] ${apresentacao.fundo}`}>
                    <span aria-hidden="true" className={`pointer-events-none absolute -left-12 -top-14 size-40 rounded-full ${apresentacao.forma}`} />
                    <span aria-hidden="true" className="pointer-events-none absolute bottom-6 left-[45%] hidden h-20 w-10 rounded-full border-8 border-inst-deep/5 lg:block" />
                    <div className="grid min-h-[390px] items-stretch lg:grid-cols-[1.03fr_0.97fr]">
                      <div className={`relative z-10 flex flex-col justify-center px-7 py-9 sm:px-10 lg:px-14 lg:py-12 ${invertido ? "lg:order-2" : ""}`}>
                        <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-inst">{apresentacao.categoria}</p>
                        <h3 className="mt-3 text-[1.85rem] font-semibold leading-tight text-inst-deep sm:text-[2.2rem]">{projeto.nome}</h3>
                        <p className="mt-4 max-w-[550px] text-base leading-relaxed text-muted-foreground">{apresentacao.descricao}</p>
                        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Destaques de ${projeto.nome}`}>
                          {apresentacao.destaques.map((destaque) => (
                            <li key={destaque} className="rounded-[12px] border border-inst-deep/7 bg-background/55 px-3 py-1.5 text-xs font-medium text-inst-deep">
                              {destaque}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to="/projetos/$slug"
                          params={{ slug: projeto.slug }}
                          className="btn-base glass-btn-soft mt-7 h-[43px] w-fit rounded-[20px] px-5"
                        >
                          Conhecer projeto
                          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                      </div>
                      <div className={`relative p-5 pt-0 sm:p-7 sm:pt-0 lg:p-7 ${invertido ? "lg:order-1" : ""}`}>
                        <img
                          src={projeto.imagem}
                          alt={`Atividade do projeto ${projeto.nome}`}
                          loading="lazy"
                          width={720}
                          height={560}
                          className="h-[260px] w-full rounded-[22px] object-cover transition-transform duration-500 group-hover:scale-[1.012] sm:h-[320px] lg:h-full"
                        />
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-background px-5 pb-20 lg:pb-24">
        <div className="relative mx-auto flex min-h-[205px] max-w-[1100px] items-center justify-center overflow-hidden rounded-[27px] bg-inst-deep px-7 py-10 text-center text-primary-foreground sm:px-12">
          <span aria-hidden="true" className="pointer-events-none absolute -left-10 -top-10 size-32 rounded-full border-[14px] border-coral/20" />
          <span aria-hidden="true" className="pointer-events-none absolute -right-5 bottom-5 h-24 w-12 rounded-full border-8 border-ceu/25" />
          <span aria-hidden="true" className="pointer-events-none absolute right-[18%] top-7 size-2.5 rounded-full bg-mata" />
          <div className="relative max-w-[760px]">
            <h2 className="text-[1.65rem] font-semibold leading-tight sm:text-[2rem]">Todo projeto começa com uma ideia compartilhada.</h2>
            <p className="mx-auto mt-3 max-w-[650px] text-sm leading-relaxed text-primary-foreground/78 sm:text-base">
              Conheça nossas iniciativas ou fale com a equipe para saber mais sobre as atividades desenvolvidas pela organização.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contato" className="btn-base glass-btn-light">Fale conosco</Link>
              <Link to="/quem-somos" className="btn-base glass-btn-ghost">Conheça nossa história</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}