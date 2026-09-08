import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Accessibility,
  Contrast,
  Cookie,
  Eye,
  Link2,
  MessageCircle,
  Minus,
  Plus,
  RotateCcw,
  Type,
  X,
} from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type Config = {
  escala: number;
  contraste: boolean;
  invertido: boolean;
  links: boolean;
  cinza: boolean;
  espacamento: boolean;
};

const padrao: Config = {
  escala: 100,
  contraste: false,
  invertido: false,
  links: false,
  cinza: false,
  espacamento: false,
};

function aplicar(cfg: Config) {
  const el = document.documentElement;
  el.style.setProperty("--a11y-font-size", `${cfg.escala / 100}rem`);
  el.style.setProperty("--a11y-letter-spacing", cfg.espacamento ? "0.04em" : "normal");
  el.style.setProperty("--a11y-line-height", cfg.espacamento ? "1.9" : "1.6");
  el.classList.toggle("a11y-contrast", cfg.contraste);
  el.classList.toggle("a11y-invert", cfg.invertido);
  el.classList.toggle("a11y-links", cfg.links);
  el.classList.toggle("a11y-grayscale", cfg.cinza);
}

function Toggle({
  ativo,
  onClick,
  icon: Icon,
  children,
}: {
  ativo: boolean;
  onClick: () => void;
  icon: typeof Eye;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={ativo}
      className={cn(
        "a11y-glass-control flex w-full items-center gap-2.5 rounded-[15px] px-3 py-2.5 text-left text-sm transition-colors",
        ativo
          ? "border-inst/25 bg-inst/10 font-semibold text-inst"
          : "text-foreground hover:bg-inst/6",
      )}
    >
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      {children}
    </button>
  );
}

export function FloatingControls() {
  const [painel, setPainel] = useState<"a11y" | "cookies" | null>(null);
  const [cfg, setCfg] = useState<Config>(padrao);
  const [avisoCookies, setAvisoCookies] = useState(false);

  useEffect(() => {
    const decidido = localStorage.getItem("cookies-decisao");
    if (!decidido) setAvisoCookies(true);
    const salvo = localStorage.getItem("a11y-config");
    if (salvo) {
      try {
        const parsed = { ...padrao, ...(JSON.parse(salvo) as Partial<Config>) };
        setCfg(parsed);
        aplicar(parsed);
      } catch {
        /* configuração inválida ignorada */
      }
    }
  }, []);

  const atualizar = (patch: Partial<Config>) => {
    const proximo = { ...cfg, ...patch };
    setCfg(proximo);
    aplicar(proximo);
    localStorage.setItem("a11y-config", JSON.stringify(proximo));
  };

  const restaurar = () => {
    setCfg(padrao);
    aplicar(padrao);
    localStorage.removeItem("a11y-config");
  };

  const decidirCookies = (valor: "todos" | "essenciais") => {
    localStorage.setItem("cookies-decisao", valor);
    setAvisoCookies(false);
    setPainel(null);
  };

  return (
    <>
      {/* Canto inferior esquerdo: acessibilidade e cookies */}
      <div className="fixed bottom-4 left-4 z-60 flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setPainel(painel === "a11y" ? null : "a11y")}
          aria-expanded={painel === "a11y"}
          title="Acessibilidade"
          className="floating-glass-a11y group relative inline-flex size-11 items-center justify-center rounded-full text-primary-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inst"
        >
          <Accessibility className="size-5" aria-hidden="true" />
          <span className="sr-only">Abrir opções de acessibilidade</span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-full ml-2 whitespace-nowrap rounded-md bg-primary-deep px-2 py-1 text-xs font-medium text-primary-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            Acessibilidade
          </span>
        </button>
        <button
          type="button"
          onClick={() => setPainel(painel === "cookies" ? null : "cookies")}
          aria-expanded={painel === "cookies"}
          title="Preferências de cookies"
          className="floating-glass-cookie group relative inline-flex size-11 items-center justify-center rounded-full text-primary-foreground transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inst-deep"
        >
          <Cookie className="size-5" aria-hidden="true" />
          <span className="sr-only">Abrir preferências de cookies</span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-full ml-2 whitespace-nowrap rounded-md bg-primary-deep px-2 py-1 text-xs font-medium text-primary-foreground opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            Cookies
          </span>
        </button>
      </div>

      {painel === "a11y" ? (
        <div
          role="dialog"
          aria-label="Opções de acessibilidade"
          className="floating-glass-panel fixed bottom-4 left-4 z-70 w-[min(21rem,calc(100vw-2rem))] rounded-[22px] p-5 text-inst-deep"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-base font-bold text-primary-deep">Acessibilidade</h2>
              <p className="mt-1 text-xs text-muted-foreground">
                Ajuste a leitura conforme a sua necessidade.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setPainel(null)}
              aria-label="Fechar painel de acessibilidade"
              className="a11y-glass-control inline-flex size-8 items-center justify-center rounded-[14px] text-muted-foreground hover:bg-inst/6"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="a11y-glass-control mt-4 flex items-center justify-between rounded-[15px] px-3 py-2">
            <span className="inline-flex items-center gap-2 text-sm">
              <Type className="size-4" aria-hidden="true" />
              Tamanho do texto
            </span>
            <span className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => atualizar({ escala: Math.max(85, cfg.escala - 10) })}
                aria-label="Diminuir fonte"
                className="a11y-glass-control inline-flex size-8 items-center justify-center rounded-[14px] hover:bg-inst/6"
              >
                <Minus className="size-3.5" aria-hidden="true" />
              </button>
              <span className="w-10 text-center text-xs tabular-nums">{cfg.escala}%</span>
              <button
                type="button"
                onClick={() => atualizar({ escala: Math.min(140, cfg.escala + 10) })}
                aria-label="Aumentar fonte"
                className="a11y-glass-control inline-flex size-8 items-center justify-center rounded-[14px] hover:bg-inst/6"
              >
                <Plus className="size-3.5" aria-hidden="true" />
              </button>
            </span>
          </div>

          <div className="mt-2 grid gap-2">
            <Toggle ativo={cfg.contraste} onClick={() => atualizar({ contraste: !cfg.contraste })} icon={Contrast}>
              Alto contraste
            </Toggle>
            <Toggle ativo={cfg.invertido} onClick={() => atualizar({ invertido: !cfg.invertido })} icon={Eye}>
              Contraste invertido
            </Toggle>
            <Toggle ativo={cfg.links} onClick={() => atualizar({ links: !cfg.links })} icon={Link2}>
              Destacar links
            </Toggle>
            <Toggle ativo={cfg.cinza} onClick={() => atualizar({ cinza: !cfg.cinza })} icon={Contrast}>
              Escala de cinza
            </Toggle>
            <Toggle
              ativo={cfg.espacamento}
              onClick={() => atualizar({ espacamento: !cfg.espacamento })}
              icon={Type}
            >
              Espaçamento de texto
            </Toggle>
            <button
              type="button"
              onClick={restaurar}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              Restaurar configurações
            </button>
          </div>
        </div>
      ) : null}

      {(painel === "cookies" || avisoCookies) && (
        <div
          role="dialog"
          aria-label="Preferências de cookies"
          className="floating-glass-panel fixed bottom-4 left-4 right-4 z-70 mx-auto max-w-xl rounded-[22px] p-5 text-inst-deep sm:left-20 sm:right-auto"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-display text-base font-bold text-primary-deep">Cookies neste site</h2>
            <button
              type="button"
              onClick={() => {
                setPainel(null);
                setAvisoCookies(false);
              }}
              aria-label="Fechar aviso de cookies"
              className="a11y-glass-control inline-flex size-8 items-center justify-center rounded-[14px] text-muted-foreground hover:bg-inst/6"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Utilizamos cookies essenciais para o funcionamento do site e cookies opcionais para entender como
            as páginas são acessadas. Você decide o que aceitar.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => decidirCookies("todos")}
              className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-deep"
            >
              Aceitar todos
            </button>
            <button
              type="button"
              onClick={() => decidirCookies("essenciais")}
              className="a11y-glass-control rounded-[15px] px-4 py-2.5 text-sm font-semibold text-primary-deep hover:bg-inst/6"
            >
              Rejeitar opcionais
            </button>
            <Link
              to="/politica-de-privacidade"
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Saber mais
            </Link>
          </div>
        </div>
      )}

      {/* Canto inferior direito: WhatsApp e área reservada ao VLibras */}
      <div className="fixed bottom-4 right-4 z-60 flex flex-col items-end gap-2">
        {/* Espaço reservado para o widget do VLibras (não sobrepõe os demais controles). */}
        <div id="vlibras-slot" className="pointer-events-none h-0 w-13" aria-hidden="true" />
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappTexto)}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar com a organização pelo WhatsApp"
          className="inline-flex size-12 items-center justify-center rounded-full bg-verde text-primary-foreground shadow-lift transition-transform hover:scale-105"
        >
          <MessageCircle className="size-5.5" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
