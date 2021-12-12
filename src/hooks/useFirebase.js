import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';


initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser);

                saveUserToDatabase(email, name, 'POST');

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
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
                console.log(user)
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
                saveUserToDatabase(result.user.email, result.user.displayName, 'PUT');

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
    }, [auth])

    const logoutUser = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        }).catch((error) => {
            // An error happened.
        })
            .finally(() => { setIsLoading(false); });
    }


    const saveUserToDatabase = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://afternoon-plateau-57828.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    useEffect(() => {
        fetch(`https://afternoon-plateau-57828.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])


    return {
        user,
        admin,
        registerUser,
        loginUser,
        googleSignIn,
        isLoading,
        logoutUser
    }
}

export default useFirebase;