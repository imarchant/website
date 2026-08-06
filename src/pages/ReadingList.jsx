import StaticPage from '../components/StaticPage'

function ReadingList() {
  return (
    <StaticPage title="Reading List">
      <h3>Recently Read</h3>
      <ul>
        <li>
        <i>Ursula K. Le Guin - The Laithe of Heaven</i>
        </li>
      <t>Great sci-fi novel which looks at dreams, power, and utopia. Brave New World-esque vibes, highly recommend!</t>
      </ul>

      <h3>Currently Reading</h3>
      <ul>
        <li>
          <i>Leo Tolstoy - Anna Karenina</i>
        </li>
        <t>
        Enjoying so far! Levin is a great character.
        </t>
      </ul>
    </StaticPage>
  )
}

export default ReadingList
