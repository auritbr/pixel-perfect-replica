import { describe, expect, test } from "bun:test";
import { noticias } from "./noticias";
import { selectHomeNews } from "./home-news";

describe("Home: apenas notícias confirmadas", () => {
  test("não exibe as notícias demonstrativas existentes", () => {
    expect(noticias.length).toBeGreaterThan(0);
    expect(selectHomeNews(noticias)).toEqual([]);
  });

  test("exclui notícias não confirmadas", () => {
    const records = [{ slug: "real" }, { slug: "ficticia" }];
    expect(selectHomeNews(records, ["real"]).map((item) => item.slug)).toEqual(["real"]);
  });

  for (const count of [0, 1, 2]) {
    test(`mostra somente ${count} notícias quando essa é a quantidade confirmada`, () => {
      const records = Array.from({ length: 4 }, (_, index) => ({ slug: `noticia-${index}` }));
      const confirmed = records.slice(0, count).map((item) => item.slug);
      expect(selectHomeNews(records, confirmed).map((item) => item.slug)).toEqual(confirmed);
    });
  }

  test("limita a Home a três notícias confirmadas", () => {
    const records = Array.from({ length: 4 }, (_, index) => ({ slug: `noticia-${index}` }));
    expect(selectHomeNews(records, records.map((item) => item.slug)).map((item) => item.slug))
      .toEqual(["noticia-0", "noticia-1", "noticia-2"]);
  });
});