import { NavLink } from 'react-router-dom';
import './Navigation.css';
import Container from '../Container/Container';
import Logo from '../../Assets/open-book.png'

const Navigation = () => {
  return (
    <Container>
         <header className="main-header">
          <div className="main-header-wrapper">
  
            <div className="logo-wrapper">
                <NavLink to='/'>
                  <img
                    src={Logo}
                    width="60"
                    alt="Logo"
                  />

                </NavLink>
            </div>
  
            <input className="side-menu" type="checkbox" id="side-menu"/>
            <label className="hamb" htmlFor="side-menu">
            <span className="hamb-line"></span>
            </label>

            <nav className="main-navigation">
              <ul className="main-menu">
                <li className="menu-item">
                  <NavLink to='/'>Apie mus</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/books">Knygos</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to="/categories">Žanrai</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to='/authors'>Autoriai</NavLink>
                </li>

              </ul>
            </nav>

          </div>
      </header>
    </Container>
  )
}

export default Navigation;