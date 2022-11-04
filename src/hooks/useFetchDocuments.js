// Imports firebase
import { db } from  '../firebase/config'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

// import Hooks
import { useState, useEffect } from "react";
import { async } from '@firebase/util';

export const useFetchDocuments = (docCollection, searc=null, uid=null) => {

        const [ documents, setDocuments ] = useState(null);
        const [ loading, setLoading ] = useState(null);
        const [ error, setError ] = useState(null)

        const [ cancelled, setCancelled ] = useState(false)

        useEffect(() => {
            const loadData = async () => {
                if (cancelled) return;
           
                setLoading(true);
           
                const collectionRef = await collection(db, docCollection);
           
                try {
                  let q = await query(
                    collectionRef,
                    orderBy("createdAT", "asc")
                  );
           
                  await onSnapshot(q, (querySnapshot) => {
                    setDocuments(
                      querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data(),
                      }))
                    );
                  });
           
                  setLoading(false);
                } catch (error) {
                  setError(error.message);
                  setLoading(false);
                }
              };
              loadData();
        }, [docCollection, searc, uid, cancelled])


        useEffect(() => {
            return () => setCancelled(true);
        }, [])
    
        return { documents, loading, cancelled }
}


