import React, { useState } from 'react'
import './App.css'
import Background from './components/Background/background';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';

function App() {

  let heroData=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]

  const [heroCount,setHeroCount]= useState(2);

  const[playStatus,setPlayStatus]=useState(false);

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar />
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      playStatus={playStatus}
      setHeroCount={setHeroCount}
      />
    </>
  )
}

export default App
