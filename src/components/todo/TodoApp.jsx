import { useState } from 'react'
import './TodoApp.css'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'


export default function TodoApp() {
    return (
        <div className="TodoApp">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <LoginComponent /> }></Route>
                    <Route path='/login' element={ <LoginComponent /> }></Route>
                    <Route path='/welcome' element={<WelcomeComponent /> }></Route>
                    <Route path='*' element={<ErrorComponent /> }></Route>
                </Routes>
            </BrowserRouter> 
        </div>
    )
}

function LoginComponent() {

   const [username, setUsername] = useState('in28ms')
   const [password, setPassword] = useState('')
   const [showSuccessMessage, setShowSuccessMessage] = useState(false)
   const [showErrorMessage, setShowErrorMessage] = useState(false)
   const navigate = useNavigate()

   function handleUserNameChange(event){

    setUsername(event.target.value)
    
   }

   function handlePasswordChange(event){
    setPassword(event.target.value)
    
   }

   function handleSubmit(){
    if(username==='in28ms' && password==='dummy'){
        console.log("Success")
        setShowSuccessMessage(true)
        setShowErrorMessage(false)
        navigate('/welcome')

    } else {
        console.log("Failed")
        setShowSuccessMessage(false)
        setShowErrorMessage(true)
    }
}

    return (        
        <div className="Login">
            <h1>Time to Login!</h1>
            <div className="LoginForm">
                <div>
                    {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
                    {showErrorMessage && <div className="errorMessage">Authentication Failed. Please check your credentials.</div>}
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent() {
    return (
        <div className="WelcomeComponent">
            <h1>Welcome in28ms</h1>
            Welcome Component
        </div>
    )
}

function ErrorComponent() {
    return (
        <div className="ErrorComponent">
            <h1>We are working really hard!</h1>
            <div>
                Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ.
            </div>
        </div>
    )
}