import './Formulario.css'
import CampoTexto from '../CampoTexto'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" Placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" Placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" Placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )
}
export default Formulario