import { useEffect, useState } from 'react'
import Header from './components/Header'
import Login from './components/Login'


function App() {
  
  const [isLogged, setIsLogged] = useState(false)
  const [name, setName] = useState(null)
  const [modalLogin, setModalLogin] = useState(false)
  const [token, setToken] = useState(null)

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('token')
    const sessionName = sessionStorage.getItem('name')
    if(sessionToken !== null){
      setToken(sessionToken)
      setName(sessionName)
      setIsLogged(true)
    }
  },[])

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
    setToken={setToken}
    />}
    </>    
  )
}

export default App
