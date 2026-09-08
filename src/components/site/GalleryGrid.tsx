import { useState } from "react";
import { Expand } from "lucide-react";
import type { Foto } from "@/data/galeria";
import { PhotoLightbox } from "./PhotoLightbox";
import { cn } from "@/lib/utils";

export function GalleryGrid({
  fotos,
  colunas = 3,
  variavel = false,
}: {
  fotos: Foto[];
  colunas?: 3 | 4;
  variavel?: boolean;
}) {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <>
      <ul
        className={cn(
          "grid grid-cols-2 gap-3 sm:gap-4",
          colunas === 3 ? "lg:grid-cols-3" : "md:grid-cols-3 lg:grid-cols-4",
        )}
      >
        {fotos.map((foto, i) => (
          <li key={`${foto.src}-${i}`}>
            <button
              type="button"
              onClick={() => setAberta(i)}
              className="group relative block w-full overflow-hidden rounded-lg bg-muted focus-visible:outline-offset-4"
              aria-label={`Ampliar fotografia: ${foto.legenda}`}
            >
              <img
                src={foto.src}
                alt={foto.legenda}
                loading="lazy"
                className={cn(
                  "w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]",
                  variavel && i % 5 === 0
                    ? "aspect-3/4"
                    : variavel && i % 3 === 0
                      ? "aspect-square"
                      : "aspect-4/3",
                )}
              />
              <span className="absolute inset-0 bg-primary-deep/0 transition-colors duration-300 group-hover:bg-primary-deep/25" />
              <span className="glass absolute right-2 top-2 inline-flex size-8 items-center justify-center rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="size-4 text-primary-deep" aria-hidden="true" />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <PhotoLightbox fotos={fotos} index={aberta} onClose={() => setAberta(null)} onChange={setAberta} />
    </>
  );
}
