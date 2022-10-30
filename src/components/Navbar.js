import React from 'react'
import { NavLink } from 'react-router-dom';
// Import custom hooks e contexts
import { useAuthentication } from '../hooks/UserAuthentication';
import { useAuthValue } from '../context/AuthContext';

// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {

    const { user } = useAuthValue()
    const { logout } = useAuthentication()
  
  return (
    <nav className={styles.navbar}>
        <NavLink className={styles.brand} to="/" >Mini <span>BLOG</span></NavLink>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/home" className={ ( { isActive } ) => ( isActive ? styles.active : "" ) }>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={ ( { isActive } ) => ( isActive ? styles.active : "" ) }>Sobre</NavLink>
            </li>

            {/* Rotas que não serão exibidas se o usuário naõ estiver logado */}
            {!user &&
                (
                  <>
                    <li>
                        <NavLink  to="/login" className={ ( { isActive } ) => ( isActive ? styles.active : "" ) }>Login</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/register" className={ ( { isActive } ) => ( isActive ? styles.active : "" ) }>Cadastre-se</NavLink>
                    </li>

                 
                 </>
                )
            }

            {/* Rotas que serão exibidas se o usuário estiver logado !! */}
            {
                user && (
                    <>
                        <li>
                            <NavLink to="/dashboard" className={ ( {isActive} ) => ( isActive ? styles.active : "" )} >Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/posts/create"  className={ ( {isActive} ) => ( isActive ? styles.active : "" )}>Posts</NavLink>
                        </li>
                    </>
                )
            }

            {
                user && (
                    <li>
                        <button  onClick={logout}>Sair</button>
                    </li>
                )
            }

        </ul>
    </nav>
  )
}

export default Navbar