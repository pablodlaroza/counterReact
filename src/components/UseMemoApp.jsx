import { useState } from "react";
import useCounter from "../hooks/useCounter";
import Small from "./SmallApp";

const UseMemoApp = ()=>{
    const { counter, handleIncrement } = useCounter();
    const [show,setShow] = useState(true)

    return(
        <>
        <h1>Counter <Small value={counter}/></h1>
        
        <button onClick={handleIncrement}>+1</button>

        <button onClick={()=> {setShow(!show)}}>Show/Hide {JSON.stringify(show)}</button>
        </>

    )
}

export default UseMemoApp;