// Importação de imagens
import close from '/close.png'

// Importação de componentes
import BodyButton from './BodyButton'
import LineInput from './LineInput'
import LineLabel from './LineLabel'
import LineTitle from './LineTitle'

// Importação de bibliotecas
import { useState, useEffect } from 'react'

function Login({setModalLogin, setName, isLogged, setIsLogged}){

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        if(!isLogged){
            setUsername('')
            setPassword('')
            setName('')
        }
    },[isLogged])

    const handleLogin = async () => {
        if(!username || !password){
            setErrorMessage("Username e password devem ser informados.")
        }

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                
                // 1. Update the state in App.js through the props
                setName(username); 
                setIsLogged(true);
                
                // 2. Close the modal
                setModalLogin(false);
            } else {
                setErrorMessage("Usuário ou senha inválidos.")
            }
        } catch (error) {
            console.error("Erro ao conectar com o servidor", error);
        }
    };

    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 flex flex-col justify-center items-center">
            <div className="bg-white w-lg px-6 py-6 flex flex-col gap-10 rounded-2xl">
                <div className="flex flex-row justify-between items-center">
                    <LineTitle h="[48px]">Login</LineTitle>
                    <img src={close} alt="Fechar" onClick={() => setModalLogin(false)} className='cursor-pointer'/>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <div className="w-full flex flex-col gap-2">
                        <LineLabel>Utilizador:</LineLabel>
                        <LineInput 
                        placeholder="Nome do utilizador" 
                        value={username}
                        onchange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <LineLabel>Senha:</LineLabel>
                        <LineInput 
                        placeholder="Senha do utilizador" 
                        value={password}
                        onchange={(e) => setPassword(e.target.value)}
                        isSecret={true}
                        />
                    </div>
                    <p
                    className='text-red-600 italic'
                    >{errorMessage}</p>
                </div>
                <div className="flex flex-row justify-end">
                    <BodyButton onclick={() => {handleLogin()}}>Login</BodyButton>
                </div>
            </div>
        </div>
    )
}

export default Login