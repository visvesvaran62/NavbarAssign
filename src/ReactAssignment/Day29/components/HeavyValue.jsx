import React, { useState } from "react";

const HeavyValue = () => {
  const [number, setNumber] = useState(5);
  const [result, setResult] = useState(0);

  const Calculation = (num) => {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  };

  const HandleClick = () => {
    const res = Calculation(Number(number)); // convert to number
    setResult(res);
  };

  return (
   
     
<><div className=" w-50 border mt-10 ml-20">   
        <h1 className="text-2xl font-bold mb-6">
          Heavy Sum Calculator
        </h1>

        <input
          type="number"
          placeholder="Enter your number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border-black bg-amber-300 rounded p-2 "
        />
        <br/>

        <button
          onClick={HandleClick}
          className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 p-2 rounded-lg font-semibold"
        >
          Calculate
        </button>

        <h2 className="mt-6 text-xl">
          Result: <span className="font-bold text-green-400">{result}</span>
        </h2></div></>
  );
};

export default HeavyValue;