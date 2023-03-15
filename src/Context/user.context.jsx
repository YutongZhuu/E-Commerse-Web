import { createContext, useState, useEffect} from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../Utili/firebase.component";

export const UserContext=createContext({
    currentUser: null,
    setcurrentUser: ()=>null
})

export const UserProvider=({children})=>{
    const [currentUser, setcurrentUser]=useState(null)
    const value={currentUser, setcurrentUser}

    useEffect(()=>{
        const undescribe=onAuthStateChangedListener(async (user)=>{
            if(user){
                await createUserDocumentFromAuth(user)
            }
            setcurrentUser(user)
        })

        return undescribe
    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}