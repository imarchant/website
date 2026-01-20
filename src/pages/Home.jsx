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
            I am a scientist, writer, speaker, and occasional thinker. I mostly 
            discuss ideas at the pub, but was told I should write them down. 
            Below is a collection of my works proper and works more recently thought up.
          </p>
        </section>

        <section className="thoughts">
          <h2>Thoughts</h2>
          <p className="section-intro">
            Essays, notes, and explorations on topics I find interesting.
          </p>
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
              <a href="#">Academic Writings</a>
            </li>
            <li>
              <a href="#">Reading List</a>
            </li>
          </ul>
        </section>

      </div>
    </main>
  )
}

export default Home
