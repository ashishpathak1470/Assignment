import React from "react";
import { Link } from "react-router-dom";
function Card({ name, imgadd }) {
  return (
    <div className="w-[300px] rounded-md border border-orange-500 shadow-2xl">
      <img src={imgadd} alt="Person" className="rounded-t-md object-cover" />
      <div className="p-4">
        <button
          type="button"
          className="mt-2 mb-1 w-full rounded-sm bg-orange-500 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          {name}
        </button>
        
      </div>
    </div>
  );
}

export default Card;
