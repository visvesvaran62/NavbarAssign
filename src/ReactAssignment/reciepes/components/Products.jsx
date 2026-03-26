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
    <div
      key={e.id}
      className='bg-amber-300 text-black w-64 rounded-2xl border-2 p-4 flex flex-col items-center shadow-lg hover:scale-105 transition'
    >
      <img
        src={e.image}
        alt={e.name}
        className="rounded-xl h-40 w-full object-cover mb-3"
      />
      <h1 className="font-semibold text-center">{e.name}</h1>
      <p className='font-bold'>⭐ {e.rating}</p>
    </div>
  ))}
</div>
  )
}

export default Products