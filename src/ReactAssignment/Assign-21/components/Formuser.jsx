import { useState } from "react";

const FormUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // optional reset
    setFormData({
      name: "",
      email: "",
      age: "",
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-gray-100 p-6 justify-center rounded max-w-md space-y-4">
          <h2 className="text-xl font-bold">User Form</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 rounded border text-black"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 rounded border text-black"
            />

            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full p-2 rounded border text-black"
            />

            <button
              type="submit"
              className="bg-blue-900 text-amber-50 px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormUser;