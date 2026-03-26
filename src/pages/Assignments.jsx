import { Link } from "react-router-dom"

export const assignmentsData = [
  { id: 1, title: "Assignment 21", desc: "Form" },
  { id: 22, title: "Assignment 22", desc: "Product" },
  { id: 25, title: "Assignment 25", desc: "Day25" },
  { id: 26, title: "Assignment 26", desc: "Day26" },
];

// AssignmentCard.jsx
import { Link } from "react-router-dom";

const AssignmentCard = ({ id, title, desc }) => {
  return (
    <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300">
      
      <h2 className="text-2xl font-semibold text-white mb-2">
        {title}
      </h2>

      <p className="text-white/80 mb-4">
        {desc}
      </p>

      <Link
        to={`/assignments/${id}`}
        className="inline-block bg-white text-purple-600 font-medium px-4 py-2 rounded-lg hover:bg-purple-600 hover:text-white transition"
      >
        View →
      </Link>

    </div>
  );
};

export default AssignmentCard;