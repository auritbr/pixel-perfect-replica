import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { FeatureHero } from "./FeatureHero";

/*
 * Documento jurídico renderizado a partir do texto original (Markdown) sem alterações.
 * O H1 do hero é o título da página; os títulos do documento descem um nível semântico.
 */
const components: Components = {
  h1: ({ children }) => (
    <h2 className="font-display text-[1.65rem] font-bold leading-[1.2] text-primary-deep sm:text-[1.85rem]">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h3 className="mb-4 mt-10 font-display text-[1.15rem] font-semibold leading-[1.3] text-primary-deep sm:text-[1.25rem]">
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 className="mb-3 mt-7 font-display text-[1rem] font-semibold leading-[1.35] text-primary-deep sm:text-[1.05rem]">
      {children}
    </h4>
  ),
  h4: ({ children }) => (
    <h5 className="mb-3 mt-6 font-display text-[0.97rem] font-semibold text-primary-deep">{children}</h5>
  ),
  p: ({ children }) => <p className="legal-p mb-4">{children}</p>,
  ul: ({ children }) => <ul className="mb-4 list-disc space-y-1.5 pl-6 marker:text-primary-deep/60">{children}</ul>,
  ol: ({ children }) => <ol className="mb-4 list-decimal space-y-1.5 pl-6">{children}</ol>,
  li: ({ children }) => <li className="pl-1">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-primary-deep">{children}</strong>,
  a: ({ href, children }) => {
    const externo = !!href && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className="text-primary underline underline-offset-[3px] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  hr: () => <hr className="my-8 border-0 border-t border-legal-ink/10" />,
};

export function LegalPage({
  image,
  imageAlt,
  titulo,
  frase,
  markdown,
}: {
  image: string;
  imageAlt: string;
  titulo: string;
  frase: string;
  markdown: string;
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

      <section className="bg-legal-desk px-4 pb-16 pt-10 sm:px-6 sm:pb-[4.5rem] sm:pt-14 lg:pt-16">
        <article className="legal-sheet mx-auto w-full max-w-[880px] rounded-[6px] border border-legal-ink/[0.08] bg-legal-paper px-6 pb-14 pt-10 text-[0.97rem] leading-[1.75] text-legal-ink sm:px-11 sm:pb-16 sm:pt-12 lg:px-[4.5rem] lg:pb-[4.5rem] lg:pt-16 lg:text-base">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {markdown}
          </ReactMarkdown>
        </article>
      </section>
    </>
  );
}
