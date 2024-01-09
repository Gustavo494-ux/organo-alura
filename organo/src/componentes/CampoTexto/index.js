import './CampoTexto.css';

const CampoTexto = (props) => {

    const PlaceholderModificado = `${props.Placeholder}...`
    return (        
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={PlaceholderModificado} required={props.obrigatorio}/>
        </div>
    )
}

export default CampoTexto;