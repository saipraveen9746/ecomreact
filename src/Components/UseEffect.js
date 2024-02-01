import { useState,useEffect } from "react";
import { ReactDOM } from "react-dom/client";

function Counter(){
    const [count,setCount] = useState(0);
    const [calculation,setCalculation] = useState(0);

    useEffect (()=>{
        setCalculation(count*2);
    },[count]);


    return (
        <>
        <p>Count : {count}</p>
        <button onClick={()=>setCount((c)=> c +1)}>+</button>
        <P>Calculation : {calculation}</P>       
        </>
    );

}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Counter />)