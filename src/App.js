import { useState } from 'react';
import './App.css';




function App() {
  const [yourNumberIs, setNumber] = useState(1)
  // const [subtact, subtractNumber] = useState(decreaceNumber)

const  decreaceNumber = () => { 
     setNumber(yourNumberIs - 1)
  }

const increaceNumber = () => {
   setNumber(yourNumberIs + 1);
}

  return (
    <div>
      <h2>Your Number Is:</h2>
      <h2>{yourNumberIs}</h2>
      <button className='decreace-button'onClick={decreaceNumber}>Decreace</button><button onClick={increaceNumber}>Increace</button>
    </div>
  );
}

export default App;
