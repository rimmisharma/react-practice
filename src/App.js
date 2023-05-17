import React, { useState } from 'react';
import './App.css';
import wallpaper from './assets/images/211836.jpg'

function App(){
/* adding an image using a url*/
  const imageUrl = 'https://images.unsplash.com/photo-1537824598505-99ee03483384?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80';

  return (
    <div>
      <h1>Welcome to my page</h1>
      <img height={200} // adding an image by import and jsx
      src={wallpaper}
      alt='some text'
      ></img>
      <br></br>

      <img height={200} // adding an image using asset path
      src={require('./assets/images/211836.jpg')}
      alt='scenery'></img>
      <br></br>

      <img height={200}
      src={imageUrl}
      alt='wallpaper'></img>
    </div>
  );
}

export default App;
