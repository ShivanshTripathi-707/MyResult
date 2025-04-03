import React from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import Home from './Pages/Home'
import Error from './Pages/Error'
import NewResult from './Pages/NewResult'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/newResult' element={<NewResult/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App