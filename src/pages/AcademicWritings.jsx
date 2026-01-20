import { Link } from 'react-router-dom'
import './Article.css'

function AcademicWritings() {
  return (
    <main className="article">
      <div className="article-container">
        <Link to="/" className="back-link">← Back home</Link>
        
        <header className="article-header">
          <h1>Academic Writings</h1>
        </header>

        <article className="article-content">
          <p>Peer-reviewed publications, conference papers, and academic work.</p>
          
          <h3>Publications</h3>
          <ul>
            <li>Coming soon...</li>
          </ul>

          <h3>Conference Papers</h3>
          <ul>
            <li>Coming soon...</li>
          </ul>

          <h3>Other Academic Work</h3>
          <ul>
            <li>Coming soon...</li>
          </ul>
        </article>

        <footer className="article-footer">
          <Link to="/" className="back-link">← Back home</Link>
        </footer>
      </div>
    </main>
  )
}

export default AcademicWritings
