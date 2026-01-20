import { Link } from 'react-router-dom'
import './Article.css'

function ReadingList() {
  return (
    <main className="article">
      <div className="article-container">
        <Link to="/" className="back-link">← Back home</Link>
        
        <header className="article-header">
          <h1>Reading List</h1>
        </header>

        <article className="article-content">
          <p>A collection of books, papers, and articles that have shaped my thinking.</p>
          
          <h3>Currently Reading</h3>
          <ul>
            <li>Coming soon...</li>
          </ul>

          <h3>Favourites</h3>
          <ul>
            <li>Coming soon...</li>
          </ul>

          <h3>Want to Read</h3>
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

export default ReadingList
