import { Link } from 'react-router-dom'
import './Article.css'

function TopicIdeas() {
  return (
    <main className="article">
      <div className="article-container">
        <Link to="/" className="back-link">← Back home</Link>
        
        <header className="article-header">
          <h1>Topic Ideas</h1>
        </header>

        <article className="article-content">
          <p>Some potential future topics.</p>
          
          <ul>
            <li>Why physics is so interesting</li>
            <li>Why economic principles are insufficient</li>
            <li>Why I find traditional folk music so great to listen to</li>
          </ul>
        </article>

        <footer className="article-footer">
          <Link to="/" className="back-link">← Back home</Link>
        </footer>
      </div>
    </main>
  )
}

export default TopicIdeas
