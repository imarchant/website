import { useParams, Link } from 'react-router-dom'
import { articlesBySlug } from '../articles'
import StaticPage from '../components/StaticPage'

function Article() {
  const { slug } = useParams()
  const article = articlesBySlug[slug]

  if (!article) {
    return (
      <main className="page">
        <div className="page-card">
          <p>Article not found.</p>
          <Link to="/" className="back-link">← Back home</Link>
        </div>
      </main>
    )
  }

  return (
    <StaticPage title={article.title} date={article.date}>
      {article.content}
    </StaticPage>
  )
}

export default Article
