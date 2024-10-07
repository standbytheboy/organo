import { useState } from "react";
import Banner from "./componentes/banner";
import Formulario from "./componentes/formulario";
import Time from "./componentes/time";

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#b2cffa',
      corSecundaria: '#e8e8ff',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#a6d157',
      corSecundaria: '#f0f8e2',
    },
    {
      nome: 'DevOps',
      corPrimaria: '#e06b69',
      corSecundaria: '#fde7e8',
    },
    {
      nome: 'UX e UI Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9f5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria: '#fff5d9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria: '#ffeedf',
    },
  ]

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdd = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario nomeDosTimes={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdd(colaborador)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}/>)}
    </div>
  );
}

export default App;