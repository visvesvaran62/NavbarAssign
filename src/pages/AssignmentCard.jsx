import { Link } from "react-router-dom";

const AssignmentCard = ({ item }) => {
  return (
    <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300">
      
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
  );
};

export default AssignmentCard;