import { memo } from "react"

const ShowIncrementApp = memo(({increment})=>{
    console.log('Me volvi a generar')
    return(
        <>
            <button onClick={increment}>Incrementar</button>
        </>
    )
})
export default ShowIncrementApp