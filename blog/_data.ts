export function url(page: Lume.Page) {
  if (page.data.category === "blogpost")
    return `./${page.data.date.getFullYear()}/${page.data.title}/`;
  return page.data.url;
}
