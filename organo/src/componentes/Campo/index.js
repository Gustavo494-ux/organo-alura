import './Campo.css';

const Campo = ({tipo = 'text', label,placeholder,valor,aoAlterado,obrigatorio = false}) => {
    const PlaceholderModificado = `${placeholder}...`
//    if (tipo === 'color') {
//        console.log(valor)
//        console.log(tipo)
//    }
    return (
        <div className={`campo campo-${tipo}`}>
            <label>{label}</label>
            <input
                type={tipo}
                value={valor}
                onChange={(evento) => aoAlterado(evento.target.value)}
                placeholder={PlaceholderModificado}
                required={obrigatorio}
            />
        </div>
    )
}



export default Campo;