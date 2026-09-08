import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  titulo,
  texto,
  align = "left",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  titulo: string;
  texto?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="eyebrow flex items-center gap-2">
          {align === "left" && <span className="h-px w-6 bg-gold" aria-hidden="true" />}
          {eyebrow}
        </p>
      ) : null}
      <Tag className="mt-3 text-2xl leading-tight text-primary-deep sm:text-3xl lg:text-[2.15rem]">
        {titulo}
      </Tag>
      {texto ? <p className="mt-4 text-base text-muted-foreground">{texto}</p> : null}
    </div>
  );
}
