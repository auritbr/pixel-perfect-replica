import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, FileText, Mail, Linkedin, Download } from "lucide-react";
import type { Projeto } from "@/data/projetos";
import type { Noticia } from "@/data/noticias";
import type { Integrante } from "@/data/equipe";
import type { Documento } from "@/data/documentos";
import { cn } from "@/lib/utils";

const acentos: Record<Projeto["cor"], string> = {
  primary: "bg-primary",
  verde: "bg-verde",
  terracota: "bg-terracota",
};

export function ProjectCard({ projeto, destaque = false }: { projeto: Projeto; destaque?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <div className="relative overflow-hidden">
        <img
          src={projeto.imagem}
          alt={`Atividade do projeto ${projeto.nome}`}
          loading="lazy"
          className={cn(
            "w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]",
            destaque ? "aspect-16/10" : "aspect-4/3",
          )}
        />
        <span
          className={cn(
            "absolute left-4 top-4 rounded-full px-3 py-1 font-display text-[0.68rem] font-bold uppercase tracking-wider text-primary-foreground",
            acentos[projeto.cor],
          )}
        >
          {projeto.categoria}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-primary-deep">{projeto.nome}</h3>
        <p className="mt-3 flex-1 text-sm text-muted-foreground">{projeto.resumo}</p>
        <Link
          to="/projetos/$slug"
          params={{ slug: projeto.slug }}
          className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-primary transition-colors hover:text-primary-deep"
        >
          Conhecer projeto
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function NewsCard({ noticia, compacto = false }: { noticia: Noticia; compacto?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/70 bg-card transition-shadow duration-300 hover:shadow-soft">
      <Link
        to="/noticias/$slug"
        params={{ slug: noticia.slug }}
        className="block overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={noticia.imagem}
          alt=""
          loading="lazy"
          className={cn(
            "w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]",
            compacto ? "aspect-16/9" : "aspect-3/2",
          )}
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-secondary px-2.5 py-1 font-display font-semibold uppercase tracking-wide text-secondary-foreground">
            {noticia.tag}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Calendar className="size-3.5" aria-hidden="true" />
            <time dateTime={noticia.dataISO}>{noticia.data}</time>
          </span>
        </div>
        <h3 className="mt-3 text-lg leading-snug text-primary-deep">
          <Link
            to="/noticias/$slug"
            params={{ slug: noticia.slug }}
            className="transition-colors hover:text-primary"
          >
            {noticia.titulo}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{noticia.resumo}</p>
        <Link
          to="/noticias/$slug"
          params={{ slug: noticia.slug }}
          className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-primary hover:text-primary-deep"
        >
          Leia mais
          <ArrowRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function TeamCard({ pessoa }: { pessoa: Integrante }) {
  return (
    <article className="group rounded-xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
      <div className="flex items-center gap-4">
        <span className="badge-shape inline-flex size-14 shrink-0 items-center justify-center bg-secondary font-display text-base font-bold text-primary transition-transform duration-300 group-hover:scale-[1.02]">
          {pessoa.iniciais}
        </span>
        <div>
          <h3 className="text-base leading-tight text-primary-deep">{pessoa.nome}</h3>
          <p className="mt-1 text-sm text-primary">{pessoa.cargo}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{pessoa.descricao}</p>
      {(pessoa.email || pessoa.linkedin) && (
        <div className="mt-4 flex items-center gap-3 border-t border-border pt-4 text-xs">
          {pessoa.email ? (
            <a
              href={`mailto:${pessoa.email}`}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              E-mail
            </a>
          ) : null}
          {pessoa.linkedin ? (
            <a
              href={pessoa.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary"
            >
              <Linkedin className="size-3.5" aria-hidden="true" />
              LinkedIn
            </a>
          ) : null}
        </div>
      )}
    </article>
  );
}

export function DocumentCard({ documento }: { documento: Documento }) {
  return (
    <li className="flex flex-wrap items-center gap-4 rounded-lg border border-border/70 bg-card px-4 py-3.5 transition-colors hover:border-primary/40">
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
        <FileText className="size-4.5" aria-hidden="true" />
      </span>
      <div className="min-w-[12rem] flex-1">
        <h3 className="text-sm font-semibold text-primary-deep">{documento.nome}</h3>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {documento.categoria} · {documento.ano} · {documento.tamanho}
        </p>
      </div>
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-2 text-xs font-semibold text-primary transition-colors hover:bg-secondary"
      >
        <Download className="size-3.5" aria-hidden="true" />
        Visualizar
      </button>
    </li>
  );
}
