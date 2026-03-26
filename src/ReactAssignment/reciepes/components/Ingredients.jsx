import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Ingredients = () => {
    const location=useLocation()
    const navigate=useNavigate()
    const recipe=location.state

  return (
    <>
        <div className="p-10 bg-mist-500 h-180   flex  flex-col items-center" >
      <button 
        onClick={() => navigate("/")}
        className="bg-sky-400 text-white p-2  rounded mb-5 "
      >
         Back
      </button>
      <div className='bg-cyan-600  w-100 h-80 flex  mt-20 justify-center flex-col p-3 '>
        <h1 className="text-2xl font-bold">{recipe.name}</h1>
      <p className="font-bold">Rating: {recipe.rating}</p>

      <h2 className="mt-4 font-bold">Ingredients:</h2>
      <ul>
        {recipe.ingredients.map((e,i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      </div>

      
    </div>
    
    </>
  )
}

export default Ingredients
