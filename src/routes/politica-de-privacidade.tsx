import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSecao } from "@/components/site/LegalPage";
import { site } from "@/data/site";
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

const secoes: LegalSecao[] = [
  {
    titulo: "Objetivo desta política",
    paragrafos: [
      `Esta política explica como o ${site.nome} trata os dados pessoais de quem visita este site, participa das atividades ou entra em contato com a equipe. Somos uma organização sem fins lucrativos com sede em ${site.endereco}.`,
      "Nosso compromisso é coletar o mínimo necessário, usar os dados apenas para as finalidades informadas e manter comunicação transparente com famílias, participantes e parceiros.",
    ],
  },
  {
    titulo: "Quais dados podem ser coletados",
    paragrafos: [
      "Coletamos apenas os dados necessários para responder mensagens, organizar inscrições e cumprir obrigações legais de prestação de contas.",
    ],
    itens: [
      "Dados de contato informados voluntariamente no formulário do site: nome, e-mail, telefone, assunto e mensagem.",
      "Dados de inscrição em oficinas, projetos e atividades, coletados presencialmente na sede.",
      "Dados técnicos de navegação, como páginas visitadas e tipo de dispositivo, tratados de forma agregada.",
      "Fotografias e vídeos das atividades, mediante autorização de uso de imagem.",
    ],
  },
  {
    titulo: "Como os dados são utilizados",
    paragrafos: [
      "Os dados são usados para responder solicitações, confirmar participação em atividades, enviar informações sobre os projetos quando solicitado e produzir relatórios estatísticos sem identificação individual.",
      "Não utilizamos dados pessoais para publicidade e não os comercializamos em nenhuma hipótese.",
    ],
  },
  {
    titulo: "Compartilhamento de informações",
    paragrafos: [
      "Podemos compartilhar dados com órgãos públicos quando exigido por lei ou por obrigações de prestação de contas, com entidades escoteiras às quais o grupo é vinculado e com prestadores de serviço de tecnologia estritamente necessários ao funcionamento do site.",
      "Em todos os casos, o compartilhamento se limita ao mínimo indispensável à finalidade envolvida.",
    ],
  },
  {
    titulo: "Cookies e tecnologias semelhantes",
    paragrafos: [
      "Este site pode utilizar cookies e tecnologias semelhantes, sempre em conjunto reduzido e com finalidades claras.",
    ],
    subsecoes: [
      {
        titulo: "Cookies necessários",
        paragrafos: [
          "Garantem o funcionamento básico do site e guardam decisões e preferências, como a escolha sobre cookies e os ajustes do painel de acessibilidade. Sem eles, o site não funciona corretamente.",
        ],
      },
      {
        titulo: "Cookies opcionais",
        paragrafos: [
          "Quando aplicável, permitem entender de forma agregada como as páginas são acessadas, sem identificar pessoas. São ativados somente com o seu consentimento.",
        ],
      },
      {
        titulo: "Como gerenciar suas preferências",
        paragrafos: [
          "As preferências podem ser administradas a qualquer momento pelo controle de Cookies disponível no próprio site, aceitando todos ou rejeitando os opcionais.",
          "Você também pode apagar ou bloquear cookies nas configurações do seu navegador. Nesse caso, algumas preferências salvas serão perdidas. Ao assistir a um vídeo incorporado ou clicar em um botão de rede social, o serviço correspondente pode gravar cookies próprios, sujeitos às políticas dessas plataformas.",
        ],
      },
    ],
  },
  {
    titulo: "Armazenamento e segurança",
    paragrafos: [
      "Os dados ficam armazenados em sistemas com acesso restrito à coordenação e são mantidos apenas pelo período necessário ao atendimento da finalidade ou ao cumprimento de prazos legais.",
      "Adotamos medidas razoáveis de proteção, como controle de acesso e orientação da equipe sobre sigilo das informações.",
    ],
  },
  {
    titulo: "Direitos do titular",
    paragrafos: [
      "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade ou exclusão dos seus dados, bem como revogar consentimentos já concedidos.",
    ],
    itens: [
      `Envie o pedido para ${site.email}, com o assunto “Dados pessoais”.`,
      "Responderemos em até quinze dias, podendo solicitar informações para confirmar sua identidade.",
    ],
  },
  {
    titulo: "Dados de crianças e adolescentes",
    paragrafos: [
      "Parte das atividades envolve crianças e adolescentes. Nesses casos, os dados de inscrição e a autorização de uso de imagem são fornecidos pelo responsável legal, por escrito, antes do início da participação.",
      "Esses dados são tratados apenas para fins educativos, de segurança e de organização das atividades, com acesso restrito à coordenação. O responsável legal pode solicitar acesso, correção ou exclusão, e revogar autorizações a qualquer momento.",
    ],
  },
  {
    titulo: "Links externos",
    paragrafos: [
      "Este site pode indicar páginas de parceiros, órgãos públicos e redes sociais. Não temos controle sobre o tratamento de dados realizado por esses serviços, que possuem políticas próprias.",
    ],
  },
  {
    titulo: "Alterações desta política",
    paragrafos: [
      "Esta política pode ser atualizada para refletir mudanças nas atividades ou na legislação. A data de atualização é sempre indicada no início da página.",
    ],
  },
  {
    titulo: "Contato",
    paragrafos: [
      `Para dúvidas sobre privacidade e proteção de dados, escreva para ${site.email} ou ligue para ${site.telefone} durante o horário de atendimento.`,
    ],
  },
];

function Privacidade() {
  return (
    <LegalPage
      image={heroPrivacidade}
      imageAlt="Equipe do grupo escoteiro reunida em torno de uma mesa organizando documentos das atividades"
      titulo="Política de Privacidade"
      frase="Saiba como tratamos dados pessoais, protegemos informações e respeitamos a privacidade de quem se relaciona com a organização."
      introEyebrow="Privacidade"
      introTitulo="Como cuidamos das suas informações"
      introTexto="Reunimos aqui, em linguagem simples, quais dados podem ser coletados, com qual finalidade e como você pode exercer seus direitos a qualquer momento."
      atualizacao="setembro de 2026"
      secoes={secoes}
    />
  );
}
