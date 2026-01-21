import { Link } from 'react-router-dom'
import './Home.css'

const thoughts = [
  { slug: 'on-bertrand-russell', title: 'On Bertrand Russell' },
]

function Home() {
  return (
    <main className="home">
      <div className="container">
        <header className="header">
          <h1 className="name">Isaac A. Marchant</h1>
        </header>

        <section className="about">
          <h2>About me</h2>
          <p>
            I occasionally write things down. Amongst other things, this website is a place to store 
            those writings.
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
              <Link to="/academic-writings">Academic Writings</Link>
            </li>
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
