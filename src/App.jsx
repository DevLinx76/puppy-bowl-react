// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AllPlayers from './Components/AllPlayers'; 
import SinglePlayer from './Components/SinglePlayer';
import NewPlayerForm from './Components/NewPlayerForm';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return ( 
    <>      
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/:id" element={<SinglePlayer />} />
        <Route path="/new" element={<NewPlayerForm />} />      
      </Routes>
    </>
  );
}

export default App;
