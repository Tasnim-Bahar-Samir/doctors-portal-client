import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/Firebase.config';


export const authProvider = createContext();


const auth = getAuth(app)
const Authcontext = ({children}) => {
    const [user,setUser] = useState();
    const [loading, setLoading] = useState(true)
    
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userLogout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        if(currentUser){
            setUser(currentUser)
            setLoading(false)
        }
      })
    
      return () => {
        unsubscribe()
      }
    }, [])
    

    const userInfo = {user,loading,createUser,userLogin,userLogout}
  return (
    <authProvider.Provider value={userInfo}>
        {children}
    </authProvider.Provider>
  )
}

export default Authcontext