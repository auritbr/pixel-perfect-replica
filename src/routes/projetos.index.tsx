import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FeatureHero } from "@/components/site/FeatureHero";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/projeto-maos-que-criam.jpg";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Grupo Escoteiro Bugi Vermelho" },
      {
        name: "description",
        content:
          "Conheça iniciativas que conectam escotismo, educação, cultura, sustentabilidade e participação comunitária em ações construídas a partir das realidades de Florânia e dos territórios onde o grupo atua.",
      },
      { property: "og:title", content: "Projetos — Grupo Escoteiro Bugi Vermelho" },
      {
        property: "og:description",
        content: "Conheça iniciativas que conectam escotismo, educação, cultura, sustentabilidade e participação comunitária em ações construídas a partir das realidades de Florânia e dos territórios onde o grupo atua.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projetos,
});

function Projetos() {
  return (
    <>
      <FeatureHero
        image={heroImg}
        imageAlt="Jovens participando de uma oficina coletiva de madeira e pintura"
        eyebrow="PROJETOS"
        title="Projetos"
        description="Conheça iniciativas que conectam escotismo, educação, cultura, sustentabilidade e participação comunitária em ações construídas a partir das realidades de Florânia e dos territórios onde o grupo atua."
        crumbs={[{ label: "Projetos" }]}
        primaryAction={{ label: "Conheça os projetos", href: "#lista-projetos", icon: "down" }}
        secondaryAction={{ label: "Fale conosco", to: "/contato", icon: "arrow" }}
      />

      <section id="lista-projetos" className="relative overflow-hidden bg-background scroll-mt-24">
        <span aria-hidden="true" className="pointer-events-none absolute -left-20 top-40 size-48 rounded-full border-[18px] border-inst/6" />
        <div className="container-site py-20 lg:py-24">
          <Reveal>
            <header className="mx-auto max-w-[810px] text-center">
              <p className="eyebrow">NOSSA ATUAÇÃO</p>
              <h2 className="mt-3 text-[1.9rem] font-semibold leading-tight text-inst-deep sm:text-[2.25rem]">
                Experiências que ganham forma em projetos
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Os projetos do Grupo Escoteiro Bugi Vermelho nascem da relação com o território, com as comunidades e com os desafios vividos por crianças, adolescentes e jovens em Florânia.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Cada iniciativa reúne educação não formal, participação comunitária, sustentabilidade, cultura e cidadania em experiências que estimulam autonomia, cooperação, protagonismo e cuidado com o lugar onde vivemos.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Por meio dessas ações, o grupo amplia as possibilidades de aprendizagem para além dos encontros escoteiros, aproximando famílias, escolas, poder público, voluntários e comunidade em propostas construídas coletivamente.
              </p>
            </header>
          </Reveal>

           <div className="mx-auto mt-16 max-w-[1160px] space-y-8">
                <Reveal>
                   <article className="group relative isolate min-h-[300px] overflow-hidden rounded-[26px] p-5 sm:p-6 bg-inst-soft/55">
                     <span aria-hidden="true" className="pointer-events-none absolute -left-9 -top-10 size-28 rounded-full bg-inst/8" />
                     <span aria-hidden="true" className="pointer-events-none absolute right-[7%] top-6 h-16 w-8 rotate-12 rounded-full border-[8px] border-inst/8 bg-transparent" />
                     <span aria-hidden="true" className="pointer-events-none absolute bottom-6 left-[46%] hidden size-2.5 rounded-full lg:block bg-coral/30" />
                     <span aria-hidden="true" className="pointer-events-none absolute bottom-9 right-[16%] hidden h-px w-20 rotate-[-8deg] border-t border-dashed lg:block border-inst/22" />
                     <div className="grid min-h-[250px] items-center gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-10">
                       <div className="relative z-10 flex flex-col justify-center py-1 sm:px-2 lg:px-3">
                        <p className="font-display text-xs font-semibold uppercase tracking-[0.12em] text-inst">EDUCAÇÃO AMBIENTAL, ARTE E CIDADANIA</p>
                          <h3 className="mt-2.5 text-[1.75rem] font-semibold leading-tight text-inst-deep sm:text-[1.9rem]">Pneus que Transformam</h3>
                          <p className="mt-3 max-w-[560px] text-[15px] leading-[1.55] text-muted-foreground">Arte, Sustentabilidade e Cidadania</p>
                          <div id="sobre-pneus-que-transformam" className="scroll-mt-24">
                            <p className="mt-3 max-w-[560px] text-[15px] leading-[1.55] text-muted-foreground">O projeto Pneus que Transformam propõe dar novos usos a pneus descartados por meio da educação ambiental, da criatividade e do trabalho coletivo.</p>
                            <p className="mt-3 max-w-[560px] text-[15px] leading-[1.55] text-muted-foreground">Nas atividades, pneus inservíveis podem se transformar em brinquedos, floreiras, bancos, jardins, mobiliários e peças artísticas, mostrando na prática como materiais que seriam descartados podem voltar a fazer parte da vida da comunidade de forma útil, criativa e responsável.</p>
                            <p className="mt-3 max-w-[560px] text-[15px] leading-[1.55] text-muted-foreground">A iniciativa também fortalece a participação de crianças, adolescentes, jovens, famílias, educadores e voluntários em ações de conscientização ambiental e revitalização de espaços públicos e escolares.</p>
                          </div>
                          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Destaques de Pneus que Transformam">
                          {["Educação ambiental", "Sustentabilidade", "Arte", "Cidadania"].map((destaque) => (
                             <li key={destaque} className="inline-flex h-[31px] items-center rounded-[13px] border border-inst-deep/7 bg-background/55 px-3 text-xs font-medium text-inst-deep">
                              {destaque}
                            </li>
                          ))}
                        </ul>
                        <a
                          href="#sobre-pneus-que-transformam"
                            className="btn-base glass-btn-soft mt-5 h-[39px] w-fit rounded-[18px] px-[17px] text-[13px]"
                        >
                          Conhecer projeto
                          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                        </a>
                      </div>
                        <div aria-hidden="true" className="relative z-10" />
                    </div>
                  </article>
                </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background">
        <div className="container-site py-20 lg:py-24">
          <Reveal>
            <header className="mx-auto max-w-[810px] text-center">
              <p className="eyebrow">NOSSA ATUAÇÃO</p>
              <h2 className="mt-3 text-[1.9rem] font-semibold leading-tight text-inst-deep sm:text-[2.25rem]">Projetos que nascem do território</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">Novas iniciativas são construídas a partir das necessidades, possibilidades e relações estabelecidas com as comunidades onde o Bugi Vermelho está presente.</p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">Educação ambiental, memória, cultura, convivência com o semiárido, cidadania e participação juvenil são temas que atravessam a atuação do grupo e podem dar origem a novos projetos e ações ao longo do tempo.</p>
            </header>
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-5 pb-20 lg:pb-24">
        <div className="relative mx-auto flex min-h-[205px] max-w-[1100px] items-center justify-center overflow-hidden rounded-[27px] bg-inst-deep px-7 py-10 text-center text-primary-foreground sm:px-12">
          <span aria-hidden="true" className="pointer-events-none absolute -left-10 -top-10 size-32 rounded-full border-[14px] border-coral/20" />
          <span aria-hidden="true" className="pointer-events-none absolute -right-5 bottom-5 h-24 w-12 rounded-full border-8 border-ceu/25" />
          <span aria-hidden="true" className="pointer-events-none absolute right-[18%] top-7 size-2.5 rounded-full bg-mata" />
          <div className="relative max-w-[760px]">
            <h2 className="text-[1.65rem] font-semibold leading-tight sm:text-[2rem]">Ideias ganham força quando são construídas em conjunto</h2>
            <p className="mx-auto mt-3 max-w-[650px] text-sm leading-relaxed text-primary-foreground/78 sm:text-base">
              Os projetos do Bugi Vermelho aproximam educação, cultura, sustentabilidade e participação comunitária para responder às realidades dos territórios onde o grupo atua.
            </p>
            <p className="mx-auto mt-3 max-w-[650px] text-sm leading-relaxed text-primary-foreground/78 sm:text-base">
              Conheça nossas iniciativas e acompanhe como essas ideias se transformam em ações.
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