import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Assignments from './pages/Assignments'
import Assign21 from './ReactAssignment/Assign-21/Assgn21'

import Assign26 from './ReactAssignment/day-26/Assign26'
import Receipe from './ReactAssignment/reciepes/Receipe'
import Assign25 from './ReactAssignment/day25/Assign25'


const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/assignment' element={<Assignments/>}/>
       <Route path='/assignments/1' element={<Assign21/>}/>
      <Route path="/assignment/22" element={<Receipe/>}/>
       <Route path='/assignments/26' element={<Assign26/>}/>
       <Route path="/assignments/25" element={<Assign25/>}/>
      

    </Routes>
    </>
  )
}

export default AppRoutes
