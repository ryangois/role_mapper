import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer'

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
  ];

  const inicial = [
    {
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[0].name
    },
    {
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[1].name
    },
    {
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[2].name
    },
    {
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[3].name
    },
    {
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[4].name
    },
    {
      name: 'JULIANA AMOASEI',
      role: 'Desenvolvedora de software e instrutora',
      image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      team: teams[5].name
    },
    {
      name: 'DANIEL ARTINE',
      role: 'Engenheiro de Software na Stone Age',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      team: teams[5].name
    },
    {
      name: 'GUILHERME LIMA',
      role: 'Desenvolvedor Python e JavaScript na Alura',
      image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      team: teams[5].name
    },
    {
      name: 'PAULO SILVEIRA',
      role: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      team: teams[5].name
    },
  ]

  const [colaborators, setColaborator] = useState([inicial])

  function deleteColaborator() {
    console.log("deletando");
  }

  // function teamColorChange(color, name) {
  //   setTeams(teams.map(team => {
  //     if (team.name === name) {
  //       team.corSecundaria = color;
  //     }
  //     return team;
  //   }));
  // }

  return (
    <div>
      <Banner />
      <Form teams=
      {teams.map(team => team.name)} 
      onSubmited={colaborator => setColaborator([...colaborators, colaborator])} 
      />

      <section className="teams">
        <h1>My Organization</h1>
        {teams.map((team, index) =>
          <Team 
          // colorChange={teamColorChange}
          key={index} 
          team={team} 
          colaborators={colaborators.filter(colaborator => colaborator.team === team.name)} 
          aoDeletar={deleteColaborator} 
          />)}
      </section>
      <Footer />
    </div>
  );
}

export default App;
