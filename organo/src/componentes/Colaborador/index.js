import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import './Colaborador.css';

const Colaborador = ({colaborador,corDeFundo,aoDeletar,aoFavoritar}) =>  {
    const background ={backgroundColor: corDeFundo}

    function favoritar(){
        aoFavoritar(colaborador.id);
    }

    const propsFavorito ={
        size : 25,
        onClick: favoritar

    }

    return  (
        <div className='colaborador'>
            <AiFillCloseCircle
                size={25}
                className='deletar'
                onClick={() => aoDeletar(colaborador.id)}/>
            <div className='cabecalho' style={background}>
                <img src={colaborador.imagem} alt={colaborador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart  {...propsFavorito} color='red'/>
                    : <AiOutlineHeart {...propsFavorito} />
                    }
                </div>
            </div>
            
        
        </div>
    )
}


export  default  Colaborador

