import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { auth } from '../fireBase';


const authContext = createContext();
export const useAuth = () => useContext(authContext);

// reducer

const initialState = {
    user: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER':
            return { ...state, user: action.payload }
        default:
            return state;
    }
}

const AuthContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    //GOOGLE
    const googleProvider = new GoogleAuthProvider();
    //GOOGLE
    function logIn(email, pasword) {
        return signInWithEmailAndPassword(auth, email, pasword)
    }


    function register(email, pasword) {
        return createUserWithEmailAndPassword(auth, email, pasword)
    }


    async function signInWithGoogle() {
        try {
            return await signInWithPopup(auth, googleProvider)
        } catch (error) {
            alert(error.message);
        }
    }

    function getUser() {
        return onAuthStateChanged(auth, (user) => {
            dispatch({ type: 'GET_USER', payload: user })
        });
    }

    useEffect(() => {
        getUser()
    }, [])

    function loOutUser() {
        return signOut(auth)
    }

    const values = {
        register,
        signInWithGoogle,
        user: state.user,
        loOutUser,
        logIn,
    };

    console.log(state.user, 'love');


    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContext