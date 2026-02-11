
function LineTitle({children, h}){
    return(
        <p className={`text-red-800 font-serif text-${h}`}>{children}</p>
    )
}

export default LineTitle