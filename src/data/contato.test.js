import { describe, expect, test } from "bun:test";
import { contatoInstitucional, whatsappInstitucionalHref } from "./contato";

describe("contatos oficiais", () => {
  test("e-mail confirmado", () => {
    expect(contatoInstitucional.email).toBe("bugivermelho5@gmail.com");
  });
  test("telefone confirmado", () => {
    expect(contatoInstitucional.telefone).toBe("(84) 99681-7626");
  });
  test("WhatsApp usa o número internacional confirmado", () => {
    const url = new URL(whatsappInstitucionalHref);
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe("/5584996817626");
  });
  test("mensagem pré-preenchida exata e codificada", () => {
    expect(new URL(whatsappInstitucionalHref).searchParams.get("text")).toBe("Olá, vim do site e gostaria de falar com o Grupo de Escoteiros Bugi Vermelho.");
    expect(whatsappInstitucionalHref).not.toMatch(/[\sá]/);
  });
  test("endereço confirmado sem CEP inventado", () => {
    expect(contatoInstitucional.endereco).toBe("Rua João da Mata Toscano Neto, 36 — Paz e Amor — Florânia/RN");
  });
  test("único perfil social oficial", () => {
    expect(contatoInstitucional.instagram).toBe("https://www.instagram.com/bugivermelho83");
    expect(Object.keys(contatoInstitucional).filter((key) => /instagram|facebook|youtube|linkedin|tiktok|twitter/i.test(key))).toEqual(["instagram"]);
  });
  test("CNPJ preservado", () => {
    expect(contatoInstitucional.cnpj).toBe("64.138.430/0001-57");
  });
});