import React, { useReducer } from 'react'

const initstate={isOn:false}

const reducerfunction=(state,action)=>{
    if(action.type){
        return {isOn:!state.isOn}

    }

}

const Toggle = () => {
  
    const[state,dispatch]=useReducer(reducerfunction,initstate)

  return (

    <div className='bg-amber-400 w-50 h-20 p-2 rounded flex flex-col '>
        <h1 className='bg-blue-200 font-bold my-2'>status:{state.isOn?"on":"off"}</h1>
        <button className='bg-black text-white' onClick={()=>dispatch({type:"Toggle"})}>Toggle</button>
        

        
      
    </div>
  )
}

export default Toggle
