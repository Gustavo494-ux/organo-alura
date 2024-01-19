import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import {useState} from "react";
import Rodape from "./componentes/Rodape";
import {v4 as uuidv4} from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Data Sciense',
      cor: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE5F5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF',
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

//  const [novoTime, setNovoTime] = useState('')

  const aoNovoColaboradorAdicionado = (colaborador) => {
    colaborador.id =  uuidv4()
    setColaboradores([...colaboradores, colaborador])

  }

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor,id){
    debugger
    setTimes(times.map(time => {
      if (time.id === id){
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime){
    setTimes([...times,{...novoTime,id: uuidv4()}])
  }

  return (
    <div className="App">
      <Banner />    
      <Formulario
          cadastrarTime={cadastrarTime}
          times={times.map(time => time.nome)}
          aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
        {times.map(time =>
          <Time
            mudarCor={mudarCorDoTime}
            key={time.nome}
            nome={time.nome}
            cor={time.cor}
            corSecundaria={time.corSecundaria}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />)
        }
      <Rodape />
    </div>
  );
}

export default App;
