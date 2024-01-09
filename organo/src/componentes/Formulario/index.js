import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Salvando')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" Placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={false} label="Imagem" Placeholder="Digite o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} itens={times} label="Time"/>
                <Botao >
                    Criar Botao
                </Botao>
            </form>
        </section>
    )
}
export default Formulario