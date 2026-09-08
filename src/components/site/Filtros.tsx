import { ChevronLeft, ChevronRight, Search } from "lucide-react";
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
    <div className={cn("relative w-full sm:w-[300px]", className)}>
      <label htmlFor="campo-busca" className="sr-only">
        {rotulo}
      </label>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <input
        id="campo-busca"
        type="search"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="h-[42px] w-full rounded-[20px] border border-[rgb(30_55_90_/_0.1)] bg-[rgb(255_255_255_/_0.72)] pl-[42px] pr-4 text-sm text-inst-deep shadow-[0_4px_14px_rgb(18_38_64_/_0.035)] backdrop-blur-[8px] transition-colors duration-200 placeholder:text-muted-foreground focus:border-inst/45 focus:outline-none"
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
      className="-mx-5 flex w-full max-w-full gap-2 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:w-auto sm:flex-wrap sm:justify-center sm:px-0 sm:pb-0"
    >
      {opcoes.map((opcao) => (
        <button
          key={opcao}
          type="button"
          onClick={() => onChange(opcao)}
          aria-pressed={ativa === opcao}
          className={cn(
            "btn-base h-[40px] shrink-0 rounded-[19px] px-[16px] text-sm",
            ativa === opcao ? "glass-btn-active" : "glass-btn-soft",
          )}
        >
          {ativa === opcao ? <span aria-hidden="true" className="size-1.5 rounded-full bg-coral" /> : null}
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
            "btn-base h-[40px] shrink-0 rounded-[19px] px-[18px] text-sm tabular-nums",
            ativo === ano ? "glass-btn-active" : "glass-btn-soft",
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
  const base = "btn-base size-[40px] rounded-[15px] px-0 text-sm tabular-nums";
  return (
    <nav aria-label="Paginação das notícias" className="flex justify-center">
      <ul className="flex flex-wrap items-center justify-center gap-1.5">
        <li>
          <button
            type="button"
            onClick={() => onChange(Math.max(1, atual - 1))}
            disabled={atual === 1}
            aria-label="Página anterior"
            className={cn(base, "glass-btn-soft disabled:pointer-events-none disabled:opacity-40")}
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
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
                className={cn(base, p === atual ? "glass-btn-active" : "glass-btn-soft")}
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
            className={cn(base, "glass-btn-soft disabled:pointer-events-none disabled:opacity-40")}
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
