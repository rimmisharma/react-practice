import './App.css';
import Child from './components/Child';


function App() {
  const date = new Date()

  return (
   <div>
    <Child message={date.toLocaleTimeString()} />
   </div>
  );
}

export default App;
