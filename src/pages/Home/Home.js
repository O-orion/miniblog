import React from 'react'

// Import hooks
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

//CSS
import styles from "./Home.module.css"

const Home = () => {

  const [tag, setTag] = useState("")
  const [query, setQuery ] = useState("");
  const [ posts, setPosts ] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={ styles.home }>
       <h1>JESUS CRISTO É O SENHOR !!!</h1>
       <h2>Histórias compartilhadas recentemente</h2>
       <form className={ styles.search_form } onSubmit={ handleSubmit }>
          <input 
          type="text" 
          placeholder='Ou procure por tags'
          required
          onChange={ ( e ) => setTag( e.target.value ) }
          value={ tag }
          />
          <button className='btn btn-dark'>Pesquisar</button>
        </form>
        <div>
            <h2>Posts...</h2>
            {posts && posts.length === 0 && (
              <div className={styles.noposts}>
                  <p>Nenhuma história foi compartilhada até o momento !!</p>
                  <Link to={"/posts/create"} className="btn">Crie seu post, compartilhe sua história!</Link>
              </div>
            )}
        </div>
    </div>
  )
}

export default Home