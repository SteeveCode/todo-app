import axios from "axios";


// export function retrieveHelloWorldBean(){

//     return axios.get('http://localhost:8080/hello-world-bean')
// }

const apiClient = axios.create(
    {
    baseURL: 'http://localhost:8080'
}); 

export const retrieveHelloWorldBean = () => apiClient.get('/hello-world-bean')

// Missing Authorization Header Error: No 'Access-Control-Allow-Origin' header is present on the requested resource.

// Despite Having Authorization Header Error: Response to preflight request doesn't pass access control check: No '
export const retrieveHelloWorldPathVariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`, {

    headers:{
        Authorization: 'Basic aW4yOG1zOmR1bW15'
    }
})

