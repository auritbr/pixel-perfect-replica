import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Compass, Menu, X } from "lucide-react";
import { navegacao, site } from "@/data/site";
import { cn } from "@/lib/utils";

function Logo({ tone = "default" }: { tone?: "default" | "inverse" }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label={`${site.nome} — página inicial`}>
      <span className="badge-shape inline-flex size-10 items-center justify-center bg-primary text-primary-foreground">
        <Compass className="size-5" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "block font-display text-[0.7rem] font-700 uppercase tracking-[0.18em]",
            tone === "inverse" ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          Ponto de Cultura
        </span>
        <span
          className={cn(
            "block font-display text-lg font-bold tracking-tight",
            tone === "inverse" ? "text-primary-foreground" : "text-primary-deep",
          )}
        >
          {site.nomeCurto}
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const [rolado, setRolado] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [submenuAberto, setSubmenuAberto] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setRolado(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuAberto(false);
    setSubmenuAberto(null);
  }, [pathname]);

  const ativo = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        rolado ? "glass border-b border-border/60" : "border-b border-transparent bg-background",
      )}
    >
      <div className="container-site flex h-18 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navegacao.map((item) => (
              <li
                key={item.to}
                className="relative"
                onMouseEnter={() => item.children && setSubmenuAberto(item.to)}
                onMouseLeave={() => item.children && setSubmenuAberto(null)}
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={submenuAberto === item.to}
                      onClick={() => setSubmenuAberto(submenuAberto === item.to ? null : item.to)}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        ativo(item.to)
                          ? "text-primary"
                          : "text-foreground/80 hover:bg-secondary hover:text-primary",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-200",
                          submenuAberto === item.to && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={cn(
                        "absolute left-0 top-full w-72 origin-top-left pt-2 transition-all duration-200",
                        submenuAberto === item.to
                          ? "pointer-events-auto opacity-100"
                          : "pointer-events-none -translate-y-1 opacity-0",
                      )}
                    >
                      <ul className="overflow-hidden rounded-lg border border-border bg-popover p-2 shadow-lift">
                        {item.children.map((sub) => (
                          <li key={sub.to + sub.label}>
                            <Link
                              to={sub.to}
                              className="block rounded-md px-3 py-2 transition-colors hover:bg-secondary"
                            >
                              <span className="block text-sm font-semibold text-primary-deep">
                                {sub.label}
                              </span>
                              {sub.descricao ? (
                                <span className="block text-xs text-muted-foreground">{sub.descricao}</span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    className={cn(
                      "inline-flex rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      ativo(item.to)
                        ? "text-primary"
                        : "text-foreground/80 hover:bg-secondary hover:text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contato"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-deep"
          >
            Fale conosco
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuAberto((v) => !v)}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          className="inline-flex size-11 items-center justify-center rounded-md border border-border text-primary-deep lg:hidden"
        >
          {menuAberto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!menuAberto}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Menu principal (mobile)" className="container-site py-4">
          <ul className="divide-y divide-border">
            {navegacao.map((item) => (
              <li key={item.to} className="py-1">
                <Link
                  to={item.to}
                  className={cn(
                    "block rounded-md px-2 py-3 font-display text-base font-semibold",
                    ativo(item.to) ? "text-primary" : "text-primary-deep",
                  )}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="mb-2 ml-2 border-l border-border pl-3">
                    {item.children.slice(1).map((sub) => (
                      <li key={sub.to}>
                        <Link
                          to={sub.to}
                          className="block px-2 py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <Link
            to="/contato"
            className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            Fale conosco
          </Link>
        </nav>
      </div>
    </header>
  );
}
