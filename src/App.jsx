import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Article from './pages/Article'
import ReadingList from './pages/ReadingList'
import AcademicWritings from './pages/AcademicWritings'
import TopicIdeas from './pages/TopicIdeas'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:slug" element={<Article />} />
      <Route path="/reading-list" element={<ReadingList />} />
      <Route path="/academic-writings" element={<AcademicWritings />} />
      <Route path="/topic-ideas" element={<TopicIdeas />} />
    </Routes>
  )
}

export default App
