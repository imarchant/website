import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
import ReadingList from './pages/ReadingList'
import AcademicWritings from './pages/AcademicWritings'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:slug" element={<Article />} />
      <Route path="/reading-list" element={<ReadingList />} />
      <Route path="/academic-writings" element={<AcademicWritings />} />
    </Routes>
  )
}

export default App
