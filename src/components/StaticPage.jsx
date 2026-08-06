import { Link } from 'react-router-dom'
import './StaticPage.css'

// Shared shell for every content page (articles, reading list, academic
// writings, etc.): back-link, title/date header, content area, footer.
// Add a new static page by wrapping its content in this instead of
// hand-rolling the back-link/header/footer markup again.
function StaticPage({ title, date, children }) {
  return (
    <main className="page">
      <div className="page-card">
        <Link to="/" className="back-link">← Back home</Link>

        <header className="article-header">
          <h1>{title}</h1>
          {date && <time>{date}</time>}
        </header>

        <article className="article-content">
          {children}
        </article>

        <footer className="article-footer">
          <Link to="/" className="back-link">← Back home</Link>
        </footer>
      </div>
    </main>
  )
}

export default StaticPage
