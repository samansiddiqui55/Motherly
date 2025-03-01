import React from 'react'
import Chatcomponent from './Components/Chatcomponent'
import './globals.css'

const page = () => {
  return (
   <>

<div className="app-container">
      <header className="header">
        <h1>Motherly</h1>
        <p className="tagline">Mom busy? Don't worry, we got you.</p>
      </header>
      <Chatcomponent />
    </div>
  
  
   </>
  )
}

export default page