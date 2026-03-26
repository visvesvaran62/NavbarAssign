import React, { useEffect, useState } from 'react'


const Products = () => {
  const [datas, setDatas] = useState([])
  

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const data = await fetch("https://dummyjson.com/recipes")
        const res = await data.json()
        setDatas(res.recipes)
      } catch (e) {
        console.log("error", e)
      }
    }

    fetchedData()
  }, [])

  return (
    <div className='bg-black p-10 flex flex-wrap gap-8 justify-center'>
      {datas.map((e) => (
        <div key={e.id} className='bg-amber-300 text-black w-[300px] h-[300px] rounded-2xl border-2 flex justify-center items-center flex-col'>
          <img src={e.image} alt={e.name} className="p-3 rounded-2xl h-40 w-40" />
          <h1>{e.name}</h1>
          <p className='font-bold'>Ratings: {e.rating}</p>
        </div>
      ))}
    </div>
  )
}

export default Products