import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import Container from '../Container/Container';
import Logo from '../../Assets/open-book.png'

const Navigation = () => {
  return (
    <Container>
      <header className={styles.mainHeader}>
          <div className={styles.mainHeaderWrapper}>
  
            <div className={styles.logoWrapper}>
                <NavLink to='/'>
                  <img
                    src={Logo}
                    width="60"
                    alt="Logo"
                  />

                </NavLink>
            </div>
  
            <input className={styles.sideMenu} type="checkbox" id="side-menu"/>
            <label className={styles.hamb} htmlFor="side-menu">
            <span className={styles.hambLine}></span>
            </label>

            <nav className={styles.mainNavigation}>
              <ul className={styles.mainMenu}>
                <li className={styles.menuItem}>
                  <NavLink to='/'>Apie mus</NavLink>
                </li>
                <li className={styles.menuItem}>
                  <NavLink to="/books">Knygos</NavLink>
                </li>
                <li className={styles.menuItem}>
                  <NavLink to="/categories">Žanrai</NavLink>
                </li>
                <li className={styles.menuItem}>
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