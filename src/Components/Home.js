import React from 'react'
import {Link} from 'react-router-dom' 

function Home() {
  return (
    <div>
    <div>Home</div>
    <Link to='/signup'>SignUp</Link><br></br>
    <Link to='/class_form'>Class form example</Link><br></br>
    <Link to="/Counter">Counter</Link><br></br>
    <Link to="/ClassForm">Classform</Link><br></br>
    <Link to="/">Fpl</Link><br></br>
    <Link to = "/Rb">rb</Link><br></br>
    <Link to = "/R">fkapi</Link><br></br>
    <Link to = "/Form">Form</Link><br></br>
    <Link to = "/Tail">llnn</Link><br></br>
    <Link to = "/map">Map</Link><br></br>
    <Link to = "/map2">Map2</Link><br></br>
    
   
    </div>

    
  )
}

export default Home