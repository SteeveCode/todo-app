import { useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"

export default function TodoComponent(){
    const {id} = useParams()
    const [description, setDescription] = useState('')
    const authContect = useAuth()
    const username = authContect.username

    useEffect(
        () => retrieveTodos(), []
    )
     
    

    function retrieveTodos(){

        retrieveTodoApi(username, id)
        .then(response => {
            setDescription(response.data.description)
        })
        .catch(error => console.log(error))
    }

    return(
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                Description: {description}
            </div>
        </div>
    )
}