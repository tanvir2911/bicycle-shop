import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';


initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.replace('/');

            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            })
            .finally(() => { setIsLoading(false); });
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.replace(location?.state?.from || '/');
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)

            })
            .finally(() => { setIsLoading(false); });

    }

    const googleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                history.replace(location?.state?.from || '/');
            }).catch((error) => {

            })
            .finally(() => { setIsLoading(false); });

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logoutUser = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
        })
            .finally(() => { setIsLoading(false); });
    }



    return {
        user,
        registerUser,
        loginUser,
        googleSignIn,
        isLoading,
        logoutUser
    }
}

export default useFirebase;