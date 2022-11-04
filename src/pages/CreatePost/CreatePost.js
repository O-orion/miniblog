import React from 'react'

import { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

// Import CSS
import styles  from './CreatePost.module.css'


const CreatePost = () => {

  const [ title, setTitle ] = useState("");
  const [ img, setImg ] = useState("");
  const [ body, setBody ] = useState("");
  const [ tags, setTags ] = useState("");
  const [ formError, setFormError ] = useState("");

  
  const { user } = useAuthValue()

  const { insertDocument, response } = useInsertDocument("posts");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("")

    // Validar URL da iamgem
    try {
      new URL(img)
    } catch (error) {
      setFormError("Insira a URL da imagem, por gentileza!");
    }

    // Cria array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase())

    // Criar as validações

    // Verificando se os campos estão preenchidos
    if(!title || !img || !tagsArray || !body){
      setFormError("Por favor, preencha todos os campos!")
    }

    if(formError){
      return
    }

    insertDocument({
      title,
      img,
      body,
      tags: tagsArray,
      user: user.uid,
      createdBy: user.displayName
    })

    navigate("/home")
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


        {!response.loading && <button className='btn'>Salvar Post</button>}
        {response.loading && (
          <button className='btn' disabled >Aguarde...</button>
        )}
        {response.error && <p className='error'>{response.error}</p>} 
        {formError && <p className='error'>{formError}</p>} 

      </form>
    </div>
  )
}

export default CreatePost