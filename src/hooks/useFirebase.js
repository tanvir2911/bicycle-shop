import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => { })
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
                setAuthError('');
            })
            .finally(() => setLoading(false));

    }

    const signInWithGoogle = (location, history) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setLoading(false));

    }


    // observe whether user auth state changed or not
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            }).catch((error) => { })
            .finally(() => setLoading(false))
    }



    return {
        user,
        loading,
        logOut,
        registerUser,
        loginUser,
        authError,
        signInWithGoogle
    }
}

export default useFirebase;