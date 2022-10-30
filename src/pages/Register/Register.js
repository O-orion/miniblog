import React from 'react'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/UserAuthentication';
import { db } from '../../firebase/config'

//CSS
import styles from './register.module.css'

const Register = () => {

    const [ displayName, setDisplayName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] =  useState("");
    const [ confirmSenha, setConfirmSenha ] = useState("");
    const [ error, setError ] = useState("")

    // Importando nosso hook
    const { createUser, error: authError,  loading } = useAuthentication();

    const handleSubmit = async (e) => {
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
        
        const res = await  createUser(user)

        // console.log(res)
    }

    // verificando se existe error
    useEffect(() => {

        if(authError){
            setError(authError)
        }

    }, [authError]) // verificando se ocorreu alguma alteração no valor de authError;

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

            { !loading && <button type='submit' className='btn'>Criar novo Usuário!</button>}
            {loading && <button className='btn' disabled>Aguarde...</button>}
            
            {
                error && <p className='error'>{error}</p>
            }
        </form>
    </div>
  )
}

export default Register