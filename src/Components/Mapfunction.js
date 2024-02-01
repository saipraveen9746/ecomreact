import React from 'react'

const Mapfunction = () => {
    const Product =[
        {id:1,name:'product A',price:20},
        {id:2,name:'product B',price:10},
        {id:3,name:'product C',price:200},
        {id:4,name:'product D',price:205},
    ];
    const ProductComponents = Product.map((Product) =>(
        <div key={Product.id}>
            <h3>{Product.name}</h3> 
            <p>${Product.price}</p> 
            </div>
    ))


  return (
    <div>
        <h1>Product list</h1>
        {ProductComponents}
    </div>
  )
}

export default Mapfunction