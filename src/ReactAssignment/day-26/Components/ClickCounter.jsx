import React, { useRef } from 'react'

const ClickCounter = () => {
    const CountRef=useRef(0)
    const ClicktoIncrease=()=>{
        CountRef.current+=1;
        // console.log(CountRef.current)
    }
  return (
  <><div className='bg-sky-400 w-350 h-20 p-2'>
    <button  className='bg-black text-white rounded p-2' onClick={ClicktoIncrease}>click to update</button>
  </div>
  
  </>
  )
}

export default ClickCounter
