import './App.css';
import { useState } from 'react';
import allData from './services/data';
import FlavanoidsTable from './components/FlavanoidsTable';
import GammaTable from './components/GammaTable';

function App() {
  const [data] = useState(allData);
  return (
    <div className="App">
      <FlavanoidsTable data={data}/>
      <GammaTable data={data}/>
    </div>
  );
}

export default App;
