import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  ChevronDown,
  Download,
  ExternalLink,
  FileCheck,
  FileText,
  Images,
  Newspaper,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { acervoPorCategoria, type TipoIcone } from "@/data/acervo";
import { FeatureHero } from "@/components/site/FeatureHero";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/transparencia-hero.jpg";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Acervo institucional do Ponto de Cultura Trilha Viva: documentos, certificados, reconhecimentos, portfólios, registros de oficinas, materiais gráficos e imprensa.",
      },
      { property: "og:title", content: "Transparência — Ponto de Cultura Trilha Viva" },
      {
        property: "og:description",
        content: "Responsabilidade, organização e acesso à informação: consulte o acervo institucional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Transparencia,
});

const icones: Record<TipoIcone, LucideIcon> = {
  documento: FileText,
  certificado: FileCheck,
  premio: Award,
  portfolio: BookOpen,
  imagens: Images,
  imprensa: Newspaper,
};

function Transparencia() {
  const [aberta, setAberta] = useState<string | null>(acervoPorCategoria[0]?.categoria ?? null);

  return (
    <>
      {/* 1. HERO FOTOGRÁFICO */}
      <FeatureHero
        image={heroImg}
        imageAlt="Educadores e voluntários escoteiros reunidos ao redor de uma mesa, organizando documentos e registros da organização"
        eyebrow="Transparência"
        title="Transparência"
        description="Informação acessível, organização e responsabilidade também fazem parte da nossa atuação."
        crumbs={[{ label: "Quem Somos", to: "/quem-somos" }, { label: "Transparência" }]}
        primaryAction={{ label: "Consultar acervo", href: "#acervo", icon: "down" }}
        secondaryAction={{ label: "Fale conosco", to: "/contato", icon: "arrow" }}
      />

      {/* 2. NOSSO JEITO DE FAZER */}
      <section className="relative isolate overflow-hidden bg-background">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 size-64 rounded-full bg-inst/7"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-24 h-60 w-24 rounded-full bg-mata/8"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 bottom-8 hidden size-44 rounded-full bg-coral/6 lg:block"
        />

        <div className="container-site pt-14 lg:pt-20">
          <Reveal>
            <div className="mx-auto max-w-[850px] text-center">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-inst">
                Transparência
              </p>
              <h2 className="mx-auto mt-4 max-w-[760px] text-[2rem] font-semibold leading-[1.15] text-inst-deep sm:text-[2.5rem] lg:text-[2.9rem]">
                Nosso jeito de fazer
              </h1>
              <div className="mt-6 space-y-4 text-[1.03rem] leading-relaxed text-neutro">
                <p>
                  O Ponto de Cultura Trilha Viva acredita que uma atuação comunitária forte também se constrói
                  com <strong className="font-semibold text-inst-deep">responsabilidade</strong>,{" "}
                  <strong className="font-semibold text-inst-deep">organização</strong> e{" "}
                  <strong className="font-semibold text-inst-deep">transparência</strong>.
                </p>
                <p>
                  Nesta página reunimos documentos institucionais, certificados, reconhecimentos, portfólios,
                  registros de apresentações e oficinas, materiais gráficos, fotos e recortes de imprensa que
                  ajudam a contar a trajetória da organização e tornam públicas partes importantes do nosso
                  trabalho.
                </p>
                <p>
                  Esses materiais permitem que a comunidade, parceiros, apoiadores e interessados conheçam
                  melhor as ações desenvolvidas junto ao movimento escoteiro e à vida cultural do bairro ao
                  longo dos anos.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. ACERVO INSTITUCIONAL */}
      <section id="acervo" className="relative isolate overflow-hidden bg-background">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-40 size-80 rounded-full bg-inst/6"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/3 hidden h-80 w-28 rounded-full bg-inst/7 lg:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 bottom-24 hidden size-40 rounded-full bg-mata/7 lg:block"
        />

        <div className="container-site pb-16 pt-20 lg:pb-24 lg:pt-28">
          <Reveal>
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-inst">Acervo</p>
              <h2 className="mt-3 text-[1.7rem] font-semibold leading-tight text-inst-deep sm:text-[2.15rem]">
                Acervo institucional
              </h2>
              <p className="mt-4 text-[1rem] leading-relaxed text-neutro">
                Acesse documentos, certificados, reconhecimentos, portfólios e registros da organização,
                organizados por categoria para facilitar a consulta pública.
              </p>
            </div>
          </Reveal>

          {/* grande container único, em vidro leve */}
          <Reveal delay={60}>
            <div className="mx-auto mt-11 w-full max-w-[860px] overflow-hidden rounded-[22px] border border-[rgb(30_55_90_/_0.08)] bg-[rgb(255_255_255_/_0.68)] shadow-[0_8px_26px_rgba(20,38,65,0.035)] backdrop-blur-[8px]">
              {acervoPorCategoria.map((grupo, gi) => {
                const IconeCat = icones[grupo.icone];
                const expandida = aberta === grupo.categoria;
                const idPainel = `acervo-painel-${gi}`;
                return (
                  <div
                    key={grupo.categoria}
                    className={cn(gi > 0 && "border-t border-[rgb(18_38_64_/_0.07)]")}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={expandida}
                        aria-controls={idPainel}
                        onClick={() => setAberta(expandida ? null : grupo.categoria)}
                        className="flex min-h-[62px] w-full items-center gap-3 px-4 py-[14px] text-left transition-colors duration-200 hover:bg-[rgb(49_85_217_/_0.035)] sm:gap-3.5 sm:px-5"
                      >
                        <span
                          aria-hidden="true"
                          className="inline-flex size-[38px] shrink-0 items-center justify-center rounded-[12px] bg-[rgb(18_38_64_/_0.05)] text-inst-deep"
                        >
                          <IconeCat className="size-[18px]" />
                        </span>
                        <span className="min-w-0 flex-1 sm:flex sm:items-baseline sm:gap-2">
                          <span className="block font-display text-[0.95rem] font-semibold leading-snug text-inst-deep sm:text-[1.05rem]">
                            {grupo.categoria}
                          </span>
                          <span className="mt-0.5 block text-[0.78rem] font-medium text-neutro sm:mt-0 sm:text-[0.82rem]">
                            ({grupo.itens.length}{" "}
                            {grupo.itens.length === 1 ? "documento" : "documentos"})
                          </span>
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "size-[17px] shrink-0 text-inst transition-transform duration-[250ms]",
                            expandida && "rotate-180",
                          )}
                        />

                      </button>
                    </h3>

                    <div
                      id={idPainel}
                      hidden={!expandida}
                      className="grid transition-[grid-template-rows] duration-[250ms] ease-out"
                    >
                      <ul className="px-4 pb-1 sm:px-5">
                        {grupo.itens.map((item, ii) => {
                          const Icone = icones[item.icone ?? grupo.icone];
                          const baixar = Boolean(item.download);
                          const Acao = baixar ? Download : ExternalLink;
                          return (
                            <li
                              key={item.nome}
                              className={cn(
                                "flex min-h-[56px] flex-col gap-2 py-3 sm:flex-row sm:items-center sm:gap-3",
                                ii < grupo.itens.length - 1 && "border-b border-[rgb(18_38_64_/_0.07)]",
                              )}
                            >
                              <span
                                aria-hidden="true"
                                className="inline-flex size-[34px] shrink-0 items-center justify-center rounded-[10px] bg-[rgb(18_38_64_/_0.045)] text-inst"
                              >
                                <Icone className="size-[15px]" />
                              </span>
                              <div className="min-w-0 flex-1">
                                <p className="font-display text-[0.9rem] font-semibold leading-snug text-inst-deep sm:text-[0.95rem]">
                                  {item.nome}
                                </p>
                                <span className="mt-0.5 inline-block rounded-[7px] bg-[rgb(18_38_64_/_0.04)] px-1.5 py-0.5 text-[0.72rem] text-neutro">
                                  {item.meta}
                                </span>
                              </div>
                              <a
                                href="#acervo"
                                aria-label={`${baixar ? "Baixar" : "Visualizar"} documento ${item.nome}`}
                                className="inline-flex h-[34px] w-full shrink-0 items-center justify-center gap-1.5 rounded-[11px] border border-[rgb(49_85_217_/_0.14)] bg-[rgb(255_255_255_/_0.62)] px-3.5 text-[0.78rem] font-medium text-inst shadow-[0_2px_10px_rgba(18,38,64,0.035)] backdrop-blur-[8px] transition-all duration-200 hover:-translate-y-px hover:border-[rgb(49_85_217_/_0.3)] hover:bg-[rgb(49_85_217_/_0.07)] sm:w-auto"
                              >
                                {baixar ? "Baixar documento" : "Visualizar"}
                                <Acao className="size-3.5" aria-hidden="true" />
                              </a>
                            </li>
                          );
                        })}
                      </ul>

                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <p className="mx-auto mt-6 max-w-[1080px] text-center text-[0.82rem] text-neutro">
            Os itens listados são demonstrativos e podem ser substituídos pelos arquivos oficiais da
            organização.
          </p>
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
                Transparência também aproxima.
              </h2>
              <p className="mx-auto mt-3 max-w-[640px] text-[0.97rem] leading-relaxed text-primary-foreground/80">
                Se precisar de algum documento específico ou quiser entender melhor nossas atividades, fale com
                a equipe da organização.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/contato"
                  className="glass-btn-light inline-flex h-12 w-full items-center justify-center gap-2 rounded-[13px] px-6 text-sm font-semibold text-inst-deep transition-transform hover:-translate-y-px sm:w-auto"
                >
                  Fale conosco
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/projetos"
                  className="glass-btn-ghost inline-flex h-12 w-full items-center justify-center rounded-[13px] px-6 text-sm font-medium text-primary-foreground transition-colors sm:w-auto"
                >
                  Conheça nossos projetos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
