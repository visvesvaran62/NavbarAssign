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
import Day30 from './ReactAssignment/Day30/Day30'
import Day31 from './ReactAssignment/Day31/Day31'
import Day32 from './ReactAssignment/Day-32/Day32'

import FormHandling from './ReactAssignment/Form/FormHandling'

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
      <Route path='/assignments/28' element={<Hoc />} />
      <Route path='/assignments/29' element={<Assign29 />} />
      <Route path='/assignments/30' element={<Day30/>}/>
      <Route path='/assignments/31' element={<Day31/>}/>
     <Route path="/assignments/32/*" element={<Day32 />} />
     <Route path='/assignments/33' element={<FormHandling/>}/>

     

    </Routes>
  )
}

export default AppRoutes