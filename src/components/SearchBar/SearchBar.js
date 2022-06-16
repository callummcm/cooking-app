import { useState } from 'react'
import './SearchBar.css'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {

  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${term}`)
  }

  return (
    <>
      <div className='searchbar'>
        <form onSubmit={handleSubmit}>
          <label>Search:</label>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />
        </form>
      </div>
    </>
  )
}
export default SearchBar