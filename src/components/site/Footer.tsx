import { Link } from "@tanstack/react-router";
import { Compass, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { site } from "@/data/site";

const institucional = [
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Equipe", to: "/quem-somos/equipe" },
  { label: "Transparência", to: "/quem-somos/transparencia" },
];

const atuacao = [
  { label: "Projetos", to: "/projetos" },
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
];

const legais = [
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
  { label: "Política de Cookies", to: "/politica-de-cookies" },
  { label: "Termos de Uso", to: "/termos-de-uso" },
];

export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="bg-primary-deep text-primary-foreground">
      <div className="container-site py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="badge-shape inline-flex size-10 items-center justify-center bg-gold text-gold-foreground">
                <Compass className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-lg font-bold">{site.nome}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">{site.descricaoCurta}</p>
            <ul className="mt-5 flex gap-2">
              {[
                { href: site.redes.instagram, Icon: Instagram, label: "Instagram" },
                { href: site.redes.facebook, Icon: Facebook, label: "Facebook" },
                { href: site.redes.youtube, Icon: Youtube, label: "YouTube" },
                { href: site.redes.linkedin, Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${label} do ${site.nomeCurto}`}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Institucional">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Institucional
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              {institucional.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary-foreground hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Atuação">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-gold">Atuação</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/80">
              {atuacao.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary-foreground hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.16em] text-gold">Contato</h2>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`tel:+55${site.telefone.replace(/\D/g, "")}`} className="hover:underline">
                  {site.telefone}
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{site.endereco}</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/60">
          Site desenvolvido para fortalecer a cultura, a participação e a comunidade.
        </p>
        <div className="mt-3 flex flex-col gap-3 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {site.nome}. Todos os direitos reservados.
          </p>
          <ul className="flex flex-wrap gap-4">
            {legais.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-primary-foreground hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
