import React from 'react'
import withButton from '../withButton'
import Button from './Button'

const NewButton=withButton(Button)
const Butn=withButton(Button)
const EnhancedButton = () => {
  return (
   
       <>
        <div>
       <NewButton/>
      

      
    </div>
     <div>
        <Butn/>
       </div></>
  )
}

export default EnhancedButton
