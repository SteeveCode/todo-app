import axios from "axios";
import { apiClient } from "./ApiClient"


// export function retrieveHelloWorldBean(){

//     return axios.get('http://localhost:8080/hello-world-bean')
// }


export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean')

// Missing Authorization Header Error: No 'Access-Control-Allow-Origin' header is present on the requested resource.

// Despite Having Authorization Header Error: Response to preflight request doesn't pass access control check:
export const retrieveHelloWorldPathVariable = (username, token) => apiClient.get(`/hello-world/path-variable/${username}`
// , {

//     headers:{
//         Authorization: token
//     }
// }
)

export const executeBasicAuthenticationService = (token) => apiClient.get(`/basicauth`, {

    headers:{
        Authorization: token
    }
})

