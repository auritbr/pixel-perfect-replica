import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import documento from "@/content/termos-de-uso.md?raw";
import heroTermos from "@/assets/legal-termos-hero.jpg";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Grupo Escoteiro Bugi Vermelho" },
      {
        name: "description",
        content:
          "Condições de uso do site do Grupo Escoteiro Bugi Vermelho: conteúdo publicado, propriedade intelectual, links externos e responsabilidades.",
      },
      { property: "og:title", content: "Termos de Uso — Bugi Vermelho" },
      {
        property: "og:description",
        content: "Condições de uso do site e do conteúdo publicado pela organização.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Termos,
});

function Termos() {
  return (
    <LegalPage
      image={heroTermos}
      imageAlt="Jovens e adultos do grupo escoteiro reunidos em círculo durante uma atividade educativa ao ar livre"
      titulo="Termos de Uso"
      frase="Conheça as condições de utilização deste site e as orientações que ajudam a garantir uma navegação responsável e segura."
      markdown={documento}
    />
  );
}
