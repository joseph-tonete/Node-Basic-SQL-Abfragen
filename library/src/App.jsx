import { useEffect, useState } from 'react'
import Header from './components/Header'
import Login from './components/Login'
import Search from './components/Search'

function App() {

    const [isLogged, setIsLogged] = useState(false)
    const [name, setName] = useState(null)
    const [modalLogin, setModalLogin] = useState(false)
    const [token, setToken] = useState(null)

    // Roda quando a página carrega
    useEffect(() => {
        const sessionToken = sessionStorage.getItem('token')
        const sessionName = sessionStorage.getItem('name')
        if (sessionToken !== null) {
            setToken(sessionToken)
            setName(sessionName)
            setIsLogged(true)
        }
    }, [])

    return (
        <div className='h-dvh w-full flex flex-col items-center gap-12'>
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
            <Search />
                
        </div>
    )
}

export default App
