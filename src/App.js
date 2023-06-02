import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Team from "./components/Team";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      color: '#A6D157'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      color: '#E06B69'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      color: '#DB6EBF'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      color: '#FFBA05'
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      color: '#FF8A29'
    },
  ])

  const inicial = [
    {
      id: uuidv4(), name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'guilhermeonrails',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[0].name
    },
    {
      id: uuidv4(),
      name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'danielartine',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	guilhermeonrails',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[1].name
    },
    {
      id: uuidv4(),
      name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	guilhermeonrails',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[2].name
    },
    {
      id: uuidv4(),
      name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	guilhermeonrails',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[3].name
    },
    {
      id: uuidv4(),
      name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	guilhermeonrails',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[4].name
    },
    {
      id: uuidv4(),
      name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'guilhermeonrails',
      team: teams[5].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[5].name
    },
  ]

  const [colaborators, setColaborators] = useState(inicial)

  function deleteColaborator(id) {
    setColaborators(colaborators.filter(colaborator => colaborator.id !== id))
  }

  function teamColorChange(color, id) {
    setTeams(teams.map(team => {
      if (team.id === id) {
        team.color = color;
      }
      return team;
    }));
  }

  return (
    <div>
      <Banner />
      <Form
        teams={teams.map(team => team.name)}
        onRegister={colaborator => setColaborators([...colaborators, colaborator])}
      />
      <section className="teams">
        <h1>My organization</h1>
        {teams.map((team, indice) =>
          <Team
            changeColor={teamColorChange}
            key={indice}
            team={team}
            colaborators={colaborators.filter(colaborator => colaborator.team === team.name)}
            onDelete={deleteColaborator}
          />
        )}
      </section>
      <Footer />
    </div>
  );
}

export default App;
