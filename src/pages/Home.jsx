import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-6">

      <div className="text-center text-white max-w-2xl">

        
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
           Welcome to My React Assignment
        </h1>

       
        <p className="text-lg mb-8 text-white/90">
          Explore all your assignments, projects, and React concepts in one place.
        </p>

       
        <div className="flex justify-center gap-4">

          <Link
            to="/assignments"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold 
                       hover:bg-purple-600 hover:text-white transition shadow-lg"
          >
            View Assignments
          </Link>

          <button
            className="border border-white px-6 py-3 rounded-lg 
                       hover:bg-white hover:text-purple-600 transition"
          >
            Learn More
          </button>

        </div>

      </div>

    </div>
  )
}

export default Home