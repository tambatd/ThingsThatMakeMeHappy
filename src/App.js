import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const ThingsThatMakeMeHappy = ["Raven's art","Seeing Patrick and Jenna togehter", "My parents not being traditional Indian parents","Being Devendra","Andrew and Priya beliving in me","Yev's Music Recomendations","Astro","Tethics","Fractal House","Jake inspiring me to lift","Ferrero Rochers","Kero Kero Bonito","Meeting Sho for the first time and becoming instant friends","Brian sharing tiktoks with me","Mitchel, Jason and I talking with eachother", "Eating Shawarma", "Playing Destiny with James, Jordan, and Josh", "Playstation interviewing me", "Esdres teaching me React Redux", "Arisa's gifts to me","Rento's drawing of us", "Katelynn's cube describing me","Jimmy taking a chance on me", "Dival's hair","Becoming friends with random ppl over twitter","Jared and Bon being married", "Eating Din Tai with Will, Jared, Bon, and Olivia", "Jared's cats" , "Brad's hugs", "Brad's friendship", "Japanese product design","Lucas and Justina","Meeting Aidan for the first time", "Playing the bass guitar","Tiffany & Co","Legos","Flowers","Pranav talking about stuff that interests him","Being Alive","Bullying Andrew for looking like a vc bro", "Miguel's crypto projects", "Meeting Jimmy and Noah","My mom pulling my sleeves out after I put on a Jacket","Becoming friends with Leon","Speaking Japanese with Sho","Making fun of Paul and vice versa","Eating Poke", "Making thanksgiving dinner with Sho","Seeing my friends succeed","Vivian's tweets","Nichijou and Azumanga Daioh","Akari giving me a Mintia mint","Arisa's texts","Jasmine Rice","Patrick talking with me","Japanese Mechanical Pencils","Starbucks Frapes","Star Trek","Shakespeare","Rento giving me a drawing of us","Chocolate Milk","Dame getting me into crypto"];

  const colors = ["2f4f4f","560319", "004953","3c341f","232b2b","321414","123524","004242","1a2421"];
  const [color, setColor] = useState("ff6f5c")
  const [things, setThings] = useState("My dog max")
  useEffect(() => {
    document.body.style.background = "#" + colors[color];
    
  });

  const select = () =>{
    let x = Math.floor(Math.random() * (Math.floor(colors.length-1) - Math.ceil(0) + 1) + Math.ceil(0)); 
    setColor(colors[x]);
    console.log(x,colors[x]);
    let y = Math.floor(Math.random() * (Math.floor(ThingsThatMakeMeHappy.length-1) - Math.ceil(0) + 1) + Math.ceil(0)); 
    setThings(ThingsThatMakeMeHappy[y]);
  }

  return (
    <div className="App"  style={{
      backgroundColor: "#"+color,
    }} onClick={select}>
      <p>{things}</p>
    </div>
  );
}

export default App;
