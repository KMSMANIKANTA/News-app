import React from 'react'
import Navbar from './Navbar'
import Newsboard from './Newsboard'
import { useState } from 'react'
const App = () => {
  const [category,setCategory]=useState('general')
  return (
    <div>
      <Navbar setCategory={setCategory} category={category}></Navbar>
      <Newsboard category={category}/>
    </div>
  )
}

export default App
