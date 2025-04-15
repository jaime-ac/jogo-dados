import './NivelUmJogo.css'
import { GiInvertedDice1 } from "react-icons/gi";
import { GiInvertedDice2 } from "react-icons/gi";
import { GiInvertedDice3 } from "react-icons/gi";
import { GiInvertedDice4 } from "react-icons/gi";
import { GiInvertedDice5 } from "react-icons/gi";
import { GiInvertedDice6 } from "react-icons/gi";
import ImagemDado from './ImagemDado';
import { useState } from 'react'

function NivelUmJogo() {

    const [dado, setDado] = useState(<ImagemDado imagem='./dado-inicio.png'/>);
    const [tentativas, setTentativas] = useState(3);
    const [total, setTotal] = useState(<ImagemDado imagem='./frase-inicio.png'/>);
    const [pontos, setPontos] = useState(0);
    const [resultado, setResultado] =useState('[...]');
    const [regras, setRegras] = useState(false);

    const [listaDados, setListaDados] = useState([
        <GiInvertedDice1 />, 
        <GiInvertedDice2 />,
        <GiInvertedDice3 />, 
        <GiInvertedDice4 />, 
        <GiInvertedDice5 />, 
        <GiInvertedDice6 />
    ]);

    function rolarDado(){

        
        let num_tentativas = tentativas
        let meta = pontos

        if (num_tentativas > 0 && meta < 20) {
            
            let resultado = Math.floor(Math.random() * listaDados.length)
    
            setDado(listaDados[resultado])
            
            if(resultado === 0 || resultado === 2 || resultado === 4){

                meta = (meta + resultado + 1)
                num_tentativas = num_tentativas + 1

            }else{

                meta = (meta + resultado + 1)

                if(num_tentativas >= 2){
                    num_tentativas = num_tentativas -2
                }else{
                    num_tentativas = num_tentativas - 1
                }

            }

        }else{

            if(meta >= 20){
                setTotal(<ImagemDado imagem='./meta-batida.png'/>)
                setResultado('[GANHOU🏆]')
            }else{
                setTotal(<ImagemDado imagem='./derrota.png'/>)
                setResultado('[PERDEU😭]')
            }

        };

        setTentativas(num_tentativas);
        setPontos(meta);

    }

  return (

        <div className='container__nivel--um'>

            <div className="main__top">

                <div className="main__top--regras">
                    <button className="main__top--regras__botao" onClick={() => setRegras(true)}>Regras📃</button>
                </div>

                <div className="main__top--card__dado">
                    <div className="main__top--card__dado--imagem">
                        {dado}
                    </div>
                </div>
                
            </div>

            <div className="main__center">

                <button className="main__center--botao__jogar" onClick={rolarDado}>Rolar</button>

            </div>

            <div className="main__bottom">

                <div className="main__bottom--tentativas">
                    <label htmlFor="" className='numero__tentativas'>Meta: 20 pontos</label>
                    <label htmlFor="" className='numero__tentativas'>Tentativas: {tentativas}</label>
                </div>

                <div className="main__bottom--total">

                    <div className="main__bottom--total__pontos">
                        {total}
                    </div>

                    <label htmlFor="" className="main__bottom--mensagem">Pontos somados: {pontos}</label>
                    <label htmlFor="" className="main__bottom--mensagem">Resultado: {resultado}</label>


                </div>

            </div>

            <dialog open={regras}>

                <div className="dialog__container--regras">
                    <div className="dialog__container--botao">
                        <button className="dialog__container__botao__fechar" onClick={() => setRegras(false)}>❌</button>
                    </div>
                    <div className="dialog__container--regras__texto">
                        <h3>REGRAS BÁSICAS</h3>
                        <label htmlFor="" className="dialog__container--regras__texto--jogo">📃Números pares: ➖2️⃣tentativas;</label>
                        <label htmlFor="" className="dialog__container--regras__texto--jogo">📃Números ímpares: ➕1️⃣tentativas;</label>

                    </div>
                </div>

            </dialog>

        </div>
      
  )
}

export default NivelUmJogo
