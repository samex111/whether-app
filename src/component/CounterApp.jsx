import { useState } from "react";

export default function CounterApp(){
    const [count,setcount] = useState(0);
    function handleClick(){
        setcount(count+1);
    }
    return(
       <> <button onClick={handleClick}>Counter {count}</button>
       <button onClick={handleClick}>Counter {count}</button>
      
</>
    )
}