
import { createContext, useContext, useState } from "react";


//1: Create a Context

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


// Share the created contect with other components

export default function AuthProvider({children}){

    // Put some state in the context

    const [number, setNumber] = useState(10)

    const [isAuthenticated, setAuthenticated] = useState(false)

    // setInterval( () => setNumber(number + 1), 10000)

    // const valueToBeShared = {number, isAuthenticated, setAuthenticated}

    return(
        // shorthand method of creating an object & passing it as variable in JS
        <AuthContext.Provider value={{number, isAuthenticated, setAuthenticated}}> 
            {children}
        </AuthContext.Provider>
    )
}