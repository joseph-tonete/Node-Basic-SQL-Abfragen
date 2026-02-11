
import loading_gif from '/loading_gif.gif' 

function BodyButton({onclick, children, isLoading = false}){
    return (
        <>
        {isLoading ?
        <button 
        className="px-8 py-1 font-mono rounded-full border-gray-600 border-3 text-[24px] cursor-pointer flex flex-row justify-center items-center text-gray-400" >
            <img src={loading_gif} 
            className='h-7 absolute invert brightness-75' 
            />
            {children}
        </button>
        :
        <button 
        className="px-8 py-1 font-mono rounded-full border-red-800 border-3 text-[24px] cursor-pointer flex flex-row justify-center items-center" 
        onClick={onclick}>
            {children}
        </button>
        }
        </>
    )
}

export default BodyButton