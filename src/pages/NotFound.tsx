import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="items-center text-center justify-center mt-[290px]">
      <h1 className="text-3xl font-sans font-semibold py-6">Opps! We ran out of code</h1>


      <Link to='/' className="hover:underline font-semibold">Home</Link>
    </div>
  );
};

export default NotFound;
