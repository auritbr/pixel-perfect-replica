import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSecao } from "@/components/site/LegalPage";
import { site } from "@/data/site";
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

const secoes: LegalSecao[] = [
  {
    titulo: "Aceitação dos termos",
    paragrafos: [
      `Ao navegar neste site, você concorda com as condições descritas nesta página. Ele é mantido pelo ${site.nome} com finalidade informativa e institucional.`,
      "Caso não concorde com alguma condição, pedimos que interrompa o uso do site e, se desejar, entre em contato com a equipe para esclarecimentos.",
    ],
  },
  {
    titulo: "Finalidade do site",
    paragrafos: [
      "O site apresenta a organização, seus projetos, notícias, galeria de atividades, documentos de transparência e canais de contato.",
      "As informações têm caráter informativo e não substituem o atendimento presencial na sede nem orientações oficiais de órgãos públicos.",
    ],
  },
  {
    titulo: "Uso adequado",
    paragrafos: [
      "Pedimos um uso respeitoso e responsável dos recursos disponíveis nesta página.",
    ],
    itens: [
      "Não utilizar o site para fins ilícitos, ofensivos ou que prejudiquem terceiros.",
      "Não tentar acessar áreas restritas, interferir no funcionamento do site ou coletar dados de forma automatizada sem autorização.",
      "Não enviar, pelos formulários, conteúdo discriminatório, publicitário indesejado ou informações de terceiros sem consentimento.",
    ],
  },
  {
    titulo: "Conteúdos e informações",
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
    titulo: "Links externos",
    paragrafos: [
      "Este site pode indicar páginas de parceiros, órgãos públicos e redes sociais. Não temos controle sobre esses conteúdos e não respondemos por eles.",
    ],
  },
  {
    titulo: "Formulários e comunicação",
    paragrafos: [
      "As mensagens enviadas pelo formulário de contato são recebidas pela coordenação e respondidas em dias úteis, conforme a disponibilidade da equipe voluntária.",
      "A participação nas atividades é gratuita e sujeita a número de vagas. Para menores de idade, é necessária autorização do responsável legal, entregue na sede antes do início do ciclo. Condutas que coloquem alguém em risco levam ao desligamento da atividade.",
    ],
  },
  {
    titulo: "Limitação de responsabilidade",
    paragrafos: [
      "Buscamos manter o site disponível de forma contínua e com informações corretas, mas interrupções para manutenção ou por falhas técnicas podem ocorrer sem aviso prévio.",
      "Não nos responsabilizamos por decisões tomadas exclusivamente com base em conteúdo do site sem confirmação junto à equipe.",
    ],
  },
  {
    titulo: "Privacidade e proteção de dados",
    paragrafos: [
      "O tratamento de dados pessoais, incluindo o uso de cookies e as preferências de navegação, é descrito na Política de Privacidade deste site, que integra estes termos.",
    ],
  },
  {
    titulo: "Alterações dos termos",
    paragrafos: [
      "Estes termos podem ser atualizados para refletir mudanças nas atividades, no site ou na legislação aplicável. A data de atualização é sempre indicada no início da página.",
    ],
  },
  {
    titulo: "Contato",
    paragrafos: [
      `Dúvidas sobre estes termos podem ser enviadas para ${site.email} ou pelo telefone ${site.telefone}. Aplica-se a legislação brasileira.`,
    ],
  },
];

function Termos() {
  return (
    <LegalPage
      image={heroTermos}
      imageAlt="Jovens e adultos do grupo escoteiro reunidos em círculo durante uma atividade educativa ao ar livre"
      titulo="Termos de Uso"
      frase="Conheça as condições de utilização deste site e as orientações que ajudam a garantir uma navegação responsável e segura."
      introEyebrow="Termos"
      introTitulo="Condições de utilização do site"
      introTexto="Estas condições orientam o uso do site, o aproveitamento dos conteúdos publicados e a comunicação com a equipe da organização."
      atualizacao="setembro de 2026"
      secoes={secoes}
    />
  );
}
