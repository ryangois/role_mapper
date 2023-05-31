import { useState } from "react";
import Banner from "./components/Banner";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import Team from "./components/Team";

function App() {

  const teams = [
    {
      name: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      name: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      name: 'Data Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      name: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      name: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
    {
      name: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      name: 'Inovação e Gestão',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
  ]

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

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador() {
    console.log('deletando colaborator');
  }


  return (
    <div>
      <Banner />
      <Formulario teams={teams.map(team => team.name)} aoCadastrar={colaborator => setColaboradores([...colaboradores, colaborator])} />
      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((team, indice) => <Team key={indice} team={team} colaboradores={colaboradores.filter(colaborator => colaborator.team === team.name)} aoDeletar={deletarColaborador} />)}
      </section>
      <Footer />
    </div>
  );
}

export default App;
