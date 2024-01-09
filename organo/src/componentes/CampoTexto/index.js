import './CampoTexto.css';

const CampoTexto = (props) => {

    const PlaceholderModificado = `${props.Placeholder}...`
    return (        
        <div className="campo-texto">
            <label>{props.label}</label>
            <input Placeholder={PlaceholderModificado}/>
        </div>
    )
}

export default CampoTexto;