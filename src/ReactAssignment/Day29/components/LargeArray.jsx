import React, { useState } from "react";

const LargeArray = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

 
  const generateArray = () => {
    const arr = Array.from({ length: 10000 }, () =>
      Math.floor(Math.random() * 10000)
    );
    setNumbers(arr);
    setSum(0);
  };

  
  const handleFilter = () => {
    const evenNumbers = numbers.filter((num) => num % 2 === 0);

    const total = evenNumbers.reduce((acc, curr) => acc + curr, 0);

    setSum(total);
  };

  return (
    <div className="text-white">
              <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-[400px] text-center">
        
        <h1 className="text-2xl font-bold mb-6">
          Large Array Filtering
        </h1>

        <button
          onClick={generateArray}
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-lg mb-4 transition"
        >
          Generate Array (10,000)
        </button>

        <button
          onClick={handleFilter}
          className="w-full bg-green-600 hover:bg-green-700 p-2 rounded-lg transition"
        >
          Filter Even & Calculate Sum
        </button>

        <div className="mt-6 text-left">
          <p>Total Numbers: {numbers.length}</p>
          <p className="mt-2">
            Sum of Even Numbers:{" "}
            <span className="text-green-400 font-bold">{sum}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LargeArray;