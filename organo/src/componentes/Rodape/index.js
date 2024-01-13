import './Rodape.css'

const Rodape = (props) => {
    return (
        <footer className='rodape'>
            <div className='redes-sociais'>
                <img src="./imagens/fb.png" alt="icone do Facebook"/>
                <img src="./imagens/tw.png" alt="icone do Twitter"/>
                <img src="./imagens/ig.png" alt="icone do Instagram"/>
            </div>
            <img src="./imagens/logo.png" alt="Logo do Organo" />
            <h4>Desenvolvido por Alura.</h4>
        </footer>
    )
}
export default  Rodape