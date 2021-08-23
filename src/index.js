import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const state=[
  {
    clone:true,
    name:"Anakin skywalker",
    photo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
    nickName:"@dart_vader",
    content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
    image:"https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
    date:"26 Feb"
  },
  {
name:"Eric Cartman",
photo:"https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png",
nickName:"@cart",
content:"Love is like taking a dump, Butters",
image:"https://cdn.vox-cdn.com/thumbor/3GZeaF2ARY83LHtF-uvjkmBYZPM=/0x0:3300x2550/1200x800/filters:focal(1386x1011:1914x1539)/cdn.vox-cdn.com/uploads/chorus_image/image/69683031/south_park_character_art_3300.0.jpg",
date:"10 Jun"
  }


]


ReactDOM.render(
  <React.StrictMode>
    <App  state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
