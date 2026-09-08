import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SearchBar({
  valor,
  onChange,
  placeholder = "Buscar...",
  rotulo,
  className,
}: {
  valor: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rotulo: string;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full max-w-[360px]", className)}>
      <label htmlFor="campo-busca" className="sr-only">
        {rotulo}
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <input
        id="campo-busca"
        type="search"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-[46px] w-full rounded-[20px] border border-inst-deep/8 bg-background/70 pl-10 pr-4 text-sm text-foreground shadow-[0_4px_14px_rgb(18_38_64_/_0.035)] backdrop-blur-[10px] placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}

export function TagFilter({
  opcoes,
  ativa,
  onChange,
  rotulo,
}: {
  opcoes: readonly string[];
  ativa: string;
  onChange: (v: string) => void;
  rotulo: string;
}) {
  return (
    <div
      role="group"
      aria-label={rotulo}
      className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
    >
      {opcoes.map((opcao) => (
        <Button
          key={opcao}
          type="button"
          onClick={() => onChange(opcao)}
          aria-pressed={ativa === opcao}
          className={cn(
            "h-10 shrink-0 rounded-[18px] px-[18px] font-sans text-sm font-semibold shadow-[0_4px_12px_rgb(18_38_64_/_0.03)] backdrop-blur-[8px] transition-all duration-200 hover:-translate-y-px",
            ativa === opcao
              ? "border border-inst/20 bg-inst/12 text-inst hover:bg-inst/16"
              : "border border-inst-deep/8 bg-background/68 text-inst-deep hover:bg-inst/7",
          )}
        >
          {ativa === opcao ? <span aria-hidden="true" className="size-1.5 rounded-full bg-coral" /> : null}
          {opcao}
        </Button>
      ))}
    </div>
  );
}

export function YearSelector({
  anos,
  ativo,
  onChange,
}: {
  anos: readonly string[];
  ativo: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Selecionar ano da galeria"
      className="-mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0"
    >
      {anos.map((ano) => (
        <button
          key={ano}
          type="button"
          onClick={() => onChange(ano)}
          aria-pressed={ativo === ano}
          className={cn(
            "shrink-0 rounded-full px-5 py-2.5 font-display text-sm font-bold tabular-nums transition-colors",
            ativo === ano ? "bg-primary text-primary-foreground" : "glass text-primary-deep hover:bg-secondary",
          )}
        >
          {ano}
        </button>
      ))}
    </div>
  );
}

function paginas(atual: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const itens: (number | "...")[] = [1];
  const inicio = Math.max(2, atual - 1);
  const fim = Math.min(total - 1, atual + 1);
  if (inicio > 2) itens.push("...");
  for (let i = inicio; i <= fim; i++) itens.push(i);
  if (fim < total - 1) itens.push("...");
  itens.push(total);
  return itens;
}

export function Pagination({
  atual,
  total,
  onChange,
}: {
  atual: number;
  total: number;
  onChange: (p: number) => void;
}) {
  if (total <= 1) return null;
  return (
    <nav aria-label="Paginação das notícias" className="flex justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-1.5">
        <li>
          <Button
            type="button"
            onClick={() => onChange(Math.max(1, atual - 1))}
            disabled={atual === 1}
            aria-label="Página anterior"
            variant="ghost"
            size="icon"
            className="glass-soft size-10 rounded-[15px] text-inst-deep transition-all duration-200 hover:-translate-y-px hover:bg-inst/7 disabled:opacity-40"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </Button>
        </li>
        {paginas(atual, total).map((p, i) =>
          p === "..." ? (
            <li key={`gap-${i}`} className="px-1 text-sm text-muted-foreground">
              …
            </li>
          ) : (
            <li key={p}>
              <Button
                type="button"
                onClick={() => onChange(p)}
                aria-current={p === atual ? "page" : undefined}
                aria-label={`Página ${p}`}
                className={cn(
                  "size-10 rounded-[15px] text-sm tabular-nums transition-all duration-200 hover:-translate-y-px",
                  p === atual
                    ? "border border-inst/20 bg-inst/12 font-semibold text-inst hover:bg-inst/16"
                    : "glass-soft text-inst-deep hover:bg-inst/7",
                )}
              >
                {p}
              </Button>
            </li>
          ),
        )}
        <li>
          <Button
            type="button"
            onClick={() => onChange(Math.min(total, atual + 1))}
            disabled={atual === total}
            aria-label="Próxima página"
            variant="ghost"
            size="icon"
            className="glass-soft size-10 rounded-[15px] text-inst-deep transition-all duration-200 hover:-translate-y-px hover:bg-inst/7 disabled:opacity-40"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
