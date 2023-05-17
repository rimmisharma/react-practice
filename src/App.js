import React, { useState } from 'react';
import './App.css';
import ReactPlayer from 'react-player';

function App(){

  const vidUrl='https://www.youtube.com/watch?v=cd3P3yXyx30&t=6631s';
  return (
    <div className='App'>
      <h1>React Player Example</h1>
      <ReactPlayer className='media'
      url={vidUrl}
      playing={false}
      volume={.5}
      />
    </div>
  );
}

export default App;
