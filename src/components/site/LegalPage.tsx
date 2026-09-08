import { FeatureHero } from "./FeatureHero";

export type LegalSubsecao = { titulo: string; paragrafos: string[]; itens?: string[] };
export type LegalSecao = {
  titulo: string;
  paragrafos: string[];
  itens?: string[];
  subsecoes?: LegalSubsecao[];
};

function Paragrafos({ paragrafos }: { paragrafos: string[] }) {
  return (
    <>
      {paragrafos.map((p) => (
        <p
          key={p.slice(0, 28)}
          className="mt-4 text-[1rem] leading-[1.7] text-muted-foreground first:mt-0"
        >
          {p}
        </p>
      ))}
    </>
  );
}

function Itens({ itens }: { itens: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5 pl-1">
      {itens.map((item) => (
        <li key={item.slice(0, 28)} className="flex gap-3 text-[0.97rem] leading-[1.7] text-muted-foreground">
          <span className="mt-[0.6rem] size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalPage({
  image,
  imageAlt,
  titulo,
  frase,
  introEyebrow,
  introTitulo,
  introTexto,
  atualizacao,
  secoes,
}: {
  image: string;
  imageAlt: string;
  titulo: string;
  frase: string;
  introEyebrow: string;
  introTitulo: string;
  introTexto: string;
  atualizacao: string;
  secoes: LegalSecao[];
}) {
  return (
    <>
      <FeatureHero
        image={image}
        imageAlt={imageAlt}
        eyebrow="Legal"
        title={titulo}
        description={frase}
        crumbs={[{ label: titulo }]}
      />

      <section className="bg-background">
        <div className="mx-auto w-full max-w-[880px] px-6 pb-20 pt-12 lg:pb-24 lg:pt-16">
          <div className="mx-auto max-w-[620px] text-center">
            <span className="font-display text-[0.76rem] font-semibold uppercase tracking-[0.16em] text-primary">
              {introEyebrow}
            </span>
            <h2 className="mt-3 font-display text-[1.7rem] font-semibold leading-[1.2] text-primary-deep sm:text-[1.9rem]">
              {introTitulo}
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.7] text-muted-foreground">{introTexto}</p>
            <p className="mt-6 inline-block rounded-[13px] border border-inst/15 bg-inst/6 px-[14px] py-[10px] text-[0.85rem] font-medium text-primary-deep">
              Última atualização: {atualizacao}
            </p>
          </div>

          <div className="mt-12 text-left">
            {secoes.map((secao, i) => (
              <section key={secao.titulo} className={i === 0 ? "" : "mt-12 lg:mt-[3.2rem]"}>
                <h2 className="font-display text-[1.6rem] font-semibold leading-[1.25] text-primary-deep sm:text-[1.75rem]">
                  <span className="text-primary">{i + 1}.</span> {secao.titulo}
                </h2>
                <div className="mt-4">
                  <Paragrafos paragrafos={secao.paragrafos} />
                  {secao.itens ? <Itens itens={secao.itens} /> : null}
                  {secao.subsecoes?.map((sub) => (
                    <div key={sub.titulo} className="mt-7">
                      <h3 className="font-display text-[1.2rem] font-semibold leading-[1.3] text-primary-deep sm:text-[1.32rem]">
                        {sub.titulo}
                      </h3>
                      <div className="mt-3">
                        <Paragrafos paragrafos={sub.paragrafos} />
                        {sub.itens ? <Itens itens={sub.itens} /> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
