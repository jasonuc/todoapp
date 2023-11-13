import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getTasks } from "../firebase/firestore";

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {

    const [ userData, setUserData ] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUserData({
                user: user,
                uid: user.uid,
                isAnonymous: user.isAnonymous,
                tasks: getTasks(user.uid)
            })
        })
    }, [])

    return (
        <AuthContext.Provider value={userData}>
            { children }
        </AuthContext.Provider>
    )

}