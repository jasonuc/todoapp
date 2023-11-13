import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getTasks } from "../firebase/firestore";

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {

    const [userData, setUserData] = useState({})

    useEffect(() => {
        let unsubscribeTasks = null;

        onAuthStateChanged(auth, (user) => {
            if (unsubscribeTasks) {
                // Unsubscribe from previous tasks listener
                unsubscribeTasks();
            }

            if (user) {
                unsubscribeTasks = getTasks(user.uid, (tasks) => {
                    setUserData({
                        user: user,
                        uid: user.uid,
                        isAnonymous: user.isAnonymous,
                        tasks: tasks
                    });
                });
            } else {
                setUserData({});
            }
        });

        return () => {
            if (unsubscribeTasks) {
                unsubscribeTasks();
            }
        };
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}