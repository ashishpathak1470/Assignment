import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    
    <div className="bg-orange-500 w-full h-14 shadow-2xl flex items-center relative">
        <h4 className="text-left px-4 absolute left-0 text-white font-bold">
          <Link to="/">
          Home
          </Link>
          </h4>
        <h1 className="font-bold text-2xl text-white mx-auto">CRUD App</h1>
    </div>
  );
}

export default Header;
