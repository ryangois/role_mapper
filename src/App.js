import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Team from "./components/Team";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [teams, setTeams] = useState([])

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
