import React from 'react';
import './App.css';
import Child from './components/Child';


function App() {
  const [word, setWord] = React.useState('Eat') //useState to manipulate the changed state of the component

  //Function used for onClick event to display the changed event
  function handleClick(){
  setWord('Drink')
  }

  return (
   <div className="App">
    <Child message={word + ' at Little Lemon'} />
    <button onClick={handleClick}>Click here</button>
   </div>
  );
}

export default App;
