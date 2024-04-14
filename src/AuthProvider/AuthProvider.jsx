import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/Firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updatYourProfile = (name, photo)=>{
        // setLoading(true);
        updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }

    const logOut = ()=>{
        setLoading(true);
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currenUser =>{
            setLoading(false);
            setUser(currenUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])


    
    const authInfo = {
        user,
        createUser,
        signInUser,
        updatYourProfile,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;