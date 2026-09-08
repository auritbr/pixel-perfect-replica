import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  HandHeart,
  Hammer,
  Leaf,
  Palette,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero-escoteiros.jpg";
import oficinaImg from "@/assets/oficina-cultural.jpg";
import artesanatoImg from "@/assets/artesanato-maos.jpg";
import ctaImg from "@/assets/projeto-comunidade.jpg";
import { site } from "@/data/site";
import { projetos } from "@/data/projetos";
import { noticias } from "@/data/noticias";
import { destaquesHome } from "@/data/galeria";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ProjectCard, NewsCard } from "@/components/site/Cards";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ponto de Cultura Trilha Viva — cultura, aprendizado e comunidade" },
      {
        name: "description",
        content:
          "Experiências que unem escotismo, cultura, artesanato e cidadania. Conheça os projetos, as notícias e a galeria do Ponto de Cultura Trilha Viva.",
      },
      { property: "og:title", content: "Ponto de Cultura Trilha Viva" },
      {
        property: "og:description",
        content:
          "Educação não formal, oficinas de artesanato, atividades ao ar livre e ações comunitárias em um Ponto de Cultura escoteiro.",
      },
    ],
  }),
  component: Index,
});

const formas = [
  {
    icon: Compass,
    titulo: "Educação não formal",
    texto: "Aprendizado que acontece na prática, no ritmo de cada grupo e com avaliação coletiva.",
    cor: "text-primary",
    fundo: "bg-secondary",
  },
  {
    icon: Palette,
    titulo: "Cultura e criatividade",
    texto: "Oficinas, mostras e encontros que colocam a criação no centro da convivência.",
    cor: "text-terracota",
    fundo: "bg-bege",
  },
  {
    icon: Leaf,
    titulo: "Vida ao ar livre",
    texto: "Trilhas, acampamentos e atividades de campo com práticas de mínimo impacto.",
    cor: "text-verde",
    fundo: "bg-muted",
  },
  {
    icon: Users,
    titulo: "Cidadania",
    texto: "Decisões tomadas em assembleia, com voz efetiva para crianças e jovens.",
    cor: "text-primary",
    fundo: "bg-secondary",
  },
  {
    icon: Hammer,
    titulo: "Artesanato",
    texto: "Madeira, fibras, pintura e reaproveitamento como linguagens de aprendizado.",
    cor: "text-terracota",
    fundo: "bg-bege",
  },
  {
    icon: HandHeart,
    titulo: "Convivência comunitária",
    texto: "Ações construídas junto com moradores, escolas e coletivos do bairro.",
    cor: "text-verde",
    fundo: "bg-muted",
  },
];

function Index() {
  const ultimas = noticias.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[68vh] items-end overflow-hidden bg-primary-deep lg:min-h-[76vh]">
        <img
          src={heroImg}
          alt="Jovens e adultos com lenços escoteiros em atividade ao ar livre, sob as árvores"
          width={1920}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/70 to-primary-deep/25" />
        <div
          className="absolute right-8 top-16 hidden size-56 rounded-full border border-gold/40 lg:block"
          aria-hidden="true"
        />
        <div className="container-site relative pb-16 pt-28 text-primary-foreground lg:pb-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-3 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-[0.16em]">
            <Compass className="size-3.5 text-gold" aria-hidden="true" />
            {site.nome}
          </p>
          <h1 className="mt-6 max-w-3xl text-3xl leading-[1.1] sm:text-4xl lg:text-[3.4rem]">
            Cultura, aprendizado e comunidade em movimento.
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/85 lg:text-lg">
            Experiências que unem escotismo, cultura, criatividade, cidadania e convivência para fortalecer
            pessoas e territórios.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/quem-somos"
              className="inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-display text-sm font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Conheça nossa história
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-5 py-3 font-display text-sm font-bold transition-colors hover:bg-primary-foreground/10"
            >
              Conheça os projetos
            </Link>
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="bg-background">
        <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Apresentação"
              titulo="Um espaço para aprender, criar e compartilhar"
              texto="Somos um Ponto de Cultura ligado ao movimento escoteiro. Nosso trabalho acontece por meio da educação não formal: oficinas de artesanato, atividades ao ar livre, encontros comunitários e experiências coletivas que reúnem crianças, adolescentes, jovens e adultos."
            />
            <p className="mt-4 max-w-xl text-base text-muted-foreground">
              A sede funciona durante a semana como espaço de oficina e de estudo. Nos fins de semana, o
              trabalho vai para as ruas, praças e trilhas do território onde vivemos.
            </p>
            <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display text-lg font-semibold leading-snug text-primary-deep">
              Aprender fazendo.
              <br />
              Conviver compartilhando.
              <br />
              Transformar participando.
            </blockquote>
          </Reveal>
          <Reveal delay={80} className="relative">
            <div
              className="absolute -bottom-6 -right-6 hidden size-32 rounded-full bg-bege lg:block"
              aria-hidden="true"
            />
            <img
              src={oficinaImg}
              alt="Grupo reunido em volta de uma mesa de madeira durante oficina de fibras naturais"
              loading="lazy"
              width={1400}
              height={1200}
              className="relative aspect-4/3 w-full rounded-tr-[3.5rem] rounded-bl-[3.5rem] object-cover shadow-soft"
            />
          </Reveal>
        </div>
      </section>

      {/* NOSSA FORMA DE ATUAR */}
      <section className="bg-offwhite">
        <div className="container-site py-16 lg:py-24">
          <SectionHeader
            eyebrow="Nossa forma de atuar"
            titulo="Seis frentes que se cruzam em cada atividade"
            texto="Nenhuma delas funciona isolada: uma oficina de artesanato também é convivência, e uma trilha também é cidadania."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {formas.map((f, i) => (
              <Reveal as="li" key={f.titulo} delay={i * 60}>
                <div className="h-full rounded-xl border border-border/60 bg-card p-6 transition-shadow duration-300 hover:shadow-soft">
                  <span
                    className={`inline-flex size-11 items-center justify-center rounded-lg ${f.fundo} ${f.cor}`}
                  >
                    <f.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base text-primary-deep">{f.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.texto}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJETOS */}
      <section className="bg-background">
        <div className="container-site py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              eyebrow="Projetos"
              titulo="Projetos que transformam experiências em aprendizado"
            />
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:text-primary-deep"
            >
              Ver todos os projetos
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projetos.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ProjectCard projeto={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DESTAQUE ARTESANATO */}
      <section className="bg-bege">
        <div className="container-site grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
          <Reveal className="relative order-2 lg:order-1">
            <img
              src={artesanatoImg}
              alt="Mãos trançando fibra natural sobre bancada de madeira, com sementes e cordas"
              loading="lazy"
              width={1400}
              height={1100}
              className="aspect-5/4 w-full rounded-2xl object-cover shadow-soft"
            />
            <span className="stitch absolute -bottom-4 left-8 right-8 hidden lg:block" aria-hidden="true" />
          </Reveal>
          <Reveal delay={80} className="order-1 lg:order-2">
            <SectionHeader eyebrow="Artesanato" titulo="Criar também é uma forma de aprender" />
            <p className="mt-4 text-base text-muted-foreground">
              As práticas artesanais ocupam um lugar central no nosso trabalho. Trabalhar com as mãos exige
              tempo, atenção e decisão — e é nesse processo que aparecem criatividade, concentração,
              identidade, autonomia e colaboração. O material vem, sempre que possível, do reaproveitamento e
              de coleta responsável.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {[
                "Nós e amarrações",
                "Madeira",
                "Tecelagem",
                "Pintura",
                "Reciclagem criativa",
                "Objetos decorativos",
              ].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-terracota/30 bg-offwhite px-3.5 py-1.5 font-display text-xs font-semibold text-terracota"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <Link
              to="/projetos/$slug"
              params={{ slug: "maos-que-criam" }}
              className="mt-7 inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:text-primary-deep"
            >
              Ver a Oficina Mãos que Criam
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="bg-background">
        <div className="container-site py-14 lg:py-20">
          {/* Indicadores demonstrativos — substituir pelos números reais. */}
          <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {site.indicadores.map((ind) => (
              <li key={ind.rotulo} className="border-t-2 border-gold pt-4">
                <p className="font-display text-3xl font-bold text-primary-deep lg:text-4xl">{ind.valor}</p>
                <p className="mt-1 text-sm text-muted-foreground">{ind.rotulo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ÚLTIMAS NOTÍCIAS */}
      <section className="bg-offwhite">
        <div className="container-site py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader eyebrow="Notícias" titulo="O que aconteceu por aqui recentemente" />
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:text-primary-deep"
            >
              Ver todas as notícias
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ultimas.map((n, i) => (
              <Reveal key={n.slug} delay={i * 80}>
                <NewsCard noticia={n} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA / MEMÓRIAS */}
      <section className="bg-background">
        <div className="container-site py-16 lg:py-24">
          <SectionHeader
            eyebrow="Memórias"
            titulo="Histórias que também ficam nas imagens"
            texto="Um recorte do acervo registrado por voluntários em atividades, oficinas e saídas de campo."
          />
          <div className="mt-10">
            <GalleryGrid fotos={destaquesHome} colunas={3} variavel />
          </div>
          <Link
            to="/galeria"
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:text-primary-deep"
          >
            Conheça nossa galeria
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CTASection
        titulo="Cada encontro constrói uma nova história."
        texto="Participe das atividades, torne-se voluntário ou convide a organização para uma ação no seu bairro."
        imagem={ctaImg}
        alt="Mutirão comunitário de plantio com jovens e voluntários"
        acoes={[
          { label: "Conheça nossos projetos", to: "/projetos" },
          { label: "Fale conosco", to: "/contato" },
        ]}
      />
    </>
  );
}
