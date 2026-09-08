import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, type LegalSecao } from "@/components/site/LegalPage";
import { site } from "@/data/site";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Ponto de Cultura Trilha Viva" },
      {
        name: "description",
        content:
          "Quais cookies este site utiliza, para que servem e como aceitar, rejeitar ou configurar as preferências a qualquer momento.",
      },
      { property: "og:title", content: "Política de Cookies — Trilha Viva" },
      {
        property: "og:description",
        content: "Tipos de cookies usados no site e como gerenciar suas preferências.",
      },
    ],
  }),
  component: Cookies,
});

const secoes: LegalSecao[] = [
  {
    titulo: "O que são cookies",
    paragrafos: [
      "Cookies são pequenos arquivos gravados no seu navegador quando você visita um site. Eles permitem lembrar preferências, manter escolhas entre páginas e entender de forma agregada como o site é utilizado.",
    ],
  },
  {
    titulo: "Cookies que utilizamos",
    paragrafos: ["Este site usa um conjunto reduzido de cookies, organizados em duas categorias."],
    itens: [
      "Necessários: guardam sua decisão sobre cookies e as preferências de acessibilidade escolhidas no painel do site. Não podem ser desativados, pois sem eles o site não funciona corretamente.",
      "Estatísticos (opcionais): permitem contar visitas e páginas mais acessadas, sem identificar pessoas. Só são ativados se você aceitar.",
    ],
  },
  {
    titulo: "Cookies de terceiros",
    paragrafos: [
      "Ao assistir a um vídeo incorporado ou clicar em um botão de rede social, o serviço correspondente pode gravar cookies próprios, sujeitos às políticas dessas plataformas.",
    ],
  },
  {
    titulo: "Como gerenciar suas preferências",
    paragrafos: [
      "O aviso de cookies aparece na primeira visita, no canto inferior esquerdo da tela, com as opções de aceitar todos, rejeitar os opcionais ou configurar categoria por categoria.",
      "Você também pode apagar ou bloquear cookies diretamente nas configurações do seu navegador. Nesse caso, algumas preferências salvas serão perdidas.",
    ],
  },
  {
    titulo: "Dúvidas",
    paragrafos: [
      `Para dúvidas sobre esta política, escreva para ${site.email} ou ligue para ${site.telefone} durante o horário de atendimento.`,
    ],
  },
];

function Cookies() {
  return (
    <LegalPage
      titulo="Política de Cookies"
      subtitulo="Quais cookies usamos e como você controla suas preferências."
      atualizacao="12 de janeiro de 2026"
      secoes={secoes}
    />
  );
}
