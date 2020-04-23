import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = props => {
  return (
    <div className="text-center py-8">
      <h2 className="font-bold">You cart is empty!</h2>
      <Link className="text-blue-600 px-4 py-4 w-full text-center" to="/products">Back to Products</Link>
    </div>
  );
};

export default EmptyCart;
