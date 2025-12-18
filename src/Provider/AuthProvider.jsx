import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [roleLoading, setRoleLoading]=useState(true)
    const [role, setRole] = useState('')
    const [userStatus, setUserStatus]=useState('')

    const registerWithEmailPassword = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass);
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const logOut = () => {
        return signOut(auth)
    }


        //user roll find
    useEffect(() => {
        if (!user) return;
        axios.get(`https://blood-web-server.vercel.app/users/role/${user.email}`)
            .then(res => {
                setRole(res.data.role)
                            setUserStatus(res.data.status)
                setRoleLoading(false)
            })
    }, [user])


    const authData = {
        registerWithEmailPassword,
        signInUser,
        setUser,
        user,
        setRole,
        role,
        handleGoogleSignIn,
        loading,
        roleLoading,
        userStatus,
        logOut
    };

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
