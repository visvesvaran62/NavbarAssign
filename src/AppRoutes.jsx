import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Assignments from './pages/Assignments'

import Assign21 from './ReactAssignment/Assign-21/Assgn21'
import Assign26 from './ReactAssignment/day-26/Assign26'
import Receipe from './ReactAssignment/reciepes/Receipe'
import Assign25 from './ReactAssignment/day25/Assign25'
import LocalStorage from './ReactAssignment/Localstorage/LocalStorage'
import Hoc from './ReactAssignment/Hoc/Hoc'
import Assign29 from './ReactAssignment/Day29/Asign29'





const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      
      <Route path='/assignments' element={<Assignments />} />

     
      <Route path='/assignments/21' element={<Assign21 />} />
      <Route path='/assignments/22' element={<Receipe />} />
      <Route path='/assignments/25' element={<Assign25 />} />
      <Route path='/assignments/26' element={<Assign26 />} />
     <Route path="/assignments/27/*" element={<LocalStorage />} />
      <Route path='/assignments/27' element={<Hoc />} />
      <Route path='/assignments/29' element={<Assign29 />} />

     

    </Routes>
  )
}

export default AppRoutes