import React, { useEffect, useState } from "react";
import { dummydata } from "../dummy_data";
function Details() {

  const [data, setData] = useState([])

  useEffect(()=>{
    setData(dummydata)
  },[])

  
  return (
    <div className="h-screen flex items-center justify-center md:justify-center text-white mx-20" >
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr className="border-b dark:border-neutral-500">
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>{item.PhoneNumber}</td>
              <td>{item.Dob}</td>
              <td>
                <div className="flex">
                <button className="bg-orange-500 rounded-2xl w-20 h-7 shadow-2xl flex items-center justify-center flex-col hover:bg-orange-700">Update</button>&nbsp;
                <button className="bg-orange-500 rounded-2xl w-20 h-7 shadow-2xl flex items-center justify-center flex-col hover:bg-orange-700">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Details;
