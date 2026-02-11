import eye_opened from '/eye_opened.png'
import eye_closed from '/eye_closed.png'
import { useState } from 'react'

function LineInput({placeholder, value, onchange, isSecret}) {

    const [showPass, setShowPass] = useState(isSecret ? false : true)

    return (
        <div className="flex flex-row w-full border-b-red-800 border-2 border-l-0 border-r-0 border-t-0">
            <input 
            type={showPass ? "text" : "password"} 
            className="w-full placeholder:text-gray-400 placeholder:italic  font-mono outline-0" 
            placeholder={placeholder}
            value={value}
            onChange={onchange}
            />
            {
                isSecret &&
                <img 
                src={showPass ?  eye_opened : eye_closed} 
                alt="hide/show password"
                className='cursor-pointer'
                onClick={() => {
                    setShowPass(!showPass)
                }}
                />
            }
        </div>
    )
}

export default LineInput