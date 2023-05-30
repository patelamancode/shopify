import {createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [auth, setAuth] = useState(() => {
        const token = localStorage.getItem("token")
        console.log(token)

        if (token) 
            return {token, isAuth: true}

        

        return {token: "", isAuth: false}
    })

    return <AuthContext.Provider value={
        {auth, setAuth}
    }>
        {children} </AuthContext.Provider>;
};
