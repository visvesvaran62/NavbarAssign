import React, { useEffect, useState  } from 'react'
import { useNavigate } from 'react-router-dom'


const Products = () => {
 const[datas,setDatas]=useState([])
 const Navigate=useNavigate()

    const fetchedData=async()=>{
        try{
            const data= await fetch("https://dummyjson.com/recipes")
            const res= await data.json()
             setDatas(res.recipes)
    

           
        }catch(e){
            console.log("error",e);
            

        }
    }
    
      useEffect(()=>{
                fetchedData()
            }, [ ])

  

   
  return (
    <>
    <div className='bg-black p-10 flex flex-wrap gap-8 justify-center '>
       {datas.map((e)=>(
        <div key={e.id} className='bg-amber-300 text-black w-100 h-100 rounded-2xl border-2 flex  justify-center items-center flex-col'>
            <img src={e.image} className="  p-30rounded-2xl flex items-center h-70 w-70 justify-center" />
            <h1>{e.name}</h1>
            <p className='font-bold'>Ratings:{e.rating}</p>
            <button onClick={()=>Changedirection(e)}  className='bg-black text-white p-2 rounded'>
Ingredients
</button>       </div>
       ))}
    </div>
  
 
    </>
  )
}

export default Products
