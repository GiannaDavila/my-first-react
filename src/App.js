import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

const names =['Gustavo', 'Gerly', 'Cassandra', 'Corwin', 
'Jacques', 'Ainis', 'Eddie','Emily', 'Fanessa',
'Captain Ed', 'Nick', 'Tyler','Adi','Mido', 'Cari',
'Tod', 'Brad']

function App() {
const [myName, setMyName ] = useState ('Gianna')
const [counter, setCounter] = useState (0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myName} is pretty damn cool.
        </p>

        {names.map(name => (
          <button key={name} onClick={() => setMyName(name)}>{name}</button>
        ))}
        <button onClick={() => setMyName('Gianna')}>Gianna</button>
        <button onClick={() => setMyName('Davila')}>Davila</button>
        <p>You cicked the button {counter} times</p>
        <button onClick={() => setCounter(counter - 1 )}>-1</button>
        <button onClick={() => setCounter(counter  >0 )}>Reset</button>
        <button onClick={() => setCounter(counter + 1 )}>+1</button>
        <button onClick={() => setCounter(counter -1 )}>-1</button>
      </header>
    </div>
  );
}

export default App;
