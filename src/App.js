import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [colaborators, setColaborator] = useState([])

  const onNewColaborator = (colaborator) => {
    console.log(colaborator);
    setColaborator([...colaborators, colaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form onSubmited={colaborator => onNewColaborator(colaborator)} />
    </div>
  );
}

export default App;
