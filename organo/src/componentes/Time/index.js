import './Time.css'
import Colaborador from "../Colaborador";

const Time = ({time, colaboradores,aoDeletar}) => {
    const styleSection ={backgroundColor: time.corSecundaria}
    const styleH3 = {borderColor: time.corPrimaria}
    
    return (
        ( colaboradores.length > 0) &&
        <section className='time' style={styleSection}>
            <h3 style={styleH3}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(
                    colaborador => {
            console.log(colaborador)
                        return <Colaborador
                            corDeFundo={time.corPrimaria }
                            key={colaborador.nome}
                            colaborador={colaborador}
                            time={colaborador.time}

                            aoDeletar={aoDeletar}
                        />
                    }
                    )}
            </div>
            
        </section>
    )
        
}
export default Time