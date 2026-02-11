
function BodyButton({onclick, children}){
    return (
        <button className="px-8 py-1 font-mono rounded-full border-red-800 border-3 text-[24px] cursor-pointer" onClick={onclick}>{children}</button>
    )
}

export default BodyButton