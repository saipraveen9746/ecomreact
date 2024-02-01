import React, { useEffect,useState } from 'react'


function UseEffect() {
    const [data,setData]= useState(null);
    useEffect (() =>{
        const fetchData = async () =>{
            try {
                const response = await fetch(

                    'https://jsonplaceholder.typicode.com/posts/1'  );
                const result = await response.json();
                setData(result);
            }catch (error) {
                console.error("error fetching data",error);
            }
        };
        fetchData();
    }, []);

  return (
    <div>
      {data ? <p>Title:{data.title}</p>:<p>loading data....</p>}
    </div>
  );
}
export default UseEffect;