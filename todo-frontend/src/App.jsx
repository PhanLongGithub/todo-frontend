import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderConponent from './components/HeaderConponent'
import FooterComponent from './components/FooterComponent'
import ListTodoComponent from './components/ListTodoComponent'
import TodoComponent from './components/TodoComponent'
import { isUserLoggedIn } from './service/AuthService'
import LoginComponent from './components/LoginComponent '
import RegisterComponent from './components/RegisterComponent'

function App() {
  const [count, setCount] = useState(0)

  function AuthenticatedRoute({children}){
    const isAuth = isUserLoggedIn();
    if(isAuth) {
      return children;
    }
    return <Navigate to="/" />
  }

  return (
    <>
    <BrowserRouter>
        <HeaderConponent />
          <Routes>
              <Route path='/' element = { <LoginComponent /> }></Route>
              <Route path='/todos' element = { <AuthenticatedRoute><ListTodoComponent /></AuthenticatedRoute> }></Route>
              <Route path='/add-todo' element = { <AuthenticatedRoute><TodoComponent /></AuthenticatedRoute> }></Route>
              <Route path='/update-todo/:id' element = { <AuthenticatedRoute><TodoComponent /></AuthenticatedRoute> }></Route>
              <Route path='/register' element = { <RegisterComponent />}></Route>
              <Route path='/login' element = { <LoginComponent /> }></Route>
          </Routes>
          
        <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
