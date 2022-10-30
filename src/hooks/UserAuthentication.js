// JESUS CRISTO É O SENHOR !!!
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import  { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    // Cleanup -> não podemos deixar resquicios de funções, limpar memória
    // deal with memory leak
    const [ cancelled, setCancelled ] = useState(false)

    const auth = getAuth();

    // função para limpar a memória, memória leaker
    function checkIfIsCancelled() {
        if(cancelled) {
            return;
        }
    }

    // Register
    const createUser = async (data) => {

        checkIfIsCancelled() // evitando vazamento de memória

        setLoading(true) // setando o loading enquanto o usuário é cadastrado!
        setError(null)

        try {
            
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.senha
            ) // vai gera um usuário do firebase

            // Para adicionar nome ao usuário precisamos chama a função de update
            await updateProfile(user, {displayName: data.displayName})

            
            // Desligando o loading
            setLoading(false);

            return user;

        } catch (error) {

            let mensagemDeErro;

            if(error.message.includes("Password")){
                mensagemDeErro = "Por gentileza, insira uma senha com no mínimo 6 caracteres!"
            }else if (error.message.includes("email-already")){
                mensagemDeErro = "Email já cadastrado!"
            }else {
                mensagemDeErro = "Ocorreu um erro, por favor tente mais tarde!"
            }


            setError(mensagemDeErro)
        }


        // Desligando o loading
        setLoading(false);

    }

    // Logout - sign out
    const logout = () => {
        checkIfIsCancelled()
        signOut(auth);
    }

    // Login - Sign in
    const login = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(false);

        let messagemErro;
        try {
            await signInWithEmailAndPassword(auth, data.email, data.senha)
        } catch (error) {
            if(error.message.includes("user-not-found")){
                messagemErro = "Seu email ou senha está incorreto";
            }else if(error.message.includes("wrong-password")){
                messagemErro = "Seu email ou senha está incorreto"
            }else {
                messagemErro = "Ocorreu um erro, por-favor tentenovamente mais tarde!"
            }

            setError(messagemErro);
            setLoading(false);
        }

    }

    // Executando apenas uma vez, para setar o cancelamento como true
    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }

}



