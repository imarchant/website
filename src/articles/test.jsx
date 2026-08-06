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