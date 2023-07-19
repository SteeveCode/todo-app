import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import './TodoApp.css'

import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import AuthProvider, { useAuth } from './security/AuthContext'


function AuthenticatedRoute({children}){

    const authContext = useAuth()

    if(authContext.isAuthenticated)
        return children
    
    return <Navigate to="/" />
}

 
export default function TodoApp() {
    return (
        <div className="TodoApp">
 
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent />
                        <Routes>
                            <Route path='/' element={ <LoginComponent /> } />
                            <Route path='/login' element={ <LoginComponent /> } />
                            
                            <Route path='/welcome/:username' element={
                            <AuthenticatedRoute>
                                 <WelcomeComponent />
                            </AuthenticatedRoute>
                            }  />
                            
                            <Route path='/todos' element={
                            <AuthenticatedRoute>
                            <ListTodosComponent /> 
                            </AuthenticatedRoute>
                        } />
                            <Route path='/logout' element={
                            <AuthenticatedRoute>
                            <LogoutComponent /> 
                            </AuthenticatedRoute>
                        } />
                            

                            <Route path='*' element={<ErrorComponent /> }></Route>
                        </Routes>
                </BrowserRouter> 
            </AuthProvider>
            
        </div>
    )
}

