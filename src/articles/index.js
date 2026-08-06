// Auto-loads every article file in this folder — no manual registration needed.
//
// To add a new article: drop a new `your-slug.jsx` file in this folder that
// default-exports { slug, title, date, content }, where `content` is JSX
// (e.g. `<><p>...</p></>`). It will automatically show up on the homepage
// and be reachable at /article/your-slug.
//
// See README.md in this folder for the full guide.

const modules = import.meta.glob('./*.jsx', { eager: true })

function parseDate(value) {
  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? 0 : timestamp
}

export const articles = Object.entries(modules)
  .filter(([path]) => !path.endsWith('/index.jsx'))
  .map(([, mod]) => mod.default)
  .filter(Boolean)
  .sort((a, b) => parseDate(b.date) - parseDate(a.date))

export const articlesBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article])
)
