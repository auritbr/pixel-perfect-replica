import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import documento from "@/content/politica-de-privacidade.md?raw";
import heroPrivacidade from "@/assets/legal-privacidade-hero.jpg";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Grupo Escoteiro Bugi Vermelho" },
      {
        name: "description",
        content:
          "Como o Grupo Escoteiro Bugi Vermelho coleta, usa, armazena e protege dados pessoais informados no site e nas atividades.",
      },
      { property: "og:title", content: "Política de Privacidade — Bugi Vermelho" },
      {
        property: "og:description",
        content: "Tratamento de dados pessoais no site e nas atividades da organização.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacidade,
});

function Privacidade() {
  return (
    <LegalPage
      image={heroPrivacidade}
      imageAlt="Equipe do grupo escoteiro reunida em torno de uma mesa organizando documentos das atividades"
      titulo="Política de Privacidade"
      frase="Saiba como tratamos dados pessoais, protegemos informações e respeitamos a privacidade de quem se relaciona com a organização."
      markdown={documento}
    />
  );
}
