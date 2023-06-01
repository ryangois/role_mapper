import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Team from "./components/Team";

function App() {

  const [teams, setTeams] = useState([
    {
      name: 'Programação',
      primaryColor: '#D9F7E9',
      secondaryColor: '#57C278'
    },
    {
      name: 'Front-End',
      primaryColor: '#E8F8FF',
      secondaryColor: '#82CFFA'
    },
    {
      name: 'Data Science',
      primaryColor: '#F0F8E2',
      secondaryColor: '#A6D157'
    },
    {
      name: 'Devops',
      primaryColor: '#FDE7E8',
      secondaryColor: '#E06B69'
    },
    {
      name: 'UX e Design',
      primaryColor: '#FAE9F5',
      secondaryColor: '#DB6EBF'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFF5D9',
      secondaryColor: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FFEEDF',
      secondaryColor: '#FF8A29'
    },
  ])

  const inicial = [
    {
      name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[0].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'guilhermeonrails',
      team: teams[0].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[0].name
    },
    {
      name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[1].name
    },
    {
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'danielartine',
      team: teams[1].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	guilhermeonrails',
      team: teams[1].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[1].name
    },
    {
      name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[2].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	guilhermeonrails',
      team: teams[2].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[2].name
    },
    {
      name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[3].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	guilhermeonrails',
      team: teams[3].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[3].name
    },
    {
      name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[4].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	guilhermeonrails',
      team: teams[4].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[4].name
    },
    {
      name: 'Ryan Gois',
      role: 'Desenvolvedor de software',
      image: 'ryangois',
      team: teams[5].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: 'guilhermeonrails',
      team: teams[5].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'peas',
      team: teams[5].name
    },
  ]

  const [colaborators, setColaboradores] = useState(inicial)

  function deleteColaborator() {
    console.log('deletando colaborator');
  }

  function teamColorChange(color, name) {
    setTeams(teams.map(team => {
      if (team.name === name) {
        team.secondaryColor = color;
      }
      return team;
    }));
  }

  return (
    <div>
      <Banner />
      <Form teams={teams.map(team => team.name)} onRegister={colaborator => setColaboradores([...colaborators, colaborator])} />
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
