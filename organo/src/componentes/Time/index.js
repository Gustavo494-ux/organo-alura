import './Time.css'
import Colaborador from "../Colaborador";

const Time = (props) => {
    const styleSection ={backgroundColor: props.corSecundaria}
    const styleH3 = {borderColor: props.corPrimaria}
    
    return (
        ( props.colaboradores.length > 0) &&
        <section className='time' style={styleSection}>
            <h3 style={styleH3}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(
                    colaborador => <Colaborador
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        time={colaborador.time}
                    />
                    )}
            </div>
            
        </section>
    )
        
}
export default Time