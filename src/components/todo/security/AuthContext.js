
import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";


//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other components
export default function AuthProvider({children}){

    //3: Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)


    // function login(username, password){
    //     if(username==='in28ms' && password==='dummy'){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
     
    //      } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //      }
    //  }


     
    function login(username, password){

        const baToken = 'Basic ' + window.btoa(username + ":" + password) 

        executeBasicAuthenticationService(baToken)
        .then(response => console.log(response))
        .catch(error => console.log(error))

        setAuthenticated(false)

        // if(username==='in28ms' && password==='dummy'){
        //     setAuthenticated(true)
        //     setUsername(username)
        //     return true
     
        //  } else {
        //     setAuthenticated(false)
        //     setUsername(null)
        //     return false
        //  }
     }


     function logout(){
        setAuthenticated(false)
     }
     

    return(
        // The {{}} is a shorthand method of creating an object & passing it as variable in JS. 
        // AuthContext.Provider makes it possible to expose variables & functions to all other components in the application
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username} }> 
            {children}
        </AuthContext.Provider>
    )
}