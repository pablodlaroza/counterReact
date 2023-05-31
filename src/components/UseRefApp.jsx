import { useRef } from "react"


const UseRefApp = () => {

    const inputRef = useRef()

    const handleClick =()=>{
        
        console.log(inputRef.current.value)
    }

    return (
        <>
        
        <input
            ref={inputRef}
            type="text"
            placeholder="input ref"
        />
        <button onClick={handleClick}>Enviar</button>
        </>
    )
}

export default UseRefApp