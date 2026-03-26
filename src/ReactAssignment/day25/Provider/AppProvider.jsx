import React, { useState } from 'react'
import { AppContext } from '../context/AppContext'

const AppProvider = ({Children}) => {
    const[theme,setTheme]=useState("light")
  return (
    <>
    <AppContext.Provider value={{theme,setTheme}}>
        {Children}
    </AppContext.Provider>
    </>
  )
}

export default AppProvider
