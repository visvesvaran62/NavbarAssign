import React, { useReducer } from "react";

const initvalue = {
  name: "",
  email: "",
  mobilenum: "",
};

const reducerFunction = (state, action) => {
  if (action.type === "SET_FIELD") {
    return { ...state, [action.field]: action.value };
  }

  if (action.type === "RESET_FORM") {
    return initvalue;
  }

  return state;
};

const FormHandle = () => {
  const [state, dispatch] = useReducer(reducerFunction, initvalue);

  const HandleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);

    dispatch({ type: "RESET_FORM" });
  };

  return (
    <form onSubmit={handleSubmit} className=" border flex flex-col p-10 bg-amber-500 ">
      <input  className=" border bg-black text-white p-2 my-2"
        type="text"
        placeholder="Enter the Name"
        name="name"
        value={state.name}
        onChange={HandleChange}
      />

      <input  className=" border bg-black text-white p-2 my-2"
        type="email"
        placeholder="Enter the Email"
        name="email"
        value={state.email}
        onChange={HandleChange}
      />

      <input  className=" border bg-black text-white p-2 my-2"
        type="text"
        placeholder="Enter Mobile Number"
        name="mobilenum"
        value={state.mobilenum}
        onChange={HandleChange}
      />

      <input className=" bg-black p-2 text-white rounded my-2 mt-2" type="submit" />
    </form>
  );
};

export default FormHandle;