import { NavLink } from 'react-router-dom'
import './Navbar.css'
import Searchbar from '../SearchBar/SearchBar'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <nav>
          <NavLink to='/' className='navbar-title'><h1>Cooking Ninja</h1></NavLink>
          <Searchbar />
          <NavLink to='/create'>Create Recipe</NavLink>
        </nav>
      </div>
    </>
  )
}
export default Navbar