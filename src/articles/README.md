# Articles

Drop a new article in here and it shows up on the homepage automatically —
no need to touch `Home.jsx`, `App.jsx`, or any routing code.

## Adding an article

1. Create a new file: `src/articles/your-slug.jsx`
2. Default-export an object with this shape:

```jsx
export default {
  slug: 'your-slug',       // used in the URL: /article/your-slug
  title: 'Your Title',
  date: 'August 2026',     // anything Date.parse() understands; used for sort order
  content: (
    <>
      <p>First paragraph.</p>
      <p>Second paragraph, with a <a href="https://example.com">link</a>.</p>
      <h3>A subheading</h3>
      <p>More content...</p>
    </>
  ),
}
```

That's it. The file is picked up automatically:

- It appears in the "Writings" list on the homepage, newest first (by `date`).
- It's reachable at `/article/your-slug`.
- Styling is inherited automatically — `<p>`, `<h2>`–`<h6>`, `<a>`, `<ul>`,
  `<blockquote>`, etc. inside `content` all pick up the site's existing
  article styles, so you don't need to add any CSS.

## Notes

- `slug` must be unique and URL-friendly (lowercase, hyphens, no spaces).
- `content` is real JSX, not an HTML string — so you get autocomplete/lint
  checking, and can use any valid JSX/HTML tags.
- Removing a file removes the article from the homepage and its URL
  automatically (visiting the old link shows "Article not found").
