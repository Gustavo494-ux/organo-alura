import {AiFillCloseCircle} from "react-icons/ai";
import './Colaborador.css';

const Colaborador = ({colaborador,corDeFundo,aoDeletar}) =>  {
    const background ={backgroundColor: corDeFundo}

    return  (
        <div className='colaborador'>
            <AiFillCloseCircle size='25' className='deletar' onClick={aoDeletar}/>
            <div className='cabecalho' style={background}>
                <img src={colaborador.imagem} alt={colaborador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
            
        
        </div>
    )
}


export  default  Colaborador

