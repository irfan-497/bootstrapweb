import React , {useState} from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode]= useState('black')
  return (
 <>
 <Navbar mode = {mode}/>
 <About />
 <TextForm heading="Enter the text to analyze"/>
 </>
  )
}

export default App