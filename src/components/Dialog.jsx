import './Dialog.css'

function Dialog() {
    const [regrasDois, setRegrasDois] = useState(true);

  return (
    <div className='container--dialog'>

        <dialog open={regrasDois}>
            <div className="dialog__container--regras">
                <div className="dialog__container--botao">
                    <button className="dialog__container__botao__fechar" onClick={() => setRegrasDois(false)}>❌</button>
                </div>

                <div className="dialog__container--regras__texto--dois">
                    <h5>REGRAS BÁSICAS</h5>

                    <h6>Tentativas</h6>
                    <label htmlFor="" className="dialog__container--regras__texto--jogo">Se a soma dos dois dados for PAR: PERDE 3 tentativas;</label>
                    <label htmlFor="" className="dialog__container--regras__texto--jogo">Se a soma dos dois dados for ÍMPAR: GANHA 2 tentativas;</label>

                    <h6>Bônus</h6>
                    <label htmlFor="" className="dialog__container--regras__texto--jogo">Se os dois dados caírem com o mesmo número, você ganha +5 pontos;</label>
                    <label htmlFor="" className="dialog__container--regras__texto--jogo">Se tirar dois "6", dobra a pontuação da rodada;</label>

                    <h6>Penalidades</h6>
                    <label htmlFor="" className="dialog__container--regras__texto--jogo">Se a soma dos pontos for exatamente 7 na rodada, perde metade dos pontos acumulados.</label>

                </div>
            </div>

        </dialog>
      
    </div>
  )
}

export default Dialog
