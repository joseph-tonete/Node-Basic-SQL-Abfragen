import { useState } from 'react'
import Header from './components/Header'
import Login from './components/Login'


function App() {
  
  const [isLogged, setIsLogged] = useState(false)
  const [name, setName] = useState(null)
  const [modalLogin, setModalLogin] = useState(false)

  return (
    <>
    <Header 
    isLogged={isLogged} 
    setIsLogged={setIsLogged} 
    name={name} 
    setModalLogin={setModalLogin}
    />
    {modalLogin && 
    <Login 
    setModalLogin={setModalLogin} 
    setName={setName} 
    isLogged={isLogged}
    setIsLogged={setIsLogged}
    />}
    </>    
  )
}

export default App
