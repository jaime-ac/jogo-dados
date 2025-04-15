
import './Main.css'
import NivelDoisJogo from './NivelDoisJogo'
import NivelTresJogo from './NivelTresJogo'
import NivelUmJogo from './NivelUmJogo'

function Main({ chamarNivel }) { 

  return (

    <div className='container__main'>    
        {chamarNivel === '1' && <NivelUmJogo />}
        {chamarNivel === '2' && <NivelDoisJogo />}
        {chamarNivel === '3' && <NivelTresJogo />}
    </div>
  
  )
}

export default Main
