
import { createContext, useContext, useState } from "react";


//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created contect with other components
export default function AuthProvider({children}){

    //3: Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password){
        if(username==='in28ms' && password==='dummy'){
            setAuthenticated(true)
            return true
     
         } else {
            setAuthenticated(false)
            return false
         }
     }

     function logout(){
        setAuthenticated(false)
     }
     

    return(
        // shorthand method of creating an object & passing it as variable in JS
        <AuthContext.Provider value={ {isAuthenticated, login, logout} }> 
            {children}
        </AuthContext.Provider>
    )
}