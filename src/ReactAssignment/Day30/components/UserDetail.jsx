import { useEffect, useState } from "react";

const UserDetail = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(()=>{
    const UserData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      setUser(data.users);
    } catch (e) {
      console.log(e);
    }
  };
  UserData()

  },[])
  

  

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // ✅ filter logic
  const filteredUsers = user.filter((e) =>
    e.firstName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bg-amber-500 p-10">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Search Name"
          className="bg-white w-52 rounded border-2 h-10 px-3"
        />
      </div>

      <div className="bg-amber-500 flex flex-wrap justify-center gap-10 p-10">
        {filteredUsers.map((e) => (
          <div
            key={e.id}
            className="bg-white text-black rounded-xl shadow-lg w-64 p-5 flex flex-col items-center"
          >
            <img
              src={e.image}
              alt="user"
              className="h-20 w-20 rounded-full border mb-3"
            />

            <h2 className="text-lg font-semibold">{e.firstName}</h2>

            <p className="text-sm text-gray-600">Age: {e.age}</p>

            <p className="text-sm text-gray-600 capitalize">
              {e.gender}
            </p>

            <button className="mt-4 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserDetail;