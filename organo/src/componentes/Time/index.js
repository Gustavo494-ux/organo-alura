import './Time.css';
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';

const Time = ({time, colaboradores,aoDeletar, mudarCor}) => {
    const styleSection ={backgroundColor: hexToRgba(time.cor, 0.6)}
    const styleH3 = {borderColor: time.cor}
    
    return (
        ( colaboradores.length > 0) && <section className='time' style={styleSection}>
            <input onChange={evento => mudarCor(evento.target.value,time.id)} value={time.cor} type="color" className='input-cor' />
            <h3 style={styleH3}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => {
                        return <Colaborador
                            corDeFundo={time.cor }
                            key={colaborador.id}
                            colaborador={colaborador}
                            time={colaborador.time}

                            aoDeletar={aoDeletar}
                        />
                    })}
            </div>
            
        </section>
    )
        
}
export default Time