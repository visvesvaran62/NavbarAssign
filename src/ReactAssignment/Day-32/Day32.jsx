import React from 'react'
import ThemeProvider from './Components/Theme/ThemeProvider'
import ThemeToggle from './Components/Theme/ThemeToggle'
import Cart from './Components/Usereducer/Cart'
import AppLazy from './Components/LazyLoading/AppLazy'


const Day32 = () => {
  return (<>
   <AppLazy/>
   <ThemeProvider>
      <ThemeToggle/>
    </ThemeProvider>
    <Cart/>
   
  </>
   
  )
}

export default Day32