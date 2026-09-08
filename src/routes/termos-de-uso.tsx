import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSecao } from "@/components/site/LegalPage";
import { site } from "@/data/site";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Condições de uso do site do Ponto de Cultura Trilha Viva: conteúdo publicado, propriedade intelectual, links externos e responsabilidades.",
      },
      { property: "og:title", content: "Termos de Uso — Trilha Viva" },
      {
        property: "og:description",
        content: "Condições de uso do site e do conteúdo publicado pela organização.",
      },
    ],
  }),
  component: Termos,
});

const secoes: LegalSecao[] = [
  {
    titulo: "Aceitação dos termos",
    paragrafos: [
      `Ao navegar neste site, você concorda com as condições descritas nesta página. Ele é mantido pelo ${site.nome} com finalidade informativa e institucional.`,
    ],
  },
  {
    titulo: "Conteúdo publicado",
    paragrafos: [
      "As informações sobre projetos, oficinas, datas e documentos são atualizadas periodicamente pela equipe. Números de participação e resultados apresentados são estimativas de acompanhamento interno.",
      "Alterações de calendário podem ocorrer por motivos climáticos, de segurança ou de disponibilidade de equipe; sempre que possível são comunicadas com antecedência nas notícias do site.",
    ],
  },
  {
    titulo: "Propriedade intelectual",
    paragrafos: [
      "Textos, fotografias, marcas e materiais gráficos deste site pertencem à organização ou são utilizados com autorização.",
    ],
    itens: [
      "É permitida a citação de trechos com indicação clara da fonte e link para a página original.",
      "É vedada a reprodução integral de conteúdos, o uso comercial de imagens e a alteração de materiais sem autorização por escrito.",
    ],
  },
  {
    titulo: "Participação nas atividades",
    paragrafos: [
      "As atividades são gratuitas e sujeitas a número de vagas. A participação de menores de idade depende de autorização do responsável legal, entregue na sede antes do início do ciclo.",
      "Pedimos respeito às demais pessoas participantes, aos materiais e aos espaços utilizados. Condutas que coloquem alguém em risco levam ao desligamento da atividade.",
    ],
  },
  {
    titulo: "Links externos",
    paragrafos: [
      "Este site pode indicar páginas de parceiros, órgãos públicos e redes sociais. Não temos controle sobre esses conteúdos e não respondemos por eles.",
    ],
  },
  {
    titulo: "Disponibilidade",
    paragrafos: [
      "Buscamos manter o site disponível de forma contínua, mas interrupções para manutenção ou por falhas técnicas podem ocorrer sem aviso prévio.",
    ],
  },
  {
    titulo: "Contato e legislação aplicável",
    paragrafos: [
      `Dúvidas sobre estes termos podem ser enviadas para ${site.email}. Aplica-se a legislação brasileira, com foro na comarca de São Paulo — SP.`,
    ],
  },
];

function Termos() {
  return (
    <LegalPage
      titulo="Termos de Uso"
      subtitulo="Condições de uso deste site e do conteúdo publicado."
      atualizacao="12 de janeiro de 2026"
      secoes={secoes}
    />
  );
}
