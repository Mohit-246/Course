import { useState } from "react";

function FourthComponent(){
    const [count, setcount]=useState(0)
    return(
        <>

        {/* The above one are called state variable
        To Increment count */}
        <div>
            <p>{count}</p>
            <button onClick={()=> setcount((prev)=> prev+1)}>Increment</button>
        </div>
        
        
        
        </>
    )
}
export default FourthComponent;