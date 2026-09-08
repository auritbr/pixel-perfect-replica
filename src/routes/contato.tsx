import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Youtube,
} from "lucide-react";
import { site } from "@/data/site";
import { FeatureHero } from "@/components/site/FeatureHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/contato-hero.jpg";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Fale com o Ponto de Cultura Trilha Viva: endereço, telefone, WhatsApp, e-mail e formulário de mensagem.",
      },
      { property: "og:title", content: "Contato — Ponto de Cultura Trilha Viva" },
      {
        property: "og:description",
        content: "Endereço, telefone, WhatsApp, e-mail e formulário para falar com a equipe.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

type Erros = Partial<Record<"nome" | "email" | "assunto" | "mensagem" | "aceite", string>>;

function Contato() {
  const [erros, setErros] = useState<Erros>({});
  const [enviado, setEnviado] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = String(form.get("nome") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const assunto = String(form.get("assunto") ?? "").trim();
    const mensagem = String(form.get("mensagem") ?? "").trim();
    const aceite = form.get("aceite") === "on";

    const novos: Erros = {};
    if (nome.length < 3) novos.nome = "Informe seu nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) novos.email = "Informe um e-mail válido.";
    if (assunto === "") novos.assunto = "Selecione um assunto.";
    if (mensagem.length < 15) novos.mensagem = "Escreva uma mensagem com pelo menos 15 caracteres.";
    if (!aceite) novos.aceite = "É necessário aceitar a Política de Privacidade.";

    setErros(novos);
    if (Object.keys(novos).length === 0) {
      setEnviado(true);
      e.currentTarget.reset();
    }
  }

  const campo =
    "mt-1.5 h-[44px] w-full rounded-[14px] border border-inst-deep/10 bg-background px-3.5 text-sm text-foreground shadow-[0_3px_12px_rgb(18_38_64_/_0.025)] focus:outline-none focus-visible:border-inst/35 focus-visible:ring-2 focus-visible:ring-inst/20";
  const rotulo = "text-[12px] font-semibold uppercase tracking-[0.12em] text-muted-foreground";

  const contatos = [
    { Icone: Mail, titulo: "E-mail", texto: site.email, href: `mailto:${site.email}`, cor: "bg-inst-soft text-inst-deep" },
    {
      Icone: MessageCircle,
      titulo: "Telefone / WhatsApp",
      texto: site.telefone,
      href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappTexto)}`,
      cor: "bg-mata-soft text-mata",
    },
    { Icone: MapPin, titulo: "Endereço", texto: site.endereco, cor: "bg-coral-soft text-coral" },
  ];

  const redes = [
    { Icone: Instagram, label: "Instagram", href: site.redes.instagram },
    { Icone: Facebook, label: "Facebook", href: site.redes.facebook },
    { Icone: Youtube, label: "YouTube", href: site.redes.youtube },
    { Icone: Linkedin, label: "LinkedIn", href: site.redes.linkedin },
  ];

  return (
    <>
      <FeatureHero
        image={heroImg}
        imageAlt="Voluntários e jovens escoteiros conversando durante um encontro ao ar livre"
        eyebrow="Contato"
        title="Vamos conversar?"
        description="Entre em contato para saber mais sobre nossas atividades, projetos, parcerias e formas de participação."
        crumbs={[{ label: "Contato" }]}
        primaryAction={{ label: "Enviar mensagem", href: "#formulario-contato", icon: "down" }}
        secondaryAction={{
          label: "Falar pelo WhatsApp",
          href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappTexto)}`,
          external: true,
          icon: "message",
        }}
      />

      <section className="relative isolate overflow-hidden bg-background">
        <span aria-hidden="true" className="pointer-events-none absolute -left-20 top-24 size-52 rounded-full bg-inst/7" />
        <span aria-hidden="true" className="pointer-events-none absolute -right-10 top-1/3 hidden h-44 w-16 rounded-full bg-mata/8 sm:block" />
        <span aria-hidden="true" className="pointer-events-none absolute bottom-20 left-[46%] hidden size-24 rounded-tl-full border-l-8 border-t-8 border-coral/12 lg:block" />
        <div className="relative mx-auto grid w-full max-w-[1160px] items-start gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[360px_520px] lg:justify-between lg:gap-[60px] lg:px-10 lg:py-20 xl:gap-20">
          <Reveal>
            <div className="w-full max-w-[360px]">
              <p className="eyebrow">Canais de contato</p>
              <h2 className="mt-3 text-[1.85rem] font-semibold leading-tight text-inst-deep sm:text-[2.05rem]">Estamos por aqui</h2>
              <ul className="mt-6 grid gap-3">
              {contatos.map(({ Icone, titulo, texto, href, cor }) => (
                <li key={titulo} className="flex min-h-[78px] w-full items-center gap-3.5 rounded-[17px] border border-inst-deep/7 bg-background/66 px-4 py-3.5 shadow-[0_5px_16px_rgb(18_38_64_/_0.03)] backdrop-blur-[8px]">
                  <span className={`inline-flex size-11 shrink-0 items-center justify-center rounded-[13px] ${cor}`}>
                    <Icone className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className={rotulo}>{titulo}</p>
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="mt-0.5 block break-words text-sm font-semibold leading-[1.35] text-inst-deep transition-colors hover:text-inst hover:underline sm:text-[15px]"
                      >
                        {texto}
                      </a>
                    ) : (
                      <p className="mt-0.5 line-clamp-2 text-sm font-semibold leading-[1.35] text-inst-deep sm:text-[15px]">{texto}</p>
                    )}
                  </div>
                </li>
              ))}
              </ul>

              <div className="mt-8 border-t border-inst-deep/8 pt-6">
                <div className="flex items-center gap-2 text-inst-deep">
                  <Instagram className="size-4" aria-hidden="true" />
                  <h3 className="text-base font-semibold">Redes sociais</h3>
                </div>
                <p className="mt-1.5 text-sm text-muted-foreground">Acompanhe registros, atividades e novidades da organização.</p>
                <ul className="mt-4 flex gap-2.5">
                {redes.map(({ Icone, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                       className="glass-btn-soft inline-flex size-[42px] items-center justify-center rounded-[13px] text-inst-deep transition-all duration-200 hover:-translate-y-0.5 hover:text-inst"
                    >
                       <Icone className="size-[19px]" aria-hidden="true" />
                    </a>
                  </li>
                ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div id="formulario-contato" className="w-full max-w-[520px] scroll-mt-24 rounded-[22px] border border-inst-deep/8 bg-card/82 p-6 shadow-[0_12px_32px_rgb(18_38_64_/_0.055)] sm:p-7">
              <h2 className="text-[1.75rem] font-semibold leading-tight text-inst-deep sm:text-[1.875rem]">Envie sua mensagem</h2>
              <span aria-hidden="true" className="mt-4 block h-1 w-14 rounded-full bg-inst/70" />
              <p className="mt-2 text-sm text-muted-foreground">
                Os campos marcados com asterisco são obrigatórios.
              </p>

              <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
                <div>
                  <label htmlFor="nome" className={rotulo}>
                    Nome completo *
                  </label>
                  <input id="nome" name="nome" type="text" autoComplete="name" className={campo} />
                  {erros.nome ? (
                    <p className="mt-1 text-xs text-destructive">{erros.nome}</p>
                  ) : null}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={rotulo}>
                      E-mail *
                    </label>
                    <input id="email" name="email" type="email" autoComplete="email" className={campo} />
                    {erros.email ? (
                      <p className="mt-1 text-xs text-destructive">{erros.email}</p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="telefone" className={rotulo}>
                      Telefone
                    </label>
                    <input id="telefone" name="telefone" type="tel" autoComplete="tel" className={campo} />
                  </div>
                </div>

                <div>
                  <label htmlFor="assunto" className={rotulo}>
                    Assunto *
                  </label>
                  <select id="assunto" name="assunto" defaultValue="" className={campo}>
                    <option value="">Selecione um assunto</option>
                    <option>Participar das atividades</option>
                    <option>Ser voluntário</option>
                    <option>Parcerias e apoio</option>
                    <option>Imprensa</option>
                    <option>Outro assunto</option>
                  </select>
                  {erros.assunto ? (
                    <p className="mt-1 text-xs text-destructive">{erros.assunto}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="mensagem" className={rotulo}>
                    Mensagem *
                  </label>
                  <textarea id="mensagem" name="mensagem" rows={4} className={`${campo} h-auto min-h-[120px] py-3`} />
                  {erros.mensagem ? (
                    <p className="mt-1 text-xs text-destructive">{erros.mensagem}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="aceite" className="flex items-start gap-3 text-sm text-muted-foreground">
                    <input
                      id="aceite"
                      name="aceite"
                      type="checkbox"
                      className="mt-0.5 size-4 rounded border-input accent-[var(--primary)]"
                    />
                    <span>
                      Li e concordo com a{" "}
                      <Link to="/politica-de-privacidade" className="text-primary underline">
                        Política de Privacidade
                      </Link>
                      .
                    </span>
                  </label>
                  {erros.aceite ? (
                    <p className="mt-1 text-xs text-destructive">{erros.aceite}</p>
                  ) : null}
                </div>

                <Button
                  type="submit"
                  className="btn-base h-[46px] rounded-[22px] border border-[rgb(255_255_255_/_0.18)] bg-[rgb(47_85_200_/_0.92)] px-6 text-primary-foreground shadow-[0_6px_18px_rgb(47_85_200_/_0.22)] hover:bg-[rgb(47_85_200_/_1)] hover:text-primary-foreground"
                >
                  Enviar mensagem
                </Button>

                <p aria-live="polite" className="text-sm text-verde">
                  {enviado
                    ? "Mensagem registrada. Este formulário é demonstrativo e ainda não envia e-mails."
                    : ""}
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
