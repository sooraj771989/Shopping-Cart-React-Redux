import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => <div className="text-center py-8">
  <h3 class="text-center w-full font-bold">404 Page Not Found</h3>
  <Link className="text-blue-600 px-4 py-4 w-full text-center" to="/products">Back to Products</Link>
  </div>;

export default NotFound;
