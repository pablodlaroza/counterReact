import { useCallback, useState } from "react";
import ShowIncrementApp from "./ShowIncrementApp";

const UseCallBackApp = ()=>{


    const [counter, setCounter] = useState(10);

     const incrementFather = useCallback(
        ()=>{
            setCounter((c)=> c+1)

        },
        [],
    )    

    
    return(
        <>
            <h1>Callback Hook {counter}</h1>
            <ShowIncrementApp increment={incrementFather}/>
        </>
    )
}
export default UseCallBackApp