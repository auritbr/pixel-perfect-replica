import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
  const [montado, setMontado] = useState(false);
  useEffect(() => setMontado(true), []);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fecharRef = useRef<HTMLButtonElement | null>(null);

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
    const anterioremFoco = document.activeElement as HTMLElement | null;
    fecharRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") proxima();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "Tab") {
        const foco = containerRef.current?.querySelectorAll<HTMLElement>("button");
        if (!foco || foco.length === 0) return;
        const primeiro = foco[0]!;
        const ultimo = foco[foco.length - 1]!;
        if (e.shiftKey && document.activeElement === primeiro) {
          e.preventDefault();
          ultimo.focus();
        } else if (!e.shiftKey && document.activeElement === ultimo) {
          e.preventDefault();
          primeiro.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      anterioremFoco?.focus?.();
    };
  }, [aberto, onClose, proxima, anterior]);

  if (!aberto || index === null || !montado) return null;
  const foto = fotos[index];
  if (!foto) return null;

  const botao =
    "inline-flex items-center justify-center rounded-full border border-[rgb(255_255_255_/_0.2)] bg-[rgb(255_255_255_/_0.1)] text-white backdrop-blur-[8px] transition-colors duration-200 hover:bg-[rgb(255_255_255_/_0.18)]";

  return createPortal(
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Visualização ampliada da fotografia"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[rgb(7_12_20_/_0.9)] px-4 py-6 sm:px-10"
    >
      <button
        ref={fecharRef}
        type="button"
        onClick={onClose}
        aria-label="Fechar visualização"
        className={`${botao} absolute right-[22px] top-[22px] size-11`}
      >
        <X className="size-5" aria-hidden="true" />
      </button>

      <div className="relative flex w-full max-w-[min(90vw,1400px)] items-center justify-center gap-2 sm:gap-4">
        <button
          type="button"
          onClick={anterior}
          aria-label="Fotografia anterior"
          className={`${botao} absolute left-0 z-10 size-11 sm:-left-14`}
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <img
          src={foto.src}
          alt={foto.legenda}
          className="max-h-[82vh] w-auto max-w-full rounded-[12px] object-contain"
        />
        <button
          type="button"
          onClick={proxima}
          aria-label="Próxima fotografia"
          className={`${botao} absolute right-0 z-10 size-11 sm:-right-14`}
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      <p className="mt-4 max-w-[760px] text-center text-sm text-[rgb(255_255_255_/_0.82)]">{foto.legenda}</p>
      <span className="mt-2 text-xs tabular-nums text-[rgb(255_255_255_/_0.6)]">
        {index + 1} / {fotos.length}
      </span>
    </div>,
    document.body,
  );
}
