export const contatoInstitucional = {
  email: "bugivermelho5@gmail.com",
  telefone: "(84) 99681-7626",
  whatsapp: "5584996817626",
  whatsappTexto: "Olá, vim do site e gostaria de falar com o Grupo de Escoteiros Bugi Vermelho.",
  endereco: "Rua João da Mata Toscano Neto, 36 — Paz e Amor — Florânia/RN",
  instagram: "https://www.instagram.com/bugivermelho83",
  cnpj: "64.138.430/0001-57",
};

export const whatsappInstitucionalHref = `https://wa.me/${contatoInstitucional.whatsapp}?text=${encodeURIComponent(contatoInstitucional.whatsappTexto)}`;