import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [chamarNivel, setChamarNivel] = useState();
  

  return (
    <>

      <Header chamarNivel={chamarNivel} setChamarNivel={setChamarNivel}/>

      <Main chamarNivel={chamarNivel}/>

    </>
  )
}

export default App
