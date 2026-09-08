import logoBugiVermelho from "@/assets/logo-bugi-vermelho.png";

type BrandLogoProps = {
  className?: string;
  loading?: "eager" | "lazy";
};

export function BrandLogo({ className, loading = "eager" }: BrandLogoProps) {
  return (
    <img
      src={logoBugiVermelho}
      alt="Grupo Escoteiro Bugi Vermelho"
      width="720"
      height="720"
      loading={loading}
      decoding="async"
      className={className}
    />
  );
}