import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { site } from "@/data/site";
import logoAsset from "@/assets/logo-bugi-vermelho.png.asset.json";

const institucional = [
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Equipe", to: "/quem-somos/equipe" },
  { label: "Transparência", to: "/quem-somos/transparencia" },
] as const;

const projetos = [
  { label: "Projetos", to: "/projetos" },
  { label: "Oficina Mãos que Criam", to: "/projetos/maos-que-criam" },
  { label: "Trilhas de Saberes", to: "/projetos/trilhas-de-saberes" },
  { label: "Construindo Comunidade", to: "/projetos/construindo-comunidade" },
] as const;

const contato = [
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
  { label: "Contato", to: "/contato" },
] as const;

const legal = [
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
  
  { label: "Termos de Uso", to: "/termos-de-uso" },
] as const;

const sociais = [
  { href: site.redes.instagram, Icon: Instagram, label: "Instagram" },
  { href: site.redes.facebook, Icon: Facebook, label: "Facebook" },
  { href: site.redes.youtube, Icon: Youtube, label: "YouTube" },
  { href: site.redes.linkedin, Icon: Linkedin, label: "LinkedIn" },
].filter((rede) => Boolean(rede.href));

const linkClass =
  "text-[14px] font-medium leading-[1.6] text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

function FooterNav({
  titulo,
  links,
}: {
  titulo: string;
  links: ReadonlyArray<{ label: string; to: string }>;
}) {
  return (
    <nav aria-label={titulo}>
      <h2 className="font-display text-[15px] font-bold text-primary-deep">{titulo}</h2>
      <ul className="mt-3 space-y-2.5">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className={linkClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-inst-deep/[0.08] bg-[#F4F7F8] text-foreground">
      <div className="mx-auto max-w-[1500px] px-8 pb-7 pt-10 lg:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-[1.15fr_1fr_1.2fr_0.85fr_1.1fr] lg:gap-x-14">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link
              to="/"
              aria-label="Grupo Escoteiro Bugi Vermelho — página inicial"
              className="inline-flex items-center text-primary-deep focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <img
                src={logoAsset.url}
                alt="Grupo Escoteiro Bugi Vermelho — Florânia, RN"
                width="140"
                height="140"
                loading="lazy"
                className="h-auto w-[124px] object-contain sm:w-[140px]"
              />
            </Link>
          </div>

          <FooterNav titulo="Institucional" links={institucional} />
          <FooterNav titulo="Projetos" links={projetos} />
          <FooterNav titulo="Contato" links={contato} />
          <FooterNav titulo="Legal" links={legal} />
        </div>

        <div className="mb-6 mt-7 border-t border-inst-deep/[0.08]" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9">
          <div>
            <h2 className="font-display text-[15px] font-bold text-primary-deep">E-mail</h2>
            <a
              href="mailto:bugivermelho5@gmail.com"
              className={`mt-2 inline-block break-all sm:break-normal ${linkClass}`}
            >
              bugivermelho5@gmail.com
            </a>
          </div>

          <div>
            <h2 className="font-display text-[15px] font-bold text-primary-deep">CNPJ</h2>
            <p className="mt-2 whitespace-nowrap text-[14px] font-medium leading-[1.6] text-muted-foreground">
              64.138.430/0001-57
            </p>
          </div>

          <div>
            <h2 className="font-display text-[15px] font-bold text-primary-deep">Telefone/WhatsApp</h2>
            <a
              href="https://wa.me/5584996817626"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir conversa no WhatsApp pelo número (84) 99681-7626"
              className={`mt-2 inline-block ${linkClass}`}
            >
              (84) 99681-7626
            </a>
          </div>

          <div>
            <h2 className="font-display text-[15px] font-bold text-primary-deep">Conecte-se</h2>
            <ul className="mt-2 flex items-center gap-3">
              {sociais.map(({ href, Icon, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} do Grupo Escoteiro Bugi Vermelho`}
                    className="inline-flex size-7 items-center justify-center text-muted-foreground transition-colors duration-200 hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <Icon className="size-5.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6 mt-5 border-t border-inst-deep/[0.08]" />

        <div className="flex flex-col gap-2 pt-2 text-center text-[14px] leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground/75">
            CNPJ: 64.138.430/0001-57 — Grupo Escoteiro Bugi Vermelho
          </p>
          <p>© 2026 Grupo Escoteiro Bugi Vermelho. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://www.aurit.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-deep transition-colors duration-200 hover:text-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Aurit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
