import React, { useState } from "react";

function Details() {
  const [data, setData] = useState([]);

  // Function to delete data by index
  const handleDelete = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };

  // Function to update data by index
  const handleUpdate = (index, updatedData) => {
    setData((prevData) => prevData.map((item, i) => (i === index ? updatedData : item)));
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
          <p>Phone Number: {item.phoneNumber}</p>
          <p>Date of Birth: {item.dob}</p>
          <button onClick={() => handleUpdate(index, { ...item, name: "Updated Name" })}>Update</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Details;
