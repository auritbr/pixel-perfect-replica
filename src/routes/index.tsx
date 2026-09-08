import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Archive,
  ArrowLeft,
  ArrowRight,
  Compass,
  FileCheck,
  HandHeart,
  Hammer,
  Leaf,
  Palette,
  Pause,
  Play,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero-escoteiros.jpg";
import oficinaImg from "@/assets/oficina-cultural.jpg";
import trilhasImg from "@/assets/projeto-trilhas.jpg";
import comunidadeImg from "@/assets/projeto-comunidade.jpg";
import { projetos } from "@/data/projetos";
import { noticias } from "@/data/noticias";
import { NewsCard } from "@/components/site/Cards";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ponto de Cultura Trilha Viva — cultura e comunidade" },
      { name: "description", content: "Escotismo, cultura, educação não formal e participação comunitária em projetos para crianças, jovens e adultos." },
      { property: "og:title", content: "Ponto de Cultura Trilha Viva" },
      { property: "og:description", content: "Cultura, educação e experiências coletivas que fortalecem a comunidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [
  { image: heroImg, alt: "Jovens e adultos com lenços escoteiros em atividade ao ar livre", eyebrow: "Ponto de Cultura", title: "Cultura, aprendizado e comunidade em movimento", text: "Experiências que unem escotismo, educação, criatividade e participação para construir novas possibilidades junto à comunidade.", primary: { label: "Conheça nossa história", to: "/quem-somos" }, secondary: { label: "Conheça os projetos", to: "/projetos" } },
  { image: trilhasImg, alt: "Grupo escoteiro reunido durante atividade em meio à natureza", eyebrow: "Escotismo e cultura", title: "Aprender fazendo, compartilhar vivendo", text: "Atividades que aproximam pessoas, saberes, natureza, criatividade e experiências coletivas.", primary: { label: "Conheça nossa atuação", to: "/quem-somos" }, secondary: { label: "Veja a galeria", to: "/galeria" } },
  { image: comunidadeImg, alt: "Voluntários e jovens participando de ação comunitária", eyebrow: "Comunidade", title: "Cada encontro deixa uma história", text: "Projetos, oficinas e ações que fortalecem vínculos, autonomia e participação.", primary: { label: "Veja as notícias", to: "/noticias" }, secondary: { label: "Fale conosco", to: "/contato" } },
] as const;

const formas = [
  { icon: Compass, titulo: "Educação não formal", texto: "Aprendizado que acontece na prática, no ritmo de cada grupo e com avaliação coletiva.", tone: "bg-inst-soft text-inst", shape: "border-inst/15" },
  { icon: Palette, titulo: "Cultura e criatividade", texto: "Oficinas, mostras e encontros que colocam a criação no centro da convivência.", tone: "bg-coral-soft text-coral", shape: "border-coral/14" },
  { icon: Leaf, titulo: "Vida ao ar livre", texto: "Trilhas, acampamentos e atividades de campo com práticas de mínimo impacto.", tone: "bg-mata-soft text-mata", shape: "border-mata/16" },
  { icon: Users, titulo: "Cidadania", texto: "Decisões tomadas em assembleia, com voz efetiva para crianças e jovens.", tone: "bg-inst-soft text-inst", shape: "border-inst/15" },
  { icon: Hammer, titulo: "Artesanato", texto: "Madeira, fibras, pintura e reaproveitamento como linguagens de aprendizado.", tone: "bg-coral-soft text-coral", shape: "border-coral/14" },
  { icon: HandHeart, titulo: "Convivência comunitária", texto: "Ações construídas junto com moradores, escolas e coletivos do bairro.", tone: "bg-mata-soft text-mata", shape: "border-mata/16" },
] as const;

function HomeHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduced || document.hidden) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 8000);
    return () => window.clearInterval(timer);
  }, [paused, reduced]);

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const slide = slides[active];
  const change = (next: number) => { setActive((next + slides.length) % slides.length); setPaused(true); };

  return (
    <section aria-roledescription="carrossel" aria-label="Destaques do Ponto de Cultura" onMouseEnter={() => setPaused(true)} onMouseLeave={() => { if (!reduced) setPaused(false); }} className="relative isolate min-h-[560px] overflow-hidden bg-inst-deep sm:min-h-[620px] lg:min-h-[680px]">
      {slides.map((item, index) => <img key={item.title} src={item.image} alt={index === active ? item.alt : ""} aria-hidden={index !== active} width={1920} height={1280} className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`} />)}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-inst-deep/90 via-inst-deep/62 to-inst-deep/22" />
      <span aria-hidden="true" className="absolute -left-16 top-24 hidden size-40 rounded-full border-[11px] border-coral/35 sm:block" />
      <span aria-hidden="true" className="absolute right-8 top-20 hidden h-32 w-14 -rotate-12 rounded-full bg-inst/35 lg:block" />
      <div className="container-site relative flex min-h-[560px] items-center pb-24 pt-28 text-primary-foreground sm:min-h-[620px] lg:min-h-[680px]">
        <div key={slide.title} className="max-w-[760px] animate-in fade-in slide-in-from-bottom-2 duration-500">
          <span className="inline-flex items-center gap-2 rounded-[18px] border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-2 font-display text-[0.75rem] font-semibold uppercase tracking-[0.14em] backdrop-blur-[8px]"><span className="size-1.5 rounded-full bg-coral" />{slide.eyebrow}</span>
          <h1 className="mt-5 max-w-[740px] text-[2.15rem] font-semibold leading-[1.1] sm:text-[2.8rem] lg:text-[3.45rem]">{slide.title}</h1>
          <p className="mt-5 max-w-[650px] text-[1.02rem] leading-relaxed text-primary-foreground/84 sm:text-[1.18rem]">{slide.text}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link to={slide.primary.to} className="btn-base glass-btn-light w-full sm:w-auto">{slide.primary.label}<ArrowRight className="size-4" aria-hidden="true" /></Link>
            <Link to={slide.secondary.to} className="btn-base glass-btn-ghost w-full sm:w-auto">{slide.secondary.label}<ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5">
        <button type="button" onClick={() => change(active - 1)} aria-label="Slide anterior" className="inline-flex size-9 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground backdrop-blur-[8px] transition-colors hover:bg-primary-foreground/20"><ArrowLeft className="size-4" /></button>
        <div className="flex gap-2" aria-label={`Slide ${active + 1} de ${slides.length}`}>{slides.map((item, index) => <button key={item.title} type="button" onClick={() => change(index)} aria-label={`Mostrar slide ${index + 1}`} aria-current={index === active} className={`h-2 rounded-full transition-all ${index === active ? "w-7 bg-primary-foreground" : "w-2 bg-primary-foreground/45"}`} />)}</div>
        <button type="button" onClick={() => change(active + 1)} aria-label="Próximo slide" className="inline-flex size-9 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground backdrop-blur-[8px] transition-colors hover:bg-primary-foreground/20"><ArrowRight className="size-4" /></button>
        <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Retomar carrossel" : "Pausar carrossel"} className="inline-flex size-9 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground backdrop-blur-[8px] transition-colors hover:bg-primary-foreground/20">{paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}</button>
      </div>
      <svg aria-hidden="true" viewBox="0 0 1440 90" preserveAspectRatio="none" className="absolute bottom-0 h-[52px] w-full sm:h-[68px]"><path d="M0,70 C260,26 460,84 760,58 C1030,34 1210,78 1440,46 L1440,90 L0,90 Z" fill="var(--background)" /></svg>
    </section>
  );
}

function CenteredHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <header className="mx-auto max-w-[810px] text-center"><p className="eyebrow">{eyebrow}</p><h2 className="mt-3 text-[1.8rem] font-semibold leading-tight text-inst-deep sm:text-[2.25rem]">{title}</h2>{text ? <p className="mx-auto mt-4 max-w-[800px] text-[0.96rem] leading-relaxed text-neutro">{text}</p> : null}</header>;
}

function Index() {
  const ultimas = noticias.slice(0, 3);
  return (
    <>
      <HomeHero />
      <section className="relative overflow-hidden bg-background">
        <div className="container-site grid items-center gap-12 py-20 lg:grid-cols-[1fr_460px] lg:gap-16 lg:py-24">
          <Reveal><p className="eyebrow">Apresentação</p><h2 className="mt-3 max-w-[620px] text-[1.9rem] font-semibold leading-tight text-inst-deep sm:text-[2.35rem]">Um espaço para aprender, criar e compartilhar</h2><p className="mt-5 max-w-[620px] text-[0.98rem] leading-relaxed text-neutro">Somos um Ponto de Cultura ligado ao movimento escoteiro. Nosso trabalho acontece por meio da educação não formal: oficinas de artesanato, atividades ao ar livre, encontros comunitários e experiências coletivas que reúnem crianças, adolescentes, jovens e adultos.</p><p className="mt-4 max-w-[620px] text-[0.98rem] leading-relaxed text-neutro">A sede funciona durante a semana como espaço de oficina e de estudo. Nos fins de semana, o trabalho vai para as ruas, praças e trilhas do território onde vivemos.</p><blockquote className="mt-7 border-l-2 border-coral pl-5 font-display text-[1.05rem] font-semibold leading-relaxed text-inst-deep">Aprender fazendo. Conviver compartilhando. Transformar participando.</blockquote></Reveal>
          <Reveal delay={80}><div className="relative mx-auto max-w-[460px] pb-5 pr-5"><span aria-hidden="true" className="absolute -bottom-1 -right-1 size-28 rounded-full bg-inst-soft" /><span aria-hidden="true" className="absolute -left-4 top-8 h-20 w-10 rounded-t-full border-[7px] border-mata-soft" /><img src={oficinaImg} alt="Grupo reunido em oficina de fibras naturais" loading="lazy" width={460} height={330} className="relative h-[300px] w-full rounded-[24px] object-cover shadow-soft sm:h-[330px]" /></div></Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-muted/55">
        <div className="container-site py-20 lg:py-24"><Reveal><CenteredHeader eyebrow="Nossa forma de atuar" title="Seis frentes que se cruzam em cada atividade" text="Áreas que se conectam no cotidiano da organização e ajudam a transformar cada encontro em uma experiência de aprendizagem, convivência e participação." /></Reveal>
          <div className="relative mx-auto mt-12 max-w-[1100px]"><svg aria-hidden="true" viewBox="0 0 1000 440" preserveAspectRatio="none" className="pointer-events-none absolute inset-[8%] hidden h-[84%] w-[84%] text-inst/14 lg:block"><path d="M80 105 C260 25 350 165 500 105 S760 20 920 115 M80 330 C280 245 380 390 525 320 S770 245 920 335 M165 120 C210 210 200 260 165 320 M500 120 C460 205 470 260 515 320 M835 120 C780 205 790 260 835 320" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 10" /></svg><ul className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{formas.map((item, index) => <Reveal as="li" key={item.titulo} delay={index * 45}><article className="relative h-full min-h-[190px] overflow-hidden rounded-[21px] border border-inst-deep/7 bg-card/80 p-5 shadow-[0_6px_18px_rgb(18_38_64_/_0.025)]"><span aria-hidden="true" className={`absolute -bottom-6 -right-6 size-16 rounded-full border-[7px] ${item.shape}`} /><span className={`inline-flex size-11 items-center justify-center rounded-[14px] ${item.tone}`}><item.icon className="size-5" aria-hidden="true" /></span><h3 className="mt-4 text-[1.03rem] font-semibold text-inst-deep">{item.titulo}</h3><p className="mt-2 text-[0.86rem] leading-relaxed text-neutro">{item.texto}</p></article></Reveal>)}</ul></div>
        </div>
      </section>

      <section className="bg-background"><div className="container-site py-20 lg:py-24"><Reveal><CenteredHeader eyebrow="Projetos" title="Projetos que transformam experiências em aprendizado" /></Reveal><div className="mx-auto mt-12 grid max-w-[1100px] gap-6 md:grid-cols-2 lg:grid-cols-3">{projetos.map((projeto, index) => <Reveal key={projeto.slug} delay={index * 60}><article className="group relative flex h-full flex-col overflow-hidden rounded-[21px] border border-inst-deep/7 bg-card/80 shadow-[0_8px_22px_rgb(18_38_64_/_0.03)]"><div className="overflow-hidden"><img src={projeto.imagem} alt={`Atividade do projeto ${projeto.nome}`} loading="lazy" width={640} height={400} className="aspect-16/10 w-full object-cover transition-transform duration-300 group-hover:scale-[1.018]" /></div><div className="relative flex flex-1 flex-col p-5"><span aria-hidden="true" className={`absolute -right-4 top-3 ${index === 0 ? "size-12 rounded-t-full border-[6px] border-inst-soft" : index === 1 ? "size-10 rounded-full bg-mata-soft" : "h-12 w-6 rounded-full bg-coral-soft"}`} /><p className="relative font-display text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-inst">{projeto.categoria}</p><h3 className="relative mt-2 text-[1.25rem] font-semibold text-inst-deep">{projeto.nome}</h3><p className="relative mt-2 flex-1 text-[0.86rem] leading-relaxed text-neutro">{projeto.resumo}</p><Link to="/projetos/$slug" params={{ slug: projeto.slug }} className="relative mt-4 inline-flex w-fit items-center gap-2 text-[0.83rem] font-semibold text-inst hover:text-inst-deep">Conhecer projeto<ArrowRight className="size-3.5" aria-hidden="true" /></Link></div></article></Reveal>)}</div><div className="mt-8 text-center"><Link to="/projetos" className="btn-base glass-btn-soft h-[40px] px-5 text-[0.83rem]">Ver todos os projetos<ArrowRight className="size-4" aria-hidden="true" /></Link></div></div></section>

      <section className="bg-muted/45 px-5 py-16 lg:py-20"><Reveal><article className="relative mx-auto flex max-w-[960px] flex-col items-start gap-5 overflow-hidden rounded-[23px] border border-inst-deep/8 bg-card/75 p-6 shadow-[0_8px_24px_rgb(18_38_64_/_0.03)] backdrop-blur-[8px] sm:flex-row sm:items-center sm:p-7"><span aria-hidden="true" className="absolute -right-8 -top-8 size-24 rounded-full bg-inst-soft" /><span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-[15px] bg-inst-soft text-inst"><Archive className="size-5" aria-hidden="true" /></span><div className="relative flex-1"><p className="font-display text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-inst">Acervo público</p><h2 className="mt-1.5 text-[1.35rem] font-semibold text-inst-deep">Transparência</h2><p className="mt-2 max-w-[650px] text-[0.88rem] leading-relaxed text-neutro">Documentos e registros que ajudam a tornar pública nossa atuação e fortalecem a relação com a comunidade.</p></div><Link to="/quem-somos/transparencia" className="btn-base glass-btn-soft relative h-[40px] w-full px-5 text-[0.83rem] sm:w-auto">Consultar acervo<FileCheck className="size-4" aria-hidden="true" /></Link></article></Reveal></section>

      <section className="bg-background"><div className="container-site py-20 lg:py-24"><Reveal><CenteredHeader eyebrow="Notícias" title="Histórias que acompanham nossa caminhada" text="Veja alguns dos acontecimentos, encontros e atividades mais recentes." /></Reveal><div className="mx-auto mt-12 grid max-w-[1100px] gap-6 md:grid-cols-2 lg:grid-cols-3">{ultimas.map((noticia, index) => <Reveal key={noticia.slug} delay={index * 60}><NewsCard noticia={noticia} compacto /></Reveal>)}</div><div className="mt-8 text-center"><Link to="/noticias" className="btn-base glass-btn-soft h-[40px] px-5 text-[0.83rem]">Ver todas as notícias<ArrowRight className="size-4" aria-hidden="true" /></Link></div></div></section>

      <section className="bg-background px-5 pb-20 lg:pb-24"><div className="relative mx-auto flex min-h-[220px] max-w-[1100px] items-center justify-center overflow-hidden rounded-[27px] bg-inst-deep px-7 py-10 text-center text-primary-foreground sm:px-12"><span aria-hidden="true" className="absolute -left-10 -top-10 size-32 rounded-full border-[13px] border-coral/20" /><span aria-hidden="true" className="absolute -right-6 bottom-4 h-24 w-12 rounded-full border-[8px] border-inst/45" /><span aria-hidden="true" className="absolute right-[18%] top-7 size-2.5 rounded-full bg-mata" /><div className="relative max-w-[760px]"><h2 className="text-[1.65rem] font-semibold leading-tight sm:text-[2rem]">Cada encontro pode abrir um novo caminho.</h2><p className="mx-auto mt-3 max-w-[650px] text-[0.94rem] leading-relaxed text-primary-foreground/80">Conheça nossas iniciativas, acompanhe as atividades ou fale com a equipe para saber mais sobre o trabalho desenvolvido.</p><div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/projetos" className="btn-base glass-btn-light">Conheça nossos projetos</Link><Link to="/contato" className="btn-base glass-btn-ghost">Fale conosco</Link></div></div></div></section>
    </>
  );
}