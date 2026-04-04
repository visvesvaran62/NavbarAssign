// 
import React, { useEffect, useState } from 'react'

const Form = () => {
  const [userdata, setUserData] = useState({
    id: null,
    name: "",
    email: "",
    password: ""
  })

  const [data, setData] = useState([])

  const HandleChange = (e) => {
    const { value, name } = e.target
    setUserData({ ...userdata, [name]: value })
  }

  const HandleSubmit = (e) => {
    e.preventDefault()

    const user = {
      ...userdata,
      id: Date.now()
    }

    const updateData = [...data, user]
    setData(updateData)
    localStorage.setItem("user", JSON.stringify(updateData))

    alert("Register successfully")
    setUserData({ id: null, name: "", email: "", password: "" })
  }

  const getdats = () => {
    const datas = JSON.parse(localStorage.getItem("user")) || []
    setData(datas)
  }

  useEffect(() => {
    getdats()
  }, [])

  const handleEdit = (item) => {
    setUserData(item)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
          User Form
        </h2>

        <form onSubmit={HandleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            value={userdata.name}
            placeholder="Enter Name"
            onChange={HandleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            value={userdata.email}
            placeholder="Enter Email"
            onChange={HandleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            value={userdata.password}
            placeholder="Enter Password"
            onChange={HandleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="submit"
            value="Submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 cursor-pointer"
          />
        </form>
      </div>

     
      <div className="mt-6 w-full max-w-md space-y-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {item.name}
            </h3>
            <p className="text-gray-600">{item.email}</p>
            <p className="text-gray-500 text-sm">{item.password}</p>

            <button
              onClick={() => handleEdit(item)}
              className="mt-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Edit
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Form