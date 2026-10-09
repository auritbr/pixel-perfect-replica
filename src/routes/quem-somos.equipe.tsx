import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { FeatureHero } from "@/components/site/FeatureHero";
import { Reveal } from "@/components/site/Reveal";
import { equipe } from "@/data/equipe";
import heroImg from "@/assets/equipe-hero.jpg";
import r01 from "@/assets/equipe-retrato-provisorio-1.jpg";
import r02 from "@/assets/equipe-retrato-provisorio-2.jpg";
import r03 from "@/assets/equipe-retrato-provisorio-3.jpg";
import r04 from "@/assets/equipe-retrato-provisorio-4.jpg";
import r05 from "@/assets/equipe-retrato-provisorio-5.jpg";
import r06 from "@/assets/equipe-retrato-provisorio-6.jpg";
import r07 from "@/assets/equipe-retrato-provisorio-7.jpg";
import r08 from "@/assets/equipe-retrato-provisorio-8.jpg";
export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Grupo Escoteiro Bugi Vermelho" },
      {
        name: "description",
        content:
          "Conheça as pessoas que constroem o Grupo Escoteiro Bugi Vermelho: voluntários, educadores, lideranças escoteiras e colaboradores da comunidade.",
      },
      { property: "og:title", content: "Equipe — Grupo Escoteiro Bugi Vermelho" },
      {
        property: "og:description",
        content:
          "Pessoas, experiências e saberes que dão vida a cada projeto, encontro e atividade do Grupo Escoteiro Bugi Vermelho.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Equipe,
});

const atuacoes = [
  { label: "Escotismo", ponto: "bg-inst" },
  { label: "Educação", ponto: "bg-inst-deep" },
  { label: "Voluntariado", ponto: "bg-inst" },
  { label: "Cidadania", ponto: "bg-coral" },
  { label: "Cultura", ponto: "bg-inst-deep" },
  { label: "Comunidade", ponto: "bg-mata" },
  { label: "Território", ponto: "bg-coral" },
];

// Fotografias ilustrativas provisórias, separadas dos dados institucionais confirmados.
const retratos = [r01, r02, r03, r04, r05, r06, r07, r08];
type Composicao = { atras: string; detalhe: string };
const composicoes: Composicao[] = [
  { atras: "-left-6 -top-3 size-[88%] rounded-full bg-inst/12", detalhe: "right-5 -top-1 h-1.5 w-12 rounded-full bg-coral/60" },
  { atras: "-right-7 top-4 h-[80%] w-[60%] -rotate-12 rounded-full bg-mata/14", detalhe: "left-2 top-7 size-4 rounded-full bg-inst/55" },
  { atras: "-left-5 top-5 size-[86%] rounded-[45%_55%_50%_50%/55%_45%_55%_45%] bg-inst/10", detalhe: "right-6 bottom-5 h-1.5 w-9 rounded-full bg-coral/55" },
  { atras: "-right-5 -top-2 size-[86%] rounded-full bg-coral/10", detalhe: "left-4 bottom-6 size-3 rounded-full bg-mata/70" },
  { atras: "-left-8 top-3 h-[82%] w-[56%] rotate-6 rounded-full bg-inst/12", detalhe: "right-3 top-5 size-3.5 rounded-full bg-mata/60" },
  { atras: "-right-6 top-4 size-[88%] rounded-[58%_42%_45%_55%/50%_58%_42%_50%] bg-inst/8", detalhe: "left-4 bottom-4 size-9 rounded-tl-full border-l-2 border-t-2 border-inst/35" },
];

function Retrato({ src, nome, cargo, comp }: { src: string; nome: string; cargo: string; comp: Composicao }) {
  return (
    <div className="relative mx-auto w-full max-w-[240px] px-2">
      <span aria-hidden="true" className={`pointer-events-none absolute -z-10 ${comp.atras}`} />
      <span aria-hidden="true" className={`pointer-events-none absolute -z-10 transition-transform duration-[250ms] group-hover:translate-x-1 group-hover:-translate-y-[3px] ${comp.detalhe}`} />
      <div className="overflow-hidden rounded-[48%_52%_51%_49%/50%_49%_51%_50%] ring-4 ring-background">
        <img src={src} alt={`Retrato ilustrativo de ${nome}, ${cargo}`} loading="lazy" width={480} height={512} className="aspect-square w-full object-cover transition-transform duration-[250ms] group-hover:scale-[1.02]" />
      </div>
    </div>
  );
}

function Equipe() {
  return (
    <>
      {/* 1. HERO FOTOGRÁFICO */}
      <FeatureHero
        image={heroImg}
        imageAlt="Escoteiros, educadores e voluntários reunidos em atividade coletiva ao ar livre"
        eyebrow="EQUIPE"
        title="Equipe"
        description="Pessoas, experiências e saberes que dão vida a cada projeto, encontro e atividade."
        crumbs={[{ label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]}
        primaryAction={{ label: "Conheça nossa atuação", href: "#nossa-atuacao", icon: "down" }}
        secondaryAction={{ label: "Fale conosco", to: "/contato", icon: "arrow" }}
      />


      {/* 2. SEÇÃO INTRODUTÓRIA */}
      <section id="nossa-atuacao" className="relative isolate scroll-mt-20 overflow-hidden bg-background">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-2 h-64 w-24 rounded-full bg-inst/8"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 top-36 size-56 rounded-full bg-coral/6"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-10 bottom-10 hidden size-2.5 rounded-full bg-mata/70 lg:block"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 400 60"
          className="pointer-events-none absolute -right-6 bottom-8 hidden h-12 w-64 text-inst/25 lg:block"
        >
          <path d="M2,50 C90,8 200,58 398,12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round" />
        </svg>

        <div className="container-site py-14 lg:py-20">
          <div className="mx-auto max-w-[1180px] text-center">
            <Reveal>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-inst">NOSSA EQUIPE</p>
              <h2 className="mx-auto mt-4 max-w-[820px] text-[2rem] font-semibold leading-[1.15] text-inst-deep sm:text-[2.5rem] lg:text-[3rem]">
                Pessoas que constroem o Bugi Vermelho
              </h2>
              <div className="mx-auto mt-6 max-w-[820px] space-y-4 text-[1.03rem] leading-relaxed text-neutro">
                <p>
                  Uma equipe formada por voluntários, educadores, lideranças escoteiras e colaboradores que atuam
                  pela formação de crianças e jovens, pelo fortalecimento da vida comunitária e pela valorização
                  do território.
                </p>
                <p>
                  O Grupo Escoteiro Bugi Vermelho é feito por pessoas que unem experiência, serviço voluntário,
                  educação não formal e compromisso social para desenvolver ações de escotismo, cultura,
                  cidadania e participação junto às comunidades de Florânia.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <ul className="mx-auto mt-9 flex max-w-[860px] flex-wrap justify-center gap-2.5">
                {atuacoes.map((a) => (
                  <li key={a.label}>
                    <span className="glass-soft inline-flex items-center gap-2 rounded-[14px] px-3.5 py-2 text-[0.85rem] font-medium text-inst-deep">
                      <span aria-hidden="true" className={`size-1.5 rounded-full ${a.ponto}`} />
                      {a.label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO DA EQUIPE */}
      <section className="relative isolate overflow-hidden bg-background">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-20 size-72 rounded-full bg-inst/7"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-1/2 hidden h-72 w-24 rounded-full bg-coral/7 lg:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[46%] hidden size-64 -translate-x-1/2 rounded-full bg-inst/5 lg:block"
        />

        <div className="container-site pb-16 pt-8 lg:pb-24 lg:pt-14">
          <Reveal delay={80}>
            <div className="mx-auto max-w-[750px] text-center">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-inst">QUEM FAZ ACONTECER</p>
              <h2 className="mt-3 text-[1.7rem] font-semibold leading-tight text-inst-deep sm:text-[2.15rem]">
                Pessoas que constroem essa caminhada
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-neutro">
                Conheça quem contribui com experiência, dedicação e diferentes responsabilidades para que as
                atividades do Grupo Escoteiro Bugi Vermelho aconteçam de forma contínua, organizada e próxima da
                comunidade.
              </p>
            </div>
          </Reveal>

          <ul aria-label="Integrantes do Grupo Escoteiro Bugi Vermelho" className="mx-auto mt-14 grid max-w-[1240px] grid-cols-1 gap-x-8 gap-y-[70px] sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-[88px]">
            {equipe.map((pessoa, i) => {
              const retrato = retratos[i];
              const composicao = composicoes[i % composicoes.length];
              if (!retrato || !composicao) return null;
              return (
                <Reveal as="li" key={pessoa.nome} delay={(i % 4) * 60}>
                  <div className="group text-center">
                    <Retrato src={retrato} nome={pessoa.nome} cargo={pessoa.cargo} comp={composicao} />
                    <h3 className="mt-6 text-[1.2rem] font-semibold text-inst-deep transition-colors duration-[250ms] group-hover:text-inst">{pessoa.nome}</h3>
                    <p className="mt-1.5 text-[0.96rem] text-neutro">{pessoa.cargo}</p>
                    {pessoa.email ? (
                      <a href={`mailto:${pessoa.email}`} aria-label={`Enviar e-mail para ${pessoa.nome}`} className="mt-2.5 inline-block max-w-full break-words text-[0.83rem] text-inst/85 underline decoration-inst/25 underline-offset-4 transition-colors hover:text-inst-deep">{pessoa.email}</a>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </ul>
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
            <svg
              aria-hidden="true"
              viewBox="0 0 300 60"
              className="pointer-events-none absolute right-1/4 top-5 hidden h-8 w-44 text-primary-foreground/25 sm:block"
            >
              <path d="M2,48 C70,6 150,58 298,14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 9" strokeLinecap="round" />
            </svg>

            <div className="relative mx-auto max-w-[680px]">
              <h2 className="text-[1.55rem] font-semibold leading-tight sm:text-[1.9rem]">
                Conheça de perto quem constrói o Bugi Vermelho
              </h2>
              <p className="mx-auto mt-3 max-w-[640px] text-[0.97rem] leading-relaxed text-primary-foreground/80">
                Nossa equipe reúne voluntários, educadores e lideranças comprometidas com a formação de crianças e
                jovens, com o escotismo, a cultura, a cidadania e a vida comunitária.
              </p>
              <p className="mx-auto mt-3 max-w-[640px] text-[0.97rem] leading-relaxed text-primary-foreground/80">
                Acompanhe nossos projetos, conheça as atividades desenvolvidas e entre em contato para construir
                novas parcerias com o grupo.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/projetos"
                  className="btn-base glass-btn-light w-full sm:w-auto"
                >
                  Conheça nossos projetos
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/contato"
                  className="btn-base glass-btn-ghost w-full sm:w-auto"
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
