import { describe, expect, test } from "bun:test";
import { equipe } from "./equipe";

describe("integrantes institucionais confirmados", () => {
  const confirmados = [
    ["Gerliane Toscano de Medeiros Morais", "Colaborador"],
    ["Joaquim Rodrigues de Araújo", "Chefia"],
    ["José Wilson de Morais Medeiros", "Chefia"],
    ["Virgínia Letícia Francisco da Silva", "Pioneira"],
    ["Felipe Fagner Gomes Evangelista", "Diretor de comunicação"],
    ["José Messias Felício da Silva", "Diretor administrativo"],
    ["Jucélio de Araújo Rufino", "Presidente"],
    ["Weveton Victor Targino dos Santos", "Vice-presidente e Diretor financeiro"],
  ];

  for (const [nome, cargo] of confirmados) {
    test(`${nome} tem somente o perfil e a função confirmados`, () => {
      const perfis = equipe.filter((pessoa) => pessoa.nome === nome);
      expect(perfis).toHaveLength(1);
      expect(perfis[0]?.cargo).toBe(cargo);
    });
  }

  test("não publica integrantes nem contatos inventados", () => {
    expect(equipe).toHaveLength(8);
    expect(equipe.every((pessoa) => !pessoa.email && !pessoa.linkedin)).toBe(true);
  });
});