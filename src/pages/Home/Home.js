import React from 'react'

// Import hooks
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

//CSS
import styles from "./Home.module.css"

// Import components
import PostDetail from '../../components/PostDetail'

const Home = () => {

  const [tag, setTag] = useState("")
  const { documents: posts, loading } = useFetchDocuments("posts");

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
            { loading && <p>Carregando...</p>}
            {
              posts && posts.map((post) => (
                <PostDetail key={post.id} post={post} />
              ))
            }

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