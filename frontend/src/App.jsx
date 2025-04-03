import React from 'react'
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home.jsx'
import ShowResult from './Pages/ShowResult'
import Error from './Pages/Error.jsx'
import KnowMore from './Pages/KnowMore.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/result/:rollNo" element={<ShowResult/>}/>
      <Route path="/know-more" element={<KnowMore/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App