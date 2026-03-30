import React from 'react'
import EnhancedButton from './components/EnhancedButton'

const Hoc = () => {
  return (
    <div className='bg-red-500 text-black w-100 h-50 rounded p-2'>
        <div className='bg-amber-500 rounded-2xl ml-2 w-20'>
            <EnhancedButton />
        </div>
      
    </div>
  )
}

export default Hoc
