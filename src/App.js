import React, { useState } from 'react';
import './App.css';

//Lifting state up
function Button({count, onClick}){
  return (
    <button onClick={onClick}>
     Clicked {count} times.
    </button>
   );
}


function App() {
  const [count, setCount] = useState(0);

  function handleClick(){
     setCount(count + 1);
  }
  return <div>
    <h1>
      Counters updated seperately
    </h1>
    <Button count={count} onClick={handleClick}/> <br/>
    <Button count={count} onClick={handleClick}/>
  </div>
}

export default App;
