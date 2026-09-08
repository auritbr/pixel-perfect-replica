import { PageHero } from "./PageHero";

export type LegalSecao = { titulo: string; paragrafos: string[]; itens?: string[] };

export function LegalPage({
  titulo,
  subtitulo,
  atualizacao,
  secoes,
}: {
  titulo: string;
  subtitulo: string;
  atualizacao: string;
  secoes: LegalSecao[];
}) {
  return (
    <>
      <PageHero variante="plain" titulo={titulo} subtitulo={subtitulo} crumbs={[{ label: titulo }]} />

      <section className="bg-background">
        <div className="container-site py-14 lg:py-20">
          <div className="mx-auto max-w-[760px]">
            <p className="text-xs text-muted-foreground">Última atualização: {atualizacao}</p>
            {secoes.map((secao, i) => (
              <section key={secao.titulo} className={i === 0 ? "mt-8" : "mt-10"}>
                <h2 className="text-xl text-primary-deep">
                  {i + 1}. {secao.titulo}
                </h2>
                {secao.paragrafos.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {secao.itens ? (
                  <ul className="mt-4 space-y-2">
                    {secao.itens.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
