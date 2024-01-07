import { useEffect, useState } from 'react'

function App() {
  useEffect(()=> {
    console.log(import.meta.env.VITE_API_URL)
  })  
  return (
    <>
    <h1> testing</h1>  
    </>
  )
}

export default App
