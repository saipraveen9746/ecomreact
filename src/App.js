import React, { useEffect } from 'react'
import Counter from './Components/Counter'
import Signup from './Components/Signup/SignUp'
// import Login from './Components/Login/Login'
import BasicReact from './Components/BasicReact'
import ClassForm from './Components/ClassForm'
import Home from './Components/Home'



import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import ColorSchemesExample from './Components/RBootstrap'
import UseEffect from './Components/fetchapi'
import BasicExample from './Components/Rbreactform'
import Tailwindcss from './Components/Tailwindcss'
import ReactMap from './Components/ReactMap'
import Mapfunction from './Components/Mapfunction'



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/d"  Component={useEffect}/>
          <Route path="/signup" exact Component={Signup}/>
          <Route path="/base"  Component={BasicReact}/>
          <Route path="/counter"  Component={Counter}/>
          <Route path="/class_form"  Component={ClassForm}/>
          <Route path="/c"  Component={Counter}/>
          <Route path="/Rb"  Component={ColorSchemesExample}/>
          <Route path="/R"  Component={UseEffect}/>
          <Route path="/Form"  Component={BasicExample}/>
          <Route path="/Tail"  Component={Tailwindcss}/>
          <Route path='/map' Component={ReactMap}/>
          <Route path='/map2' Component={Mapfunction}/>


          

          
          
          
          
          
        </Routes>
      </Router>

    </div>

  )
}

export default App


