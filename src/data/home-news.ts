import type { Noticia } from "./noticias";

// No existing demonstration story has been confirmed as institutional news.
// Add a slug only after the group confirms the corresponding story.
export const confirmedHomeNewsSlugs: readonly string[] = [];

export function selectHomeNews(
  items: readonly Noticia[],
  confirmedSlugs: readonly string[] = confirmedHomeNewsSlugs,
): Noticia[] {
  return items.filter((item) => confirmedSlugs.includes(item.slug)).slice(0, 3);
}