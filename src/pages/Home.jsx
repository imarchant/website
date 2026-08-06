import { Link } from 'react-router-dom'
import { articles } from '../articles'
import './Home.css'

const thoughts = articles.map(({ slug, title }) => ({ slug, title }))

function Home() {
  return (
    <main className="page">
      <div className="page-card">
        <header className="header">
          <h1 className="name">Isaac A. Marchant</h1>
        </header>

        <section className="about">
          <p>
            A personal website to post on and for others to read, if they fancy.
          </p>
        </section>

        <section className="thoughts">
          <h2>Writings</h2>
          <ul className="thoughts-list">
            {thoughts.map((thought) => (
              <li key={thought.slug}>
                <Link to={`/article/${thought.slug}`}>{thought.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="other">
          <h2>Other</h2>
          <ul className="other-list">
            <li>
              <Link to="/reading-list">Reading List</Link>
            </li>
          </ul>
        </section>

      </div>
    </main>
  )
}

export default Home
