import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        // exact
        to="/"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Home-Головна
      </NavLink>
      <NavLink
        to="/authors"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Movies-Автори
      </NavLink>
      <NavLink
        to="/books"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Книги
      </NavLink>
    </nav>
  );
};

export default Navigation;

// import { Link } from 'react-router-dom';
// const Navigation = () => {
//   return (
//     <nav>
//       <Link to="/"> Home-Головна </Link>
//       <Link to="/authors"> Movies-Автори </Link>
//       <Link to="/books"> Книги </Link>
//     </nav>
//   );
// };

// export default Navigation;
