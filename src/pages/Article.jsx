import { useParams, Link } from 'react-router-dom'
import './Article.css'

// Article content - add your essays here
const articles = {
  'on-bertrand-russell': {
    title: 'On Bertrand Russell',
    date: 'January 2026',
    content: `
      <p>Article content coming soon...</p>
    `
  }
}

function Article() {
  const { slug } = useParams()
  const article = articles[slug]

  if (!article) {
    return (
      <main className="article">
        <div className="article-container">
          <p>Article not found.</p>
          <Link to="/" className="back-link">← Back home</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="article">
      <div className="article-container">
        <Link to="/" className="back-link">← Back home</Link>
        
        <header className="article-header">
          <h1>{article.title}</h1>
          <time>{article.date}</time>
        </header>

        <article 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <footer className="article-footer">
          <Link to="/" className="back-link">← Back home</Link>
        </footer>
      </div>
    </main>
  )
}

export default Article
