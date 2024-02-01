import React from 'react'

const ReactMap = () => {
    const numbers = [1,2,3,4,5];

    const numberlist =numbers.map((number) =>(
        <li key={number}>Number : {number}</li>
    ));
  return (
    <div>
        <h1>List of numbers</h1>
        <u1>{numberlist}</u1>
    </div>
  )
}
export default ReactMap

