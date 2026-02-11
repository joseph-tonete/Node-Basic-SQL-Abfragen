import logo from '/logo.png'

function Header({isLogged, setIsLogged, name, setModalLogin}){

    const handleLogout = () => {
        setIsLogged(false)
    }

    return (
        <div className="w-full h-32 bg-red-800 flex flex-row justify-center px-10">
            <div className='max-w-305.75 w-full flex flex-row items-center'>
                <div className='grow w-full flex flex-row justify-start'>
                    {isLogged && <p className='font-serif text-white text-2xl'>Bem vindo,<br />{name}</p>}
                </div>
                <div className='grow w-full'>
                    <img 
                    className='w-98 h-18'
                    src={logo} alt="Logo"/>
                </div>
                <div className='grow w-full flex flex-row justify-end'>
                    <button 
                    className='bg-white rounded-full text-2xl font-mono w-46 h-12 cursor-pointer'
                    onClick={() => isLogged ? handleLogout() : setModalLogin(true)}>
                        {isLogged ? "Sair" : "Login"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header