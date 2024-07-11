import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movie from './Movie'
import arr from './movie.json'

function App() {
  

  return (
    <>
    <Movie card={arr}/>
      
    </>
  )
}

export default App