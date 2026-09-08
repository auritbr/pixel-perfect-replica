import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Foto } from "@/data/galeria";

export function PhotoLightbox({
  fotos,
  index,
  onClose,
  onChange,
}: {
  fotos: Foto[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const aberto = index !== null;

  const proxima = useCallback(() => {
    if (index === null) return;
    onChange((index + 1) % fotos.length);
  }, [index, fotos.length, onChange]);

  const anterior = useCallback(() => {
    if (index === null) return;
    onChange((index - 1 + fotos.length) % fotos.length);
  }, [index, fotos.length, onChange]);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") proxima();
      if (e.key === "ArrowLeft") anterior();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aberto, onClose, proxima, anterior]);

  if (!aberto || index === null) return null;
  const foto = fotos[index];
  if (!foto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da fotografia"
      className="fixed inset-0 z-100 flex flex-col bg-primary-deep/95 p-4 backdrop-blur-sm sm:p-8"
    >
      <div className="flex items-center justify-between text-primary-foreground">
        <span className="text-sm tabular-nums">
          {index + 1} / {fotos.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar visualização"
          className="glass-dark inline-flex size-10 items-center justify-center rounded-full text-primary-foreground transition hover:bg-primary-foreground/15"
        >
          <X className="size-5" aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center gap-3">
        <button
          type="button"
          onClick={anterior}
          aria-label="Fotografia anterior"
          className="glass-dark absolute left-0 z-10 inline-flex size-11 items-center justify-center rounded-full text-primary-foreground transition hover:bg-primary-foreground/15"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <img
          src={foto.src}
          alt={foto.legenda}
          className="max-h-full max-w-full rounded-md object-contain shadow-lift"
        />
        <button
          type="button"
          onClick={proxima}
          aria-label="Próxima fotografia"
          className="glass-dark absolute right-0 z-10 inline-flex size-11 items-center justify-center rounded-full text-primary-foreground transition hover:bg-primary-foreground/15"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      <p className="mt-4 text-center text-sm text-primary-foreground/80">{foto.legenda}</p>
    </div>
  );
}
