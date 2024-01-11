import './CampoTexto.css';

const CampoTexto = (props) => {
    const PlaceholderModificado = `${props.Placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (        
        <div className="campo-texto">
            <label>{props.label}</label>
            <input  value={props.valor} onChange={aoDigitado}  placeholder={PlaceholderModificado} required={props.obrigatorio}/>
        </div>
    )
}

export default CampoTexto;