// Imports firebase
import { db } from  '../firebase/config'
import { collection, query, orderBy, onSnapshot, where } from 'firebase/firestore';

// import Hooks
import { useState, useEffect } from "react";

export const useFetchDocuments = (docCollection, searc=null, uid=null) => {

        const [ documents, setDocuments ] = useState(null);
        const [ loading, setLoading ] = useState(null);
        const [ error, setError ] = useState(null)

        const [ cancelled, setCancelled ] = useState(null)

        useEffect(() => {
            
            async function loadData() {
                // Memory Leak
                if(cancelled) return;
                
                // Ligando o loading
                setLoading(true)

                //Procurando a referência da collection
                const collectionRef = await collection(db, docCollection);

                try {
                    // Buscando todos os dados
                    let q;
                    q = query(collectionRef, orderBy("createdAt", "desc"));
    
                    // Mapear os dados, sempre que um dados for alterado, ele busca esse dados atualizado para exibirmos
                    await onSnapshot(q , (querySnapshot) => {
                        setDocuments(
                            // 
                            querySnapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data(),
                            }))
    
                        )
                    })
                    
                    setLoading(false)
                } catch (error) {
                    setError(error.message)
                }

            }

            loadData()
        }, [docCollection, searc, uid, cancelled])


        useEffect(() => {
            return () => setCancelled(true);
        }, [])
    
        return { documents, loading, error }
}


