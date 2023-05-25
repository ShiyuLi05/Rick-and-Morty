import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header>
    <div className='flex container'>
    <div className='title'>
        <h1>Rick and Morty</h1>
    </div>
    <nav>
        <ul>
        <li>
          <NavLink 
           to ='/' 
           className={navData => (navData.isActive ? 'active' : '')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
           to ='/about-us' 
           className={navData => (navData.isActive ? 'active' : '')}>
            About us
          </NavLink>
        </li>
        </ul>
    </nav>    
    </div>
    </header>
  )
}

export default Header;