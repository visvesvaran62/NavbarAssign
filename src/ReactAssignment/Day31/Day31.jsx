import React from 'react'
import Counter from './Components/Counter'
import Toggle from './Components/Toggle'
import FormHandle from './Components/FormHandle'

const Day31 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <Counter />
      <Toggle />
      
      <div className="mt-6">
        <FormHandle />
      </div>
    </div>
  )
}

export default Day31