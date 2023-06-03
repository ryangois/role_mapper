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
      name: 'Fullstack',
      color: '#57C278'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      color: '#82CFFA'
    },
    {
      id: uuidv4(),
      name: 'Back-End',
      color: '#FFBA05'
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
      name: 'UX & Design',
      color: '#DB6EBF'
    },

    {
      id: uuidv4(),
      name: 'Product',
      color: '#FF8A29'
    },
  ])

  const inicial = []

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

  function registerTeam(newTeam) {
    setTeams([...teams, { ...newTeam, id: uuidv4() }])
  }

  function favoriteResolve(id) {
    setColaborators(colaborators.map(colaborator => {
      if (colaborator.id === id) {
        colaborator.favorite = !colaborator.favorite
      }
      return colaborator
    }))
  }

  return (
    <div>
      <Banner />
      <Form
        registerTeam={registerTeam}
        teams={teams.map(team => team.name)}
        onRegister={colaborator => setColaborators([...colaborators, colaborator])}
      />
      <section className="teams">
        <h1>My organization</h1>
        {teams.map((team, indice) =>
          <Team
            onFavorite={favoriteResolve}
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
