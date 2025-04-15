import { useState } from 'react';
import './NivelDoisJogo.css'
import { GiInvertedDice1 } from "react-icons/gi";
import { GiInvertedDice2 } from "react-icons/gi";
import { GiInvertedDice3 } from "react-icons/gi";
import { GiInvertedDice4 } from "react-icons/gi";
import { GiInvertedDice5 } from "react-icons/gi";
import { GiInvertedDice6 } from "react-icons/gi";
import ImagemDado from './ImagemDado';

function NivelDoisJogo() {

  const [listaDados, setListaDados] = useState([
    <GiInvertedDice1 />, 
    <GiInvertedDice2 />,
    <GiInvertedDice3 />, 
    <GiInvertedDice4 />, 
    <GiInvertedDice5 />, 
    <GiInvertedDice6 />
  ]);

  const [dadoUm, setDadoUm] = useState(<ImagemDado imagem='./dado-inicio.png'/>);
  const [dadoDois, setDadoDois] = useState(<ImagemDado imagem='./dado-inicio.png'/>);

  const [regrasDois, setRegrasDois] = useState(false);

  function rolarDadoDois(){

    let dado1 = Math.floor(Math.random() * listaDados.length)
    setDadoUm(listaDados[dado1])

    let dado2 = Math.floor(Math.random() * listaDados.length)
    setDadoDois(listaDados[dado2])
    
  }

  return (

    <div className='container__nivel--dois'>

      <div className="nivel__dois--top">

        <div className="nivel__dois--regras">
            <button className="nivel__dois--regras__botao" onClick={() => setRegrasDois(true)}>Regras📃</button>
        </div>

        <div className="nivel__dois--card">

          <div className="card__dado">{dadoUm}</div>
          <div className="card__dado">{dadoDois}</div>

        </div>
        
      </div>

      <div className="nivel__dois--center">

        <button className="nivel__dois--botao__jogar" onClick={rolarDadoDois}>Rolar</button>

      </div>

      <div className="nivel__dois--bottom">

        <div className="nivel__dois--meta__tentativas">

          <label htmlFor="" className="nivel__dois--meta__tentativas--textos">Meta: 50 Pontos</label>
          <label htmlFor="" className="nivel__dois--meta__tentativas--textos">Tentativas: 3</label>

        </div>

        <div className="nivel__dois--card__resultado">

          <div className="nivel__dois--card__resultado--imagem">

          </div>

        </div>

        <div className="nivel__dois--pontos__situacao">

          <label htmlFor="" className="nivel__dois--meta__tentativas--textos">Pontos somados: </label>
          <label htmlFor="" className="nivel__dois--meta__tentativas--textos">Situação: </label>

        </div>

      </div>

      <dialog open={regrasDois}>

        <div className="dialog__container--regras">
            <div className="dialog__container--botao">
                <button className="dialog__container__botao__fechar" onClick={() => setRegrasDois(false)}>❌</button>
            </div>
            <div className="dialog__container--regras__texto">
                <h3>REGRAS BÁSICAS</h3>
                <label htmlFor="" className="dialog__container--regras__texto--jogo">📃Números pares: ➖2️⃣tentativas;</label>
                <label htmlFor="" className="dialog__container--regras__texto--jogo">📃Números ímpares: ➕1️⃣tentativas;</label>
                <label htmlFor="" className="dialog__container--regras__texto--jogo">📃Números ímpares: ➕1️⃣tentativas;</label>

            </div>
        </div>

      </dialog>
      
    </div>
  )
}

export default NivelDoisJogo
