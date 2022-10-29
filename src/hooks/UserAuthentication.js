// JESUS CRISTO É O SENHOR !!!
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/firebase-auth'
import  { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    // Cleanup -> não podemos deixar resquicios de funções, limpar memória
    // deal with memory leak
    const [ cancelled, setCancelled ] = useState(false)

    const auth = getAuth();

    // função para limpar a memória
    function checkIfIsCancelled() {
        if(cancelled) {
            return;
        }
    }

}



