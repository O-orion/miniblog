import React from 'react'
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/UserAuthentication';

// CSS
import styles from './Login.module.css'

const Login = () => {

  const [ email, setEmail ] = useState("");
  const [ senha, setSenha ] =  useState("");
  const [ error, setError ] = useState("")

  // Importando nosso hook
  const { login, error: authError,  loading } = useAuthentication();

  const handleSubmit = async (e) => {
      e.preventDefault();

      setError("")

      const user =  {
          email,
          senha
      }


      const res = await login(user)
      // console.log(res)
  }

  // verificando se existe error
  useEffect(() => {

      if(authError){
          setError(authError)
      }

  }, [authError]) // verificando se ocorreu alguma alteração no valor de authError;


  return (
    <div className={styles.login}>
        <h1>Faça seu login</h1>
        <p>Faça seu login e compartilhe suas histórias!</p>

        <form onSubmit={handleSubmit}>

            <label htmlFor="displayEmail">
                <span>Email: </span>
                <input type="email"
                   placeholder='Por-favor, insira seu email :)'
                   required 
                   name='displayEmail' 
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                  />
            </label>

            <label htmlFor="displaySenha">
                <span>Senha: </span>
                <input 
                 type="password" 
                 placeholder='Por-favor, insira sua senha !' 
                 required 
                 name='displaySenha' 
                 value={senha}
                 onChange={(e) => setSenha(e.target.value)}
                />
            </label>


            { !loading && <button type='submit' className='btn'>Entrar!</button>}
            {loading && <button className='btn' disabled>Aguarde...</button>}
            
            {
                error && <p className='error'>{error}</p>
            }
        </form>
    </div>
  )
}

export default Login