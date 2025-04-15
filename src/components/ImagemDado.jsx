import './ImagemDado.css'

function ImagemDado({ imagem }) {
  return (
    <div className='container__imagem'>

        <img src={imagem} alt="" className='imagem__dado--card'/>
      
    </div>
  )
}

export default ImagemDado
