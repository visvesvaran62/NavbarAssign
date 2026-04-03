import React, { useReducer } from "react";

const initialState = {
  items: [],
};

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      items: [...state.items, action.payload],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      items: state.items.filter(item => item.id !== action.id),
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      items: [],
    };
  }

  return state;
};

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: "Product " + (state.items.length + 1),
      price: Math.floor(Math.random() * 1000),
    };

    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalPrice = state.items.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">
        
        <h2 className="text-xl font-bold text-center mb-4">
          🛒 Cart System
        </h2>

        {/* Cart Count */}
        <p className="text-center text-gray-600 mb-3">
          Items: {state.items.length}
        </p>

        {/* Buttons */}
        <div className="flex justify-between mb-4">
          <button
            onClick={addItem}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>

          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
          >
            Clear
          </button>
        </div>

        {/* Total */}
        <h3 className="text-center font-semibold mb-3">
          Total: ₹{totalPrice}
        </h3>

        {/* Items List */}
        <ul className="space-y-2 max-h-40 overflow-y-auto">
          {state.items.map(item => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-gray-50 p-2 rounded-lg"
            >
              <span className="text-sm">
                {item.name} - ₹{item.price}
              </span>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 text-xs hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Cart;