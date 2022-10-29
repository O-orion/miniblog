import React from 'react'
import { useState, useEffect } from 'react'

//CSS
import styles from './register.module.css'

const Register = () => {

    const [ displayName, setDisplayName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] =  useState("");
    const [ confirmSenha, setConfirmSenha ] = useState("");
    const [ error, setError ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("")

        const user =  {
            displayName,
            email,
            senha
        }

        // validação da senha
        if( senha !== confirmSenha ){
            setError("Por gentileza. As senhas precisam ser iguais")
            return
        }


        console.log(user)
    }

  return (
    <div className={styles.register}>

        <h1>Cadastre-se, poste!</h1>
        <p>Crie sua conta, compartilhe histórias!</p>

        <form onSubmit={handleSubmit}>

            <label htmlFor="displayName">
                <span>Nome: </span>
                <input 
                  type="text" 
                  placeholder='Por-favor, nós informe seu nome :)' 
                  required name='displayName' 
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                 />
            </label>

            <label htmlFor="displayEmail">
                <span>Email: </span>
                <input type="email"
                   placeholder='Por-favor, nós informe seu e-mail :)'
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

            <label htmlFor="displaySenhaConfirm">
                <span>Confirmação de Senha: </span>
                <input 
                  type="password"
                  placeholder='Por-favor, confirme sua senha !' 
                  required 
                  name='displaySenhaConfirm' 
                  value={confirmSenha}
                  onChange={(e) => setConfirmSenha(e.target.value)}
                />
            </label>

            <button type='submit' className='btn'>Criar novo Usuário!</button>
            {
                error && <p className='error'>{error}</p>
            }
        </form>
    </div>
  )
}

export default Register