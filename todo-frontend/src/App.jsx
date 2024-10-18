import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderConponent from './components/HeaderConponent'
import FooterComponent from './components/FooterComponent'
import ListTodoComponent from './components/ListTodoComponent'
import TodoComponent from './components/TodoComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <HeaderConponent />
          <Routes>
              <Route path='/' element = { <ListTodoComponent /> }></Route>
              <Route path='/todos' element = { <ListTodoComponent /> }></Route>
              <Route path='/add-todo' element = { <TodoComponent /> }></Route>
              <Route path='/update-todo/:id' element = { <TodoComponent /> }></Route>
          </Routes>
          
        <FooterComponent />
    </BrowserRouter>
    </>
  )
}

export default App
