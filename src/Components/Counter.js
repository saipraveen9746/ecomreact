import React, {useState} from 'react'

function Count() {
    const [count,SetCount]=useState(0);

    const Increment = () =>{
        SetCount(count +1);
    };

    const Decrement = () => {
        SetCount(count -1);
    };

  return (
    <div>
    <p>count:{count}</p>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </div>
  )
};








export default Count