import { Link } from "react-router-dom"


import { assignmentData } from "./data"; 

const Assignments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">

      <h1 className="text-4xl font-bold text-white text-center mb-10 drop-shadow-lg">
        My Assignments
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {assignmentData.map((item) => (
          <div
            key={item.id}
            className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">
              {item.title}
            </h2>

            <p className="text-white/80 mb-4">
              {item.desc}
            </p>

            <Link
              to={`/assignments/${item.id}`}
              className="inline-block bg-white text-purple-600 font-medium px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
            >
              View →
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Assignments;