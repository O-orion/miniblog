import React from 'react'
import { Link } from 'react-router-dom'
//CSS
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.about}>
        <h2> Sobre mini <span>Blog</span></h2>
        <p>Este projeto consiste em um blog, feito com React no front-end e Firebase  no back-end</p>
        <Link to="/posts/create" className="btn">Crie seu post</Link>
    </div>
  )
}

export default About