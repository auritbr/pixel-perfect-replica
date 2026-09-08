import { Search } from "lucide-react";
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
    <div className={cn("relative w-full max-w-xs", className)}>
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
        className="glass h-11 w-full rounded-full pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
      className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
    >
      {opcoes.map((opcao) => (
        <button
          key={opcao}
          type="button"
          onClick={() => onChange(opcao)}
          aria-pressed={ativa === opcao}
          className={cn(
            "shrink-0 rounded-full px-3.5 py-2 font-display text-xs font-semibold transition-colors",
            ativa === opcao
              ? "bg-primary text-primary-foreground"
              : "glass text-primary-deep hover:bg-secondary",
          )}
        >
          {opcao}
        </button>
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
          <button
            type="button"
            onClick={() => onChange(Math.max(1, atual - 1))}
            disabled={atual === 1}
            aria-label="Página anterior"
            className="glass inline-flex size-9 items-center justify-center rounded-full text-sm text-primary-deep transition-colors hover:bg-secondary disabled:opacity-40"
          >
            ←
          </button>
        </li>
        {paginas(atual, total).map((p, i) =>
          p === "..." ? (
            <li key={`gap-${i}`} className="px-1 text-sm text-muted-foreground">
              …
            </li>
          ) : (
            <li key={p}>
              <button
                type="button"
                onClick={() => onChange(p)}
                aria-current={p === atual ? "page" : undefined}
                aria-label={`Página ${p}`}
                className={cn(
                  "inline-flex size-9 items-center justify-center rounded-full text-sm tabular-nums transition-colors",
                  p === atual
                    ? "bg-primary font-semibold text-primary-foreground"
                    : "glass text-primary-deep hover:bg-secondary",
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
            onClick={() => onChange(Math.min(total, atual + 1))}
            disabled={atual === total}
            aria-label="Próxima página"
            className="glass inline-flex size-9 items-center justify-center rounded-full text-sm text-primary-deep transition-colors hover:bg-secondary disabled:opacity-40"
          >
            →
          </button>
        </li>
      </ul>
    </nav>
  );
}
