import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Acao = { label: string; to: string };

/** CTA institucional com fotografia (variante "foto") ou fundo bege artesanal (variante "artesanal"). */
export function CTASection({
  variante = "foto",
  titulo,
  texto,
  imagem,
  alt,
  acoes,
}: {
  variante?: "foto" | "artesanal";
  titulo: string;
  texto: string;
  imagem?: string;
  alt?: string;
  acoes: Acao[];
}) {
  const botoes = (
    <div className="mt-7 flex flex-wrap gap-3">
      {acoes.map((acao, i) => (
        <Link
          key={acao.to + acao.label}
          to={acao.to}
          className={
            i === 0
              ? "inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-display text-sm font-bold text-gold-foreground transition-transform hover:-translate-y-0.5"
              : "inline-flex items-center gap-2 rounded-md border border-current px-5 py-3 font-display text-sm font-bold transition-colors hover:bg-primary-foreground/10"
          }
        >
          {acao.label}
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );

  if (variante === "artesanal") {
    return (
      <section className="bg-bege">
        <div className="container-site py-16 lg:py-24">
          <div className="paper-texture overflow-hidden rounded-2xl bg-offwhite shadow-soft">
            <div className="grid items-center gap-0 lg:grid-cols-[1fr_1.1fr]">
              {imagem ? (
                <img
                  src={imagem}
                  alt={alt ?? ""}
                  loading="lazy"
                  className="h-full w-full object-cover lg:aspect-4/3"
                />
              ) : null}
              <div className="p-8 lg:p-12">
                <span className="stitch mb-6 block w-24" aria-hidden="true" />
                <h2 className="max-w-md text-2xl leading-tight text-primary-deep sm:text-3xl">{titulo}</h2>
                <p className="mt-4 max-w-md text-sm text-muted-foreground">{texto}</p>
                <div className="text-primary-deep">{botoes}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-primary-deep text-primary-foreground">
      {imagem ? (
        <img
          src={imagem}
          alt={alt ?? ""}
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-30"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/40" />
      <div
        className="absolute -right-24 -top-24 hidden size-72 rounded-full border border-gold/30 lg:block"
        aria-hidden="true"
      />
      <div className="container-site relative py-16 lg:py-24">
        <div className="max-w-xl">
          <h2 className="text-2xl leading-tight sm:text-3xl lg:text-[2.2rem]">{titulo}</h2>
          <p className="mt-4 text-base text-primary-foreground/80">{texto}</p>
          {botoes}
        </div>
      </div>
    </section>
  );
}
