import { NavLink } from "react-router-dom";
import img from '../img/icon-w.png';

function Header() {
  return (
    <header>
    <div className='flex'>
    <div className='title'>
        <figure><img src={img} alt="" className="RaMIcon" /></figure>
    </div>
    <nav>
        <ul>
        <li>
          <NavLink 
           to ='/' >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='*'>
            Support us
          </NavLink>
        </li>
        </ul>
    </nav>    
    </div>
    </header>
  )
}

export default Header;