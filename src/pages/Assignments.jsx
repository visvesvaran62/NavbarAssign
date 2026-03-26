import AssignmentCard from "./AssignmentCard";
import { assignmentData } from "./data";

const Assignments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">

      <h1 className="text-4xl font-bold text-white text-center mb-10 drop-shadow-lg">
        My Assignments
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {assignmentData.map((item) => (
          <AssignmentCard key={item.id} item={item} />
        ))}

      </div>
    </div>
  );
};

export default Assignments;