import { useState } from 'react';
import './NivelTresJogo.css'
import ImagemDado from './ImagemDado';
import { GiInvertedDice1 } from "react-icons/gi";
import { GiInvertedDice2 } from "react-icons/gi";
import { GiInvertedDice3 } from "react-icons/gi";
import { GiInvertedDice4 } from "react-icons/gi";
import { GiInvertedDice5 } from "react-icons/gi";
import { GiInvertedDice6 } from "react-icons/gi";

function NivelTresJogo() {
  const [regrasTres, setRegrasTres] = useState(false);

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
  const [dadoTres, setDadoTres] = useState(<ImagemDado imagem='./dado-inicio.png'/>);

  function rolarDadoTres(){

    let dado1 = Math.floor(Math.random() * listaDados.length)
    setDadoUm(listaDados[dado1])

    let dado2 = Math.floor(Math.random() * listaDados.length)
    setDadoDois(listaDados[dado2])

    let dado3 = Math.floor(Math.random() * listaDados.length)
    setDadoTres(listaDados[dado3])

  }
  return (
    <div className='container__nivel--tres'>

      <div className="nivel__tres--top">

        <div className="nivel__tres--regras">
            <button className="nivel__tres--regras__botao" onClick={() => setRegrasTres(true)}>Regras📃</button>
        </div>

        <div className="nivel__tres--card">

          <div className="card__dado--tres">{dadoUm}</div>
          <div className="card__dado--tres">{dadoDois}</div>
          <div className="card__dado--tres">{dadoTres}</div>

        </div>

      </div>

      <div className="nivel__tres--center">

        <button className="nivel__tres--botao__jogar" onClick={rolarDadoTres}>Rolar</button>

      </div>

      <div className="nivel__tres--bottom">

        <div className="nivel__tres--meta__tentativas">

          <label htmlFor="" className="nivel__tres--meta__tentativas--textos">Meta: 100 Pontos</label>
          <label htmlFor="" className="nivel__tres--meta__tentativas--textos">Tentativas: 3</label>

        </div>

        <div className="nivel__tres--card__resultado">

          <div className="nivel__tres--card__resultado--imagem">

          </div>

        </div>

        <div className="nivel__tres--pontos__situacao">

          <label htmlFor="" className="nivel__tres--meta__tentativas--textos">Pontos somados: </label>
          <label htmlFor="" className="nivel__tres--meta__tentativas--textos">Situação: </label>

        </div>

      </div>

      <dialog open={regrasTres}>

        <div className="dialog__container--regras">
            <div className="dialog__container--botao">
                <button className="dialog__container__botao__fechar" onClick={() => setRegrasTres(false)}>❌</button>
            </div>
            <div className="dialog__container--regras__texto">
                <h3>REGRAS BÁSICAS</h3>
                <label htmlFor="" className="dialog__container--regras__texto--jogo">📃Números pares: ➖2️⃣tentativas;</label>
                <label htmlFor="" className="dialog__container--regras__texto--jogo">📃Números pares: ➖2️⃣tentativas;</label>
                <label htmlFor="" className="dialog__container--regras__texto--jogo">📃Números ímpares: ➕1️⃣tentativas;</label>
                <label htmlFor="" className="dialog__container--regras__texto--jogo">📃Números ímpares: ➕1️⃣tentativas;</label>

            </div>
        </div>

      </dialog>
      
    </div>
  )
}

export default NivelTresJogo
