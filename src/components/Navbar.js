import React from 'react'
import { NavLink } from 'react-router-dom';

// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink className={styles.brand} to="/" >Mini <span>BLOG</span></NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/home" className={ ( { isActive } ) => ( isActive ? styles.active : "" ) }>Home</NavLink>
            </li>
            <li>
                <NavLink to="/login" className={ ( { isActive } ) => ( isActive ? styles.active : "" ) }>Login</NavLink>
            </li>
            <li>
                <NavLink to="/register" className={ ( { isActive } ) => ( isActive ? styles.active : "" ) }>Cadastre-se</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={ ( { isActive } ) => ( isActive ? styles.active : "" ) }>Sobre</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar