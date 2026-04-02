import React, { useReducer } from 'react'
import Button from '../../Hoc/components/Button'

const  initvalue={count:0};
const ReduceFunction=(state,action)=>{
    if(action.type==="inc"){
        return {count:state.count+1}
    }
    if(action.type==="dec"){
        return {count:state.count-1}
    }
    if(action.type==="reset"){
        return initvalue
    }

} 

const Counter = () => {
  const[state,dispaatch]=useReducer(ReduceFunction,initvalue)

  return (
    
    <div className='mb-10'>
        <div className='bg-amber-300 rounded-xl h-40 w-100 flex flex-col p-2 '>
        <p className='bg-black w-30 text-white rounded mb-2 p-2'>{state.count}</p>
      <div className=' my-10'>
         <button className='bg-white  rounded mx-2 p-2' onClick={()=>dispaatch({type:"inc"})}>increment</button>
       <button className='bg-white  rounded mx-2 p-2' onClick={()=>dispaatch({type:"dec"})}>Decrement</button>
       <button className='bg-white  rounded mx-2 p-2' onClick={()=>dispaatch({type:"reset"})}>reset</button>
      
 </div>   </div>
    </div>
  )
}


export default Counter
