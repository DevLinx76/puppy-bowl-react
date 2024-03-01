import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllPlayer from './Components/AllPlayer'
import SinglePlayer from './Components/SinglePlayer'
import NewPlayerForm from './Components/NewPlayerForm'
import NavBar from './Components/NavBar'
import './App.css'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayer />} />
        <Route path="/:id" element={<SinglePlayer />} />
        <Route path="/new" element={<NewPlayerForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
