/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [users, setUsers] = useState("");
    const [loading, setLoading] = useState(true);

    //provider
    const googleProvider = new GoogleAuthProvider();

    //sign in method
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signInEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign out method
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //Register
    const createUser = (email, Password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, Password);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUsers(currentUser);
        setLoading(false);
        });
        
        return () => unsubscribe();

    }, [])

    const authInfo = {
        signInWithGoogle,
        users,
        logOut,
        createUser,
        signInEmailPass,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
