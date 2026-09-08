import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Compass } from "lucide-react";
import quemSomosImg from "@/assets/quem-somos.jpg";
import oficinaImg from "@/assets/oficina-cultural.jpg";
import trilhasImg from "@/assets/projeto-trilhas.jpg";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "História, propósito e forma de atuar de um Ponto de Cultura escoteiro dedicado à educação não formal, ao artesanato e à vida comunitária.",
      },
      { property: "og:title", content: "Quem Somos — Ponto de Cultura Trilha Viva" },
      {
        property: "og:description",
        content: "Cultura, educação e participação construídas coletivamente desde 2012.",
      },
    ],
  }),
  component: QuemSomos,
});

const proposito = [
  {
    titulo: "Missão",
    texto:
      "Promover experiências educativas e culturais que unam o método escoteiro, o trabalho manual e a vida comunitária, fortalecendo pessoas e o território onde atuamos.",
  },
  {
    titulo: "Visão",
    texto:
      "Ser uma referência local de educação não formal, reconhecida pela continuidade do trabalho, pela qualidade das atividades e pela relação de confiança com as famílias.",
  },
  {
    titulo: "Valores",
    texto:
      "Cuidado com as pessoas, respeito ao ambiente, transparência na gestão, participação real de crianças e jovens e valorização do saber manual.",
  },
];

const jeitoDeFazer = [
  { titulo: "Aprender", texto: "Estudar juntos antes de agir, com leitura, conversa e pesquisa." },
  { titulo: "Experimentar", texto: "Testar em pequena escala e aceitar o erro como parte do processo." },
  { titulo: "Compartilhar", texto: "Ensinar o que se aprendeu para quem chega depois." },
  { titulo: "Cuidar", texto: "Zelar por pessoas, ferramentas, espaços e ambiente." },
  { titulo: "Participar", texto: "Decidir coletivamente, em reuniões abertas e registradas." },
  { titulo: "Transformar", texto: "Deixar algo concreto e sustentável a cada ciclo de trabalho." },
];

function QuemSomos() {
  return (
    <>
      <PageHero
        variante="split"
        titulo="Quem Somos"
        descricao="Atuamos desde 2012 na Vila Progresso, reunindo o método escoteiro, práticas artesanais e a vida cultural do bairro em um mesmo projeto educativo."
        imagem={quemSomosImg}
        alt="Roda de conversa de escoteiros sentados na grama de um parque"
        crumbs={[{ label: "Quem Somos" }]}
      />

      {/* NOSSA HISTÓRIA */}
      <section className="bg-offwhite">
        <div className="container-site grid gap-10 py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:py-24">
          <Reveal className="relative">
            <div
              className="absolute -left-5 -top-5 hidden size-20 rounded-full bg-gold/25 lg:block"
              aria-hidden="true"
            />
            <img
              src={oficinaImg}
              alt="Educadora e jovens trabalhando com fibras naturais em oficina"
              loading="lazy"
              className="relative aspect-4/5 w-full rounded-2xl object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={80}>
            <SectionHeader eyebrow="Nossa história" titulo="Começamos com uma sala emprestada e doze pessoas" />
            <div className="mt-5 space-y-4 text-base text-muted-foreground">
              <p>
                O grupo nasceu de uma conversa entre voluntários do movimento escoteiro e moradores que
                buscavam atividades culturais para as crianças do bairro. As primeiras reuniões aconteciam em
                uma sala emprestada pela associação de moradores, com material doado e nenhum orçamento.
              </p>
              <p>
                Em 2016 alugamos a sede atual e passamos a manter oficinas semanais. O reconhecimento como
                Ponto de Cultura, em 2022, ampliou a capacidade de atendimento e permitiu organizar o acervo
                fotográfico, os relatórios e a formação continuada dos educadores.
              </p>
              <p>
                Hoje o trabalho se divide em três projetos permanentes, conduzidos por uma equipe de
                educadores contratados e por um grupo estável de voluntários formados pela própria
                organização.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NOSSO PROPÓSITO */}
      <section className="bg-background">
        <div className="container-site py-16 lg:py-24">
          <SectionHeader eyebrow="Nosso propósito" titulo="O que nos orienta" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {proposito.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 70} className="bg-background p-7">
                <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-gold">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-xl text-primary-deep">{p.titulo}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCAÇÃO NÃO FORMAL */}
      <section className="bg-primary-deep text-primary-foreground">
        <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal>
            <p className="eyebrow text-gold">Educação não formal</p>
            <h2 className="mt-3 text-2xl leading-tight sm:text-3xl">
              A experiência ensina aquilo que a explicação sozinha não alcança
            </h2>
            <p className="mt-5 text-base text-primary-foreground/80">
              Nossas atividades não substituem a escola: complementam. Quem monta um abrigo com cordas
              aprende geometria e cooperação ao mesmo tempo. Quem organiza uma mostra aprende a planejar,
              negociar e comunicar. O erro é parte do método, e cada ciclo termina com uma avaliação feita
              pelo próprio grupo.
            </p>
            <p className="mt-4 text-base text-primary-foreground/80">
              Os educadores acompanham cada turma com registros individuais, discutidos periodicamente com as
              famílias.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <img
              src={trilhasImg}
              alt="Jovens observando bússola e mapa no início de uma trilha na mata"
              loading="lazy"
              className="aspect-4/3 w-full rounded-2xl object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* NOSSO JEITO DE FAZER — trilha */}
      <section className="bg-offwhite">
        <div className="container-site py-16 lg:py-24">
          <SectionHeader eyebrow="Nosso jeito de fazer" titulo="Um percurso, seis passos" />
          <ol className="relative mt-12 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            <span
              className="absolute left-0 right-0 top-4 hidden border-t-2 border-dashed border-primary/25 lg:block"
              aria-hidden="true"
            />
            {jeitoDeFazer.map((etapa, i) => (
              <Reveal as="li" key={etapa.titulo} delay={i * 60} className="relative">
                <span className="relative inline-flex size-8 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base text-primary-deep">{etapa.titulo}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{etapa.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PONTO DE CULTURA */}
      <section className="bg-background">
        <div className="container-site py-16 lg:py-24">
          <div className="grid items-center gap-10 rounded-2xl bg-bege p-8 lg:grid-cols-[auto_1fr] lg:gap-14 lg:p-14">
            <div className="flex items-center gap-4">
              <span className="badge-shape inline-flex size-20 items-center justify-center bg-primary text-primary-foreground">
                <Compass className="size-8" aria-hidden="true" />
              </span>
              <span className="badge-shape inline-flex size-20 items-center justify-center bg-terracota text-primary-foreground">
                <Award className="size-8" aria-hidden="true" />
              </span>
            </div>
            <div>
              <p className="eyebrow">Ponto de Cultura</p>
              <h2 className="mt-3 text-2xl leading-tight text-primary-deep sm:text-3xl">
                Um espaço cultural aberto ao bairro
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground">
                Como Ponto de Cultura, mantemos atividades gratuitas e abertas à comunidade, cedemos espaço
                para coletivos locais e participamos das instâncias municipais de cultura. Também organizamos
                o registro das atividades — fotografias, relatos e documentos — de forma acessível a quem
                quiser consultar.
              </p>
              <Link
                to="/quem-somos/transparencia"
                className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:text-primary-deep"
              >
                Ver documentos e prestação de contas
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        variante="foto"
        titulo="Conheça quem faz tudo isso acontecer."
        texto="Educadores, coordenação, diretoria e voluntários que sustentam as atividades ao longo do ano."
        imagem={quemSomosImg}
        alt="Grupo reunido em atividade ao ar livre"
        acoes={[{ label: "Conheça nossa equipe", to: "/quem-somos/equipe" }]}
      />
    </>
  );
}
