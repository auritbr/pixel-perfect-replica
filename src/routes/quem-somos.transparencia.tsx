import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import {
  anosDocumentos,
  categoriasDocumentos,
  documentos,
  secoesDocumentos,
} from "@/data/documentos";
import { PageHero } from "@/components/site/PageHero";
import { DocumentCard } from "@/components/site/Cards";
import { SearchBar, TagFilter } from "@/components/site/Filtros";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";
import ctaImg from "@/assets/transparencia.jpg";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Documentos institucionais, relatórios de atividades, demonstrativos financeiros, certificações e prestação de contas disponíveis para consulta.",
      },
      { property: "og:title", content: "Transparência — Ponto de Cultura Trilha Viva" },
      {
        property: "og:description",
        content: "Informação acessível também faz parte do nosso compromisso.",
      },
    ],
  }),
  component: Transparencia,
});

function Transparencia() {
  const [categoria, setCategoria] = useState<string>("Todos");
  const [ano, setAno] = useState<string>("Todos");
  const [busca, setBusca] = useState("");

  const filtrados = useMemo(
    () =>
      documentos.filter(
        (d) =>
          (categoria === "Todos" || d.categoria === categoria) &&
          (ano === "Todos" || d.ano === ano) &&
          d.nome.toLowerCase().includes(busca.trim().toLowerCase()),
      ),
    [categoria, ano, busca],
  );

  return (
    <>
      <PageHero
        variante="plain"
        titulo="Transparência"
        subtitulo="Informação acessível também faz parte do nosso compromisso."
        descricao="Reunimos aqui os documentos que permitem acompanhar como a organização se estrutura e como aplica os recursos que recebe."
        crumbs={[{ label: "Quem Somos", to: "/quem-somos" }, { label: "Transparência" }]}
      />

      <section className="bg-background">
        <div className="container-site py-14 lg:py-20">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <SearchBar
              valor={busca}
              onChange={setBusca}
              rotulo="Buscar documento"
              placeholder="Buscar documento..."
            />
            <div className="flex flex-col gap-3 lg:items-end">
              <TagFilter
                opcoes={categoriasDocumentos}
                ativa={categoria}
                onChange={setCategoria}
                rotulo="Filtrar por categoria"
              />
              <TagFilter opcoes={anosDocumentos} ativa={ano} onChange={setAno} rotulo="Filtrar por ano" />
            </div>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            {filtrados.length} {filtrados.length === 1 ? "documento encontrado" : "documentos encontrados"}
          </p>

          <div className="mt-8 space-y-10">
            {secoesDocumentos.map((secao) => {
              const itens = filtrados.filter((d) => d.secao === secao);
              if (itens.length === 0) return null;
              return (
                <Reveal key={secao}>
                  <h2 className="flex items-center gap-2 font-display text-lg font-bold text-primary-deep">
                    <span className="h-px w-6 bg-gold" aria-hidden="true" />
                    {secao}
                  </h2>
                  <ul className="mt-4 space-y-2.5">
                    {itens.map((d) => (
                      <DocumentCard key={d.nome + d.ano} documento={d} />
                    ))}
                  </ul>
                </Reveal>
              );
            })}
            {filtrados.length === 0 ? (
              <p className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                Nenhum documento corresponde aos filtros selecionados.
              </p>
            ) : null}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-4 rounded-xl bg-secondary p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-lg bg-background text-primary">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <p className="max-w-2xl text-sm text-secondary-foreground">
              Os documentos desta página são demonstrativos. Para solicitar informações adicionais ou versões
              anteriores, entre em contato pelo formulário ou pelo e-mail institucional.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        variante="foto"
        titulo="Dúvidas sobre relatórios ou parcerias?"
        texto="A coordenação administrativa responde solicitações de informação em até cinco dias úteis."
        imagem={ctaImg}
        alt="Documentos e relatórios organizados sobre uma mesa"
        acoes={[
          { label: "Falar com a organização", to: "/contato" },
          { label: "Ver projetos", to: "/projetos" },
        ]}
      />
    </>
  );
}
