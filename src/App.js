import cat from './cat.jpg'
import './App.css';

function Logo(props){
  const userPic = <img src = {cat} />; //embedded JSX expression {cat} in an HTML attribute 'src'
  return userPic;
}

function App() {
  return (
    <div>
      <h1>Hello Everyone.</h1>
      <Logo/>
    </div>
  )
}

export default App;
