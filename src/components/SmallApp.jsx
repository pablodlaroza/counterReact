import { memo } from "react";

const Small = memo(({value})=>{


    console.log('Me volvi a pintar');
    return(
        <>
        {value}
        </>

    )
})

export default Small;