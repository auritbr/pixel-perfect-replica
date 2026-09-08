import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import { site } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Fale com o Ponto de Cultura Trilha Viva: endereço, telefone, WhatsApp, e-mail, horário de atendimento e formulário de mensagem.",
      },
      { property: "og:title", content: "Contato — Ponto de Cultura Trilha Viva" },
      {
        property: "og:description",
        content: "Endereço, telefone, WhatsApp, e-mail e formulário para falar com a equipe.",
      },
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
    "mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const rotulo = "font-display text-xs font-bold uppercase tracking-wider text-primary-deep";

  const contatos = [
    { Icone: MapPin, titulo: "Endereço", texto: site.endereco },
    { Icone: Phone, titulo: "Telefone", texto: site.telefone, href: `tel:+551140028922` },
    {
      Icone: MessageCircle,
      titulo: "WhatsApp",
      texto: site.telefone,
      href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappTexto)}`,
    },
    { Icone: Mail, titulo: "E-mail", texto: site.email, href: `mailto:${site.email}` },
    { Icone: Clock, titulo: "Horário de atendimento", texto: site.horario },
  ];

  const redes = [
    { Icone: Instagram, label: "Instagram", href: site.redes.instagram },
    { Icone: Facebook, label: "Facebook", href: site.redes.facebook },
    { Icone: Youtube, label: "YouTube", href: site.redes.youtube },
    { Icone: Linkedin, label: "LinkedIn", href: site.redes.linkedin },
  ];

  return (
    <>
      <PageHero
        variante="plain"
        titulo="Contato"
        subtitulo="Fale com a equipe do Ponto de Cultura."
        descricao="Respondemos mensagens em até dois dias úteis. Para assuntos urgentes, use o WhatsApp."
        crumbs={[{ label: "Contato" }]}
      />

      <section className="bg-background">
        <div className="container-site grid gap-12 py-14 lg:grid-cols-[0.85fr_1fr] lg:gap-20 lg:py-20">
          <Reveal>
            <h2 className="text-2xl text-primary-deep">Onde estamos</h2>
            <ul className="mt-8 space-y-6">
              {contatos.map(({ Icone, titulo, texto, href }) => (
                <li key={titulo} className="flex gap-4">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Icone className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className={rotulo}>{titulo}</p>
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="mt-1 block text-sm text-muted-foreground hover:text-primary hover:underline"
                      >
                        {texto}
                      </a>
                    ) : (
                      <p className="mt-1 max-w-xs text-sm text-muted-foreground">{texto}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-t border-border pt-6">
              <p className={rotulo}>Redes sociais</p>
              <ul className="mt-3 flex gap-2">
                {redes.map(({ Icone, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-border text-primary transition-colors hover:bg-secondary"
                    >
                      <Icone className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-soft sm:p-8">
              <h2 className="text-2xl text-primary-deep">Envie uma mensagem</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Os campos marcados com asterisco são obrigatórios.
              </p>

              <form className="mt-7 space-y-5" onSubmit={onSubmit} noValidate>
                <div>
                  <label htmlFor="nome" className={rotulo}>
                    Nome completo *
                  </label>
                  <input id="nome" name="nome" type="text" autoComplete="name" className={campo} />
                  {erros.nome ? (
                    <p className="mt-1 text-xs text-destructive">{erros.nome}</p>
                  ) : null}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
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
                  <textarea id="mensagem" name="mensagem" rows={5} className={campo} />
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

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Enviar mensagem
                </button>

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
