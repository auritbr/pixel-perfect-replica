import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { navegacao, site } from "@/data/site";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo-bugi-vermelho.png.asset.json";

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label={`${site.nome} — página inicial`}>
      <img
        src={logoAsset.url}
        alt=""
        width="56"
        height="56"
        className="size-14 shrink-0 object-contain drop-shadow-sm"
      />
    </Link>
  );
}

export function Header() {
  const [rolado, setRolado] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [submenuAberto, setSubmenuAberto] = useState<string | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overlayNoTopo =
    pathname === "/" ||
    pathname === "/contato" ||
    pathname === "/galeria" ||
    pathname === "/noticias" ||
    pathname.startsWith("/noticias/") ||
    pathname === "/projetos" ||
    pathname.startsWith("/projetos/") ||
    pathname === "/quem-somos/equipe" ||
    pathname === "/quem-somos/transparencia";
  const sobreHero = overlayNoTopo && !rolado;

  useEffect(() => {
    const onScroll = () => setRolado(window.scrollY > 56);
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
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow,backdrop-filter] duration-200",
        sobreHero
          ? "border-transparent bg-background/2 shadow-none"
          : "border-inst-deep/6 bg-background/88 shadow-[0_8px_24px_rgb(18_38_64_/_0.05)] backdrop-blur-[14px]",
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
                           ? sobreHero ? "text-primary-foreground" : "text-primary"
                          : sobreHero
                            ? "text-primary-foreground/88 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                            : "text-foreground/80 hover:bg-secondary hover:text-primary",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-200",
                           submenuAberto === item.to && "rotate-180",
                           sobreHero && "text-primary-foreground/85",
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
                         ? sobreHero ? "text-primary-foreground" : "text-primary"
                        : sobreHero
                          ? "text-primary-foreground/88 hover:bg-primary-foreground/10 hover:text-primary-foreground"
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
            className={cn(
              "btn-base h-10 rounded-[18px] px-4 text-sm",
              sobreHero ? "glass-btn-light" : "bg-primary text-primary-foreground hover:bg-primary-deep",
            )}
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
           className={cn(
             "inline-flex size-11 items-center justify-center rounded-md border transition-colors lg:hidden",
             sobreHero
               ? "border-primary-foreground/30 bg-primary-foreground/8 text-primary-foreground"
               : "border-border text-primary-deep",
           )}
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
    {!overlayNoTopo ? <div aria-hidden="true" className="h-18" /> : null}
    </>
  );
}
