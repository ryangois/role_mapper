import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

  const teams = [
    {
      name: 'Fullstack',
      primaryColor: '#57C278',
      secondaryColor: '#00C86F26',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8FFFF',
    },
    {
      name: 'Back-End',
      primaryColor: '#A6D157',
      secondaryColor: '#E9FFE3',
    },
    {
      name: 'Ux & Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#DC6EBE26',
    },
    {
      name: 'Mobile',
      primaryColor: '#E06B69',
      secondaryColor: '#F1616526',
    },
    {
      name: 'QA',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFBA0526',
    },
    {
      name: 'Data Science',
      primaryColor: '#FF8A29',
      secondaryColor: '#FF8C2A26',
    },
  ]

  const [colaborators, setColaborator] = useState([])

  const onNewColaborator = (colaborator) => {
    setColaborator([...colaborators, colaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} onSubmited={colaborator => onNewColaborator(colaborator)} />

      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        primaryColor={team.primaryColor}
        secondaryColor={team.secondaryColor}
        colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}
      />)}
    </div>
  );
}

export default App;
