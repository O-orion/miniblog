import React from 'react'

import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

// Import CSS
import styles  from './CreatePost.module.css'

const CreatePost = () => {

  const [ title, setTitle ] = useState("");
  const [ img, setImg ] = useState("");
  const [ body, setBody ] = useState("");
  const [ tags, setTags ] = useState("");
  const [ formError, setFormError ] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.create_post}>

      <h2>Crie seu Post</h2>
      <p>Escreva e compartilhe sua história</p>

      <form onSubmit={ handleSubmit }>

        <label htmlFor="">
          <span>Título:</span>
          <input
           type="text" 
           name='title' 
           required 
           placeholder='Título da sua história'
           onChange={ (e) => setTitle(e.target.value)}
           value={title}
            />
        </label>

        <label htmlFor="">
          <span>url da imagem:</span>
          <input
           type="text" 
           name='imagem' 
           required 
           placeholder='Insira uma imagem que represente sua história'
           onChange={ (e) => setImg(e.target.value)}
           value={img}
            />
        </label>

        
        <label htmlFor="">
          <span>Conteúdo:</span>
          <textarea 
          name='body'
          required
          placeholder='Insira o conteúdo do post'
          onChange={ (e) => setBody(e.target.value)}
          value={body}
          ></textarea>
        </label>

        
        <label htmlFor="">
          <span>Tags:</span>
          <input
           type="text" 
           name='tags' 
           required 
           placeholder='Insira as tags separadas por vírgula'
           onChange={ (e) => setTags(e.target.value) }
           value={ tags }
            />
        </label>
        <button className='btn'>Salvar Post</button>

        {/*{!loading && <button className='btn'>Salvar Post</button>}
        {loading && (
          <button className='btn' disabled >Aguarde...</button>
        )}
        {formError && <p className='error'>{formError}</p>} */}

      </form>
    </div>
  )
}

export default CreatePost