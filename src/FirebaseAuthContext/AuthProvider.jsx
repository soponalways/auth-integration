import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => { 
    const [loading, setLoading ] = useState(true); 
    const [user , setUser] = useState(null); 
    
    // google Auth Provider 
    const googleProvider = new GoogleAuthProvider(); 

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password )
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }; 
    const signInGoogle = () => {
        return signInWithPopup(auth , googleProvider); 
    }
    
    const signOutUser  = () => {
        setLoading(true)
        return signOut(auth)
    }
    const userInfo = {
        // email: 'soponislam132s@gmail.com'
        user,
        loading,
        createUser, 
        signInUser, 
        signInGoogle,
        signOutUser, 
    }

    // onAuthStateChanged(auth, currentUser => {
    //     if(currentUser) {
    //         console.log('has an current user', currentUser)
    //     } else {
    //         console.log(currentUser)
    //     }
    // })

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log("inside useEffect the on auth state change " ,currentUser)
            setLoading(false); 
            setUser(currentUser)
        }); 
        return () => {
            unSubscribe(); 
        }
    }, [])
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;