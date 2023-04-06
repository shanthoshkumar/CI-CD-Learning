import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Display from './components/Display';
import { useState } from 'react';

function App() {
  const [name, setName] = useState(null)
  return (
    <div className="main">
        <Input setName={setName}/>
        { name && <Display name={name}/>}
    </div>
  );
}

export default App;
