import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Download,
  Eye,
  FileCheck2,
  FileText,
  Folder,
  Images,
  Newspaper,
  Presentation,
  Search,
  SearchX,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { acervo, anosAcervo, categoriasAcervo, type CategoriaAcervo } from "@/data/acervo";
import { Breadcrumbs } from "@/components/site/PageHero";
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

const POR_PAGINA = 8;

const visual: Record<CategoriaAcervo, { icone: LucideIcon; cor: string; fundo: string }> = {
  "Documentos Institucionais": { icone: FileText, cor: "text-inst", fundo: "bg-inst/10" },
  Certificados: { icone: FileCheck2, cor: "text-mata", fundo: "bg-mata/12" },
  Reconhecimentos: { icone: Award, cor: "text-coral", fundo: "bg-coral/10" },
  Portfólios: { icone: Folder, cor: "text-inst", fundo: "bg-inst/10" },
  Apresentações: { icone: Presentation, cor: "text-inst-deep", fundo: "bg-inst/8" },
  Oficinas: { icone: Sparkles, cor: "text-mata", fundo: "bg-mata/12" },
  "Materiais Gráficos": { icone: Images, cor: "text-inst", fundo: "bg-inst/10" },
  Imprensa: { icone: Newspaper, cor: "text-inst-deep", fundo: "bg-inst/8" },
  Registros: { icone: FileText, cor: "text-inst-deep", fundo: "bg-inst/8" },
};

function paginasVisiveis(atual: number, total: number): (number | "...")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const itens: (number | "...")[] = [1];
  const inicio = Math.max(2, atual - 1);
  const fim = Math.min(total - 1, atual + 1);
  if (inicio > 2) itens.push("...");
  for (let i = inicio; i <= fim; i++) itens.push(i);
  if (fim < total - 1) itens.push("...");
  itens.push(total);
  return itens;
}

function Transparencia() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState<string>("Todos");
  const [ano, setAno] = useState<string>("Todos os anos");
  const [pagina, setPagina] = useState(1);

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return acervo.filter(
      (item) =>
        (categoria === "Todos" || item.categoria === categoria) &&
        (ano === "Todos os anos" || item.ano === ano) &&
        (termo === "" ||
          item.nome.toLowerCase().includes(termo) ||
          item.categoria.toLowerCase().includes(termo) ||
          (item.descricao ?? "").toLowerCase().includes(termo)),
    );
  }, [busca, categoria, ano]);

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / POR_PAGINA));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const visiveis = filtrados.slice((paginaAtual - 1) * POR_PAGINA, paginaAtual * POR_PAGINA);

  return (
    <>
      {/* 1. HERO FOTOGRÁFICO */}
      <section className="relative isolate overflow-hidden bg-inst-deep">
        <img
          src={heroImg}
          alt="Educadores e voluntários escoteiros reunidos ao redor de uma mesa, organizando documentos e registros da organização"
          width={1920}
          height={912}
          className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-inst-deep/45 via-transparent to-transparent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 top-14 hidden size-40 rounded-full border-[10px] border-inst/45 sm:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-16 hidden h-28 w-12 -rotate-12 rounded-full bg-inst-soft/55 sm:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-14 top-11 hidden size-3 rounded-full bg-mata/80 lg:block"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 top-52 hidden h-20 w-9 rounded-full bg-coral/40 lg:block"
        />

        <div className="container-site absolute left-0 right-0 top-6">
          <div className="text-primary-foreground [&_a]:text-primary-foreground/85">
            <Breadcrumbs
              items={[{ label: "Quem Somos", to: "/quem-somos" }, { label: "Transparência" }]}
              tone="dark"
            />
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
        <svg
          aria-hidden="true"
          viewBox="0 0 400 60"
          className="pointer-events-none absolute -left-4 bottom-16 hidden h-12 w-60 text-inst/25 lg:block"
        >
          <path
            d="M2,50 C90,8 200,58 398,12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="3 9"
            strokeLinecap="round"
          />
        </svg>

        <div className="container-site pb-4 pt-14 lg:pb-6 lg:pt-20">
          <Reveal>
            <div className="mx-auto max-w-[850px] text-center">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-inst">
                Transparência
              </p>
              <h1 className="mx-auto mt-4 max-w-[760px] text-[2rem] font-semibold leading-[1.15] text-inst-deep sm:text-[2.5rem] lg:text-[2.9rem]">
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

          {/* elemento visual do acervo */}
          <Reveal delay={80}>
            <div className="mt-12 flex justify-center lg:mt-16">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 220 96"
                className="h-24 w-[220px]"
              >
                <circle cx="110" cy="52" r="40" fill="var(--inst-soft)" />
                <circle cx="110" cy="52" r="46" fill="none" stroke="var(--inst)" strokeOpacity="0.22" strokeWidth="1" />
                <path
                  d="M12,74 C48,74 62,30 110,30 C158,30 172,74 208,74"
                  fill="none"
                  stroke="var(--inst)"
                  strokeOpacity="0.35"
                  strokeWidth="1.4"
                  strokeDasharray="3 8"
                  strokeLinecap="round"
                />
                <rect x="86" y="26" width="34" height="44" rx="5" fill="#ffffff" stroke="var(--inst)" strokeOpacity="0.45" strokeWidth="1.4" />
                <rect x="98" y="34" width="34" height="44" rx="5" fill="#ffffff" stroke="var(--inst)" strokeOpacity="0.7" strokeWidth="1.4" />
                <line x1="106" y1="46" x2="124" y2="46" stroke="var(--inst)" strokeOpacity="0.5" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="106" y1="54" x2="124" y2="54" stroke="var(--inst)" strokeOpacity="0.5" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="106" y1="62" x2="117" y2="62" stroke="var(--inst)" strokeOpacity="0.5" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="42" cy="40" r="5" fill="var(--mata)" fillOpacity="0.5" />
                <circle cx="182" cy="34" r="4" fill="var(--coral)" fillOpacity="0.5" />
                <rect x="160" y="52" width="9" height="22" rx="4.5" fill="var(--inst)" fillOpacity="0.18" />
              </svg>
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

        <div className="container-site pb-16 pt-16 lg:pb-24 lg:pt-24">
          <Reveal>
            <div className="mx-auto max-w-[780px] text-center">
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

          {/* barra de ferramentas */}
          <Reveal delay={60}>
            <div className="glass-soft mx-auto mt-12 max-w-[1180px] rounded-[18px] p-4 sm:p-5 lg:mt-14">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="relative w-full lg:max-w-[320px]">
                  <label htmlFor="busca-acervo" className="sr-only">
                    Buscar no acervo
                  </label>
                  <Search
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-inst/70"
                  />
                  <input
                    id="busca-acervo"
                    type="search"
                    value={busca}
                    onChange={(e) => {
                      setBusca(e.target.value);
                      setPagina(1);
                    }}
                    placeholder="Buscar no acervo..."
                    className="h-[45px] w-full rounded-[13px] border border-inst/12 bg-background/60 pl-10 pr-3 text-sm text-inst-deep placeholder:text-neutro/80 focus:border-inst/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-inst/25"
                  />
                </div>

                <div className="lg:ml-auto lg:w-[210px]">
                  <label htmlFor="ano-acervo" className="sr-only">
                    Filtrar por ano
                  </label>
                  <select
                    id="ano-acervo"
                    value={ano}
                    onChange={(e) => {
                      setAno(e.target.value);
                      setPagina(1);
                    }}
                    className="h-[45px] w-full rounded-[13px] border border-inst/12 bg-background/60 px-3 text-sm font-medium text-inst-deep focus:border-inst/45 focus:outline-none focus-visible:ring-2 focus-visible:ring-inst/25"
                  >
                    {anosAcervo.map((a) => (
                      <option key={a} value={a}>
                        {a}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div
                role="group"
                aria-label="Filtrar por categoria"
                className="-mx-1 mt-4 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible"
              >
                {categoriasAcervo.map((c) => {
                  const ativa = categoria === c;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => {
                        setCategoria(c);
                        setPagina(1);
                      }}
                      aria-pressed={ativa}
                      className={cn(
                        "shrink-0 rounded-full border px-3.5 py-2 text-[0.82rem] transition-colors",
                        ativa
                          ? "border-inst/25 bg-inst/10 font-semibold text-inst"
                          : "border-inst/10 bg-background/55 font-medium text-inst-deep hover:bg-background/85",
                      )}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <p className="mx-auto mt-5 max-w-[1180px] text-[0.82rem] text-neutro" aria-live="polite">
            {filtrados.length} {filtrados.length === 1 ? "item encontrado" : "itens encontrados"}
          </p>

          {/* lista de documentos */}
          {visiveis.length > 0 ? (
            <ul className="mx-auto mt-4 max-w-[1180px] space-y-3.5">
              {visiveis.map((item, i) => {
                const v = visual[item.categoria];
                const Icone = v.icone;
                return (
                  <Reveal as="li" key={`${item.nome}-${item.ano}`} delay={Math.min(i, 5) * 40}>
                    <article className="group rounded-[17px] border border-inst/8 bg-background/64 p-4 shadow-[0_5px_18px_rgba(16,33,60,0.035)] backdrop-blur-[8px] transition-all duration-200 hover:-translate-y-px hover:border-inst/20 hover:bg-background/85 hover:shadow-[0_10px_26px_rgba(16,33,60,0.06)] sm:p-5">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <span
                          aria-hidden="true"
                          className={cn(
                            "inline-flex size-12 shrink-0 items-center justify-center rounded-[14px]",
                            v.fundo,
                            v.cor,
                          )}
                        >
                          <Icone className="size-5" />
                        </span>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-[1.05rem] font-semibold leading-snug text-inst-deep sm:text-[1.12rem]">
                            {item.nome}
                          </h3>
                          {item.descricao ? (
                            <p className="mt-1 line-clamp-2 text-[0.9rem] leading-relaxed text-neutro">
                              {item.descricao}
                            </p>
                          ) : null}
                        </div>

                        <div className="shrink-0 text-[0.87rem] text-neutro sm:w-[220px]">
                          <p className="font-medium text-inst-deep/90">{item.categoria}</p>
                          <p className="mt-0.5 tabular-nums">
                            {item.ano} · {item.formato}
                          </p>
                        </div>

                        <div className="flex shrink-0 flex-wrap items-center gap-2">
                          <a
                            href="#acervo"
                            aria-label={`Visualizar ${item.nome}, ${item.categoria}, ${item.ano}`}
                            className="inline-flex h-[41px] items-center gap-2 rounded-[12px] border border-inst/16 bg-background/65 px-4 text-[0.85rem] font-semibold text-inst backdrop-blur-[8px] transition-colors hover:bg-inst/8"
                          >
                            <Eye className="size-4" aria-hidden="true" />
                            Visualizar
                          </a>
                          {item.download ? (
                            <a
                              href="#acervo"
                              aria-label={`Baixar ${item.nome}, ${item.categoria}, ${item.ano}`}
                              className="inline-flex h-[41px] items-center gap-1.5 rounded-[12px] px-2.5 text-[0.83rem] font-medium text-neutro transition-colors hover:text-inst"
                            >
                              <Download className="size-4" aria-hidden="true" />
                              Baixar
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </ul>
          ) : (
            <div className="mx-auto mt-6 max-w-[1180px] rounded-[17px] border border-inst/10 bg-background/60 p-10 text-center backdrop-blur-[8px]">
              <SearchX className="mx-auto size-6 text-inst/60" aria-hidden="true" />
              <p className="mt-3 font-display text-[1.05rem] font-semibold text-inst-deep">
                Nenhum item encontrado
              </p>
              <p className="mt-1.5 text-[0.9rem] text-neutro">
                Experimente alterar os filtros ou buscar por outro termo.
              </p>
            </div>
          )}

          {/* paginação */}
          {totalPaginas > 1 ? (
            <nav aria-label="Paginação do acervo" className="mt-10 flex justify-center">
              <ul className="flex flex-wrap items-center justify-center gap-1.5">
                <li>
                  <button
                    type="button"
                    onClick={() => setPagina(Math.max(1, paginaAtual - 1))}
                    disabled={paginaAtual === 1}
                    aria-label="Página anterior"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-inst/12 bg-background/60 text-sm text-inst-deep backdrop-blur-[8px] transition-colors hover:bg-background/90 disabled:opacity-40"
                  >
                    ←
                  </button>
                </li>
                {paginasVisiveis(paginaAtual, totalPaginas).map((p, i) =>
                  p === "..." ? (
                    <li key={`gap-${i}`} className="px-1 text-sm text-neutro">
                      …
                    </li>
                  ) : (
                    <li key={p}>
                      <button
                        type="button"
                        onClick={() => setPagina(p)}
                        aria-label={`Página ${p}`}
                        aria-current={p === paginaAtual ? "page" : undefined}
                        className={cn(
                          "inline-flex size-9 items-center justify-center rounded-full border text-sm tabular-nums backdrop-blur-[8px] transition-colors",
                          p === paginaAtual
                            ? "border-inst/25 bg-inst/10 font-semibold text-inst"
                            : "border-inst/12 bg-background/60 text-inst-deep hover:bg-background/90",
                        )}
                      >
                        {p}
                      </button>
                    </li>
                  ),
                )}
                <li>
                  <button
                    type="button"
                    onClick={() => setPagina(Math.min(totalPaginas, paginaAtual + 1))}
                    disabled={paginaAtual === totalPaginas}
                    aria-label="Próxima página"
                    className="inline-flex size-9 items-center justify-center rounded-full border border-inst/12 bg-background/60 text-sm text-inst-deep backdrop-blur-[8px] transition-colors hover:bg-background/90 disabled:opacity-40"
                  >
                    →
                  </button>
                </li>
              </ul>
            </nav>
          ) : null}

          <p className="mx-auto mt-8 max-w-[1180px] text-center text-[0.8rem] text-neutro">
            Os itens listados são demonstrativos. Para solicitar informações adicionais ou versões anteriores,
            entre em contato com a coordenação administrativa.
          </p>
        </div>
      </section>

      {/* 4. CTA FINAL — compacto, sem imagem */}
      <section className="bg-background pb-20">
        <div className="container-site">
          <div className="relative isolate mx-auto max-w-[1100px] overflow-hidden rounded-[26px] bg-inst-deep px-6 py-10 text-center text-primary-foreground sm:px-10">
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
              <path
                d="M2,48 C70,6 150,58 298,14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 9"
                strokeLinecap="round"
              />
            </svg>

            <div className="relative mx-auto max-w-[680px]">
              <h2 className="text-[1.55rem] font-semibold leading-tight sm:text-[1.9rem]">
                Transparência também aproxima.
              </h2>
              <p className="mx-auto mt-3 max-w-[620px] text-[0.97rem] leading-relaxed text-primary-foreground/80">
                Se você precisa de uma informação específica ou deseja conhecer melhor nossa atuação, entre em
                contato com a equipe.
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
