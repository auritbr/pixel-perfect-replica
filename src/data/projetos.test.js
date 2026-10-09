import { describe, expect, test } from "bun:test";
import { getProjeto, projetos } from "./projetos";

describe("projetos institucionais confirmados", () => {
  test("somente Pneus que Transformam está disponível", () => {
    expect(projetos.map((projeto) => projeto.slug)).toEqual(["pneus-que-transformam"]);
    expect(getProjeto("pneus-que-transformam")?.nomeCompleto).toBe("Pneus que Transformam – Arte, Sustentabilidade e Cidadania");
  });

  for (const slug of ["maos-que-criam", "oficina-maos-que-criam", "trilhas-de-saberes", "construindo-comunidade"]) {
    test(`projeto removido ${slug} não resolve uma página`, () => {
      expect(getProjeto(slug)).toBeUndefined();
    });
  }

  test("não armazena periodicidade, estatísticas ou parceiros não confirmados", () => {
    const projeto = getProjeto("pneus-que-transformam");
    expect(projeto).toBeDefined();
    expect(projeto).not.toHaveProperty("periodicidade");
    expect(projeto).not.toHaveProperty("resultados");
    expect(projeto).not.toHaveProperty("parceiros");
  });
});