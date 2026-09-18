import { useState } from "react"

export default function BaseUseState(){
    const [count,setCount] = useState(18)
    return(
        <>
        <h1>Base Use State</h1>
        Counting : {count}
        <button onClick={ () => setCount(count +1)}>increase</button>
        <button onClick={ () => setCount(0)}>Reset</button>

        </>
    )
}