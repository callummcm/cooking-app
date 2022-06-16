// styles
import './App.css'

// general imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// page components
import Home from './pages/Home/Home'
import Create from './pages/Create/Create'
import Recipe from './pages/Recipe/Recipe'
import Search from './pages/Search/Search'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipes/:id' element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
