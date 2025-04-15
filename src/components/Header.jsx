import { useState } from 'react'
import './Header.css'

function Header({ chamarNivel, setChamarNivel }) {

  return (
    <div className='container__header'>

        <h1>🎲Jogo de Dado🎲</h1>

        <select 
          name="nivelJogo" 
          id="nivelJogo"
          className='header__nivel--jogo'
          value={chamarNivel}
          onChange={(e) => setChamarNivel(e.target.value)}
        >
          <option value="">Selecione um nível</option>
          <option value="1">Nível 1</option>
          <option value="2">Nível 2</option>
          <option value="3">Nível 3</option>

        </select>
      
    </div>
  )
}

export default Header
