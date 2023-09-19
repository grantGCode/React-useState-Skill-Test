import { useState } from 'react';
import './App.css';
import Number from './components/Number'
// import ButtonIncreace from './components/ButtonIncreace'
// import ButtonDecreace from './components/ButtonDecreace'



function App() {
  const [yourNumberIs] = useState()

const decreaceNumber = (n) => {
      console.log('decreaceNumber function ran');
     n --;
    return n
  }

const increaceNumber = (n) => {
  console.log('increaceNumber function ran');
   n--;
 return n
}

  return (
    <div>
      <Number numb={yourNumberIs} />
      <button onClick={decreaceNumber}>Decreace</button><button onClick={increaceNumber}>Increace</button>
    </div>
  );
}

export default App;
