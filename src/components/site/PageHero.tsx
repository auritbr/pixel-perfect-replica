import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  return (
    <nav aria-label="Você está aqui" className="mb-5">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-1 text-xs",
          tone === "dark" ? "text-primary-foreground/70" : "text-muted-foreground",
        )}
      >
        <li>
          <Link to="/" className="hover:underline">
            Início
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-1">
            <ChevronRight className="size-3 opacity-60" aria-hidden="true" />
            {item.to ? (
              <Link to={item.to} className="hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Hero interno com imagem lateral (variação "split"), foto de fundo ("photo") ou minimalista ("plain"). */
export function PageHero({
  variante = "split",
  titulo,
  subtitulo,
  descricao,
  imagem,
  alt,
  crumbs,
  children,
}: {
  variante?: "split" | "photo" | "plain";
  titulo: string;
  subtitulo: string;
  descricao?: string;
  imagem?: string;
  alt?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  if (variante === "photo") {
    return (
      <section className="relative isolate overflow-hidden bg-primary-deep">
        {imagem ? (
          <img
            src={imagem}
            alt={alt ?? ""}
            className="absolute inset-0 size-full object-cover opacity-45"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/90 via-primary-deep/70 to-primary-deep/30" />
        <div className="container-site relative py-20 lg:py-28">
          <div className="max-w-2xl text-primary-foreground">
            <Breadcrumbs items={crumbs} tone="dark" />
            <h1 className="text-3xl leading-tight sm:text-4xl lg:text-[2.9rem]">{titulo}</h1>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/85">{subtitulo}</p>
            {descricao ? (
              <p className="mt-3 max-w-xl text-sm text-primary-foreground/70">{descricao}</p>
            ) : null}
            {children}
          </div>
        </div>
      </section>
    );
  }

  if (variante === "plain") {
    return (
      <section className="border-b border-border bg-offwhite">
        <div className="container-site py-14 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Breadcrumbs items={crumbs} />
              <h1 className="text-3xl leading-tight text-primary-deep sm:text-4xl">{titulo}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{subtitulo}</p>
            </div>
            {descricao ? (
              <p className="max-w-sm border-l-2 border-gold pl-4 text-sm text-muted-foreground">
                {descricao}
              </p>
            ) : null}
          </div>
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background">
      <div className="container-site grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-20">
        <div>
          <Breadcrumbs items={crumbs} />
          <h1 className="text-3xl leading-tight text-primary-deep sm:text-4xl lg:text-[2.8rem]">
            {titulo}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">{subtitulo}</p>
          {descricao ? <p className="mt-4 max-w-xl text-sm text-muted-foreground">{descricao}</p> : null}
          {children}
        </div>
        {imagem ? (
          <div className="relative">
            <div
              className="absolute -left-6 -top-6 hidden size-24 rounded-full border border-gold/50 lg:block"
              aria-hidden="true"
            />
            <img
              src={imagem}
              alt={alt ?? ""}
              loading="lazy"
              className="relative aspect-4/3 w-full rounded-tl-[3rem] rounded-br-[3rem] object-cover shadow-soft"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
