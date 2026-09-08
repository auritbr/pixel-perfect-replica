import hero from "@/assets/hero-escoteiros.jpg";
import oficina from "@/assets/oficina-cultural.jpg";
import artesanato from "@/assets/artesanato-maos.jpg";
import maos from "@/assets/projeto-maos-que-criam.jpg";
import trilhas from "@/assets/projeto-trilhas.jpg";
import comunidade from "@/assets/projeto-comunidade.jpg";
import quemSomos from "@/assets/quem-somos.jpg";
import equipeImg from "@/assets/equipe.jpg";
import n1 from "@/assets/noticia-1.jpg";
import n2 from "@/assets/noticia-2.jpg";
import n4 from "@/assets/noticia-4.jpg";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";

export type Foto = { src: string; legenda: string };

export const anosGaleria = ["2026", "2025", "2024", "2023", "2022"] as const;
export type AnoGaleria = (typeof anosGaleria)[number];

export const galeriaPorAno: Record<AnoGaleria, { texto: string; fotos: Foto[] }> = {
  "2026": {
    texto:
      "Um ano marcado pela ampliação das oficinas de artesanato e pela primeira mostra aberta na praça do bairro.",
    fotos: [
      { src: hero, legenda: "Encontro de abertura do ano, na praça da Vila Progresso" },
      { src: n1, legenda: "Festival cultural do bairro" },
      { src: artesanato, legenda: "Amarrações em fibra natural" },
      { src: g2, legenda: "Construção de campo com amarrações" },
      { src: maos, legenda: "Mesa coletiva de pintura sobre madeira" },
      { src: g4, legenda: "Mural coletivo com crianças da vizinhança" },
      { src: trilhas, legenda: "Leitura de bússola no início da trilha" },
      { src: g6, legenda: "Acabamento de peça em madeira reaproveitada" },
    ],
  },
  "2025": {
    texto: "Ano do acampamento de inverno com três cidades e da chegada dos teares construídos na sede.",
    fotos: [
      { src: n2, legenda: "Acampamento de inverno" },
      { src: n4, legenda: "Oficina de tecelagem com teares de mesa" },
      { src: comunidade, legenda: "Mutirão de plantio na praça" },
      { src: g3, legenda: "Mostra de peças produzidas no ciclo" },
      { src: g5, legenda: "Chegada ao ponto de encontro ao fim do dia" },
      { src: oficina, legenda: "Encontro semanal na sede" },
      { src: g1, legenda: "Lenço e distintivos" },
    ],
  },
  "2024": {
    texto: "Consolidação dos três projetos e início do trabalho de registro da memória do bairro.",
    fotos: [
      { src: quemSomos, legenda: "Roda de conversa no parque" },
      { src: equipeImg, legenda: "Equipe reunida na sede" },
      { src: g2, legenda: "Construções de campo com bambu e corda" },
      { src: maos, legenda: "Oficina de pintura" },
      { src: g6, legenda: "Trabalho em madeira" },
      { src: comunidade, legenda: "Ação comunitária de fim de semana" },
    ],
  },
  "2023": {
    texto: "Primeiros ciclos de oficinas com grupos fixos e ampliação do número de voluntários.",
    fotos: [
      { src: oficina, legenda: "Oficina de fibras naturais" },
      { src: g4, legenda: "Pintura coletiva no muro da sede" },
      { src: trilhas, legenda: "Saída de campo com jovens" },
      { src: g3, legenda: "Exposição das primeiras peças" },
      { src: g1, legenda: "Detalhe do lenço escoteiro" },
    ],
  },
  "2022": {
    texto: "Ano do reconhecimento como Ponto de Cultura e da abertura da sede às atividades comunitárias.",
    fotos: [
      { src: hero, legenda: "Atividade de abertura da sede" },
      { src: g5, legenda: "Encerramento do primeiro acampamento" },
      { src: artesanato, legenda: "Primeiras oficinas de amarração" },
      { src: equipeImg, legenda: "Voluntários fundadores" },
    ],
  },
};

export const destaquesHome: Foto[] = [
  { src: hero, legenda: "Encontro de abertura do ano" },
  { src: artesanato, legenda: "Amarrações em fibra natural" },
  { src: g2, legenda: "Construção de campo com amarrações" },
  { src: g4, legenda: "Mural coletivo no bairro" },
  { src: n2, legenda: "Acampamento de inverno" },
  { src: g3, legenda: "Mostra de peças artesanais" },
];
