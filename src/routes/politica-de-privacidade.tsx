import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSecao } from "@/components/site/LegalPage";
import { site } from "@/data/site";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Como o Ponto de Cultura Trilha Viva coleta, usa, armazena e protege dados pessoais informados no site e nas atividades.",
      },
      { property: "og:title", content: "Política de Privacidade — Trilha Viva" },
      {
        property: "og:description",
        content: "Tratamento de dados pessoais no site e nas atividades da organização.",
      },
    ],
  }),
  component: Privacidade,
});

const secoes: LegalSecao[] = [
  {
    titulo: "Quem somos",
    paragrafos: [
      `Esta política descreve como o ${site.nome} trata os dados pessoais de quem visita este site, participa das atividades ou entra em contato com a equipe. Somos uma organização cultural sem fins lucrativos com sede em ${site.endereco}.`,
    ],
  },
  {
    titulo: "Dados que coletamos",
    paragrafos: [
      "Coletamos apenas os dados necessários para responder mensagens, organizar inscrições e cumprir obrigações legais de prestação de contas.",
    ],
    itens: [
      "Dados de contato informados voluntariamente no formulário: nome, e-mail, telefone, assunto e mensagem.",
      "Dados de inscrição em oficinas e projetos, coletados presencialmente na sede.",
      "Dados técnicos de navegação, como páginas visitadas e tipo de dispositivo, em forma agregada.",
    ],
  },
  {
    titulo: "Finalidade do tratamento",
    paragrafos: [
      "Os dados são usados para responder solicitações, confirmar participação em atividades, enviar informações sobre os projetos quando solicitado e produzir relatórios estatísticos sem identificação individual.",
      "Não utilizamos dados pessoais para publicidade nem os comercializamos em nenhuma hipótese.",
    ],
  },
  {
    titulo: "Compartilhamento",
    paragrafos: [
      "Podemos compartilhar dados com órgãos públicos quando exigido por lei ou por obrigações de prestação de contas de projetos culturais, e com prestadores de serviço de tecnologia estritamente necessários para o funcionamento do site.",
    ],
  },
  {
    titulo: "Uso de imagem",
    paragrafos: [
      "Fotografias das atividades podem ser publicadas na galeria e nas notícias deste site. A autorização de uso de imagem é coletada por escrito no momento da inscrição e pode ser revogada a qualquer momento por solicitação.",
    ],
  },
  {
    titulo: "Armazenamento e segurança",
    paragrafos: [
      "Os dados ficam armazenados em sistemas com acesso restrito à coordenação e são mantidos apenas pelo período necessário ao atendimento da finalidade ou ao cumprimento de prazos legais.",
    ],
  },
  {
    titulo: "Direitos do titular",
    paragrafos: [
      "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, bem como revogar consentimentos.",
    ],
    itens: [
      `Envie o pedido para ${site.email}, com o assunto “Dados pessoais”.`,
      "Responderemos em até quinze dias, podendo solicitar informações para confirmar sua identidade.",
    ],
  },
  {
    titulo: "Alterações desta política",
    paragrafos: [
      "Esta política pode ser atualizada para refletir mudanças nas atividades ou na legislação. A data de atualização é sempre indicada no início da página.",
    ],
  },
];

function Privacidade() {
  return (
    <LegalPage
      titulo="Política de Privacidade"
      subtitulo="Como tratamos os dados pessoais informados no site e nas atividades."
      atualizacao="12 de janeiro de 2026"
      secoes={secoes}
    />
  );
}
