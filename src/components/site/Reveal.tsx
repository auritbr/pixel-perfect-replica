import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ativo = true;
    const mostrar = () => {
      if (!ativo) return;
      ativo = false;
      setVisible(true);
      io.disconnect();
      window.removeEventListener("scroll", conferir);
      window.removeEventListener("resize", conferir);
      window.removeEventListener("load", conferir);
    };

    const conferir = () => {
      if (!ativo) return;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 40 && r.bottom > 40) mostrar();
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) mostrar();
    });
    io.observe(el);

    window.addEventListener("scroll", conferir, { passive: true });
    window.addEventListener("resize", conferir);
    window.addEventListener("load", conferir);
    const t = window.setTimeout(conferir, 600);

    return () => {
      ativo = false;
      io.disconnect();
      window.clearTimeout(t);
      window.removeEventListener("scroll", conferir);
      window.removeEventListener("resize", conferir);
      window.removeEventListener("load", conferir);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
